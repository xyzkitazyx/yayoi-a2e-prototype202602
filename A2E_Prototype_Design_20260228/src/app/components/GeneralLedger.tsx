"use client";

import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchLedger, fetchAccounts } from "../../lib/api";

interface GeneralLedgerProps {
    initialAccountId?: number;
    initialAccountCode?: string;
}

export function GeneralLedger({ initialAccountId, initialAccountCode }: GeneralLedgerProps) {
    const [selectedAccountId, setSelectedAccountId] = useState<number | null>(initialAccountId || null);

    const { data: accountsData = [] } = useQuery({
        queryKey: ["accounts"],
        queryFn: fetchAccounts,
        staleTime: 1000 * 60 * 60,
    });

    useEffect(() => {
        if (!selectedAccountId && initialAccountCode && accountsData.length > 0) {
            const match = accountsData.find((a: any) => a.code === initialAccountCode);
            if (match) setSelectedAccountId(match.id);
        }
    }, [initialAccountCode, accountsData, selectedAccountId]);

    const { data: ledger = [], isLoading, isError } = useQuery({
        queryKey: ["ledger", selectedAccountId],
        queryFn: () => fetchLedger(selectedAccountId!),
        enabled: !!selectedAccountId,
        refetchInterval: 2000,
    });

    return (
        <div className="flex flex-col h-full bg-white select-none" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            {/* Title bar */}
            <div
                className="flex items-center justify-between px-2"
                style={{ height: 26, backgroundColor: "#005BAC", color: "#fff", fontSize: 12, flexShrink: 0 }}
            >
                <span>総勘定元帳</span>
                <div className="flex items-center gap-2">
                    <span>勘定科目:</span>
                    <select
                        value={selectedAccountId || ""}
                        onChange={(e) => setSelectedAccountId(Number(e.target.value))}
                        className="text-black text-xs px-1"
                    >
                        <option value="">選択してください</option>
                        {accountsData.map((a: any) => (
                            <option key={a.id} value={a.id}>{a.code} {a.name}</option>
                        ))}
                    </select>
                </div>
                <span>令和7年度</span>
            </div>

            <div className="flex-1 overflow-auto p-4">
                {!selectedAccountId ? (
                    <div className="text-sm text-gray-500 text-center mt-10">勘定科目を選択してください</div>
                ) : isLoading ? (
                    <div className="p-4 text-sm">読み込み中...</div>
                ) : isError ? (
                    <div className="p-4 text-sm text-red-500">エラーが発生しました。</div>
                ) : (
                    <table className="w-full" style={{ borderCollapse: "collapse", fontSize: 12 }}>
                        <thead style={{ backgroundColor: "#f0f0f0" }}>
                            <tr>
                                <th className="border p-2 text-center" style={{ width: 80 }}>日付</th>
                                <th className="border p-2 text-center" style={{ width: 150 }}>相手勘定科目</th>
                                <th className="border p-2 text-center">摘要</th>
                                <th className="border p-2 text-center" style={{ width: 120 }}>借方金額</th>
                                <th className="border p-2 text-center" style={{ width: 120 }}>貸方金額</th>
                                <th className="border p-2 text-center" style={{ width: 120 }}>差引残高</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ledger.map((row: any) => (
                                <tr key={row.id} className="hover:bg-blue-50">
                                    <td className="border p-2 text-center">{row.date}</td>
                                    <td className="border p-2">{row.opposite_account}</td>
                                    <td className="border p-2 truncate max-w-xs">{row.summary}</td>
                                    <td className="border p-2 text-right">{row.debit_amount ? row.debit_amount.toLocaleString() : ""}</td>
                                    <td className="border p-2 text-right">{row.credit_amount ? row.credit_amount.toLocaleString() : ""}</td>
                                    <td className="border p-2 text-right font-semibold">{row.balance.toLocaleString()}</td>
                                </tr>
                            ))}
                            {ledger.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="text-center p-4 text-gray-500">仕訳データがありません</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
