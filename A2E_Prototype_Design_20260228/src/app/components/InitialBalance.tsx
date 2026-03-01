"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchAccounts, updateInitialBalances, fetchFinancialStatements } from '../../lib/api';

interface Account {
    id: number;
    code: string;
    name: string;
    category: string;
    bs_pl_category: string;
}

export default function InitialBalance() {
    const queryClient = useQueryClient();
    const [activeTab, setActiveTab] = useState<"資産" | "負債・純資産">("資産");
    const [balances, setBalances] = useState<Record<number, number>>({});
    const [showToast, setShowToast] = useState(false);

    // Default query to ensure we have accounts
    const { data: accountsData = [] } = useQuery({
        queryKey: ['accounts'],
        queryFn: fetchAccounts,
        staleTime: 1000 * 60 * 60,
    });

    // Fetch initial statements to pre-fill if they exist
    const { data: fsData = [] } = useQuery({
        queryKey: ['financialStatements'],
        queryFn: fetchFinancialStatements,
    });

    useEffect(() => {
        // Basic pre-fill logic if data exists (simplistic for PoC)
        // Real app would fetch the raw balances table directly, but calculating from FS works if no journals
        if (Array.isArray(fsData) && fsData.length > 0 && Object.keys(balances).length === 0) {
            const newBalances: Record<number, number> = {};
            let hasAny = false;
            fsData.forEach((cat: any) => {
                if (cat && Array.isArray(cat.accounts)) {
                    cat.accounts.forEach((accInfo: any) => {
                        const accDef = Array.isArray(accountsData) ? accountsData.find((a: any) => a.name === accInfo.name) : undefined;
                        if (accDef) {
                            newBalances[accDef.id] = accInfo.amount;
                            hasAny = true;
                        }
                    });
                }
            });
            if (hasAny) {
                setBalances(newBalances);
            }
        }
    }, [fsData, accountsData, balances]);


    const handleAmountChange = (accountId: number, value: string) => {
        const numericValue = parseInt(value.replace(/,/g, ''), 10) || 0;
        setBalances(prev => ({
            ...prev,
            [accountId]: numericValue
        }));
    };

    const { debitTotal, creditTotal, isBalanced } = useMemo(() => {
        let d = 0;
        let c = 0;
        if (Array.isArray(accountsData)) {
            accountsData.forEach((acc: Account) => {
                const amt = balances[acc.id] || 0;
                if (acc.category === "資産") d += amt;
                if (acc.category === "負債" || acc.category === "純資産") c += amt;
            });
        }
        return {
            debitTotal: d,
            creditTotal: c,
            isBalanced: d === c && d > 0 // Require some input
        };
    }, [balances, accountsData]);

    const mutation = useMutation({
        mutationFn: async () => {
            const payload = Object.entries(balances)
                .filter(([_, amt]) => amt > 0)
                .map(([id, amt]) => ({ account_id: parseInt(id), amount: amt }));
            return updateInitialBalances({ balances: payload });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['trialBalance'] });
            queryClient.invalidateQueries({ queryKey: ['financialStatements'] });
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
        },
        onError: (error: any) => {
            alert(error.message);
        }
    });

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'F12') {
                e.preventDefault();
                if (isBalanced) {
                    mutation.mutate();
                } else {
                    alert("貸借合計が一致しないため、登録できません。");
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isBalanced, mutation]);

    const renderGrid = (targetCategory: "資産" | "負債・純資産") => {
        const filteredAccounts = Array.isArray(accountsData) ? accountsData.filter((a: Account) => {
            if (targetCategory === "資産") return a.category === "資産";
            return a.category === "負債" || a.category === "純資産";
        }) : [];

        return (
            <div className="border border-gray-300 bg-white">
                <div className="flex bg-[#F3F3F3] border-b border-gray-300 text-xs font-bold text-gray-700 h-8 items-center">
                    <div className="w-24 text-center border-r border-gray-300">コード</div>
                    <div className="w-64 px-2 border-r border-gray-300">勘定科目</div>
                    <div className="w-48 text-center border-r border-gray-300">期首残高</div>
                </div>
                <div className="overflow-y-auto" style={{ height: 'calc(100vh - 280px)' }}>
                    {filteredAccounts.map((acc: Account) => (
                        <div key={acc.id} className="flex border-b border-gray-200 h-8 items-center hover:bg-blue-50">
                            <div className="w-24 text-center border-r border-gray-200 text-sm text-gray-600">{acc.code}</div>
                            <div className="w-64 px-2 border-r border-gray-200 text-sm">{acc.name}</div>
                            <div className="w-48 px-1 border-r border-gray-200">
                                <input
                                    type="text"
                                    inputMode="numeric"
                                    className="w-full text-right outline-none bg-transparent text-sm focus:bg-yellow-100"
                                    value={balances[acc.id] ? balances[acc.id].toLocaleString() : ""}
                                    onChange={(e) => handleAmountChange(acc.id, e.target.value)}
                                    onFocus={(e) => e.target.select()}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="flex flex-col h-full bg-[#E5E5E5] font-sans">
            {/* Toast Notification */}
            {showToast && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-8 py-4 rounded shadow-2xl z-50 text-xl font-bold animate-pulse">
                    開始残高を登録しました
                </div>
            )}

            {/* TABS */}
            <div className="flex px-2 pt-2 gap-1 relative z-10">
                <button
                    className={`px-6 py-1 text-sm font-bold rounded-t-lg border-t border-l border-r border-gray-300 ${activeTab === '資産' ? 'bg-white text-blue-800 border-b-0 relative top-[1px]' : 'bg-[#D4D4D4] text-gray-600 hover:bg-[#E0E0E0]'
                        }`}
                    onClick={() => setActiveTab('資産')}
                >
                    資産
                </button>
                <button
                    className={`px-6 py-1 text-sm font-bold rounded-t-lg border-t border-l border-r border-gray-300 ${activeTab === '負債・純資産' ? 'bg-white text-blue-800 border-b-0 relative top-[1px]' : 'bg-[#D4D4D4] text-gray-600 hover:bg-[#E0E0E0]'
                        }`}
                    onClick={() => setActiveTab('負債・純資産')}
                >
                    負債・純資産
                </button>
            </div>

            <div className="flex-1 p-2 bg-white pb-24">
                {renderGrid(activeTab)}
            </div>

            {/* STRICT VALIDATION FOOTER */}
            <div className="fixed bottom-6 left-48 right-0 bg-[#F8F9FA] border-t-2 border-gray-300 p-2 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40">
                <div className="flex justify-between items-center px-4">
                    <div className="flex gap-8 text-sm font-bold">
                        <div className="flex items-center gap-2">
                            <span className="text-gray-600">借方合計 (資産):</span>
                            <span className="text-lg w-32 text-right">{debitTotal.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-gray-600">貸方合計 (負債・純資産):</span>
                            <span className="text-lg w-32 text-right">{creditTotal.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                            <span className="text-gray-600">貸借差額:</span>
                            <span className={`text-lg w-32 text-right ${isBalanced ? 'text-green-600' : 'text-red-600'}`}>
                                {Math.abs(debitTotal - creditTotal).toLocaleString()}
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        {!isBalanced && debitTotal > 0 && (
                            <div className="text-red-600 font-bold bg-red-100 px-3 py-1 border border-red-300 rounded animate-pulse">
                                ⚠️ 貸借が一致していないため、登録できません
                            </div>
                        )}
                        {isBalanced && debitTotal > 0 && (
                            <div className="text-green-600 font-bold bg-green-100 px-3 py-1 border border-green-300 rounded">
                                ✓ 貸借一致
                            </div>
                        )}
                        <button
                            onClick={() => mutation.mutate()}
                            disabled={!isBalanced || mutation.isPending}
                            className={`px-6 py-2 rounded font-bold transition-colors ${isBalanced
                                ? 'bg-[#005BAC] text-white hover:bg-[#004B8F] shadow-sm cursor-pointer'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                        >
                            {mutation.isPending ? '登録中...' : '登録 (F12)'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
