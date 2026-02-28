import { useState, useRef, useCallback } from "react";
import {
  AccountSearchPopup,
  type AccountItem,
} from "./AccountSearchPopup";

interface SlipRow {
  id: number;
  date: string;
  debitAccount: string;
  debitSub: string;
  debitDept: string;
  debitTax: string;
  debitAmount: string;
  creditAccount: string;
  creditSub: string;
  creditDept: string;
  creditTax: string;
  creditAmount: string;
  summary: string;
}

const INITIAL_ROWS: SlipRow[] = [
  {
    id: 1,
    date: "04/01",
    debitAccount: "旅費交通費",
    debitSub: "",
    debitDept: "営業部",
    debitTax: "課税仕入10%",
    debitAmount: "15,400",
    creditAccount: "現金",
    creditSub: "",
    creditDept: "",
    creditTax: "対象外",
    creditAmount: "15,400",
    summary: "東京出張 新幹線代",
  },
  {
    id: 2,
    date: "04/03",
    debitAccount: "消耗品費",
    debitSub: "",
    debitDept: "総務部",
    debitTax: "課税仕入10%",
    debitAmount: "8,800",
    creditAccount: "普通預金",
    creditSub: "みずほ銀行",
    creditDept: "",
    creditTax: "対象外",
    creditAmount: "8,800",
    summary: "コピー用紙・トナー",
  },
  {
    id: 3,
    date: "04/05",
    debitAccount: "接待交際費",
    debitSub: "",
    debitDept: "営業部",
    debitTax: "課税仕入10%",
    debitAmount: "32,000",
    creditAccount: "未払金",
    creditSub: "JCBカード",
    creditDept: "",
    creditTax: "対象外",
    creditAmount: "32,000",
    summary: "得意先接待 〇〇料亭",
  },
  {
    id: 4,
    date: "04/07",
    debitAccount: "仕入高",
    debitSub: "",
    debitDept: "製造部",
    debitTax: "課税仕入10%",
    debitAmount: "275,000",
    creditAccount: "買掛金",
    creditSub: "㈱山田商事",
    creditDept: "",
    creditTax: "対象外",
    creditAmount: "275,000",
    summary: "原材料仕入 4月分",
  },
  {
    id: 5,
    date: "04/10",
    debitAccount: "給与手当",
    debitSub: "",
    debitDept: "全社",
    debitTax: "対象外",
    debitAmount: "2,450,000",
    creditAccount: "普通預金",
    creditSub: "三井住友銀行",
    creditDept: "",
    creditTax: "対象外",
    creditAmount: "2,450,000",
    summary: "4月分給与支払",
  },
  {
    id: 6,
    date: "04/12",
    debitAccount: "通信費",
    debitSub: "",
    debitDept: "総務部",
    debitTax: "課税仕入10%",
    debitAmount: "44,000",
    creditAccount: "普通預金",
    creditSub: "みずほ銀行",
    creditDept: "",
    creditTax: "対象外",
    creditAmount: "44,000",
    summary: "インターネット・電話料金 4月分",
  },
  {
    id: 7,
    date: "04/15",
    debitAccount: "地代家賃",
    debitSub: "",
    debitDept: "全社",
    debitTax: "非課税仕入",
    debitAmount: "330,000",
    creditAccount: "普通預金",
    creditSub: "三井住友銀行",
    creditDept: "",
    creditTax: "対象外",
    creditAmount: "330,000",
    summary: "事務所家賃 5月分",
  },
  {
    id: 8,
    date: "04/18",
    debitAccount: "普通預金",
    debitSub: "みずほ銀行",
    debitDept: "",
    debitTax: "対象外",
    debitAmount: "1,100,000",
    creditAccount: "売掛金",
    creditSub: "㈱鈴木工業",
    creditDept: "",
    creditTax: "対象外",
    creditAmount: "1,100,000",
    summary: "売掛金回収 3月分",
  },
  {
    id: 9,
    date: "04/20",
    debitAccount: "水道光熱費",
    debitSub: "",
    debitDept: "全社",
    debitTax: "課税仕入10%",
    debitAmount: "67,200",
    creditAccount: "普通預金",
    creditSub: "みずほ銀行",
    creditDept: "",
    creditTax: "対象外",
    creditAmount: "67,200",
    summary: "電気料金 4月分",
  },
  {
    id: 10,
    date: "04/22",
    debitAccount: "売掛金",
    debitSub: "㈱田中製作所",
    debitDept: "営業部",
    debitTax: "課税売上10%",
    debitAmount: "550,000",
    creditAccount: "売上高",
    creditSub: "",
    creditDept: "営業部",
    creditTax: "課税売上10%",
    creditAmount: "550,000",
    summary: "製品販売 A-100型",
  },
  {
    id: 11,
    date: "04/25",
    debitAccount: "法定福利費",
    debitSub: "",
    debitDept: "全社",
    debitTax: "対象外",
    debitAmount: "385,000",
    creditAccount: "普通預金",
    creditSub: "三井住友銀行",
    creditDept: "",
    creditTax: "対象外",
    creditAmount: "385,000",
    summary: "社会保険料 事業主負担分",
  },
  {
    id: 12,
    date: "04/28",
    debitAccount: "租税公課",
    debitSub: "",
    debitDept: "全社",
    debitTax: "対象外",
    debitAmount: "120,000",
    creditAccount: "普通預金",
    creditSub: "みずほ銀行",
    creditDept: "",
    creditTax: "対象外",
    creditAmount: "120,000",
    summary: "固定資産税 第1期分",
  },
];

