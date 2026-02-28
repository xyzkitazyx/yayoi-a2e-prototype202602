import { useState } from "react";
import {
  LayoutDashboard,
  FileText,
  BookOpen,
  Calculator,
  Receipt,
  BarChart3,
  Settings,
  HelpCircle,
  ChevronRight,
  Building2,
} from "lucide-react";

interface SidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

const navGroups = [
  {
    label: "ホーム",
    items: [
      { id: "dashboard", icon: LayoutDashboard, label: "ダッシュボード" },
    ],
  },
  {
    label: "日常業務",
    items: [
      { id: "transfer-slip", icon: FileText, label: "振替伝票" },
      { id: "journal", icon: BookOpen, label: "仕訳日記帳" },
      { id: "subsidiary-ledger", icon: Calculator, label: "補助元帳" },
      { id: "general-ledger", icon: Receipt, label: "総勘定元帳" },
    ],
  },
  {
    label: "集計・分析",
    items: [
      { id: "trial-balance", icon: BarChart3, label: "残高試算表" },
    ],
  },
  {
    label: "設定",
    items: [
      { id: "settings", icon: Settings, label: "事業所設定" },
      { id: "help", icon: HelpCircle, label: "ヘルプ" },
    ],
  },
];

export function Sidebar({ activeView, onViewChange }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className="flex flex-col h-full select-none"
      style={{
        width: collapsed ? 52 : 200,
        minWidth: collapsed ? 52 : 200,
        backgroundColor: "#1a1a2e",
        fontFamily: "'Noto Sans JP', sans-serif",
        transition: "width 0.15s, min-width 0.15s",
      }}
    >
      {/* Logo area */}
      <div
        className="flex items-center gap-2 px-3 py-2.5 cursor-pointer"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        onClick={() => setCollapsed(!collapsed)}
      >
        <div
          className="flex items-center justify-center rounded"
          style={{
            width: 28,
            height: 28,
            backgroundColor: "#005BAC",
            flexShrink: 0,
          }}
        >
          <Building2 size={16} color="#fff" />
        </div>
        {!collapsed && (
          <div className="flex flex-col min-w-0">
            <span
              style={{
                color: "#fff",
                fontSize: 12,
                lineHeight: 1.2,
                whiteSpace: "nowrap",
              }}
            >
              弥生会計 A2E
            </span>
            <span
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: 10,
                lineHeight: 1.2,
              }}
            >
              株式会社サンプル
            </span>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-1">
        {navGroups.map((group) => (
          <div key={group.label} className="mb-1">
            {!collapsed && (
              <div
                className="px-3 py-1"
                style={{
                  fontSize: 10,
                  color: "rgba(255,255,255,0.35)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {group.label}
              </div>
            )}
            {group.items.map((item) => {
              const isActive = activeView === item.id;
              return (
                <div
                  key={item.id}
                  className="flex items-center gap-2 cursor-pointer mx-1 rounded"
                  style={{
                    padding: collapsed ? "6px 0" : "5px 10px",
                    justifyContent: collapsed ? "center" : "flex-start",
                    backgroundColor: isActive
                      ? "rgba(0,91,172,0.35)"
                      : "transparent",
                    color: isActive ? "#fff" : "rgba(255,255,255,0.7)",
                    fontSize: 12,
                    transition: "background-color 0.1s",
                  }}
                  onClick={() => onViewChange(item.id)}
                  onMouseEnter={(e) => {
                    if (!isActive)
                      e.currentTarget.style.backgroundColor =
                        "rgba(255,255,255,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive)
                      e.currentTarget.style.backgroundColor = "transparent";
                  }}
                  title={collapsed ? item.label : undefined}
                >
                  <item.icon size={16} style={{ flexShrink: 0 }} />
                  {!collapsed && (
                    <>
                      <span className="flex-1 truncate">{item.label}</span>
                      {isActive && <ChevronRight size={12} />}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        className="px-3 py-2"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          fontSize: 10,
          color: "rgba(255,255,255,0.3)",
          textAlign: "center",
        }}
      >
        {!collapsed && "A2E Prototype v0.1"}
      </div>
    </div>
  );
}
