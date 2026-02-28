import {
  Save,
  XCircle,
  Search,
  Trash2,
  Plus,
  Minus,
  Eye,
  BookOpen,
  Printer,
  RotateCcw,
} from "lucide-react";

interface ToolbarButton {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  shortcut: string;
  disabled?: boolean;
}

const toolbarButtons: ToolbarButton[] = [
  { icon: Save, label: "登録", shortcut: "F12" },
  { icon: XCircle, label: "取消", shortcut: "F11" },
  { icon: Search, label: "検索", shortcut: "F10" },
  { icon: Trash2, label: "削除", shortcut: "F9" },
  { icon: Plus, label: "行挿入", shortcut: "F8" },
  { icon: Minus, label: "行削除", shortcut: "F7" },
  { icon: Eye, label: "参照", shortcut: "F4" },
  { icon: BookOpen, label: "辞書", shortcut: "F3" },
  { icon: Printer, label: "印刷", shortcut: "Ctrl+P" },
  { icon: RotateCcw, label: "更新", shortcut: "F5" },
];

export function Toolbar() {
  return (
    <div
      className="flex items-center gap-0.5 px-1"
      style={{
        height: 36,
        backgroundColor: "#e8e8e8",
        borderBottom: "1px solid #c0c0c0",
        fontFamily: "'Noto Sans JP', sans-serif",
        userSelect: "none",
        flexShrink: 0,
      }}
    >
      {toolbarButtons.map((btn, idx) => (
        <button
          key={btn.label}
          className="flex items-center gap-1 cursor-pointer rounded-sm"
          style={{
            padding: "2px 8px",
            height: 28,
            border: "1px solid transparent",
            backgroundColor: "transparent",
            fontSize: 11,
            color: btn.disabled ? "#999" : "#333",
            whiteSpace: "nowrap",
            transition: "all 0.05s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#fff";
            e.currentTarget.style.borderColor = "#b0b0b0";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.borderColor = "transparent";
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.backgroundColor = "#d0d8e8";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.backgroundColor = "#fff";
          }}
          title={`${btn.label} (${btn.shortcut})`}
        >
          <btn.icon size={14} />
          <span>
            {btn.label}
            <span style={{ fontSize: 10, color: "#666", marginLeft: 2 }}>
              ({btn.shortcut})
            </span>
          </span>
        </button>
      ))}
      {/* separator */}
      <div
        style={{
          width: 1,
          height: 20,
          backgroundColor: "#c0c0c0",
          margin: "0 4px",
        }}
      />
      {/* Date display */}
      <div
        className="flex items-center gap-1 ml-auto"
        style={{ fontSize: 11, color: "#555" }}
      >
        <span>期間: 令和7年4月1日 ～ 令和8年3月31日</span>
      </div>
    </div>
  );
}