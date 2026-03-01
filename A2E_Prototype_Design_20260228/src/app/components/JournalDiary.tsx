"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchDiary } from "../../lib/api";
import { useState, useMemo, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

interface JournalDiaryProps {
    onDrilldown: (journalId: number) => void;
}

export function JournalDiary({ onDrilldown }: JournalDiaryProps) {
    const queryClient = useQueryClient();
    const searchInputRef = useRef<HTMLInputElement>(null);
    const { data: diary = [], isLoading, isError } = useQuery({
        queryKey: ["diary"],
        queryFn: fetchDiary,
        refetchInterval: 2000,
    });

    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const handleAction = (e: CustomEvent) => {
            if (e.detail === "search") {
                searchInputRef.current?.focus();
            }
            if (e.detail === "refresh") {
                queryClient.invalidateQueries({ queryKey: ["diary"] });
            }
            if (e.detail === "delete" || e.detail === "delete_row") {
                toast.info("仕訳の削除・修正は、ダブルクリックで振替伝票を開いてから行ってください。");
            }
        };
        window.addEventListener("a2e-toolbar-action", handleAction as EventListener);
        return () => window.removeEventListener("a2e-toolbar-action", handleAction as EventListener);
    }, [queryClient]);

    const filteredDiary = useMemo(() => {
        if (!searchQuery) return diary;
        const lower = searchQuery.toLowerCase();
        return diary.filter((row: any) =>
            (row.debit_account || "").toLowerCase().includes(lower) ||
            (row.credit_account || "").toLowerCase().includes(lower) ||
            (row.summary || "").toLowerCase().includes(lower) ||
            (row.date || "").includes(lower) ||
            (row.debit_amount?.toString() || "").includes(lower) ||
            (row.credit_amount?.toString() || "").includes(lower)
        );
    }, [diary, searchQuery]);

    return (
        <div className="flex flex-col h-full bg-[#EEEEEE] overflow-hidden select-none" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            {/* Title bar */}
            <div
                className="flex items-center justify-between px-2 shrink-0"
                style={{ height: 26, backgroundColor: "#005BAC", color: "#fff", fontSize: 12 }}
            >
                <span>仕訳日記帳</span>
                <div className="flex items-center gap-4">
                    <div className="relative flex items-center">
                        <Search size={12} className="absolute left-1.5 text-gray-400" />
                        <input
                            ref={searchInputRef}
                            type="text"
                            placeholder="検索(F10)..."
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            className="text-black text-[11px] pl-5 pr-1 py-0.5 outline-none rounded-sm w-48"
                            style={{ border: "1px solid #b0b0b0" }}
                        />
                    </div>
                    <span className="text-[11px]">令和7年度</span>
                </div>
            </div>

            {/* Scrollable Container (Horizontal) */}
            <div className="flex-1 flex flex-col overflow-x-auto overflow-y-hidden bg-[#EEEEEE]">
                <div className="min-w-[1344px] flex-1 flex flex-col">
                    {/* Table Header */}
                    <div className="flex bg-[#EEEEEE] border-b border-[#DDDDDD] text-[10px] text-gray-700 font-bold h-10 items-center shrink-0" style={{ scrollbarGutter: 'stable' }}>
                        <div className="w-16 border-r border-[#DDDDDD] h-full grid grid-rows-2 shrink-0">
                            <div className="flex items-center justify-center border-b border-[#DDDDDD] h-full">日付</div>
                            <div className="flex items-center justify-center h-full">伝票No.</div>
                        </div>
                        <div className="flex-1 flex h-full">
                            {/* Debit Header */}
                            <div className="w-[480px] shrink-0 grid grid-cols-[300px_85px_95px] border-r-2 border-blue-300 bg-[#E1EEFA]">
                                <div className="grid grid-rows-2 h-full">
                                    <div className="px-1.5 flex items-center border-b border-[#DDDDDD] h-full">借方勘定科目</div>
                                    <div className="px-1.5 flex items-center opacity-70 h-full">借方補助科目</div>
                                </div>
                                <div className="grid grid-rows-2 border-l border-[#DDDDDD] h-full">
                                    <div className="px-1.5 flex items-center border-b border-[#DDDDDD] h-full">借方金額</div>
                                    <div className="px-1.5 flex items-center text-blue-600 opacity-80 h-full">消費税額</div>
                                </div>
                                <div className="grid grid-rows-2 border-l border-[#DDDDDD] h-full text-[9px]">
                                    <div className="px-1.5 flex items-center border-b border-[#DDDDDD] h-full">借方部門</div>
                                    <div className="px-1.5 flex items-center h-full">税区分/税率</div>
                                </div>
                            </div>
                            {/* Credit Header */}
                            <div className="w-[480px] shrink-0 grid grid-cols-[300px_85px_95px] border-r border-[#DDDDDD] bg-[#FAE1EB]">
                                <div className="grid grid-rows-2 h-full">
                                    <div className="px-1.5 flex items-center border-b border-[#DDDDDD] h-full">貸方勘定科目</div>
                                    <div className="px-1.5 flex items-center opacity-70 h-full">貸方補助科目</div>
                                </div>
                                <div className="grid grid-rows-2 border-l border-[#DDDDDD] h-full">
                                    <div className="px-1.5 flex items-center border-b border-[#DDDDDD] h-full">貸方金額</div>
                                    <div className="px-1.5 flex items-center text-red-600 opacity-80 h-full">消費税額</div>
                                </div>
                                <div className="grid grid-rows-2 border-l border-[#DDDDDD] h-full text-[9px]">
                                    <div className="px-1.5 flex items-center border-b border-[#DDDDDD] h-full">貸方部門</div>
                                    <div className="px-1.5 flex items-center h-full">税区分/税率</div>
                                </div>
                            </div>
                            {/* Summary Header */}
                            <div className="w-[180px] grid grid-rows-2 border-l-2 border-gray-400 bg-[#F5F5F5] h-full shrink-0">
                                <div className="px-1.5 flex items-center border-b border-[#DDDDDD] h-full">摘要</div>
                                <div className="px-1.5 flex items-center h-full">取引先 / 請求書</div>
                            </div>
                        </div>
                    </div>

                    {/* Scrollable Body (Vertical) */}
                    <div className="flex-1 overflow-y-scroll bg-white" tabIndex={0} style={{ outline: "none", scrollbarGutter: 'stable' }}>
                        {isLoading ? (
                            <div className="p-4 text-sm text-gray-500">読み込み中...</div>
                        ) : isError ? (
                            <div className="p-4 text-sm text-red-500">エラーが発生しました。</div>
                        ) : (
                            <div>
                                {filteredDiary.map((row: any, i: number) => (
                                    <div
                                        key={row.id}
                                        className={`flex border-b border-[#DDDDDD] cursor-pointer hover:bg-blue-50/50 ${i % 2 === 1 ? "bg-gray-50/50" : "bg-white"}`}
                                        onDoubleClick={() => onDrilldown(row.id)}
                                        onClick={(e) => e.currentTarget.focus()}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') onDrilldown(row.id);
                                        }}
                                        tabIndex={0}
                                        style={{ outline: "none" }}
                                    >
                                        <div className="w-16 border-r border-[#DDDDDD] grid grid-rows-2 text-[10px] text-gray-500 shrink-0">
                                            <div className="flex items-center justify-center border-b border-[#DDDDDD]">{row.date}</div>
                                            <div className="flex items-center justify-center">{row.id}</div>
                                        </div>
                                        <div className="flex-1 flex min-h-[48px]">
                                            {/* Debit */}
                                            <div className="w-[480px] shrink-0 grid grid-cols-[300px_85px_95px] border-r-2 border-blue-200">
                                                <div className="grid grid-rows-2 h-full text-[11px]">
                                                    <div className="px-1.5 flex items-center border-b border-[#DDDDDD] font-medium text-gray-900">{row.debit_account}</div>
                                                    <div className="px-1.5 flex items-center text-gray-700">{row.debit_sub}</div>
                                                </div>
                                                <div className="grid grid-rows-2 border-l border-[#DDDDDD] h-full text-[11px] font-variant-numeric-tabular">
                                                    <div className="px-1.5 flex items-center justify-end border-b border-[#DDDDDD] font-bold text-blue-900">
                                                        {row.debit_amount ? row.debit_amount.toLocaleString() : ""}
                                                    </div>
                                                    <div className="px-1.5 flex items-center justify-end text-blue-700/80">
                                                        {row.debit_tax_amount ? row.debit_tax_amount.toLocaleString() : "0"}
                                                    </div>
                                                </div>
                                                <div className="grid grid-rows-2 border-l border-[#DDDDDD] h-full">
                                                    <div className="px-1.5 flex items-center border-b border-[#DDDDDD] text-[10px] text-gray-700">{row.debit_dept}</div>
                                                    <div className="flex h-full">
                                                        <div className="flex-1 px-1.5 flex items-center border-r border-[#EEEEEE] text-[9px] text-gray-600 truncate px-1">{row.debit_tax}</div>
                                                        <div className="w-8 flex items-center justify-center text-[9px] text-gray-600 !px-0">{row.debit_tax ? "10%" : ""}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Credit */}
                                            <div className="w-[480px] shrink-0 grid grid-cols-[300px_85px_95px] border-r border-[#DDDDDD]">
                                                <div className="grid grid-rows-2 h-full text-[11px]">
                                                    <div className="px-1.5 flex items-center border-b border-[#DDDDDD] font-medium text-gray-900">{row.credit_account}</div>
                                                    <div className="px-1.5 flex items-center text-gray-700">{row.credit_sub}</div>
                                                </div>
                                                <div className="grid grid-rows-2 border-l border-[#DDDDDD] h-full text-[11px] font-variant-numeric-tabular">
                                                    <div className="px-1.5 flex items-center justify-end border-b border-[#DDDDDD] font-bold text-red-900">
                                                        {row.credit_amount ? row.credit_amount.toLocaleString() : ""}
                                                    </div>
                                                    <div className="px-1.5 flex items-center justify-end text-red-700/80">
                                                        {row.credit_tax_amount ? row.credit_tax_amount.toLocaleString() : "0"}
                                                    </div>
                                                </div>
                                                <div className="grid grid-rows-2 border-l border-[#DDDDDD] h-full">
                                                    <div className="px-1.5 flex items-center border-b border-[#DDDDDD] text-[10px] text-gray-700">{row.credit_dept}</div>
                                                    <div className="flex h-full">
                                                        <div className="flex-1 px-1.5 flex items-center border-r border-[#EEEEEE] text-[9px] text-gray-600 truncate px-1">{row.credit_tax}</div>
                                                        <div className="w-8 flex items-center justify-center text-[9px] text-gray-600 !px-0">{row.credit_tax ? "10%" : ""}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Summary */}
                                            <div className="w-[180px] border-l-2 border-gray-400 bg-[#FAFAFA] text-[11px] shrink-0">
                                                <div className="grid grid-rows-2 h-full">
                                                    <div className="px-1.5 flex items-center border-b border-[#DDDDDD] text-gray-900 truncate">{row.summary}</div>
                                                    <div className="px-1.5 flex items-center text-gray-700 truncate"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {filteredDiary.length === 0 && (
                                    <div className="p-4 text-center text-xs text-gray-500">一致する仕訳がありません。</div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="h-8 bg-[#D6D6D6] border-t border-gray-400 flex items-center px-4 gap-8 text-[11px] shrink-0 font-medium text-gray-900">
                <span style={{ color: "#555" }}>表示件数: {filteredDiary.length.toLocaleString()}件</span>
                <span style={{ fontSize: 10, color: "#888" }} className="ml-auto">※ ダブルクリックまたは Enter で振替伝票を開きます</span>
            </div>
        </div>
    );
}
