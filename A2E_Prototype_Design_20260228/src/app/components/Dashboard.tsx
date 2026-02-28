import {
  FileText,
  Calculator,
  BookOpen,
  Receipt,
  BarChart3,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
} from "lucide-react";

interface DashboardProps {
  onNavigate: (view: string) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <div
      className="flex flex-col h-full overflow-auto"
      style={{
        fontFamily: "'Noto Sans JP', sans-serif",
        backgroundColor: "#f5f6f8",
      }}
    >
      {/* Title */}
      <div
        className="flex items-center justify-between px-3"
        style={{
          height: 30,
          backgroundColor: "#005BAC",
          color: "#fff",
          fontSize: 12,
        }}
      >
        <span>ダッシュボード — 株式会社サンプル</span>
        <span style={{ fontSize: 11 }}>令和7年度 (2025/04/01 ～ 2026/03/31)</span>
      </div>

      <div className="p-3 flex flex-col gap-3">
        {/* Summary cards */}
        <div className="grid grid-cols-4 gap-2">
          {[
            {
              label: "当月売上高",
              value: "¥3,520,000",
              change: "+12.3%",
              icon: TrendingUp,
              color: "#005BAC",
              changeBg: "#e8f4fd",
            },
            {
              label: "当月仕入高",
              value: "¥1,875,000",
              change: "-3.1%",
              icon: TrendingDown,
              color: "#27ae60",
              changeBg: "#e8fce8",
            },
            {
              label: "当月経費",
              value: "¥4,327,200",
              change: "+5.7%",
              icon: AlertTriangle,
              color: "#e67e22",
              changeBg: "#fef5e7",
            },
            {
              label: "普通預金残高",
              value: "¥4,631,250",
              change: "",
              icon: Calculator,
              color: "#555",
              changeBg: "#f0f0f0",
            },
          ].map((card) => (
            <div
              key={card.label}
              className="flex flex-col rounded"
              style={{
                backgroundColor: "#fff",
                border: "1px solid #e0e0e0",
                padding: "10px 12px",
              }}
            >
              <div
                className="flex items-center justify-between"
                style={{ fontSize: 11, color: "#888" }}
              >
                <span>{card.label}</span>
                <card.icon size={14} color={card.color} />
              </div>
              <div
                style={{
                  fontSize: 18,
                  color: "#222",
                  fontVariantNumeric: "tabular-nums",
                  marginTop: 4,
                }}
              >
                {card.value}
              </div>
              {card.change && (
                <div
                  className="inline-flex self-start rounded px-1 mt-1"
                  style={{
                    fontSize: 10,
                    backgroundColor: card.changeBg,
                    color: card.color,
                  }}
                >
                  前月比 {card.change}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick access */}
        <div
          className="rounded"
          style={{
            backgroundColor: "#fff",
            border: "1px solid #e0e0e0",
            padding: "10px 12px",
          }}
        >
          <div style={{ fontSize: 12, color: "#555", marginBottom: 8 }}>
            クイックアクセス
          </div>
          <div className="grid grid-cols-5 gap-2">
            {[
              { id: "transfer-slip", icon: FileText, label: "振替伝票", desc: "仕訳入力" },
              { id: "subsidiary-ledger", icon: Calculator, label: "補助元帳", desc: "残高確認" },
              { id: "journal", icon: BookOpen, label: "仕訳日記帳", desc: "仕訳一覧" },
              { id: "general-ledger", icon: Receipt, label: "総勘定元帳", desc: "勘定照会" },
              { id: "trial-balance", icon: BarChart3, label: "残高試算表", desc: "集計表" },
            ].map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center gap-1 cursor-pointer rounded py-2"
                style={{
                  border: "1px solid #e8e8e8",
                  fontSize: 11,
                  transition: "all 0.1s",
                }}
                onClick={() => onNavigate(item.id)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#005BAC";
                  e.currentTarget.style.backgroundColor = "#f0f7ff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e8e8e8";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <item.icon size={20} color="#005BAC" />
                <span style={{ color: "#333" }}>{item.label}</span>
                <span style={{ fontSize: 10, color: "#999" }}>{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent transactions */}
        <div
          className="rounded"
          style={{
            backgroundColor: "#fff",
            border: "1px solid #e0e0e0",
            padding: "10px 12px",
          }}
        >
          <div
            className="flex items-center justify-between"
            style={{ fontSize: 12, color: "#555", marginBottom: 6 }}
          >
            <span>最近の仕訳（直近5件）</span>
            <span
              className="cursor-pointer"
              style={{ color: "#005BAC", fontSize: 11 }}
              onClick={() => onNavigate("transfer-slip")}
            >
              すべて表示 →
            </span>
          </div>
          <table
            className="w-full"
            style={{ borderCollapse: "collapse", fontSize: 11 }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f5f5f5" }}>
                {["日付", "借方科目", "貸方科目", "金額", "摘要"].map(
                  (h) => (
                    <th
                      key={h}
                      style={{
                        padding: "4px 6px",
                        borderBottom: "1px solid #e0e0e0",
                        textAlign: h === "金額" ? "right" : "left",
                        color: "#666",
                      }}
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {[
                ["04/28", "租税公課", "普通預金", "120,000", "固定資産税 第1期分"],
                ["04/28", "普通預金", "売掛金", "880,000", "売掛金回収 ㈱田中製作所"],
                ["04/25", "法定福利費", "普通預金", "385,000", "社会保険料 事業主負担分"],
                ["04/22", "売掛金", "売上高", "550,000", "製品販売 A-100型"],
                ["04/20", "水道光熱費", "普通預金", "67,200", "電気料金 4月分"],
              ].map((row, i) => (
                <tr
                  key={i}
                  style={{
                    borderBottom: "1px solid #f0f0f0",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#f8f9fb")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                >
                  <td style={{ padding: "4px 6px" }}>{row[0]}</td>
                  <td style={{ padding: "4px 6px" }}>{row[1]}</td>
                  <td style={{ padding: "4px 6px" }}>{row[2]}</td>
                  <td
                    style={{
                      padding: "4px 6px",
                      textAlign: "right",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    ¥{row[3]}
                  </td>
                  <td style={{ padding: "4px 6px", color: "#666" }}>
                    {row[4]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Notifications */}
        <div
          className="rounded"
          style={{
            backgroundColor: "#fff",
            border: "1px solid #e0e0e0",
            padding: "10px 12px",
          }}
        >
          <div style={{ fontSize: 12, color: "#555", marginBottom: 6 }}>
            お知らせ・アラート
          </div>
          <div className="flex flex-col gap-1">
            {[
              {
                type: "warning",
                msg: "消費税の中間申告期限が近づいています（5月末）",
              },
              {
                type: "info",
                msg: "4月度の仕訳入力が完了していません（残り3件）",
              },
              {
                type: "info",
                msg: "弥生会計A2E v0.1 がリリースされました",
              },
            ].map((n, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded px-2 py-1"
                style={{
                  fontSize: 11,
                  backgroundColor:
                    n.type === "warning" ? "#fff8e1" : "#e8f4fd",
                  color: n.type === "warning" ? "#e65100" : "#005BAC",
                  border: `1px solid ${
                    n.type === "warning" ? "#ffe082" : "#bbdefb"
                  }`,
                }}
              >
                <AlertTriangle size={12} />
                {n.msg}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
