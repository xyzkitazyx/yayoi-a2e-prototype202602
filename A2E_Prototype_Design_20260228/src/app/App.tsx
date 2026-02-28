import { useState, useEffect, useCallback } from "react";
import { Sidebar } from "./components/Sidebar";
import { MenuBar } from "./components/MenuBar";
import { Toolbar } from "./components/Toolbar";
import { StatusBar } from "./components/StatusBar";
import { TransferSlip } from "./components/TransferSlip";
import { SubsidiaryLedger } from "./components/SubsidiaryLedger";
import { Dashboard } from "./components/Dashboard";

function PlaceholderView({ title }: { title: string }) {
  return (
    <div
      className="flex flex-col h-full"
      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
    >
      <div
        className="flex items-center px-2"
        style={{
          height: 26,
          backgroundColor: "#005BAC",
          color: "#fff",
          fontSize: 12,
        }}
      >
        {title}
      </div>
      <div
        className="flex-1 flex items-center justify-center"
        style={{ backgroundColor: "#f8f8f8", color: "#999", fontSize: 13 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span style={{ fontSize: 32, opacity: 0.3 }}>📋</span>
          <span>{title} — 実装準備中</span>
          <span style={{ fontSize: 11 }}>
            振替伝票・補助元帳画面をご覧ください
          </span>
        </div>
      </div>
    </div>
  );
}

const VIEW_TITLES: Record<string, string> = {
  dashboard: "ダッシュボード",
  "transfer-slip": "振替伝票",
  journal: "仕訳日記帳",
  "subsidiary-ledger": "補助元帳",
  "general-ledger": "総勘定元帳",
  "trial-balance": "残高試算表",
  settings: "事業所設定",
  help: "ヘルプ",
};

export default function App() {
  const [activeView, setActiveView] = useState("dashboard");

  // Keyboard shortcut handler
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      // Prevent default for function keys in our context
      if (e.key === "F12" || e.key === "F11" || e.key === "F10") {
        e.preventDefault();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const renderView = useCallback(() => {
    switch (activeView) {
      case "dashboard":
        return <Dashboard onNavigate={setActiveView} />;
      case "transfer-slip":
        return <TransferSlip />;
      case "subsidiary-ledger":
        return <SubsidiaryLedger />;
      default:
        return (
          <PlaceholderView
            title={VIEW_TITLES[activeView] || activeView}
          />
        );
    }
  }, [activeView]);

  return (
    <div
      className="flex h-screen w-screen overflow-hidden"
      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
    >
      {/* A: Left Sidebar */}
      <Sidebar activeView={activeView} onViewChange={setActiveView} />

      {/* B: Main Work Area */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Menu bar */}
        <MenuBar />

        {/* Toolbar */}
        <Toolbar />

        {/* Tab bar showing open views */}
        <div
          className="flex items-end gap-0"
          style={{
            height: 28,
            backgroundColor: "#d8d8d8",
            paddingLeft: 4,
            borderBottom: "1px solid #b0b0b0",
            flexShrink: 0,
          }}
        >
          {["dashboard", "transfer-slip", "subsidiary-ledger"].map(
            (viewId) => {
              const isActive = activeView === viewId;
              return (
                <div
                  key={viewId}
                  className="flex items-center gap-1 cursor-pointer"
                  style={{
                    padding: "4px 12px 4px 12px",
                    fontSize: 11,
                    backgroundColor: isActive ? "#fff" : "#e0e0e0",
                    borderTop: isActive
                      ? "2px solid #005BAC"
                      : "1px solid #c0c0c0",
                    borderLeft: "1px solid #c0c0c0",
                    borderRight: "1px solid #c0c0c0",
                    borderBottom: isActive ? "1px solid #fff" : "none",
                    marginBottom: isActive ? -1 : 0,
                    color: isActive ? "#005BAC" : "#666",
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                    userSelect: "none",
                    position: "relative",
                    zIndex: isActive ? 2 : 1,
                  }}
                  onClick={() => setActiveView(viewId)}
                >
                  {VIEW_TITLES[viewId]}
                  {viewId !== "dashboard" && (
                    <span
                      style={{
                        marginLeft: 6,
                        fontSize: 10,
                        color: "#999",
                        lineHeight: 1,
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        // close tab logic (placeholder)
                      }}
                    >
                      ×
                    </span>
                  )}
                </div>
              );
            }
          )}
        </div>

        {/* Main content */}
        <div className="flex-1 min-h-0 overflow-hidden">{renderView()}</div>

        {/* Status bar */}
        <StatusBar />
      </div>
    </div>
  );
}