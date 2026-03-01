"use client";

import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import {
  AccountSearchPopup,
  type AccountItem,
  type SearchType,
} from "./AccountSearchPopup";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { fetchAccounts, createJournal, fetchJournal, fetchDiary } from "../../lib/api";

interface SlipRow {
  id: number | null; // null for new rows
  date: string;
  debitAccount: string;
  debitSub: string;
  debitDept: string;
  debitTax: string;
  debitTaxRate: string;
  debitAmount: string;
  debitTaxAmount: string;

  creditAccount: string;
  creditSub: string;
  creditDept: string;
  creditTax: string;
  creditTaxRate: string;
  creditAmount: string;
  creditTaxAmount: string;

  summary: string;
  client: string;
}

const INITIAL_ROWS: SlipRow[] = Array.from({ length: 1 }).map((_, i) => ({
  id: null,
  date: "",
  debitAccount: "", debitSub: "", debitDept: "", debitTax: "", debitTaxRate: "", debitAmount: "", debitTaxAmount: "",
  creditAccount: "", creditSub: "", creditDept: "", creditTax: "", creditTaxRate: "", creditAmount: "", creditTaxAmount: "",
  summary: "", client: ""
}));

const FIELDS = [
  "date",
  "debitAccount", "debitSub",
  "debitAmount", "debitTaxAmount",
  "debitDept", "debitTax", "debitTaxRate",
  "creditAccount", "creditSub",
  "creditAmount", "creditTaxAmount",
  "creditDept", "creditTax", "creditTaxRate",
  "summary", "client"
];

function getSearchType(field: string): SearchType | null {
  if (field.includes("Account")) return "account";
  if (field.includes("Sub")) return "sub";
  if (field.includes("Dept")) return "dept";
  if (field.includes("TaxRate")) return "taxRate";
  if (field.includes("Tax")) return "tax";
  return null;
}

interface TransferSlipProps {
  initialJournalId?: number;
}

