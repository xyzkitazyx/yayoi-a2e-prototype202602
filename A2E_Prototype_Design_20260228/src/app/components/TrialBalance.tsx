"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchTrialBalance } from "../../lib/api";

interface TrialBalanceProps {
    onDrilldown: (accountName: string, accountCode: string) => void;
}

export function TrialBalance({ onDrilldown }: TrialBalanceProps) {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["trial-balance"],
        queryFn: fetchTrialBalance,
        refetchInterval: 2000, // auto-refresh for PoC demo
    });

    if (isLoading) return <div className="p-4 text-sm">読み込み中...</div>;
    if (isError) return <div className="p-4 text-sm text-red-500">エラーが発生しました。</div>;

    const tbData = data || [];

    const totalDebit = tbData.reduce((sum: number, r: any) => sum + (r.debit_total || 0), 0);
    const totalCredit = tbData.reduce((sum: number, r: any) => sum + (r.credit_total || 0), 0);

    return (
        <div className="flex flex-col h-full bg-white select-none" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            {/* Title bar */}
            <div
                className="flex items-center justify-between px-2"
                style={{ height: 26, backgroundColor: "#005BAC", color: "#fff", fontSize: 12, flexShrink: 0 }}
            >
                <span>残高試算表</span>
                <span>令和7年度</span>
            </div>

            <div className="flex-1 overflow-auto p-4">
                <table className="w-full" style={{ borderCollapse: "collapse", fontSize: 13 }}>
                    <thead style={{ backgroundColor: "#f0f0f0" }}>
                        <tr>
                            <th className="border p-2 text-center" style={{ width: 120 }}>借方残高</th>
                            <th className="border p-2 text-center" style={{ width: 120 }}>借方合計</th>
                            <th className="border p-2 text-center" style={{ width: 150 }}>勘定科目</th>
                            <th className="border p-2 text-center" style={{ width: 120 }}>貸方合計</th>
                            <th className="border p-2 text-center" style={{ width: 120 }}>貸方残高</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tbData.map((row: any) => {
                            return (
                                <tr key={row.account_code} className="hover:bg-blue-50">
                                    <td className="border p-2 text-right">
                                        {row.debit_balance > 0 ? row.debit_balance.toLocaleString() : ""}
                                    </td>
                                    <td className="border p-2 text-right text-gray-600">
                                        {row.debit_total > 0 ? row.debit_total.toLocaleString() : ""}
                                    </td>
                                    <td
                                        className="border p-2 text-center text-blue-600 cursor-pointer hover:underline font-medium"
                                        onClick={() => onDrilldown(row.account_name, row.account_code)}
                                    >
                                        {row.account_name}
                                    </td>
                                    <td className="border p-2 text-right text-gray-600">
                                        {row.credit_total > 0 ? row.credit_total.toLocaleString() : ""}
                                    </td>
                                    <td className="border p-2 text-right">
                                        {row.credit_balance > 0 ? row.credit_balance.toLocaleString() : ""}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    <tfoot>
                        <tr style={{ backgroundColor: "#e2e8f0", fontWeight: "bold" }}>
                            <td className="border p-2 text-right"></td>
                            <td className="border p-2 text-right">{totalDebit.toLocaleString()}</td>
                            <td className="border p-2 text-center">合計</td>
                            <td className="border p-2 text-right">{totalCredit.toLocaleString()}</td>
                            <td className="border p-2 text-right"></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}