const COLUMNS_DEBIT = [
  {
    key: "date",
    label: "日付",
    width: 56,
    align: "center" as const,
  },
  {
    key: "debitAccount",
    label: "借方勘定科目",
    width: 110,
    align: "left" as const,
    isAccount: true,
  },
  {
    key: "debitSub",
    label: "借方補助",
    width: 90,
    align: "left" as const,
  },
  {
    key: "debitDept",
    label: "部門",
    width: 64,
    align: "left" as const,
  },
  {
    key: "debitTax",
    label: "税区分",
    width: 90,
    align: "left" as const,
  },
  {
    key: "debitAmount",
    label: "借方金額",
    width: 100,
    align: "right" as const,
  },
  {
    key: "summary",
    label: "摘要",
    width: 0,
    align: "left" as const,
  },
];

const COLUMNS_CREDIT = [
  {
    key: "date",
    label: "",
    width: 56,
    align: "center" as const,
  },
  {
    key: "creditAccount",
    label: "貸方勘定科目",
    width: 110,
    align: "left" as const,
    isAccount: true,
  },
  {
    key: "creditSub",
    label: "貸方補助",
    width: 90,
    align: "left" as const,
  },
  {
    key: "creditDept",
    label: "部門",
    width: 64,
    align: "left" as const,
  },
  {
    key: "creditTax",
    label: "税区分",
    width: 90,
    align: "left" as const,
  },
  {
    key: "creditAmount",
    label: "貸方金額",
    width: 100,
    align: "right" as const,
  },
  {
    key: "summary",
    label: "",
    width: 0,
    align: "left" as const,
  },
];

type CellId = {
  row: number;
  col: number;
  line: "debit" | "credit";
};

