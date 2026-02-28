import { useState } from "react";

interface LedgerEntry {
  id: number;
  date: string;
  counterAccount: string;
  summary: string;
  debit: number | null;
  credit: number | null;
}

const MOCK_ENTRIES: LedgerEntry[] = [
  { id: 0, date: "", counterAccount: "", summary: "前月繰越", debit: null, credit: null },
  { id: 1, date: "04/01", counterAccount: "現金", summary: "東京出張 新幹線代", debit: null, credit: 15400 },
  { id: 2, date: "04/03", counterAccount: "消耗品費", summary: "コピー用紙・トナー", debit: null, credit: 8800 },
  { id: 3, date: "04/07", counterAccount: "買掛金", summary: "原材料仕入 4月分", debit: null, credit: 275000 },
  { id: 4, date: "04/10", counterAccount: "給与手当", summary: "4月分給与支払", debit: null, credit: 2450000 },
  { id: 5, date: "04/12", counterAccount: "通信費", summary: "インターネット・電話料金 4月分", debit: null, credit: 44000 },
  { id: 6, date: "04/15", counterAccount: "地代家賃", summary: "事務所家賃 5月分", debit: null, credit: 330000 },
  { id: 7, date: "04/18", counterAccount: "売掛金", summary: "売掛金回収 3月分", debit: 1100000, credit: null },
  { id: 8, date: "04/20", counterAccount: "水道光熱費", summary: "電気料金 4月分", debit: null, credit: 67200 },
  { id: 9, date: "04/22", counterAccount: "売上高", summary: "製品販売 A-100型", debit: 550000, credit: null },
  { id: 10, date: "04/25", counterAccount: "法定福利費", summary: "社会保険料 事業主負担分", debit: null, credit: 385000 },
  { id: 11, date: "04/28", counterAccount: "租税公課", summary: "固定資産税 第1期分", debit: null, credit: 120000 },
  { id: 12, date: "04/28", counterAccount: "売掛金", summary: "売掛金回収 ㈱田中製作所", debit: 880000, credit: null },
  { id: 13, date: "04/30", counterAccount: "受取利息", summary: "普通預金利息 4月分", debit: 1250, credit: null },
  { id: 14, date: "04/30", counterAccount: "支払手数料", summary: "振込手数料 4月分", debit: null, credit: 3300 },
];

const OPENING_BALANCE = 5_800_000;

function fmt(n: number | null): string {
  if (n === null || n === 0) return "";
  return n.toLocaleString();
}

