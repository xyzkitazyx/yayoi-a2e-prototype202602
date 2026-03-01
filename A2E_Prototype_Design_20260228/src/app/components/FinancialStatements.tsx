"use client";

import React, { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchFinancialStatements } from '../../lib/api';

interface AccountNode {
    name: string;
    amount: number;
}

interface CategoryNode {
    category_name: string;
    total_amount: number;
    accounts: AccountNode[];
}

export default function FinancialStatements() {
    const { data: fsData = [], isLoading, error } = useQuery({
        queryKey: ['financialStatements'],
        queryFn: fetchFinancialStatements,
        // Keep it fresh for demo purposes
        refetchInterval: 2000,
    });

    const bsCategories = ["流動資産", "固定資産", "流動負債", "固定負債", "純資産", "株主資本"];
    const plCategories = ["売上高", "売上原価", "販売費及び一般管理費", "営業外収益", "営業外費用"];

    const safeFsData: CategoryNode[] = Array.isArray(fsData) ? fsData : [];

    const bsData = useMemo(() => safeFsData.filter((c: CategoryNode) => bsCategories.includes(c.category_name)), [safeFsData, bsCategories]);
    const plData = useMemo(() => safeFsData.filter((c: CategoryNode) => plCategories.includes(c.category_name)), [safeFsData, plCategories]);

    // Calculate high level totals for B/S
    const totalAssets = useMemo(() => {
        return bsData.filter((c: CategoryNode) => ["流動資産", "固定資産"].includes(c.category_name))
            .reduce((sum: number, c: CategoryNode) => sum + c.total_amount, 0);
    }, [bsData]);

    const totalLiabilitiesAndEquity = useMemo(() => {
        return bsData.filter((c: CategoryNode) => ["流動負債", "固定負債", "純資産", "株主資本"].includes(c.category_name))
            .reduce((sum: number, c: CategoryNode) => sum + c.total_amount, 0);
    }, [bsData]);

    // Calculate Net Income for P/L
    const netIncome = useMemo(() => {
        const revenue = plData.filter((c: CategoryNode) => ["売上高", "営業外収益"].includes(c.category_name))
            .reduce((sum: number, c: CategoryNode) => sum + c.total_amount, 0);
        const expenses = plData.filter((c: CategoryNode) => ["売上原価", "販売費及び一般管理費", "営業外費用"].includes(c.category_name))
            .reduce((sum: number, c: CategoryNode) => sum + c.total_amount, 0);
        return revenue - expenses;
    }, [plData]);

    if (isLoading) return <div className="p-4 text-gray-500">決算書データを読み込み中...</div>;
    if (error) return <div className="p-4 text-red-500">エラーが発生しました: {(error as Error).message}</div>;

    const renderCategory = (category: CategoryNode) => (
        <div key={category.category_name} className="mb-6">
            <div className="flex justify-between font-bold text-gray-800 border-b-2 border-gray-400 pb-1 mb-2 text-lg">
                <span>【 {category.category_name} 】</span>
            </div>
            <div className="pl-4">
                {category.accounts.map(acc => (
                    <div key={acc.name} className="flex justify-between py-1 border-b border-gray-200 border-dotted text-gray-600 hover:bg-gray-50">
                        <span>{acc.name}</span>
                        <span className={acc.amount < 0 ? "text-red-600" : ""}>
                            {acc.amount < 0 ? `△ ${Math.abs(acc.amount).toLocaleString()}` : acc.amount.toLocaleString()}
                        </span>
                    </div>
                ))}
            </div>
            <div className="flex justify-between font-bold text-gray-800 pt-2 mt-2 bg-gray-100 px-4 py-1">
                <span>{category.category_name} 合計</span>
                <span className={category.total_amount < 0 ? "text-red-600" : ""}>
                    {category.total_amount < 0 ? `△ ${Math.abs(category.total_amount).toLocaleString()}` : category.total_amount.toLocaleString()}
                </span>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col h-full bg-[#E5E5E5] font-sans overflow-y-auto pb-12">
            <div className="flex gap-4 p-4">

                {/* Balance Sheet (B/S) */}
                <div className="flex-1 bg-white p-6 shadow-sm border border-gray-300">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 tracking-widest">貸借対照表 (B/S)</h2>
                        <p className="text-sm text-gray-500 mt-1">令和7年度 決算（プレビュー）</p>
                    </div>

                    <div className="flex gap-8">
                        {/* Assets Side */}
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-blue-800 mb-4 border-l-4 border-blue-800 pl-2">資産の部</h3>
                            {bsData.filter((c: CategoryNode) => ["流動資産", "固定資産"].includes(c.category_name)).map(renderCategory)}
                        </div>

                        {/* Liabilities & Equity Side */}
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-red-800 mb-4 border-l-4 border-red-800 pl-2">負債の部</h3>
                            {bsData.filter((c: CategoryNode) => ["流動負債", "固定負債"].includes(c.category_name)).map(renderCategory)}

                            <h3 className="text-xl font-bold text-green-800 mb-4 mt-8 border-l-4 border-green-800 pl-2">純資産の部</h3>
                            {bsData.filter((c: CategoryNode) => ["純資産", "株主資本"].includes(c.category_name)).map(renderCategory)}

                            {/* Retained Earnings (Net Income flows here in B/S) */}
                            <div className="flex justify-between font-bold text-gray-800 pt-2 mt-2 bg-green-50 px-4 py-1 border border-green-200">
                                <span>当期純利益（未処分利益）</span>
                                <span className={netIncome < 0 ? "text-red-600" : ""}>
                                    {netIncome < 0 ? `△ ${Math.abs(netIncome).toLocaleString()}` : netIncome.toLocaleString()}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* B/S Totals Validation Footer */}
                    <div className="mt-8 border-t-4 border-gray-800 pt-4 flex justify-between px-8 bg-gray-50 text-xl font-bold">
                        <div className="flex gap-4">
                            <span>資産合計:</span>
                            <span>{totalAssets.toLocaleString()}</span>
                        </div>
                        <div className={`flex gap-4 ${(totalLiabilitiesAndEquity + netIncome) !== totalAssets ? 'text-red-600 animate-pulse' : ''}`}>
                            <span>負債・純資産合計:</span>
                            <span>{(totalLiabilitiesAndEquity + netIncome).toLocaleString()}</span>
                        </div>
                    </div>
                </div>

                {/* Profit & Loss (P/L) */}
                <div className="flex-1 bg-white p-6 shadow-sm border border-gray-300">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 tracking-widest">損益計算書 (P/L)</h2>
                        <p className="text-sm text-gray-500 mt-1">令和7年度 決算（プレビュー）</p>
                    </div>

                    <div className="max-w-xl mx-auto">
                        {plData.filter((c: CategoryNode) => c.category_name === "売上高").map(renderCategory)}
                        {plData.filter((c: CategoryNode) => c.category_name === "売上原価").map(renderCategory)}

                        {/* Gross Profit */}
                        <div className="flex justify-between text-lg font-bold text-blue-800 bg-blue-50 px-4 py-2 border-y-2 border-blue-200 my-6">
                            <span>【 売上総利益 】</span>
                            <span>
                                {(() => {
                                    const rev = plData.find((c: CategoryNode) => c.category_name === "売上高")?.total_amount || 0;
                                    const cogs = plData.find((c: CategoryNode) => c.category_name === "売上原価")?.total_amount || 0;
                                    const gp = rev - cogs;
                                    return gp < 0 ? `△ ${Math.abs(gp).toLocaleString()}` : gp.toLocaleString();
                                })()}
                            </span>
                        </div>

                        {plData.filter((c: CategoryNode) => c.category_name === "販売費及び一般管理費").map(renderCategory)}

                        {/* Operating Income */}
                        <div className="flex justify-between text-lg font-bold text-blue-800 bg-blue-50 px-4 py-2 border-y-2 border-blue-200 my-6">
                            <span>【 営業利益 】</span>
                            <span>
                                {(() => {
                                    const rev = plData.find((c: CategoryNode) => c.category_name === "売上高")?.total_amount || 0;
                                    const cogs = plData.find((c: CategoryNode) => c.category_name === "売上原価")?.total_amount || 0;
                                    const sga = plData.find((c: CategoryNode) => c.category_name === "販売費及び一般管理費")?.total_amount || 0;
                                    const op = rev - cogs - sga;
                                    return op < 0 ? `△ ${Math.abs(op).toLocaleString()}` : op.toLocaleString();
                                })()}
                            </span>
                        </div>

                        {plData.filter((c: CategoryNode) => ["営業外収益", "営業外費用"].includes(c.category_name)).map(renderCategory)}

                        {/* Net Income Finale */}
                        <div className="flex justify-between text-2xl font-bold text-white bg-[#005BAC] px-6 py-4 mt-8 shadow-inner rounded-sm">
                            <span>当期純利益</span>
                            <span>
                                {netIncome < 0 ? `△ ${Math.abs(netIncome).toLocaleString()}` : netIncome.toLocaleString()}
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