export function TransferSlip({ initialJournalId }: TransferSlipProps) {
  const [rows, setRows] = useState<SlipRow[]>(INITIAL_ROWS);
  const hasLoadedRef = useRef(false);
  const [focusedCell, setFocusedCell] = useState<{ row: number; field: string } | null>(null);
  const [editValue, setEditValue] = useState("");
  const [accountPopup, setAccountPopup] = useState<{
    isOpen: boolean;
    row: number;
    field: string;
    searchType: SearchType;
    anchorRect: { top: number; left: number } | null;
  }>({ isOpen: false, row: -1, field: "", searchType: "account", anchorRect: null });

  const queryClient = useQueryClient();
  const { data: accountsData = [] } = useQuery({
    queryKey: ["accounts"],
    queryFn: fetchAccounts,
    staleTime: 1000 * 60 * 60,
  });

  const { data: initialJournal } = useQuery({
    queryKey: ["journal", initialJournalId],
    queryFn: () => fetchJournal(initialJournalId!),
    enabled: !!initialJournalId,
  });

  const { data: latestJournals } = useQuery({
    queryKey: ["diary"],
    queryFn: fetchDiary,
    enabled: !initialJournalId,
  });

  // Map latestJournals or initialJournal to rows
  useEffect(() => {
    if (hasLoadedRef.current) return;

    if (initialJournalId && initialJournal && accountsData.length > 0) {
      // Single drill-down mode
      hasLoadedRef.current = true;
      const debitAcc = accountsData.find((a: any) => a.id === initialJournal.debit_account_id);
      const creditAcc = accountsData.find((a: any) => a.id === initialJournal.credit_account_id);

      const loadedRow: SlipRow = {
        id: initialJournal.id,
        date: initialJournal.date,
        debitAccount: debitAcc?.name || "",
        debitSub: "",
        debitDept: "",
        debitTax: debitAcc?.tax_type || "",
        debitTaxRate: "10%",
        debitAmount: initialJournal.debit_amount?.toLocaleString() || "0",
        debitTaxAmount: initialJournal.debit_tax_amount?.toLocaleString() || "0",
        creditAccount: creditAcc?.name || "",
        creditSub: "",
        creditDept: "",
        creditTax: creditAcc?.tax_type || "",
        creditTaxRate: "10%",
        creditAmount: initialJournal.credit_amount?.toLocaleString() || "0",
        creditTaxAmount: initialJournal.credit_tax_amount?.toLocaleString() || "0",
        summary: initialJournal.summary || "",
        client: "",
      };

      setRows((prev) => [loadedRow, ...prev.slice(1)]);
    } else if (!initialJournalId && latestJournals && latestJournals.length > 0 && accountsData.length > 0) {
      // Bulk load mode - DISABLED for "Clean Entry" preference
      /*
      hasLoadedRef.current = true;
      const newRows = [...INITIAL_ROWS];
      latestJournals.slice(0, 15).forEach((j: any, i: number) => {
        const dAcc = accountsData.find((a: any) => a.id === j.debit_account_id);
        const cAcc = accountsData.find((a: any) => a.id === j.credit_account_id);
        newRows[i] = {
          id: j.id,
          date: j.date,
          debitAccount: dAcc?.name || "",
          debitSub: "", debitDept: "",
          debitTax: dAcc?.tax_type || "",
          debitTaxRate: "10%",
          debitAmount: j.debit_amount?.toLocaleString() || "0",
          debitTaxAmount: j.debit_tax_amount?.toLocaleString() || "0",
          creditAccount: cAcc?.name || "",
          creditSub: "", creditDept: "",
          creditTax: cAcc?.tax_type || "",
          creditTaxRate: "10%",
          creditAmount: j.credit_amount?.toLocaleString() || "0",
          creditTaxAmount: j.credit_tax_amount?.toLocaleString() || "0",
          summary: j.summary || "",
          client: ""
        };
      });
      setRows(newRows);
      */
    }
  }, [initialJournal, latestJournals, accountsData, initialJournalId]);

  const mutation = useMutation({
    mutationFn: async (rowsToSave: SlipRow[]) => {
      const validRows = rowsToSave.filter(r => {
        const d = parseInt(r.debitAmount.replace(/,/g, ""), 10) || 0;
        const c = parseInt(r.creditAmount.replace(/,/g, ""), 10) || 0;
        return d > 0 || c > 0;
      });

      if (validRows.length === 0) throw new Error("保存するデータがありません。");

      const promises = validRows.map(async (r) => {
        const debitAcc = accountsData.find((a: any) => a.name === r.debitAccount);
        const creditAcc = accountsData.find((a: any) => a.name === r.creditAccount);

        return createJournal({
          id: r.id,
          date: r.date || new Date().toLocaleDateString('ja-JP', { month: '2-digit', day: '2-digit' }),
          debit_account_id: debitAcc?.id || null,
          debit_amount: parseInt(r.debitAmount.replace(/,/g, ""), 10) || null,
          debit_tax_amount: parseInt(r.debitTaxAmount.replace(/,/g, ""), 10) || 0,
          credit_account_id: creditAcc?.id || null,
          credit_amount: parseInt(r.creditAmount.replace(/,/g, ""), 10) || null,
          credit_tax_amount: parseInt(r.creditTaxAmount.replace(/,/g, ""), 10) || 0,
          summary: r.summary
        });
      });
      return Promise.all(promises);
    },
    onSuccess: () => {
      toast.success("伝票を登録しました", { position: "top-center" });
      queryClient.invalidateQueries({ queryKey: ["trial-balance"] });
      queryClient.invalidateQueries({ queryKey: ["diary"] });
      queryClient.invalidateQueries({ queryKey: ["ledger"] });
    },
    onError: (err: any) => {
      toast.error(err.message, { position: "top-center" });
    }
  });

  useEffect(() => {
    const handleAction = (e: CustomEvent) => {
      const action = e.detail;
      if (action === "submit") mutation.mutate(rows);
      if (action === "cancel") {
        toast.info("入力を取り消しました", { position: "top-center" });
      }
      if (action === "refresh") {
        queryClient.invalidateQueries({ queryKey: ["journal"] });
        queryClient.invalidateQueries({ queryKey: ["accounts"] });
      }

      if (action === "dictionary") {
        toast.info("辞書機能は実装準備中です", { position: "top-center" });
        return;
      }

      if (action === "reference") {
        if (focusedCell) {
          const st = getSearchType(focusedCell.field);
          if (st) {
            // We need the rect of the focused cell
            const el = document.querySelector(`[data-row="${focusedCell.row}"][data-field="${focusedCell.field}"]`);
            if (el) {
              const r = el.getBoundingClientRect();
              setAccountPopup({
                isOpen: true,
                row: focusedCell.row,
                field: focusedCell.field,
                searchType: st,
                anchorRect: { top: r.bottom, left: r.left }
              });
            }
          }
        }
      }

      if (action === "delete") {
        if (window.confirm("伝票の内容をすべて削除してもよろしいですか？")) {
          setRows(INITIAL_ROWS);
          setFocusedCell({ row: 0, field: "date" });
          setEditValue("");
        }
      }
      if (action === "new_slip") {
        setRows(INITIAL_ROWS);
        setFocusedCell({ row: 0, field: "date" });
        setEditValue("");
      }
      if (action === "delete_row") {
        const focusedRowIndex = focusedCell?.row ?? -1;
        if (focusedRowIndex !== -1 && rows.length > 1) {
          setRows((prev) => {
            const newRows = [...prev];
            newRows.splice(focusedRowIndex, 1);
            return newRows;
          });
        }
      }
      if (e.detail === "insert_row") {
        const focusedRowIndex = focusedCell?.row ?? -1;
        if (focusedRowIndex !== -1) {
          setRows((prev) => {
            const newRows = [...prev];
            newRows.splice(focusedRowIndex, 0, {
              id: null, date: "",
              debitAccount: "", debitSub: "", debitDept: "", debitTax: "", debitTaxRate: "", debitAmount: "", debitTaxAmount: "",
              creditAccount: "", creditSub: "", creditDept: "", creditTax: "", creditTaxRate: "", creditAmount: "", creditTaxAmount: "",
              summary: "", client: ""
            });
            return newRows;
          });
        }
      }
    };
    window.addEventListener("a2e-toolbar-action", handleAction as EventListener);
    return () => window.removeEventListener("a2e-toolbar-action", handleAction as EventListener);
  }, [rows, mutation, focusedCell]);

  const commitEdit = useCallback((customVal?: string) => {
    if (!focusedCell) return;
    setRows(prev => {
      const newRows = [...prev];
      let val = customVal !== undefined ? customVal : editValue;
      if (focusedCell.field.includes("TaxRate") && val && !val.includes("%") && !isNaN(Number(val))) {
        val += "%";
      }
      if (newRows[focusedCell.row]) {
        (newRows[focusedCell.row] as any)[focusedCell.field] = val;
      }

      // Ensure tax calculation triggers automatically if an amount, rate, or account changed
      const row = newRows[focusedCell.row];
      if (!row) return prev; // Safety check

      const calcTax = (amtStr: string, rateStr: string, taxType: string) => {
        if (!taxType) taxType = "";
        if (taxType.includes("対象外") || taxType.includes("非課税")) return "0";
        const rate = parseInt(rateStr.replace("%", ""), 10) || 0;
        const amt = parseInt((amtStr || "").replace(/,/g, ""), 10) || 0;
        return Math.floor(amt * (rate / 100)).toLocaleString();
      };

      if (focusedCell.field.startsWith("debit")) {
        row.debitTaxAmount = calcTax(row.debitAmount, row.debitTaxRate, row.debitTax);
      } else if (focusedCell.field.startsWith("credit")) {
        row.creditTaxAmount = calcTax(row.creditAmount, row.creditTaxRate, row.creditTax);
      }

      return newRows;
    });
  }, [focusedCell, editValue]);

  const navigate = useCallback((dir: "next" | "prev") => {
    if (!focusedCell) return;
    const idx = FIELDS.indexOf(focusedCell.field);
    let nextRow = focusedCell.row;
    let nextIdx = idx + (dir === "next" ? 1 : -1);

    // AE Warp Logic Removed: Now moves in sequence
    if (dir === "next" && focusedCell.field === "client") {
      if (nextRow < rows.length - 1) {
        nextRow++;
        nextIdx = FIELDS.indexOf("debitAccount");
      }
    }

    if (nextIdx >= FIELDS.length) {
      if (nextRow < rows.length - 1) { nextRow++; nextIdx = 0; }
      else nextIdx = FIELDS.length - 1;
    } else if (nextIdx < 0) {
      if (nextRow > 0) { nextRow--; nextIdx = FIELDS.length - 1; }
      else nextIdx = 0;
    }

    const nextField = FIELDS[nextIdx];
    commitEdit();
    setFocusedCell({ row: nextRow, field: nextField });
    setEditValue((rows[nextRow] as any)[nextField] || "");
  }, [focusedCell, rows, commitEdit]);

  const debitTotal = useMemo(() => rows.reduce((sum, r) => sum + (parseInt(r.debitAmount.replace(/,/g, ""), 10) || 0), 0), [rows]);
  const creditTotal = useMemo(() => rows.reduce((sum, r) => sum + (parseInt(r.creditAmount.replace(/,/g, ""), 10) || 0), 0), [rows]);
  const diff = debitTotal - creditTotal;

  const lastZeroTime = useRef(0);

  const renderInput = (rowIdx: number, field: string, placeholder: string, className = "") => {
    const isFocused = focusedCell?.row === rowIdx && focusedCell?.field === field;
    const val = isFocused ? editValue : (rows[rowIdx] as any)[field] || "";
    const isAmount = field.includes("Amount");

    const st = getSearchType(field);
    const isDropdownOnly = st === "dept" || st === "tax" || st === "taxRate" || st === "sub";

    return (
      <div
        className={`relative flex items-center px-1.5 text-[11px] cursor-text tracking-tight h-full min-h-[24px] border-b border-[#DDDDDD] overflow-hidden ${isFocused ? "bg-white ring-2 ring-inset ring-[#005BAC] z-10" : ""} ${className}`}
        style={{ letterSpacing: "-0.02em" }}
        data-row={rowIdx}
        data-field={field}
        onClick={() => {
          if (!isFocused) {
            commitEdit();
            setFocusedCell({ row: rowIdx, field });
            setEditValue((rows[rowIdx] as any)[field] || "");
          }
        }}
        onDoubleClick={(e) => {
          if (st) {
            const r = e.currentTarget.getBoundingClientRect();
            setAccountPopup({ isOpen: true, row: rowIdx, field, searchType: st, anchorRect: { top: r.bottom, left: r.left } });
          }
        }}
      >
        {isFocused ? (
          <input
            autoFocus
            readOnly={isDropdownOnly}
            className={`w-full h-full outline-none bg-transparent font-medium ${isDropdownOnly ? "caret-transparent cursor-pointer text-gray-800" : "text-gray-900"}`}
            value={editValue}
            onChange={e => {
              if (isDropdownOnly) return;
              let v = e.target.value.replace(/[０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0xfee0));
              setEditValue(v);
            }}
            onFocus={e => {
              if (!isDropdownOnly) e.target.select();
            }}
            onBlur={() => commitEdit()}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === "Tab") {
                e.preventDefault();
                navigate(e.shiftKey ? "prev" : "next");
              }
              if (e.key === "F4" && st) {
                e.preventDefault();
                const r = e.currentTarget.getBoundingClientRect();
                setAccountPopup({ isOpen: true, row: rowIdx, field, searchType: st, anchorRect: { top: r.bottom, left: r.left } });
              }
              // Prevent typing arbitrary text if it's meant to be selected via F4
              if (isDropdownOnly && e.key !== "Enter" && e.key !== "Tab" && e.key !== "Escape" && e.key !== "F4" && !e.ctrlKey && !e.metaKey && !e.altKey) {
                e.preventDefault();
                // Option to open immediately on type
                if (e.key.length === 1 || e.key === " ") {
                  const r = e.currentTarget.getBoundingClientRect();
                  setAccountPopup({ isOpen: true, row: rowIdx, field, searchType: st, anchorRect: { top: r.bottom, left: r.left } });
                }
              }

              if (isAmount) {
                if (e.key === "0") {
                  if (Date.now() - lastZeroTime.current < 250) { e.preventDefault(); setEditValue(v => v + "00"); }
                  lastZeroTime.current = Date.now();
                } else if (e.key === "+" || e.key === "*") { e.preventDefault(); setEditValue(v => v + "000"); }
              }
            }}
            placeholder={placeholder}
          />
        ) : (
          <span className={`truncate w-full inline-block font-medium text-gray-900 ${isAmount && val ? "text-right" : ""}`}>
            {isAmount && val ? Number(val.replace(/,/g, "")).toLocaleString() : val}
          </span>
        )}
        {!isFocused && !val && placeholder && <span className="text-gray-400 absolute left-1.5">{placeholder}</span>}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full bg-[#EEEEEE] overflow-hidden select-none" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
      {/* Scrollable Container */}
      <div className="flex-1 flex flex-col overflow-x-auto overflow-y-hidden bg-[#EEEEEE]">
        <div className="min-w-[1312px] flex-1 flex flex-col">
          {/* Table Header */}
          <div className="flex bg-[#EEEEEE] border-y border-[#DDDDDD] text-[10px] text-gray-700 font-bold h-10 items-center shrink-0" style={{ scrollbarGutter: 'stable' }}>
            <div className="w-8 border-r border-[#DDDDDD] h-full flex items-center justify-center shrink-0">No.</div>
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

          {/* Grid Content */}
          <div className="flex-1 overflow-y-scroll bg-white" style={{ scrollbarGutter: 'stable' }}>
            {rows.map((row, i) => (
              <div key={i} className={`flex border-b border-[#DDDDDD] hover:bg-blue-50/50 ${i % 2 === 1 ? "bg-gray-50/50" : ""}`}>
                <div className="w-8 border-r border-[#DDDDDD] flex flex-col items-center py-1 text-[10px] text-gray-400 bg-[#F9F9F9] shrink-0">
                  <span className="mb-1">{i + 1}</span>
                  {renderInput(i, "date", "", "border-none text-center bg-transparent mt-auto !min-h-[16px] !px-0")}
                </div>
                <div className="flex-1 flex min-h-[48px]">
                  {/* Debit */}
                  <div className="w-[480px] shrink-0 grid grid-cols-[300px_85px_95px] border-r-2 border-blue-200 lg:bg-[#F0F8FF]/30">
                    <div className="grid grid-rows-2 h-full">
                      {renderInput(i, "debitAccount", "借方勘定科目", "font-medium text-gray-900 bg-white/40")}
                      {renderInput(i, "debitSub", "借方補助科目", "text-gray-700")}
                    </div>
                    <div className="grid grid-rows-2 border-l border-[#DDDDDD] h-full text-right">
                      {renderInput(i, "debitAmount", "0", "font-bold text-blue-900 bg-white/40")}
                      {renderInput(i, "debitTaxAmount", "0", "text-blue-700/80")}
                    </div>
                    <div className="grid grid-rows-2 border-l border-[#DDDDDD] h-full">
                      {renderInput(i, "debitDept", "部門名", "text-[10px] text-gray-700")}
                      <div className="flex h-full">
                        {renderInput(i, "debitTax", "税区分", "flex-1 border-r border-[#EEEEEE] text-[9px] text-gray-600 px-1")}
                        {renderInput(i, "debitTaxRate", "10%", "w-8 text-[9px] text-center text-gray-600 !px-0")}
                      </div>
                    </div>
                  </div>
                  {/* Credit */}
                  <div className="w-[480px] shrink-0 grid grid-cols-[300px_85px_95px] border-r border-[#DDDDDD] lg:bg-[#FFF0F5]/30">
                    <div className="grid grid-rows-2 h-full">
                      {renderInput(i, "creditAccount", "貸方勘定科目", "font-medium text-gray-900 bg-white/40")}
                      {renderInput(i, "creditSub", "貸方補助科目", "text-gray-700")}
                    </div>
                    <div className="grid grid-rows-2 border-l border-[#DDDDDD] h-full text-right">
                      {renderInput(i, "creditAmount", "0", "font-bold text-red-900 bg-white/40")}
                      {renderInput(i, "creditTaxAmount", "0", "text-red-700/80")}
                    </div>
                    <div className="grid grid-rows-2 border-l border-[#DDDDDD] h-full">
                      {renderInput(i, "creditDept", "部門名", "text-[10px] text-gray-700")}
                      <div className="flex h-full">
                        {renderInput(i, "creditTax", "税区分", "flex-1 border-r border-[#EEEEEE] text-[9px] text-gray-600 px-1")}
                        {renderInput(i, "creditTaxRate", "10%", "w-8 text-[9px] text-center text-gray-600 !px-0")}
                      </div>
                    </div>
                  </div>
                  {/* Summary */}
                  <div className="w-[180px] border-l-2 border-gray-400 bg-[#FAFAFA] shrink-0">
                    <div className="grid grid-rows-2 h-full">
                      {renderInput(i, "summary", "摘要", "text-gray-900")}
                      {renderInput(i, "client", "取引先 / 請求書", "text-gray-700")}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer / Status Bar */}
      <div className="h-8 bg-[#D6D6D6] border-t border-gray-400 flex items-center px-4 gap-8 text-[11px] shrink-0 font-medium text-gray-900">
        <div className="flex gap-2">
          <span>借方合計:</span>
          <span className="text-blue-700 font-bold">¥ {debitTotal.toLocaleString()}</span>
        </div>
        <div className="flex gap-2">
          <span>貸方合計:</span>
          <span className="text-red-700 font-bold">¥ {creditTotal.toLocaleString()}</span>
        </div>
        <div className="flex gap-2 ml-auto">
          <span>貸借差額:</span>
          <span className={`font-bold ${diff === 0 ? "text-green-700" : "text-orange-600"}`}>
            ¥ {Math.abs(diff).toLocaleString()}
          </span>
        </div>
      </div>

      {accountPopup.isOpen && (
        <AccountSearchPopup
          isOpen={true}
          onClose={() => setAccountPopup({ isOpen: false, row: -1, field: "", searchType: "account", anchorRect: null })}
          searchType={accountPopup.searchType}
          onSelect={(acc) => {
            const { row, field } = accountPopup;
            setAccountPopup({ isOpen: false, row: -1, field: "", searchType: "account", anchorRect: null });

            setRows(prev => {
              const next = [...prev];
              const newRow = { ...next[row] };
              (newRow as any)[field] = acc.name;

              if (accountPopup.searchType === "account") {
                const taxField = field.replace("Account", "Tax");
                if (taxField !== field && (newRow as any)[taxField] === "") {
                  (newRow as any)[taxField] = acc.taxType || "";
                }
              }

              const calcTax = (amtStr: string, rateStr: string, taxType: string) => {
                if (!taxType) taxType = "";
                if (taxType.includes("対象外") || taxType.includes("非課税")) return "0";
                const rate = parseInt(rateStr.replace("%", ""), 10) || 0;
                const amt = parseInt((amtStr || "").replace(/,/g, ""), 10) || 0;
                return Math.floor(amt * (rate / 100)).toLocaleString();
              };

              if (field.startsWith("debit")) {
                newRow.debitTaxAmount = calcTax(newRow.debitAmount, newRow.debitTaxRate, newRow.debitTax);
              } else if (field.startsWith("credit")) {
                newRow.creditTaxAmount = calcTax(newRow.creditAmount, newRow.creditTaxRate, newRow.creditTax);
              }

              next[row] = newRow;

              const idx = FIELDS.indexOf(field);
              let nextRow = row;
              let nextIdx = idx + 1;
              if (field === "debitAmount") nextIdx = FIELDS.indexOf("creditAccount");
              else if (field === "client" && nextRow < next.length - 1) { nextRow++; nextIdx = FIELDS.indexOf("debitAccount"); }
              if (nextIdx >= FIELDS.length) { if (nextRow < next.length - 1) { nextRow++; nextIdx = 0; } else nextIdx = FIELDS.length - 1; }
              const nextField = FIELDS[nextIdx];

              setTimeout(() => {
                setFocusedCell({ row: nextRow, field: nextField });
                setEditValue((next[nextRow] as any)[nextField] || "");
              }, 0);

              return next;
            });
          }}
          anchorRect={accountPopup.anchorRect!}
        />
      )}
    </div>
  );
}