export function SubsidiaryLedger() {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [selectedAccount, setSelectedAccount] = useState("普通預金");
  const [selectedSub, setSelectedSub] = useState("みずほ銀行");

  // Compute running balances
  let balance = OPENING_BALANCE;
  const entriesWithBalance = MOCK_ENTRIES.map((entry, idx) => {
    if (idx === 0) {
      return { ...entry, balance: OPENING_BALANCE };
    }
    balance += (entry.debit || 0) - (entry.credit || 0);
    return { ...entry, balance };
  });

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
        }}
      >
        <span>補助元帳</span>
        <span style={{ fontSize: 11 }}>令和7年4月 ｜ 令和7年度</span>
      </div>

      {/* Account selector */}
      <div
        className="flex items-center gap-3 px-2"
        style={{
          height: 30,
          backgroundColor: "#f5f5f5",
          borderBottom: "1px solid #c0c0c0",
          fontSize: 12,
        }}
      >
        <span style={{ color: "#555" }}>勘定科目:</span>
        <select
          value={selectedAccount}
          onChange={(e) => setSelectedAccount(e.target.value)}
          style={{
            fontSize: 12,
            padding: "1px 4px",
            border: "1px solid #b0b0b0",
            backgroundColor: "#fff",
            borderRadius: 2,
          }}
        >
          <option>普通預金</option>
          <option>現金</option>
          <option>売掛金</option>
          <option>買掛金</option>
        </select>
        <span style={{ color: "#555" }}>補助科目:</span>
        <select
          value={selectedSub}
          onChange={(e) => setSelectedSub(e.target.value)}
          style={{
            fontSize: 12,
            padding: "1px 4px",
            border: "1px solid #b0b0b0",
            backgroundColor: "#fff",
            borderRadius: 2,
          }}
        >
          <option>みずほ銀行</option>
          <option>三井住友銀行</option>
          <option>三菱UFJ銀行</option>
        </select>
        <div style={{ marginLeft: "auto", color: "#555" }}>
          期間:
          <input
            type="text"
            defaultValue="04/01"
            style={{
              width: 52,
              fontSize: 12,
              padding: "1px 4px",
              border: "1px solid #b0b0b0",
              textAlign: "center",
              marginLeft: 4,
              borderRadius: 2,
            }}
          />
          ～
          <input
            type="text"
            defaultValue="04/30"
            style={{
              width: 52,
              fontSize: 12,
              padding: "1px 4px",
              border: "1px solid #b0b0b0",
              textAlign: "center",
              borderRadius: 2,
            }}
          />
        </div>
      </div>

      {/* Grid */}
      <div className="flex-1 overflow-auto">
        <table
          className="w-full"
          style={{
            borderCollapse: "collapse",
            fontSize: 12,
            tableLayout: "fixed",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#d0dce8" }}>
              {[
                { label: "日付", width: 60 },
                { label: "相手勘定科目", width: 120 },
                { label: "摘要", width: 0 },
                { label: "借方金額", width: 110 },
                { label: "貸方金額", width: 110 },
                { label: "残高", width: 120 },
              ].map((col) => (
                <th
                  key={col.label}
                  style={{
                    width: col.width || undefined,
                    minWidth: col.width || 160,
                    padding: "4px 6px",
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
          <tbody>
            {entriesWithBalance.map((entry, idx) => {
              const isSelected = selectedRow === idx;
              const isNegative = entry.balance < 0;
              const isOpening = idx === 0;
              return (
                <tr
                  key={entry.id}
                  style={{
                    backgroundColor: isSelected
                      ? "#e0ecf8"
                      : idx % 2 === 0
                      ? "#fff"
                      : "#fafafa",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedRow(idx)}
                >
                  <td
                    style={{
                      padding: "3px 6px",
                      textAlign: "center",
                      borderRight: "1px solid #e0e0e0",
                      borderBottom: "1px solid #e0e0e0",
                      color: isOpening ? "#888" : "#333",
                    }}
                  >
                    {entry.date}
                  </td>
                  <td
                    style={{
                      padding: "3px 6px",
                      borderRight: "1px solid #e0e0e0",
                      borderBottom: "1px solid #e0e0e0",
                      color: isOpening ? "#888" : "#333",
                    }}
                  >
                    {entry.counterAccount}
                  </td>
                  <td
                    style={{
                      padding: "3px 6px",
                      borderRight: "1px solid #e0e0e0",
                      borderBottom: "1px solid #e0e0e0",
                      color: isOpening ? "#888" : "#333",
                    }}
                  >
                    {entry.summary}
                  </td>
                  <td
                    style={{
                      padding: "3px 6px",
                      textAlign: "right",
                      borderRight: "1px solid #e0e0e0",
                      borderBottom: "1px solid #e0e0e0",
                      fontVariantNumeric: "tabular-nums",
                      color: entry.debit ? "#005BAC" : "#ccc",
                    }}
                  >
                    {fmt(entry.debit)}
                  </td>
                  <td
                    style={{
                      padding: "3px 6px",
                      textAlign: "right",
                      borderRight: "1px solid #e0e0e0",
                      borderBottom: "1px solid #e0e0e0",
                      fontVariantNumeric: "tabular-nums",
                      color: entry.credit ? "#c0392b" : "#ccc",
                    }}
                  >
                    {fmt(entry.credit)}
                  </td>
                  <td
                    style={{
                      padding: "3px 6px",
                      textAlign: "right",
                      borderBottom: "1px solid #e0e0e0",
                      fontVariantNumeric: "tabular-nums",
                      color: isNegative ? "#e74c3c" : "#222",
                      backgroundColor: isNegative
                        ? "#fff5f5"
                        : "transparent",
                    }}
                  >
                    {isNegative && "△"}
                    {Math.abs(entry.balance).toLocaleString()}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-between px-2"
        style={{
          height: 28,
          backgroundColor: "#e8e8e8",
          borderTop: "2px solid #005BAC",
          fontSize: 12,
        }}
      >
        <span style={{ color: "#555" }}>
          {selectedAccount}（{selectedSub}） 件数:{" "}
          {entriesWithBalance.length - 1}件
        </span>
        <div className="flex items-center gap-6">
          <span>
            借方合計:{" "}
            <span style={{ color: "#005BAC", fontVariantNumeric: "tabular-nums" }}>
              ¥
              {entriesWithBalance
                .reduce((s, e) => s + (e.debit || 0), 0)
                .toLocaleString()}
            </span>
          </span>
          <span>
            貸方合計:{" "}
            <span style={{ color: "#c0392b", fontVariantNumeric: "tabular-nums" }}>
              ¥
              {entriesWithBalance
                .reduce((s, e) => s + (e.credit || 0), 0)
                .toLocaleString()}
            </span>
          </span>
          <span>
            残高:{" "}
            <span
              style={{
                fontVariantNumeric: "tabular-nums",
                color:
                  entriesWithBalance[entriesWithBalance.length - 1].balance < 0
                    ? "#e74c3c"
                    : "#27ae60",
              }}
            >
              ¥
              {Math.abs(
                entriesWithBalance[entriesWithBalance.length - 1].balance
              ).toLocaleString()}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
