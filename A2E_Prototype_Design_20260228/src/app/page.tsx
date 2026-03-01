"use client";

import { useState, useEffect, useCallback } from "react";
import { Sidebar } from "./components/Sidebar";
import { MenuBar } from "./components/MenuBar";
import { Toolbar } from "./components/Toolbar";
import { StatusBar } from "./components/StatusBar";
import { TransferSlip } from "./components/TransferSlip";
import { SubsidiaryLedger } from "./components/SubsidiaryLedger";
import { Dashboard } from "./components/Dashboard";
import { TrialBalance } from "./components/TrialBalance";
import { JournalDiary } from "./components/JournalDiary";
import { GeneralLedger } from "./components/GeneralLedger";
import InitialBalance from "./components/InitialBalance";
import FinancialStatements from "./components/FinancialStatements";
import { useKeyboardShortcuts } from "../hooks/useKeyboardShortcuts";

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
    "initial-balance": "開始残高",
    "financial-statements": "決算書",
    settings: "事業所設定",
    help: "ヘルプ",
};

export default function App() {
    const [activeView, setActiveView] = useState("dashboard");
    const [openTabs, setOpenTabs] = useState<string[]>(["dashboard"]);
    const [drilldownData, setDrilldownData] = useState<{ accountCode?: string, journalId?: number }>({});

    const switchView = useCallback((viewId: string) => {
        setActiveView(viewId);
        setOpenTabs(prev => prev.includes(viewId) ? prev : [...prev, viewId]);
    }, []);

    const closeTab = useCallback((viewId: string) => {
        if (viewId === "dashboard") return;
        setOpenTabs(prev => {
            const nextTabs = prev.filter(t => t !== viewId);
            if (activeView === viewId) {
                const index = prev.indexOf(viewId);
                const nextActive = nextTabs[index - 1] || nextTabs[0] || "dashboard";
                setActiveView(nextActive);
            }
            return nextTabs;
        });
    }, [activeView]);

    useEffect(() => {
        const handleViewAction = (e: CustomEvent) => {
            if (e.detail && typeof e.detail === "string" && e.detail.startsWith("view:")) {
                const targetView = e.detail.split(":")[1];
                switchView(targetView);
            }
            if (e.detail === "action:new_slip") {
                switchView("transfer-slip");
                // Small delay to let component mount before sending the clear command
                setTimeout(() => {
                    window.dispatchEvent(new CustomEvent("a2e-toolbar-action", { detail: "new_slip" }));
                }, 100);
            }
        };
        window.addEventListener("a2e-toolbar-action", handleViewAction as EventListener);
        return () => window.removeEventListener("a2e-toolbar-action", handleViewAction as EventListener);
    }, [switchView]);

    // Global Keyboard Shortcut Engine
    const handleToolbarAction = useCallback((action: string) => {
        console.log("Toolbar Action:", action);
        window.dispatchEvent(new CustomEvent("a2e-toolbar-action", { detail: action }));
    }, []);

    useKeyboardShortcuts({
        onToolbarAction: handleToolbarAction
    });

    const renderView = useCallback(() => {
        switch (activeView) {
            case "dashboard":
                return <Dashboard onNavigate={switchView} />;
            case "transfer-slip":
                return <TransferSlip initialJournalId={drilldownData.journalId} />;
            case "subsidiary-ledger":
                return <SubsidiaryLedger />;
            case "trial-balance":
                return <TrialBalance onDrilldown={(name, code) => {
                    setDrilldownData({ accountCode: code });
                    switchView("general-ledger");
                }} />;
            case "journal":
                return <JournalDiary onDrilldown={(id) => {
                    setDrilldownData({ journalId: id });
                    switchView("transfer-slip");
                }} />;
            case "general-ledger":
                return <GeneralLedger initialAccountCode={drilldownData.accountCode} />;
            case "initial-balance":
                return <InitialBalance />;
            case "financial-statements":
                return <FinancialStatements />;
            default:
                return (
                    <PlaceholderView
                        title={VIEW_TITLES[activeView] || activeView}
                    />
                );
        }
    }, [activeView, drilldownData, switchView]);

    return (
        <div
            className="flex h-screen w-screen overflow-hidden"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
        >
            {/* A: Left Sidebar */}
            <Sidebar activeView={activeView} onViewChange={switchView} />

            {/* B: Main Work Area */}
            <div className="flex flex-col flex-1 min-w-0">
                {/* Menu bar */}
                <MenuBar />

                {/* Toolbar */}
                <Toolbar />

                {/* Tab bar showing open views */}
                <div
                    className="print-hidden flex items-end gap-0 overflow-x-auto"
                    style={{
                        height: 28,
                        backgroundColor: "#d8d8d8",
                        paddingLeft: 4,
                        borderBottom: "1px solid #b0b0b0",
                        flexShrink: 0,
                    }}
                >
                    {openTabs.map(
                        (viewId) => {
                            const isActive = activeView === viewId;
                            const title = VIEW_TITLES[viewId] || viewId;
                            return (
                                <div
                                    key={viewId}
                                    className="flex items-center gap-1 cursor-pointer group"
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
                                        whiteSpace: "nowrap"
                                    }}
                                    onClick={() => setActiveView(viewId)}
                                >
                                    {title}
                                    {viewId !== "dashboard" && (
                                        <span
                                            style={{
                                                marginLeft: 6,
                                                fontSize: 10,
                                                color: "#999",
                                                lineHeight: 1,
                                                visibility: isActive ? "visible" : "hidden",
                                            }}
                                            className="group-hover:visible"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                closeTab(viewId);
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
                <div className="print-expand flex-1 min-h-0 overflow-hidden">{renderView()}</div>

                {/* Status bar */}
                <StatusBar />
            </div>
        </div>
    );
}