export function TransferSlip() {
  const [rows, setRows] = useState<SlipRow[]>(INITIAL_ROWS);
  const [focusedCell, setFocusedCell] = useState<CellId | null>(
    null,
  );
  const [editingCell, setEditingCell] = useState<CellId | null>(
    null,
  );
  const [editValue, setEditValue] = useState("");
  const [selectedRow, setSelectedRow] = useState<number | null>(
    null,
  );
  const [accountPopup, setAccountPopup] = useState<{
    isOpen: boolean;
    cellId: CellId | null;
    anchorRect: { top: number; left: number } | null;
  }>({ isOpen: false, cellId: null, anchorRect: null });

  const editInputRef = useRef<HTMLInputElement>(null);
  const tableRef = useRef<HTMLTableElement>(null);

  // Helper: get columns for a given line
  const getColumns = (line: "debit" | "credit") =>
    line === "debit" ? COLUMNS_DEBIT : COLUMNS_CREDIT;

  // Helper: get the field key for a cell
  const getCellKey = (cellId: CellId): string => {
    const cols = getColumns(cellId.line);
    return cols[cellId.col]?.key || "";
  };

  // Helper: check if a column is an account column
  const isAccountColumn = (cellId: CellId): boolean => {
    const cols = getColumns(cellId.line);
    return !!(cols[cellId.col] as any)?.isAccount;
  };

  // Start editing a cell
  const startEditing = useCallback(
    (cellId: CellId) => {
      const key = getCellKey(cellId);
      const value = (rows[cellId.row] as any)[key] || "";
      setEditingCell(cellId);
      setEditValue(value);
      setTimeout(() => editInputRef.current?.focus(), 10);
    },
    [rows],
  );

  // Commit edit
  const commitEdit = useCallback(() => {
    if (!editingCell) return;
    const key = getCellKey(editingCell);
    setRows((prev) => {
      const newRows = [...prev];
      newRows[editingCell.row] = {
        ...newRows[editingCell.row],
        [key]: editValue,
      };
      return newRows;
    });
    setEditingCell(null);
    setEditValue("");
  }, [editingCell, editValue]);

  // Cancel edit
  const cancelEdit = useCallback(() => {
    setEditingCell(null);
    setEditValue("");
  }, []);

  // Navigate to next cell
  const navigateCell = useCallback(
    (direction: "right" | "left" | "down" | "up") => {
      if (!focusedCell) return;
      const { row, col, line } = focusedCell;
      const cols = getColumns(line);
      let newRow = row;
      let newCol = col;
      let newLine = line;

      if (direction === "right") {
        if (newCol < cols.length - 1) {
          newCol++;
        } else if (newLine === "debit") {
          newLine = "credit";
          newCol = 0;
        } else if (newRow < rows.length - 1) {
          newRow++;
          newLine = "debit";
          newCol = 0;
        }
      } else if (direction === "left") {
        if (newCol > 0) {
          newCol--;
        } else if (newLine === "credit") {
          newLine = "debit";
          newCol = cols.length - 1;
        } else if (newRow > 0) {
          newRow--;
          newLine = "credit";
          newCol = cols.length - 1;
        }
      } else if (direction === "down") {
        if (newLine === "debit") {
          newLine = "credit";
        } else if (newRow < rows.length - 1) {
          newRow++;
          newLine = "debit";
        }
      } else if (direction === "up") {
        if (newLine === "credit") {
          newLine = "debit";
        } else if (newRow > 0) {
          newRow--;
          newLine = "credit";
        }
      }

      setFocusedCell({
        row: newRow,
        col: newCol,
        line: newLine,
      });
      setSelectedRow(newRow);
    },
    [focusedCell, rows.length],
  );

  // Open account search popup
  const openAccountSearch = useCallback(
    (cellId: CellId, anchorEl?: HTMLElement) => {
      let rect = { top: 200, left: 300 };
      if (anchorEl) {
        const r = anchorEl.getBoundingClientRect();
        rect = { top: r.bottom + 2, left: r.left };
      }
      setAccountPopup({
        isOpen: true,
        cellId,
        anchorRect: rect,
      });
    },
    [],
  );

  // Handle account selection from popup
  const handleAccountSelect = useCallback(
    (account: AccountItem) => {
      if (!accountPopup.cellId) return;
      const cellId = accountPopup.cellId;
      const key = getCellKey(cellId);
      // Also auto-fill tax type
      const taxKey = key.replace("Account", "Tax");
      setRows((prev) => {
        const newRows = [...prev];
        newRows[cellId.row] = {
          ...newRows[cellId.row],
          [key]: account.name,
          ...(taxKey !== key
            ? { [taxKey]: account.taxType }
            : {}),
        };
        return newRows;
      });
      setAccountPopup({
        isOpen: false,
        cellId: null,
        anchorRect: null,
      });
      // Move focus to next cell
      if (focusedCell) {
        navigateCell("right");
      }
    },
    [accountPopup.cellId, focusedCell, navigateCell],
  );

  // Global keyboard handler for the table
  const handleTableKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      // F4 - Open account search
      if (e.key === "F4" && focusedCell) {
        e.preventDefault();
        if (isAccountColumn(focusedCell)) {
          const cellEl = document.querySelector(
            `[data-cell="${focusedCell.row}-${focusedCell.col}-${focusedCell.line}"]`,
          ) as HTMLElement;
          openAccountSearch(focusedCell, cellEl || undefined);
        }
        return;
      }

      // If editing
      if (editingCell) {
        if (e.key === "Enter" || e.key === "Tab") {
          e.preventDefault();
          commitEdit();
          if (e.key === "Tab") {
            navigateCell(e.shiftKey ? "left" : "right");
          } else {
            navigateCell("down");
          }
        } else if (e.key === "Escape") {
          e.preventDefault();
          cancelEdit();
        }
        return;
      }

      // If not editing
      if (e.key === "Tab") {
        e.preventDefault();
        navigateCell(e.shiftKey ? "left" : "right");
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        navigateCell("right");
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        navigateCell("left");
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        navigateCell("down");
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        navigateCell("up");
      } else if (e.key === "Enter" || e.key === "F2") {
        e.preventDefault();
        if (focusedCell) {
          startEditing(focusedCell);
        }
      } else if (
        e.key.length === 1 &&
        !e.ctrlKey &&
        !e.altKey &&
        !e.metaKey &&
        focusedCell
      ) {
        // Direct typing starts editing
        const key = getCellKey(focusedCell);
        setEditingCell(focusedCell);
        setEditValue(e.key);
        setTimeout(() => editInputRef.current?.focus(), 10);
      }
    },
    [
      focusedCell,
      editingCell,
      commitEdit,
      cancelEdit,
      navigateCell,
      startEditing,
      openAccountSearch,
    ],
  );

  const handleCellClick = (
    rowIdx: number,
    colIdx: number,
    line: "debit" | "credit",
  ) => {
    // Commit any current edit
    if (editingCell) commitEdit();
    const cellId = { row: rowIdx, col: colIdx, line };
    setFocusedCell(cellId);
    setSelectedRow(rowIdx);
  };

  const handleCellDoubleClick = (
    rowIdx: number,
    colIdx: number,
    line: "debit" | "credit",
  ) => {
    const cellId = { row: rowIdx, col: colIdx, line };
    setFocusedCell(cellId);
    setSelectedRow(rowIdx);
    // If account column, open popup; otherwise start editing
    if (isAccountColumn(cellId)) {
      const cellEl = document.querySelector(
        `[data-cell="${rowIdx}-${colIdx}-${line}"]`,
      ) as HTMLElement;
      openAccountSearch(cellId, cellEl || undefined);
    } else {
      startEditing(cellId);
    }
  };

  const isFocused = (
    rowIdx: number,
    colIdx: number,
    line: "debit" | "credit",
  ) =>
    focusedCell?.row === rowIdx &&
    focusedCell?.col === colIdx &&
    focusedCell?.line === line;

  const isEditing = (
    rowIdx: number,
    colIdx: number,
    line: "debit" | "credit",
  ) =>
    editingCell?.row === rowIdx &&
    editingCell?.col === colIdx &&
    editingCell?.line === line;

  const renderCell = (
    row: SlipRow,
    rowIdx: number,
    col: (typeof COLUMNS_DEBIT)[0] & { isAccount?: boolean },
    colIdx: number,
    line: "debit" | "credit",
    bg: string,
  ) => {
    const value = (row as any)[col.key] || "";
    const focused = isFocused(rowIdx, colIdx, line);
    const editing = isEditing(rowIdx, colIdx, line);
    const isAmount = col.key.includes("Amount");
    const isAcct = !!col.isAccount;

    return (
      <td
        key={`${col.key}-${line}`}
        data-cell={`${rowIdx}-${colIdx}-${line}`}
        className="relative"
        style={{
          width: col.width || undefined,
          minWidth: col.width || 120,
          maxWidth: col.width || undefined,
          padding: 0,
          backgroundColor: focused ? "#fff" : bg,
          textAlign: col.align,
          borderRight: "1px solid #d4d4d4",
          borderBottom: "1px solid #d4d4d4",
          cursor: "text",
          outline: focused ? "2px solid #005BAC" : "none",
          outlineOffset: "-2px",
          zIndex: focused ? 2 : 1,
          fontSize: 12,
          fontVariantNumeric: isAmount
            ? "tabular-nums"
            : undefined,
          position: "relative",
        }}
        onClick={() => handleCellClick(rowIdx, colIdx, line)}
        onDoubleClick={() =>
          handleCellDoubleClick(rowIdx, colIdx, line)
        }
      >
        {editing ? (
          <input
            ref={editInputRef}
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              outline: "none",
              padding: "2px 6px",
              fontSize: 12,
              textAlign: col.align,
              backgroundColor: "#fffff0",
              fontVariantNumeric: isAmount
                ? "tabular-nums"
                : undefined,
              fontFamily: "'Noto Sans JP', sans-serif",
            }}
          />
        ) : (
          <div
            className="flex items-center"
            style={{
              padding: "2px 6px",
              justifyContent:
                col.align === "right"
                  ? "flex-end"
                  : col.align === "center"
                    ? "center"
                    : "flex-start",
            }}
          >
            <span className="truncate">{value}</span>
            {focused && isAcct && (
              <span
                style={{
                  marginLeft: 4,
                  fontSize: 9,
                  color: "#005BAC",
                  opacity: 0.7,
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                F4
              </span>
            )}
          </div>
        )}
      </td>
    );
  };

  // Totals
  const totalDebit = rows.reduce((sum, r) => {
    const n = parseInt(r.debitAmount.replace(/,/g, ""), 10);
    return sum + (isNaN(n) ? 0 : n);
  }, 0);
  const totalCredit = rows.reduce((sum, r) => {
    const n = parseInt(r.creditAmount.replace(/,/g, ""), 10);
    return sum + (isNaN(n) ? 0 : n);
  }, 0);

  return (
    <div
      className="flex flex-col h-full"
      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
    >
      {/* Title bar */}
      <div
        className="flex items-center justify-between px-2"
        style={{
          height: 26,
          backgroundColor: "#005BAC",
          color: "#fff",
          fontSize: 12,
          flexShrink: 0,
        }}
      >
        <span>振替伝票 — 入力</span>
        <div
          className="flex items-center gap-3"
          style={{ fontSize: 11 }}
        >
          <span style={{ opacity: 0.7 }}>
            ダブルクリック or Enter:編集 | F4:科目検索 |
            Tab:次のセル | Esc:取消
          </span>
          <span>伝票No. 自動 ｜ 令和7年度</span>
        </div>
      </div>

      {/* Grid */}
      <div
        className="flex-1 overflow-auto"
        tabIndex={0}
        onKeyDown={handleTableKeyDown}
        style={{ outline: "none" }}
      >
        <table
          ref={tableRef}
          className="w-full"
          style={{
            borderCollapse: "collapse",
            fontSize: 12,
            tableLayout: "fixed",
          }}
        >
          {/* Header */}
          <thead>
            <tr style={{ backgroundColor: "#d0dce8" }}>
              <th
                style={{
                  width: 28,
                  padding: "3px 0",
                  borderRight: "1px solid #b0b0b0",
                  borderBottom: "2px solid #005BAC",
                  fontSize: 10,
                  color: "#555",
                }}
              >
                No
              </th>
              {COLUMNS_DEBIT.map((col) => (
                <th
                  key={col.key}
                  style={{
                    width: col.width || undefined,
                    minWidth: col.width || 120,
                    padding: "3px 6px",
                    borderRight: "1px solid #b0b0b0",
                    borderBottom: "2px solid #005BAC",
                    textAlign: "center",
                    fontSize: 11,
                    color: "#333",
                  }}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          {rows.map((row, rIdx) => (
            <tbody key={row.id}>
              {/* Debit row (upper) */}
              <tr
                style={{
                  backgroundColor:
                    selectedRow === rIdx
                      ? "#e0ecf8"
                      : undefined,
                }}
              >
                <td
                  rowSpan={2}
                  style={{
                    width: 28,
                    textAlign: "center",
                    fontSize: 10,
                    color: "#888",
                    borderRight: "1px solid #d4d4d4",
                    borderBottom: "1px solid #d4d4d4",
                    backgroundColor:
                      selectedRow === rIdx
                        ? "#cde0f4"
                        : "#f5f5f5",
                    verticalAlign: "middle",
                  }}
                >
                  {rIdx + 1}
                </td>
                {COLUMNS_DEBIT.map((col, cIdx) =>
                  renderCell(
                    row,
                    rIdx,
                    col,
                    cIdx,
                    "debit",
                    "#F0F8FF",
                  ),
                )}
              </tr>
              {/* Credit row (lower) */}
              <tr
                style={{
                  backgroundColor:
                    selectedRow === rIdx
                      ? "#f8e8ec"
                      : undefined,
                }}
              >
                {COLUMNS_CREDIT.map((col, cIdx) =>
                  renderCell(
                    row,
                    rIdx,
                    col,
                    cIdx,
                    "credit",
                    "#FFF0F5",
                  ),
                )}
              </tr>
            </tbody>
          ))}
        </table>
      </div>

      {/* Footer totals */}
      <div
        className="flex items-center justify-between px-2"
        style={{
          height: 28,
          backgroundColor: "#e8e8e8",
          borderTop: "2px solid #005BAC",
          fontSize: 12,
          flexShrink: 0,
        }}
      >
        <span style={{ color: "#555" }}>
          仕訳数: {rows.length}件
        </span>
        <div className="flex items-center gap-6">
          <span>
            借方合計:{" "}
            <span
              style={{
                color: "#005BAC",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              ¥{totalDebit.toLocaleString()}
            </span>
          </span>
          <span>
            {"\u8CB8\u65B9\u5408\u8A08: "}
            <span
              style={{
                color: "#c0392b",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              ¥{totalCredit.toLocaleString()}
            </span>
          </span>
          <span
            style={{
              color:
                totalDebit === totalCredit
                  ? "#27ae60"
                  : "#e74c3c",
            }}
          >
            {totalDebit === totalCredit
              ? "\u2713 \u8CB8\u501F\u4E00\u81F4"
              : "\u2717 \u8CB8\u501F\u4E0D\u4E00\u81F4"}
          </span>
        </div>
      </div>

      {/* Account Search Popup */}
      <AccountSearchPopup
        isOpen={accountPopup.isOpen}
        onClose={() =>
          setAccountPopup({
            isOpen: false,
            cellId: null,
            anchorRect: null,
          })
        }
        onSelect={handleAccountSelect}
        anchorRect={accountPopup.anchorRect}
        initialQuery=""
      />
    </div>
  );
}