"use client";

import { useState, useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useQuery } from "@tanstack/react-query";
import { fetchLedger, fetchAccounts } from "../../lib/api";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";

interface LedgerEntry {
  id: number;
  date: string;
  opposite_account: string;
  summary: string;
  debit_amount: number | null;
  credit_amount: number | null;
  balance: number;
}

function fmt(n: number | null): string {
  if (n === null || n === 0) return "";
  return n.toLocaleString();
}

export function SubsidiaryLedger() {
  const queryClient = useQueryClient();
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [selectedAccountId, setSelectedAccountId] = useState<number | null>(null);

  useEffect(() => {
    const handleAction = (e: CustomEvent) => {
      if (e.detail === "refresh") {
        queryClient.invalidateQueries({ queryKey: ["ledger"] });
        queryClient.invalidateQueries({ queryKey: ["accounts"] });
      }
    };
    window.addEventListener("a2e-toolbar-action", handleAction as EventListener);
    return () => window.removeEventListener("a2e-toolbar-action", handleAction as EventListener);
  }, [queryClient]);

  const { data: accountsData = [] } = useQuery({
    queryKey: ["accounts"],
    queryFn: fetchAccounts,
    staleTime: 1000 * 60 * 60,
  });

  const { data: ledgerData = [], isLoading } = useQuery({
    queryKey: ["ledger", selectedAccountId],
    queryFn: () => fetchLedger(selectedAccountId!),
    enabled: !!selectedAccountId,
    refetchInterval: 2000,
  });

  const parentRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: ledgerData.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 24,
    overscan: 20,
  });

  const columns = [
    { label: "日付", width: 60, align: "center", key: "date" },
    { label: "番号", width: 50, align: "center", key: "id" },
    { label: "相手勘定科目", width: 140, align: "left", key: "opposite_account" },
    { label: "摘要", width: "100%", align: "left", key: "summary" },
    { label: "借方金額", width: 110, align: "right", key: "debit_amount" },
    { label: "貸方金額", width: 110, align: "right", key: "credit_amount" },
    { label: "残高", width: 120, align: "right", key: "balance" },
  ];

  return (
    <div className="flex flex-col h-full bg-white select-none" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
      {/* Title bar */}
      <div className="flex items-center justify-between px-2" style={{ height: 26, backgroundColor: "#005BAC", color: "#fff", fontSize: 12, flexShrink: 0 }}>
        <span>補助元帳</span>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <span>勘定科目:</span>
            <select
              value={selectedAccountId || ""}
              onChange={(e) => setSelectedAccountId(Number(e.target.value))}
              className="text-black text-[11px] px-1 h-5 outline-none"
              style={{ border: "1px solid #b0b0b0", borderRadius: 2 }}
            >
              <option value="">選択してください</option>
              {accountsData.map((a: any) => (
                <option key={a.id} value={a.id}>{a.code} {a.name}</option>
              ))}
            </select>
          </div>
          <div className="text-[11px]">令和7年度</div>
        </div>
      </div>

      {/* Header */}
      <div className="flex" style={{ backgroundColor: "#d0dce8", borderBottom: "2px solid #005BAC", flexShrink: 0 }}>
        {columns.map((col) => (
          <div
            key={col.label as string}
            style={{
              width: col.width,
              padding: "4px 6px",
              borderRight: "1px solid #b0b0b0",
              textAlign: col.align as any,
              fontSize: 11,
              color: "#333",
              flexShrink: col.width === "100%" ? 1 : 0,
              flexGrow: col.width === "100%" ? 1 : 0,
            }}
          >
            {col.label}
          </div>
        ))}
      </div>

      {/* Grid */}
      <div ref={parentRef} className="flex-1 overflow-auto bg-white" tabIndex={0} style={{ outline: "none" }}>
        {isLoading ? (
          <div className="p-4 text-sm text-gray-500">読み込み中...</div>
        ) : (
          <div style={{ height: `${rowVirtualizer.getTotalSize()}px`, width: "100%", position: "relative" }}>
            {rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const entry = ledgerData[virtualRow.index];
              const isSelected = selectedRow === virtualRow.index;
              const isNegative = entry.balance < 0;

              return (
                <div
                  key={virtualRow.index}
                  className="flex absolute top-0 left-0 w-full"
                  style={{
                    height: `${virtualRow.size}px`,
                    transform: `translateY(${virtualRow.start}px)`,
                    backgroundColor: isSelected ? "#E1F1FF" : virtualRow.index % 2 === 0 ? "#fff" : "#FAFAFA",
                    cursor: "pointer",
                    fontSize: 12,
                  }}
                  onClick={() => setSelectedRow(virtualRow.index)}
                >
                  <div style={{ width: 60, padding: "2px 6px", textAlign: "center", borderRight: "1px solid #e0e0e0", borderBottom: "1px solid #e0e0e0", flexShrink: 0 }}>
                    {entry.date}
                  </div>
                  <div style={{ width: 50, padding: "2px 6px", textAlign: "center", borderRight: "1px solid #e0e0e0", borderBottom: "1px solid #e0e0e0", color: "#888", flexShrink: 0 }}>
                    {entry.id}
                  </div>
                  <div style={{ width: 140, padding: "2px 6px", borderRight: "1px solid #e0e0e0", borderBottom: "1px solid #e0e0e0", flexShrink: 0 }}>
                    <span className="truncate block">{entry.opposite_account}</span>
                  </div>
                  <div style={{ flex: 1, padding: "2px 6px", borderRight: "1px solid #e0e0e0", borderBottom: "1px solid #e0e0e0", minWidth: 0 }}>
                    <span className="truncate block">{entry.summary}</span>
                  </div>
                  <div style={{ width: 110, padding: "2px 6px", textAlign: "right", borderRight: "1px solid #e0e0e0", borderBottom: "1px solid #e0e0e0", fontVariantNumeric: "tabular-nums", color: entry.debit_amount ? "#005BAC" : "#ccc", flexShrink: 0 }}>
                    {fmt(entry.debit_amount)}
                  </div>
                  <div style={{ width: 110, padding: "2px 6px", textAlign: "right", borderRight: "1px solid #e0e0e0", borderBottom: "1px solid #e0e0e0", fontVariantNumeric: "tabular-nums", color: entry.credit_amount ? "#C0392B" : "#ccc", flexShrink: 0 }}>
                    {fmt(entry.credit_amount)}
                  </div>
                  <div style={{ width: 120, padding: "2px 6px", textAlign: "right", borderBottom: "1px solid #e0e0e0", fontVariantNumeric: "tabular-nums", color: isNegative ? "#E74C3C" : "#222", backgroundColor: isNegative ? "#fff5f5" : "transparent", flexShrink: 0, fontWeight: "bold" }}>
                    {isNegative && "△"}
                    {Math.abs(entry.balance).toLocaleString()}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-2" style={{ height: 28, backgroundColor: "#E8E8E8", borderTop: "2px solid #005BAC", fontSize: 12, flexShrink: 0 }}>
        <span style={{ color: "#555" }}>件数: {ledgerData.length.toLocaleString()}件</span>
        <div className="flex items-center gap-6">
          <span>借方合計: <span style={{ color: "#005BAC", fontWeight: "bold" }}>¥{ledgerData.reduce((s: number, e: any) => s + (e.debit_amount || 0), 0).toLocaleString()}</span></span>
          <span>貸方合計: <span style={{ color: "#C0392B", fontWeight: "bold" }}>¥{ledgerData.reduce((s: number, e: any) => s + (e.credit_amount || 0), 0).toLocaleString()}</span></span>
          <span>合計残高: <span style={{ color: ledgerData.length > 0 && ledgerData[ledgerData.length - 1].balance < 0 ? "#E74C3C" : "#27AE60", fontWeight: "bold" }}>¥{ledgerData.length > 0 ? Math.abs(ledgerData[ledgerData.length - 1].balance).toLocaleString() : "0"}</span></span>
        </div>
      </div>
    </div>
  );
}
