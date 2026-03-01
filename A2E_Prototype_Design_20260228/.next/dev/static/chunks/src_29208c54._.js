(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calculator.js [app-client] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-client] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-help.js [app-client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const navGroups = [
    {
        label: "ホーム",
        items: [
            {
                id: "dashboard",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"],
                label: "ダッシュボード"
            }
        ]
    },
    {
        label: "日常業務",
        items: [
            {
                id: "transfer-slip",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
                label: "振替伝票"
            },
            {
                id: "journal",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
                label: "仕訳日記帳"
            },
            {
                id: "subsidiary-ledger",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"],
                label: "補助元帳"
            },
            {
                id: "general-ledger",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"],
                label: "総勘定元帳"
            }
        ]
    },
    {
        label: "集計・分析",
        items: [
            {
                id: "trial-balance",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
                label: "残高試算表"
            }
        ]
    },
    {
        label: "設定",
        items: [
            {
                id: "settings",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
                label: "事業所設定"
            },
            {
                id: "help",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"],
                label: "ヘルプ"
            }
        ]
    }
];
function Sidebar({ activeView, onViewChange }) {
    _s();
    const [collapsed, setCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full select-none",
        style: {
            width: collapsed ? 52 : 192,
            minWidth: collapsed ? 52 : 192,
            backgroundColor: "#1A1C1E",
            fontFamily: "'Noto Sans JP', sans-serif",
            transition: "width 0.15s, min-width 0.15s"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 px-3 py-2.5 cursor-pointer",
                style: {
                    borderBottom: "1px solid rgba(255,255,255,0.08)"
                },
                onClick: ()=>setCollapsed(!collapsed),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center rounded",
                        style: {
                            width: 28,
                            height: 28,
                            backgroundColor: "#005BAC",
                            flexShrink: 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                            size: 16,
                            color: "#fff"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Sidebar.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Sidebar.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "#fff",
                                    fontSize: 12,
                                    lineHeight: 1.2,
                                    whiteSpace: "nowrap"
                                },
                                children: "弥生会計 A2E"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Sidebar.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "rgba(255,255,255,0.45)",
                                    fontSize: 10,
                                    lineHeight: 1.2
                                },
                                children: "株式会社サンプル"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Sidebar.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Sidebar.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Sidebar.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto py-1",
                children: navGroups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-1",
                        children: [
                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-3 py-1",
                                style: {
                                    fontSize: 10,
                                    color: "rgba(255,255,255,0.35)",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.05em"
                                },
                                children: group.label
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Sidebar.tsx",
                                lineNumber: 114,
                                columnNumber: 15
                            }, this),
                            group.items.map((item)=>{
                                const isActive = activeView === item.id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 cursor-pointer mx-1 rounded",
                                    style: {
                                        padding: collapsed ? "6px 0" : "5px 10px",
                                        justifyContent: collapsed ? "center" : "flex-start",
                                        backgroundColor: isActive ? "rgba(0,91,172,0.35)" : "transparent",
                                        color: isActive ? "#fff" : "rgba(255,255,255,0.7)",
                                        fontSize: 12,
                                        transition: "background-color 0.1s"
                                    },
                                    onClick: ()=>onViewChange(item.id),
                                    onMouseEnter: (e)=>{
                                        if (!isActive) e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)";
                                    },
                                    onMouseLeave: (e)=>{
                                        if (!isActive) e.currentTarget.style.backgroundColor = "transparent";
                                    },
                                    title: collapsed ? item.label : undefined,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                            size: 16,
                                            style: {
                                                flexShrink: 0
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Sidebar.tsx",
                                            lineNumber: 154,
                                            columnNumber: 19
                                        }, this),
                                        !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex-1 truncate",
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Sidebar.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 23
                                                }, this),
                                                isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    size: 12
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Sidebar.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 36
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/src/app/components/Sidebar.tsx",
                                    lineNumber: 129,
                                    columnNumber: 17
                                }, this);
                            })
                        ]
                    }, group.label, true, {
                        fileName: "[project]/src/app/components/Sidebar.tsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/components/Sidebar.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 px-3 py-3 cursor-pointer transition-colors",
                        style: {
                            borderTop: "1px solid rgba(255,255,255,0.08)",
                            color: "rgba(255,255,255,0.7)",
                            fontSize: 12,
                            justifyContent: collapsed ? "center" : "flex-start"
                        },
                        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
                                callbackUrl: '/login'
                            }),
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)";
                            e.currentTarget.style.color = "#fff";
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.backgroundColor = "transparent";
                            e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                        },
                        title: collapsed ? "ログアウト" : undefined,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                size: 16,
                                style: {
                                    flexShrink: 0
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Sidebar.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this),
                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex-1 truncate",
                                children: "ログアウト"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Sidebar.tsx",
                                lineNumber: 190,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Sidebar.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 py-2",
                        style: {
                            borderTop: "1px solid rgba(255,255,255,0.08)",
                            fontSize: 10,
                            color: "rgba(255,255,255,0.3)",
                            textAlign: "center"
                        },
                        children: !collapsed && "A2E Prototype v0.1"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Sidebar.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Sidebar.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Sidebar.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(Sidebar, "IaHwFfvbaw8y79e5do0CzWS1eXc=");
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/MenuBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuBar",
    ()=>MenuBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const menus = [
    {
        label: "ファイル(F)",
        key: "F",
        items: [
            {
                label: "新規作成",
                shortcut: "Alt+N"
            },
            {
                label: "開く",
                shortcut: "Ctrl+O"
            },
            {
                divider: true,
                label: ""
            },
            {
                label: "上書き保存",
                shortcut: "Ctrl+S"
            },
            {
                label: "名前を付けて保存"
            },
            {
                divider: true,
                label: ""
            },
            {
                label: "印刷",
                shortcut: "Ctrl+P"
            },
            {
                label: "印刷プレビュー"
            },
            {
                divider: true,
                label: ""
            },
            {
                label: "終了",
                shortcut: "Alt+F4"
            }
        ]
    },
    {
        label: "編集(E)",
        key: "E",
        items: [
            {
                label: "元に戻す",
                shortcut: "Ctrl+Z"
            },
            {
                label: "やり直し",
                shortcut: "Ctrl+Y"
            },
            {
                divider: true,
                label: ""
            },
            {
                label: "切り取り",
                shortcut: "Ctrl+X"
            },
            {
                label: "コピー",
                shortcut: "Ctrl+C"
            },
            {
                label: "貼り付け",
                shortcut: "Ctrl+V"
            }
        ]
    },
    {
        label: "表示(V)",
        key: "V",
        items: [
            {
                label: "ツールバー"
            },
            {
                label: "ステータスバー"
            },
            {
                divider: true,
                label: ""
            },
            {
                label: "最新の情報に更新",
                shortcut: "F5"
            }
        ]
    },
    {
        label: "帳簿(A)",
        key: "A",
        items: [
            {
                label: "仕訳日記帳"
            },
            {
                label: "総勘定元帳"
            },
            {
                label: "補助元帳"
            },
            {
                label: "現金出納帳"
            },
            {
                label: "預金出納帳"
            },
            {
                label: "売掛帳"
            },
            {
                label: "買掛帳"
            }
        ]
    },
    {
        label: "伝票(B)",
        key: "B",
        items: [
            {
                label: "振替伝票"
            },
            {
                label: "入金伝票"
            },
            {
                label: "出金伝票"
            }
        ]
    },
    {
        label: "集計(C)",
        key: "C",
        items: [
            {
                label: "残高試算表"
            },
            {
                label: "日計表"
            },
            {
                label: "補助残高一覧表"
            },
            {
                divider: true,
                label: ""
            },
            {
                label: "消費税集計表"
            }
        ]
    },
    {
        label: "決算(P)",
        key: "P",
        items: [
            {
                label: "決算書作成"
            },
            {
                label: "消費税申告書"
            },
            {
                label: "勘定科目内訳書"
            }
        ]
    },
    {
        label: "ツール(T)",
        key: "T",
        items: [
            {
                label: "仕訳データ取込"
            },
            {
                label: "仕訳データ書出"
            },
            {
                divider: true,
                label: ""
            },
            {
                label: "データバックアップ"
            },
            {
                label: "データ復元"
            }
        ]
    },
    {
        label: "設定(S)",
        key: "S",
        items: [
            {
                label: "事業所設定"
            },
            {
                label: "科目設定"
            },
            {
                label: "補助科目設定"
            },
            {
                label: "部門設定"
            },
            {
                divider: true,
                label: ""
            },
            {
                label: "消費税設定"
            }
        ]
    },
    {
        label: "ウィンドウ(W)",
        key: "W",
        items: [
            {
                label: "並べて表示"
            },
            {
                label: "重ねて表示"
            }
        ]
    },
    {
        label: "ヘルプ(H)",
        key: "H",
        items: [
            {
                label: "ヘルプトピック",
                shortcut: "F1"
            },
            {
                divider: true,
                label: ""
            },
            {
                label: "バージョン情報"
            }
        ]
    }
];
// Build a map of Alt+key -> menu index
const altKeyMap = {};
menus.forEach((menu, idx)=>{
    altKeyMap[menu.key.toLowerCase()] = idx;
});
function MenuBar() {
    _s();
    const [openMenu, setOpenMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [focusedItemIndex, setFocusedItemIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [altMode, setAltMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuBarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleMenuAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MenuBar.useCallback[handleMenuAction]": (item)=>{
            if (item.disabled || item.divider) return;
            setOpenMenu(null);
            setAltMode(false);
            setFocusedItemIndex(null);
            const label = item.label;
            const actionMap = {
                "上書き保存": "submit",
                "新規作成": "action:new_slip",
                "最新の情報に更新": "refresh",
                "仕訳日記帳": "view:journal",
                "振替伝票": "view:transfer-slip",
                "残高試算表": "view:trial-balance",
                "総勘定元帳": "view:general-ledger",
                "補助元帳": "view:subsidiary-ledger",
                "事業所設定": "view:settings",
                "決算書作成": "view:financial-statements",
                "科目設定": "view:initial-balance"
            };
            if (actionMap[label]) {
                window.dispatchEvent(new CustomEvent("a2e-toolbar-action", {
                    detail: actionMap[label]
                }));
                return;
            }
            if (label === "印刷") {
                setTimeout({
                    "MenuBar.useCallback[handleMenuAction]": ()=>window.print()
                }["MenuBar.useCallback[handleMenuAction]"], 100);
                return;
            }
            if (label === "終了") {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("ブラウザのタブを閉じて終了してください。");
                return;
            }
            if (label === "開く") {
                window.dispatchEvent(new CustomEvent("a2e-toolbar-action", {
                    detail: "view:journal"
                }));
                return;
            }
            if (label === "バージョン情報") {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])("A2E Prototype v1.0", {
                    description: "弥生会計互換 クラウドネイティブプロトタイプ",
                    position: "top-center"
                });
                return;
            }
            if ([
                "切り取り",
                "コピー",
                "貼り付け"
            ].includes(label)) {
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("次期アップデートで公開予定です", {
                description: `「${label}」はプロダクトロードマップの対象です`
            });
        }
    }["MenuBar.useCallback[handleMenuAction]"], []);
    // Close menu on outside click
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MenuBar.useEffect": ()=>{
            function handleClickOutside(e) {
                if (menuBarRef.current && !menuBarRef.current.contains(e.target)) {
                    setOpenMenu(null);
                    setAltMode(false);
                    setFocusedItemIndex(null);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "MenuBar.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["MenuBar.useEffect"];
        }
    }["MenuBar.useEffect"], []);
    // Navigation helper
    const moveFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MenuBar.useCallback[moveFocus]": (direction)=>{
            if (openMenu === null) return;
            const items = menus[openMenu].items;
            let nextIdx = focusedItemIndex === null ? direction > 0 ? 0 : items.length - 1 : focusedItemIndex + direction;
            // Loop until we find a selectable item or complete a full cycle
            let count = 0;
            while(count < items.length){
                if (nextIdx < 0) nextIdx = items.length - 1;
                if (nextIdx >= items.length) nextIdx = 0;
                const item = items[nextIdx];
                if (!item.divider && !item.disabled) {
                    setFocusedItemIndex(nextIdx);
                    return;
                }
                nextIdx += direction;
                count++;
            }
        }
    }["MenuBar.useCallback[moveFocus]"], [
        openMenu,
        focusedItemIndex
    ]);
    // Alt+key global handler
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MenuBar.useEffect": ()=>{
            let altPressed = false;
            let altOnly = false;
            function handleKeyDown(e) {
                if (e.key === "Alt") {
                    altPressed = true;
                    altOnly = true;
                    return;
                }
                if (e.altKey && !e.ctrlKey && !e.metaKey) {
                    const key = e.key.toLowerCase();
                    if (key in altKeyMap) {
                        e.preventDefault();
                        e.stopPropagation();
                        altOnly = false;
                        const targetMenuIdx = altKeyMap[key];
                        setOpenMenu(targetMenuIdx);
                        setAltMode(true);
                        // Focus first item
                        const firstSelectable = menus[targetMenuIdx].items.findIndex({
                            "MenuBar.useEffect.handleKeyDown.firstSelectable": (it)=>!it.divider && !it.disabled
                        }["MenuBar.useEffect.handleKeyDown.firstSelectable"]);
                        setFocusedItemIndex(firstSelectable !== -1 ? firstSelectable : 0);
                        return;
                    }
                }
                if (altMode || openMenu !== null) {
                    if (e.key === "ArrowRight") {
                        e.preventDefault();
                        setOpenMenu({
                            "MenuBar.useEffect.handleKeyDown": (prev)=>{
                                const next = prev !== null ? (prev + 1) % menus.length : 0;
                                const firstSelectable = menus[next].items.findIndex({
                                    "MenuBar.useEffect.handleKeyDown.firstSelectable": (it)=>!it.divider && !it.disabled
                                }["MenuBar.useEffect.handleKeyDown.firstSelectable"]);
                                setFocusedItemIndex(firstSelectable !== -1 ? firstSelectable : 0);
                                return next;
                            }
                        }["MenuBar.useEffect.handleKeyDown"]);
                    } else if (e.key === "ArrowLeft") {
                        e.preventDefault();
                        setOpenMenu({
                            "MenuBar.useEffect.handleKeyDown": (prev)=>{
                                const next = prev !== null ? (prev - 1 + menus.length) % menus.length : menus.length - 1;
                                const firstSelectable = menus[next].items.findIndex({
                                    "MenuBar.useEffect.handleKeyDown.firstSelectable": (it)=>!it.divider && !it.disabled
                                }["MenuBar.useEffect.handleKeyDown.firstSelectable"]);
                                setFocusedItemIndex(firstSelectable !== -1 ? firstSelectable : 0);
                                return next;
                            }
                        }["MenuBar.useEffect.handleKeyDown"]);
                    } else if (e.key === "ArrowDown" || e.key === "Tab" && !e.shiftKey) {
                        e.preventDefault();
                        moveFocus(1);
                    } else if (e.key === "ArrowUp" || e.key === "Tab" && e.shiftKey) {
                        e.preventDefault();
                        moveFocus(-1);
                    } else if (e.key === "Enter" && openMenu !== null && focusedItemIndex !== null) {
                        e.preventDefault();
                        const item = menus[openMenu].items[focusedItemIndex];
                        handleMenuAction(item);
                    } else if (e.key === "Escape") {
                        e.preventDefault();
                        setOpenMenu(null);
                        setAltMode(false);
                        setFocusedItemIndex(null);
                    }
                }
                altOnly = false;
            }
            function handleKeyUp(e) {
                if (e.key === "Alt") {
                    altPressed = false;
                    if (altOnly) {
                        setAltMode({
                            "MenuBar.useEffect.handleKeyUp": (prev)=>{
                                if (prev) {
                                    setOpenMenu(null);
                                    setFocusedItemIndex(null);
                                    return false;
                                }
                                return true;
                            }
                        }["MenuBar.useEffect.handleKeyUp"]);
                    }
                    altOnly = false;
                }
            }
            window.addEventListener("keydown", handleKeyDown, true);
            window.addEventListener("keyup", handleKeyUp, true);
            return ({
                "MenuBar.useEffect": ()=>{
                    window.removeEventListener("keydown", handleKeyDown, true);
                    window.removeEventListener("keyup", handleKeyUp, true);
                }
            })["MenuBar.useEffect"];
        }
    }["MenuBar.useEffect"], [
        altMode,
        openMenu,
        focusedItemIndex,
        moveFocus,
        handleMenuAction
    ]);
    // Render menu label with underlined shortcut key
    const renderLabel = (label, menuKey)=>{
        const match = label.match(/\(([A-Z])\)/);
        if (!match) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: label
        }, void 0, false, {
            fileName: "[project]/src/app/components/MenuBar.tsx",
            lineNumber: 339,
            columnNumber: 24
        }, this);
        const idx = label.indexOf(match[0]);
        const before = label.slice(0, idx);
        const letter = match[1];
        const after = label.slice(idx + match[0].length);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                before,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontSize: 10
                    },
                    children: "("
                }, void 0, false, {
                    fileName: "[project]/src/app/components/MenuBar.tsx",
                    lineNumber: 349,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        textDecoration: altMode ? "underline" : "none",
                        textUnderlineOffset: 2
                    },
                    children: letter
                }, void 0, false, {
                    fileName: "[project]/src/app/components/MenuBar.tsx",
                    lineNumber: 350,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontSize: 10
                    },
                    children: ")"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/MenuBar.tsx",
                    lineNumber: 358,
                    columnNumber: 9
                }, this),
                after
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/MenuBar.tsx",
            lineNumber: 347,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: menuBarRef,
        className: "flex items-stretch relative",
        style: {
            height: 28,
            backgroundColor: "#F3F3F3",
            borderBottom: "1px solid #c0c0c0",
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: 12,
            userSelect: "none",
            flexShrink: 0
        },
        children: [
            menus.map((menu, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center cursor-pointer",
                            style: {
                                padding: "0 8px",
                                height: "100%",
                                backgroundColor: openMenu === idx ? "#005BAC" : "transparent",
                                color: openMenu === idx ? "#fff" : "#222",
                                transition: "background-color 0.05s"
                            },
                            onMouseDown: ()=>{
                                if (openMenu === idx) {
                                    setOpenMenu(null);
                                    setFocusedItemIndex(null);
                                } else {
                                    setOpenMenu(idx);
                                    setFocusedItemIndex(null); // Click doesn't necessarily set keyboard focus
                                }
                            },
                            onMouseEnter: ()=>{
                                if (openMenu !== null) setOpenMenu(idx);
                            },
                            children: renderLabel(menu.label, menu.key)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/MenuBar.tsx",
                            lineNumber: 380,
                            columnNumber: 11
                        }, this),
                        openMenu === idx && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-0 z-50",
                            style: {
                                top: 28,
                                minWidth: 220,
                                backgroundColor: "#fff",
                                border: "1px solid #c0c0c0",
                                boxShadow: "2px 2px 6px rgba(0,0,0,0.15)",
                                padding: "2px 0"
                            },
                            children: menu.items.map((item, iIdx)=>item.divider ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: 1,
                                        backgroundColor: "#d0d0d0",
                                        margin: "2px 4px"
                                    }
                                }, `div-${iIdx}`, false, {
                                    fileName: "[project]/src/app/components/MenuBar.tsx",
                                    lineNumber: 421,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between cursor-pointer",
                                    style: {
                                        padding: "3px 20px 3px 24px",
                                        fontSize: 12,
                                        backgroundColor: focusedItemIndex === iIdx ? "#005BAC" : "transparent",
                                        color: focusedItemIndex === iIdx ? "#fff" : item.disabled ? "#999" : "#222"
                                    },
                                    onMouseEnter: ()=>{
                                        if (!item.disabled) {
                                            setFocusedItemIndex(iIdx);
                                        }
                                    },
                                    onMouseLeave: ()=>{
                                    // We don't necessarily clear focusedItemIndex on mouse leave to keep manual arrow keys stable
                                    },
                                    onClick: ()=>handleMenuAction(item),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/MenuBar.tsx",
                                            lineNumber: 449,
                                            columnNumber: 21
                                        }, this),
                                        item.shortcut && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                marginLeft: 24,
                                                fontSize: 11,
                                                opacity: 0.6
                                            },
                                            children: item.shortcut
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/MenuBar.tsx",
                                            lineNumber: 451,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, `${menu.key}-${item.label}`, true, {
                                    fileName: "[project]/src/app/components/MenuBar.tsx",
                                    lineNumber: 430,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/MenuBar.tsx",
                            lineNumber: 408,
                            columnNumber: 13
                        }, this)
                    ]
                }, menu.key, true, {
                    fileName: "[project]/src/app/components/MenuBar.tsx",
                    lineNumber: 379,
                    columnNumber: 9
                }, this)),
            altMode && openMenu === null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center ml-auto",
                style: {
                    fontSize: 10,
                    color: "#005BAC",
                    padding: "0 8px",
                    opacity: 0.8
                },
                children: "Alt: メニュー選択モード (文字キーで開く)"
            }, void 0, false, {
                fileName: "[project]/src/app/components/MenuBar.tsx",
                lineNumber: 471,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/MenuBar.tsx",
        lineNumber: 365,
        columnNumber: 5
    }, this);
}
_s(MenuBar, "OC0km6N6a3wckjF2CvD00Ip8eTg=");
_c = MenuBar;
var _c;
__turbopack_context__.k.register(_c, "MenuBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/Toolbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toolbar",
    ()=>Toolbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
;
;
const toolbarButtons = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"],
        label: "登録",
        shortcut: "F12"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"],
        label: "取消",
        shortcut: "F11"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"],
        label: "検索",
        shortcut: "F10"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"],
        label: "削除",
        shortcut: "F9"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"],
        label: "行挿入",
        shortcut: "F8"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"],
        label: "行削除",
        shortcut: "F7"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"],
        label: "参照",
        shortcut: "F4"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
        label: "辞書",
        shortcut: "F3"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"],
        label: "印刷",
        shortcut: "Ctrl+P"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"],
        label: "更新",
        shortcut: "F5"
    }
];
function Toolbar() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "print-hidden flex items-center gap-1 px-2 border-b",
        style: {
            height: 48,
            backgroundColor: "#FFFFFF",
            borderColor: "#c0c0c0",
            fontFamily: "'Noto Sans JP', sans-serif",
            userSelect: "none",
            flexShrink: 0
        },
        children: [
            toolbarButtons.map((btn, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "flex flex-col items-center justify-center gap-0.5 cursor-pointer rounded",
                    style: {
                        padding: "2px 8px",
                        height: 40,
                        minWidth: 48,
                        border: "1px solid transparent",
                        backgroundColor: "transparent",
                        fontSize: 10,
                        color: btn.disabled ? "#999" : "#333",
                        whiteSpace: "nowrap",
                        transition: "all 0.05s"
                    },
                    onClick: ()=>{
                        const actionMap = {
                            "F12": "submit",
                            "F11": "cancel",
                            "F10": "search",
                            "F9": "delete",
                            "F8": "insert_row",
                            "F7": "delete_row",
                            "F4": "reference",
                            "F3": "dictionary",
                            "F5": "refresh"
                        };
                        const action = actionMap[btn.shortcut];
                        if (action) {
                            window.dispatchEvent(new CustomEvent("a2e-toolbar-action", {
                                detail: action
                            }));
                        }
                    },
                    onMouseEnter: (e)=>{
                        e.currentTarget.style.backgroundColor = "#fff";
                        e.currentTarget.style.borderColor = "#b0b0b0";
                    },
                    onMouseLeave: (e)=>{
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.borderColor = "transparent";
                    },
                    onMouseDown: (e)=>{
                        e.currentTarget.style.backgroundColor = "#d0d8e8";
                    },
                    onMouseUp: (e)=>{
                        e.currentTarget.style.backgroundColor = "#fff";
                    },
                    title: `${btn.label} (${btn.shortcut})`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(btn.icon, {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Toolbar.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex items-center gap-1",
                            children: [
                                btn.label,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 9,
                                        color: "#888"
                                    },
                                    children: btn.shortcut
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Toolbar.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Toolbar.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    ]
                }, btn.label, true, {
                    fileName: "[project]/src/app/components/Toolbar.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 1,
                    height: 20,
                    backgroundColor: "#c0c0c0",
                    margin: "0 4px"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/components/Toolbar.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1 ml-auto",
                style: {
                    fontSize: 11,
                    color: "#555"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "期間: 令和7年4月1日 ～ 令和8年3月31日"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Toolbar.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Toolbar.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Toolbar.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c = Toolbar;
var _c;
__turbopack_context__.k.register(_c, "Toolbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/StatusBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatusBar",
    ()=>StatusBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function StatusBar() {
    _s();
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StatusBar.useEffect": ()=>{
            setMounted(true);
            const timer = setInterval({
                "StatusBar.useEffect.timer": ()=>setTime(new Date())
            }["StatusBar.useEffect.timer"], 1000);
            return ({
                "StatusBar.useEffect": ()=>clearInterval(timer)
            })["StatusBar.useEffect"];
        }
    }["StatusBar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "print-hidden flex items-center justify-between px-2",
        style: {
            height: 22,
            backgroundColor: "#e0e0e0",
            borderTop: "1px solid #c0c0c0",
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: 11,
            color: "#555",
            userSelect: "none",
            flexShrink: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2 h-2 rounded-full bg-green-500 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/StatusBar.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-[#005BAC]",
                                children: "Cloud Synced"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/StatusBar.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/StatusBar.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "#999"
                        },
                        children: "|"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/StatusBar.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "準備完了"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/StatusBar.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "#999"
                        },
                        children: "|"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/StatusBar.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "株式会社サンプル"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/StatusBar.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "#999"
                        },
                        children: "|"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/StatusBar.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "令和7年度（個別）"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/StatusBar.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/StatusBar.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "INS"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/StatusBar.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "#999"
                        },
                        children: "|"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/StatusBar.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: mounted ? `${time.toLocaleDateString("ja-JP")} ${time.toLocaleTimeString("ja-JP")}` : ""
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/StatusBar.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/StatusBar.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/StatusBar.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(StatusBar, "zb46/PEhLN2q1u1PVq9WaqL17Lo=");
_c = StatusBar;
var _c;
__turbopack_context__.k.register(_c, "StatusBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createJournal",
    ()=>createJournal,
    "fetchAccounts",
    ()=>fetchAccounts,
    "fetchDiary",
    ()=>fetchDiary,
    "fetchFinancialStatements",
    ()=>fetchFinancialStatements,
    "fetchJournal",
    ()=>fetchJournal,
    "fetchLedger",
    ()=>fetchLedger,
    "fetchTrialBalance",
    ()=>fetchTrialBalance,
    "updateInitialBalances",
    ()=>updateInitialBalances
]);
const API_BASE = "http://127.0.0.1:8001";
// For PoC standalone, we'll hardcode company_id to 1. 
// In a full app, this comes from a hook/context.
const DEFAULT_HEADERS = {
    "Content-Type": "application/json",
    "X-Company-ID": "1"
};
async function fetchAccounts() {
    const res = await fetch(`${API_BASE}/accounts`, {
        headers: DEFAULT_HEADERS
    });
    if (!res.ok) throw new Error("Failed to fetch accounts");
    return res.json();
}
async function fetchTrialBalance() {
    const res = await fetch(`${API_BASE}/trial-balance`, {
        headers: DEFAULT_HEADERS
    });
    if (!res.ok) throw new Error("Failed to fetch trial balance");
    return res.json();
}
async function fetchJournal(id) {
    const res = await fetch(`${API_BASE}/journals/${id}`, {
        headers: DEFAULT_HEADERS
    });
    if (!res.ok) throw new Error("Failed to fetch journal");
    return res.json();
}
async function createJournal(data) {
    const res = await fetch(`${API_BASE}/journals`, {
        method: "POST",
        headers: DEFAULT_HEADERS,
        body: JSON.stringify(data)
    });
    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.detail || "Failed to create journal");
    }
    return res.json();
}
async function fetchDiary() {
    const res = await fetch(`${API_BASE}/reports/diary`, {
        headers: DEFAULT_HEADERS
    });
    if (!res.ok) throw new Error("Failed to fetch diary");
    return res.json();
}
async function fetchLedger(accountId) {
    const res = await fetch(`${API_BASE}/reports/ledger/${accountId}`, {
        headers: DEFAULT_HEADERS
    });
    if (!res.ok) throw new Error("Failed to fetch ledger");
    return res.json();
}
async function updateInitialBalances(data) {
    const res = await fetch(`${API_BASE}/balances/initial`, {
        method: "POST",
        headers: DEFAULT_HEADERS,
        body: JSON.stringify(data)
    });
    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.detail || "Failed to update initial balances");
    }
    return res.json();
}
async function fetchFinancialStatements() {
    const res = await fetch(`${API_BASE}/reports/financial-statements`, {
        headers: DEFAULT_HEADERS
    });
    if (!res.ok) throw new Error("Failed to fetch financial statements");
    return res.json();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/AccountSearchPopup.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACCOUNT_MASTER",
    ()=>ACCOUNT_MASTER,
    "AccountSearchPopup",
    ()=>AccountSearchPopup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const ACCOUNT_MASTER = [
    {
        code: "100",
        name: "現金",
        category: "資産",
        taxType: "対象外"
    },
    {
        code: "111",
        name: "普通預金",
        category: "資産",
        taxType: "対象外"
    },
    {
        code: "130",
        name: "売掛金",
        category: "資産",
        taxType: "対象外"
    },
    {
        code: "310",
        name: "買掛金",
        category: "負債",
        taxType: "対象外"
    },
    {
        code: "500",
        name: "売上高",
        category: "収益",
        taxType: "課税売上10%"
    },
    {
        code: "600",
        name: "仕入高",
        category: "費用",
        taxType: "課税仕入10%"
    },
    {
        code: "630",
        name: "旅費交通費",
        category: "費用",
        taxType: "課税仕入10%"
    },
    {
        code: "640",
        name: "通信費",
        category: "費用",
        taxType: "課税仕入10%"
    },
    {
        code: "650",
        name: "消耗品費",
        category: "費用",
        taxType: "課税仕入10%"
    },
    {
        code: "660",
        name: "水道光熱費",
        category: "費用",
        taxType: "課税仕入10%"
    },
    {
        code: "670",
        name: "地代家賃",
        category: "費用",
        taxType: "非課税仕入"
    },
    {
        code: "680",
        name: "接待交際費",
        category: "費用",
        taxType: "課税仕入10%"
    }
];
const MASTER_SUB = [
    {
        name: "みずほ銀行"
    },
    {
        name: "三井住友銀行"
    },
    {
        name: "三菱UFJ銀行"
    },
    {
        name: "PayPay銀行"
    },
    {
        name: "得意先A"
    },
    {
        name: "仕入先B"
    }
];
const MASTER_DEPT = [
    {
        name: "全社"
    },
    {
        name: "営業部"
    },
    {
        name: "総務部"
    },
    {
        name: "開発部"
    }
];
const MASTER_TAX = [
    {
        name: "対象外"
    },
    {
        name: "課税仕入10%"
    },
    {
        name: "課税売上10%"
    },
    {
        name: "非課税仕入"
    },
    {
        name: "非課税売上"
    }
];
const MASTER_TAX_RATE = [
    {
        name: "10%"
    },
    {
        name: "8%"
    },
    {
        name: "0%"
    }
];
const CATEGORY_COLORS = {
    資産: "#005BAC",
    負債: "#C0392B",
    純資産: "#8E44AD",
    収益: "#27AE60",
    費用: "#E67E22"
};
function AccountSearchPopup({ isOpen, onClose, onSelect, anchorRect, initialQuery = "", searchType = "account" }) {
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialQuery);
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [categoryFilter, setCategoryFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const listRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { data: accountsData = ACCOUNT_MASTER } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "accounts"
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAccounts"],
        staleTime: 1000 * 60 * 60
    });
    let rawData = [];
    if (searchType === "account") rawData = accountsData;
    else if (searchType === "sub") rawData = MASTER_SUB;
    else if (searchType === "dept") rawData = MASTER_DEPT;
    else if (searchType === "tax") rawData = MASTER_TAX;
    else if (searchType === "taxRate") rawData = MASTER_TAX_RATE;
    const filtered = rawData.filter((a)=>{
        const matchText = !query || a.name.includes(query) || a.code && a.code.includes(query) || a.category && a.category.includes(query);
        const matchCategory = !categoryFilter || a.category === categoryFilter;
        return matchText && matchCategory;
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AccountSearchPopup.useEffect": ()=>{
            if (isOpen) {
                setQuery(initialQuery);
                setSelectedIndex(0);
                setCategoryFilter(null);
                setTimeout({
                    "AccountSearchPopup.useEffect": ()=>inputRef.current?.focus()
                }["AccountSearchPopup.useEffect"], 30);
            }
        }
    }["AccountSearchPopup.useEffect"], [
        isOpen,
        initialQuery
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AccountSearchPopup.useEffect": ()=>{
            setSelectedIndex(0);
        }
    }["AccountSearchPopup.useEffect"], [
        query,
        categoryFilter
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AccountSearchPopup.useEffect": ()=>{
            if (listRef.current) {
                const el = listRef.current.children[selectedIndex];
                if (el) el.scrollIntoView({
                    block: "nearest"
                });
            }
        }
    }["AccountSearchPopup.useEffect"], [
        selectedIndex
    ]);
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AccountSearchPopup.useCallback[handleKeyDown]": (e)=>{
            if (e.key === "ArrowDown") {
                e.preventDefault();
                setSelectedIndex({
                    "AccountSearchPopup.useCallback[handleKeyDown]": (i)=>Math.min(i + 1, filtered.length - 1)
                }["AccountSearchPopup.useCallback[handleKeyDown]"]);
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setSelectedIndex({
                    "AccountSearchPopup.useCallback[handleKeyDown]": (i)=>Math.max(i - 1, 0)
                }["AccountSearchPopup.useCallback[handleKeyDown]"]);
            } else if (e.key === "Enter") {
                e.preventDefault();
                if (filtered[selectedIndex]) onSelect(filtered[selectedIndex]);
            } else if (e.key === "Escape") {
                e.preventDefault();
                onClose();
            } else if (e.key === "Tab" && searchType === "account") {
                e.preventDefault();
                const cats = [
                    null,
                    "資産",
                    "負債",
                    "純資産",
                    "収益",
                    "費用"
                ];
                const currentIdx = cats.indexOf(categoryFilter);
                setCategoryFilter(cats[(currentIdx + 1) % cats.length]);
            }
        }
    }["AccountSearchPopup.useCallback[handleKeyDown]"], [
        filtered,
        selectedIndex,
        onSelect,
        onClose,
        categoryFilter,
        searchType
    ]);
    if (!isOpen) return null;
    const titles = {
        account: "勘定科目検索 [F4]",
        sub: "補助科目検索 [F4]",
        dept: "部門検索 [F4]",
        tax: "税区分検索 [F4]",
        taxRate: "税率選択 [F4]"
    };
    const popupRectStyle = {
        position: "fixed",
        top: anchorRect ? anchorRect.top : "50%",
        left: anchorRect ? anchorRect.left : "50%",
        transform: anchorRect ? undefined : "translate(-50%, -50%)",
        width: searchType === "account" ? 420 : 250,
        maxHeight: 360,
        backgroundColor: "#fff",
        border: "2px solid #005BAC",
        boxShadow: "4px 4px 12px rgba(0,0,0,0.25)",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Noto Sans JP', sans-serif",
        fontSize: 12
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    inset: 0,
                    zIndex: 9998
                },
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/src/app/components/AccountSearchPopup.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: popupRectStyle,
                onKeyDown: handleKeyDown,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-2",
                        style: {
                            height: 26,
                            backgroundColor: "#005BAC",
                            color: "#fff",
                            fontSize: 11,
                            flexShrink: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1",
                                children: [
                                    searchType === "account" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/AccountSearchPopup.tsx",
                                        lineNumber: 173,
                                        columnNumber: 41
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/AccountSearchPopup.tsx",
                                        lineNumber: 173,
                                        columnNumber: 64
                                    }, this),
                                    titles[searchType]
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/AccountSearchPopup.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "cursor-pointer flex items-center",
                                onClick: onClose,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/AccountSearchPopup.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/AccountSearchPopup.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/AccountSearchPopup.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 px-2",
                        style: {
                            height: 32,
                            borderBottom: "1px solid #d0d0d0",
                            flexShrink: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                size: 13,
                                color: "#999"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/AccountSearchPopup.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: inputRef,
                                type: "text",
                                value: query,
                                onChange: (e)=>setQuery(e.target.value),
                                placeholder: "絞り込み...",
                                style: {
                                    flex: 1,
                                    border: "none",
                                    outline: "none",
                                    fontSize: 12,
                                    padding: "2px 0",
                                    backgroundColor: "transparent"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/AccountSearchPopup.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 10,
                                    color: "#999"
                                },
                                children: [
                                    filtered.length,
                                    "件"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/AccountSearchPopup.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/AccountSearchPopup.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this),
                    searchType === "account" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-0 px-1",
                        style: {
                            height: 24,
                            borderBottom: "1px solid #e0e0e0",
                            flexShrink: 0,
                            backgroundColor: "#f8f8f8"
                        },
                        children: [
                            {
                                key: null,
                                label: "全て"
                            },
                            {
                                key: "資産",
                                label: "資産"
                            },
                            {
                                key: "負債",
                                label: "負債"
                            },
                            {
                                key: "純資産",
                                label: "純資産"
                            },
                            {
                                key: "収益",
                                label: "収益"
                            },
                            {
                                key: "費用",
                                label: "費用"
                            }
                        ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cursor-pointer",
                                style: {
                                    padding: "2px 8px",
                                    fontSize: 10,
                                    borderRadius: 2,
                                    backgroundColor: categoryFilter === tab.key ? "#005BAC" : "transparent",
                                    color: categoryFilter === tab.key ? "#fff" : "#666",
                                    transition: "all 0.05s"
                                },
                                onClick: ()=>setCategoryFilter(tab.key),
                                children: tab.label
                            }, tab.label, false, {
                                fileName: "[project]/src/app/components/AccountSearchPopup.tsx",
                                lineNumber: 197,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/AccountSearchPopup.tsx",
                        lineNumber: 195,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: listRef,
                        className: "flex-1 overflow-y-auto",
                        style: {
                            minHeight: 0
                        },
                        children: filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center",
                            style: {
                                height: 60,
                                color: "#999",
                                fontSize: 11
                            },
                            children: "該当項目がありません"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/AccountSearchPopup.tsx",
                            lineNumber: 215,
                            columnNumber: 13
                        }, this) : filtered.map((account, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center cursor-pointer",
                                style: {
                                    padding: "4px 8px",
                                    minHeight: "26px",
                                    backgroundColor: idx === selectedIndex ? "#005BAC" : "transparent",
                                    color: idx === selectedIndex ? "#fff" : "#333",
                                    borderBottom: "1px solid #f0f0f0"
                                },
                                onMouseEnter: ()=>setSelectedIndex(idx),
                                onClick: ()=>onSelect(account),
                                children: searchType === "account" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                width: 36,
                                                fontSize: 10,
                                                color: idx === selectedIndex ? "#ccc" : "#999",
                                                fontVariantNumeric: "tabular-nums"
                                            },
                                            children: account.code
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/AccountSearchPopup.tsx",
                                            lineNumber: 232,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                flex: 1
                                            },
                                            children: account.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/AccountSearchPopup.tsx",
                                            lineNumber: 233,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded px-1",
                                            style: {
                                                fontSize: 9,
                                                backgroundColor: idx === selectedIndex ? "rgba(255,255,255,0.2)" : `${CATEGORY_COLORS[account.category]}15`,
                                                color: idx === selectedIndex ? "#fff" : CATEGORY_COLORS[account.category],
                                                border: `1px solid ${idx === selectedIndex ? "rgba(255,255,255,0.3)" : `${CATEGORY_COLORS[account.category]}30`}`
                                            },
                                            children: account.category
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/AccountSearchPopup.tsx",
                                            lineNumber: 234,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                width: 80,
                                                textAlign: "right",
                                                fontSize: 10,
                                                color: idx === selectedIndex ? "#ddd" : "#888"
                                            },
                                            children: account.taxType
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/AccountSearchPopup.tsx",
                                            lineNumber: 237,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        flex: 1
                                    },
                                    children: account.name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/AccountSearchPopup.tsx",
                                    lineNumber: 240,
                                    columnNumber: 19
                                }, this)
                            }, account.code || account.name, false, {
                                fileName: "[project]/src/app/components/AccountSearchPopup.tsx",
                                lineNumber: 218,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/AccountSearchPopup.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/AccountSearchPopup.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(AccountSearchPopup, "f0jUnd7XyXZI6gjIPkINjpFMaOY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = AccountSearchPopup;
var _c;
__turbopack_context__.k.register(_c, "AccountSearchPopup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/TransferSlip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransferSlip",
    ()=>TransferSlip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$AccountSearchPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/AccountSearchPopup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const INITIAL_ROWS = Array.from({
    length: 1
}).map(_c = (_, i)=>({
        id: null,
        date: "",
        debitAccount: "",
        debitSub: "",
        debitDept: "",
        debitTax: "",
        debitTaxRate: "",
        debitAmount: "",
        debitTaxAmount: "",
        creditAccount: "",
        creditSub: "",
        creditDept: "",
        creditTax: "",
        creditTaxRate: "",
        creditAmount: "",
        creditTaxAmount: "",
        summary: "",
        client: ""
    }));
_c1 = INITIAL_ROWS;
const FIELDS = [
    "date",
    "debitAccount",
    "debitSub",
    "debitAmount",
    "debitTaxAmount",
    "debitDept",
    "debitTax",
    "debitTaxRate",
    "creditAccount",
    "creditSub",
    "creditAmount",
    "creditTaxAmount",
    "creditDept",
    "creditTax",
    "creditTaxRate",
    "summary",
    "client"
];
function getSearchType(field) {
    if (field.includes("Account")) return "account";
    if (field.includes("Sub")) return "sub";
    if (field.includes("Dept")) return "dept";
    if (field.includes("TaxRate")) return "taxRate";
    if (field.includes("Tax")) return "tax";
    return null;
}
function TransferSlip({ initialJournalId }) {
    _s();
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(INITIAL_ROWS);
    const hasLoadedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [focusedCell, setFocusedCell] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editValue, setEditValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [accountPopup, setAccountPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isOpen: false,
        row: -1,
        field: "",
        searchType: "account",
        anchorRect: null
    });
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { data: accountsData = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "accounts"
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAccounts"],
        staleTime: 1000 * 60 * 60
    });
    const { data: initialJournal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "journal",
            initialJournalId
        ],
        queryFn: {
            "TransferSlip.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchJournal"])(initialJournalId)
        }["TransferSlip.useQuery"],
        enabled: !!initialJournalId
    });
    const { data: latestJournals } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "diary"
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchDiary"],
        enabled: !initialJournalId
    });
    // Map latestJournals or initialJournal to rows
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TransferSlip.useEffect": ()=>{
            if (hasLoadedRef.current) return;
            if (initialJournalId && initialJournal && accountsData.length > 0) {
                // Single drill-down mode
                hasLoadedRef.current = true;
                const debitAcc = accountsData.find({
                    "TransferSlip.useEffect.debitAcc": (a)=>a.id === initialJournal.debit_account_id
                }["TransferSlip.useEffect.debitAcc"]);
                const creditAcc = accountsData.find({
                    "TransferSlip.useEffect.creditAcc": (a)=>a.id === initialJournal.credit_account_id
                }["TransferSlip.useEffect.creditAcc"]);
                const loadedRow = {
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
                    client: ""
                };
                setRows({
                    "TransferSlip.useEffect": (prev)=>[
                            loadedRow,
                            ...prev.slice(1)
                        ]
                }["TransferSlip.useEffect"]);
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
      */ }
        }
    }["TransferSlip.useEffect"], [
        initialJournal,
        latestJournals,
        accountsData,
        initialJournalId
    ]);
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "TransferSlip.useMutation[mutation]": async (rowsToSave)=>{
                const validRows = rowsToSave.filter({
                    "TransferSlip.useMutation[mutation].validRows": (r)=>{
                        const d = parseInt(r.debitAmount.replace(/,/g, ""), 10) || 0;
                        const c = parseInt(r.creditAmount.replace(/,/g, ""), 10) || 0;
                        return d > 0 || c > 0;
                    }
                }["TransferSlip.useMutation[mutation].validRows"]);
                if (validRows.length === 0) throw new Error("保存するデータがありません。");
                const promises = validRows.map({
                    "TransferSlip.useMutation[mutation].promises": async (r)=>{
                        const debitAcc = accountsData.find({
                            "TransferSlip.useMutation[mutation].promises.debitAcc": (a)=>a.name === r.debitAccount
                        }["TransferSlip.useMutation[mutation].promises.debitAcc"]);
                        const creditAcc = accountsData.find({
                            "TransferSlip.useMutation[mutation].promises.creditAcc": (a)=>a.name === r.creditAccount
                        }["TransferSlip.useMutation[mutation].promises.creditAcc"]);
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createJournal"])({
                            id: r.id,
                            date: r.date || new Date().toLocaleDateString('ja-JP', {
                                month: '2-digit',
                                day: '2-digit'
                            }),
                            debit_account_id: debitAcc?.id || null,
                            debit_amount: parseInt(r.debitAmount.replace(/,/g, ""), 10) || null,
                            debit_tax_amount: parseInt(r.debitTaxAmount.replace(/,/g, ""), 10) || 0,
                            credit_account_id: creditAcc?.id || null,
                            credit_amount: parseInt(r.creditAmount.replace(/,/g, ""), 10) || null,
                            credit_tax_amount: parseInt(r.creditTaxAmount.replace(/,/g, ""), 10) || 0,
                            summary: r.summary
                        });
                    }
                }["TransferSlip.useMutation[mutation].promises"]);
                return Promise.all(promises);
            }
        }["TransferSlip.useMutation[mutation]"],
        onSuccess: {
            "TransferSlip.useMutation[mutation]": ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("伝票を登録しました", {
                    position: "top-center"
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "trial-balance"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "diary"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "ledger"
                    ]
                });
            }
        }["TransferSlip.useMutation[mutation]"],
        onError: {
            "TransferSlip.useMutation[mutation]": (err)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.message, {
                    position: "top-center"
                });
            }
        }["TransferSlip.useMutation[mutation]"]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TransferSlip.useEffect": ()=>{
            const handleAction = {
                "TransferSlip.useEffect.handleAction": (e)=>{
                    const action = e.detail;
                    if (action === "submit") mutation.mutate(rows);
                    if (action === "cancel") {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("入力を取り消しました", {
                            position: "top-center"
                        });
                    }
                    if (action === "refresh") {
                        queryClient.invalidateQueries({
                            queryKey: [
                                "journal"
                            ]
                        });
                        queryClient.invalidateQueries({
                            queryKey: [
                                "accounts"
                            ]
                        });
                    }
                    if (action === "dictionary") {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("辞書機能は実装準備中です", {
                            position: "top-center"
                        });
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
                                        anchorRect: {
                                            top: r.bottom,
                                            left: r.left
                                        }
                                    });
                                }
                            }
                        }
                    }
                    if (action === "delete") {
                        if (window.confirm("伝票の内容をすべて削除してもよろしいですか？")) {
                            setRows(INITIAL_ROWS);
                            setFocusedCell({
                                row: 0,
                                field: "date"
                            });
                            setEditValue("");
                        }
                    }
                    if (action === "new_slip") {
                        setRows(INITIAL_ROWS);
                        setFocusedCell({
                            row: 0,
                            field: "date"
                        });
                        setEditValue("");
                    }
                    if (action === "delete_row") {
                        const focusedRowIndex = focusedCell?.row ?? -1;
                        if (focusedRowIndex !== -1 && rows.length > 1) {
                            setRows({
                                "TransferSlip.useEffect.handleAction": (prev)=>{
                                    const newRows = [
                                        ...prev
                                    ];
                                    newRows.splice(focusedRowIndex, 1);
                                    return newRows;
                                }
                            }["TransferSlip.useEffect.handleAction"]);
                        }
                    }
                    if (e.detail === "insert_row") {
                        const focusedRowIndex = focusedCell?.row ?? -1;
                        if (focusedRowIndex !== -1) {
                            setRows({
                                "TransferSlip.useEffect.handleAction": (prev)=>{
                                    const newRows = [
                                        ...prev
                                    ];
                                    newRows.splice(focusedRowIndex, 0, {
                                        id: null,
                                        date: "",
                                        debitAccount: "",
                                        debitSub: "",
                                        debitDept: "",
                                        debitTax: "",
                                        debitTaxRate: "",
                                        debitAmount: "",
                                        debitTaxAmount: "",
                                        creditAccount: "",
                                        creditSub: "",
                                        creditDept: "",
                                        creditTax: "",
                                        creditTaxRate: "",
                                        creditAmount: "",
                                        creditTaxAmount: "",
                                        summary: "",
                                        client: ""
                                    });
                                    return newRows;
                                }
                            }["TransferSlip.useEffect.handleAction"]);
                        }
                    }
                }
            }["TransferSlip.useEffect.handleAction"];
            window.addEventListener("a2e-toolbar-action", handleAction);
            return ({
                "TransferSlip.useEffect": ()=>window.removeEventListener("a2e-toolbar-action", handleAction)
            })["TransferSlip.useEffect"];
        }
    }["TransferSlip.useEffect"], [
        rows,
        mutation,
        focusedCell
    ]);
    const commitEdit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TransferSlip.useCallback[commitEdit]": (customVal)=>{
            if (!focusedCell) return;
            setRows({
                "TransferSlip.useCallback[commitEdit]": (prev)=>{
                    const newRows = [
                        ...prev
                    ];
                    let val = customVal !== undefined ? customVal : editValue;
                    if (focusedCell.field.includes("TaxRate") && val && !val.includes("%") && !isNaN(Number(val))) {
                        val += "%";
                    }
                    if (newRows[focusedCell.row]) {
                        newRows[focusedCell.row][focusedCell.field] = val;
                    }
                    // Ensure tax calculation triggers automatically if an amount, rate, or account changed
                    const row = newRows[focusedCell.row];
                    if (!row) return prev; // Safety check
                    const calcTax = {
                        "TransferSlip.useCallback[commitEdit].calcTax": (amtStr, rateStr, taxType)=>{
                            if (!taxType) taxType = "";
                            if (taxType.includes("対象外") || taxType.includes("非課税")) return "0";
                            const rate = parseInt(rateStr.replace("%", ""), 10) || 0;
                            const amt = parseInt((amtStr || "").replace(/,/g, ""), 10) || 0;
                            return Math.floor(amt * (rate / 100)).toLocaleString();
                        }
                    }["TransferSlip.useCallback[commitEdit].calcTax"];
                    if (focusedCell.field.startsWith("debit")) {
                        row.debitTaxAmount = calcTax(row.debitAmount, row.debitTaxRate, row.debitTax);
                    } else if (focusedCell.field.startsWith("credit")) {
                        row.creditTaxAmount = calcTax(row.creditAmount, row.creditTaxRate, row.creditTax);
                    }
                    return newRows;
                }
            }["TransferSlip.useCallback[commitEdit]"]);
        }
    }["TransferSlip.useCallback[commitEdit]"], [
        focusedCell,
        editValue
    ]);
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TransferSlip.useCallback[navigate]": (dir)=>{
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
                if (nextRow < rows.length - 1) {
                    nextRow++;
                    nextIdx = 0;
                } else nextIdx = FIELDS.length - 1;
            } else if (nextIdx < 0) {
                if (nextRow > 0) {
                    nextRow--;
                    nextIdx = FIELDS.length - 1;
                } else nextIdx = 0;
            }
            const nextField = FIELDS[nextIdx];
            commitEdit();
            setFocusedCell({
                row: nextRow,
                field: nextField
            });
            setEditValue(rows[nextRow][nextField] || "");
        }
    }["TransferSlip.useCallback[navigate]"], [
        focusedCell,
        rows,
        commitEdit
    ]);
    const debitTotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TransferSlip.useMemo[debitTotal]": ()=>rows.reduce({
                "TransferSlip.useMemo[debitTotal]": (sum, r)=>sum + (parseInt(r.debitAmount.replace(/,/g, ""), 10) || 0)
            }["TransferSlip.useMemo[debitTotal]"], 0)
    }["TransferSlip.useMemo[debitTotal]"], [
        rows
    ]);
    const creditTotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TransferSlip.useMemo[creditTotal]": ()=>rows.reduce({
                "TransferSlip.useMemo[creditTotal]": (sum, r)=>sum + (parseInt(r.creditAmount.replace(/,/g, ""), 10) || 0)
            }["TransferSlip.useMemo[creditTotal]"], 0)
    }["TransferSlip.useMemo[creditTotal]"], [
        rows
    ]);
    const diff = debitTotal - creditTotal;
    const lastZeroTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const renderInput = (rowIdx, field, placeholder, className = "")=>{
        const isFocused = focusedCell?.row === rowIdx && focusedCell?.field === field;
        const val = isFocused ? editValue : rows[rowIdx][field] || "";
        const isAmount = field.includes("Amount");
        const st = getSearchType(field);
        const isDropdownOnly = st === "dept" || st === "tax" || st === "taxRate" || st === "sub";
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `relative flex items-center px-1.5 text-[11px] cursor-text tracking-tight h-full min-h-[24px] border-b border-[#DDDDDD] overflow-hidden ${isFocused ? "bg-white ring-2 ring-inset ring-[#005BAC] z-10" : ""} ${className}`,
            style: {
                letterSpacing: "-0.02em"
            },
            "data-row": rowIdx,
            "data-field": field,
            onClick: ()=>{
                if (!isFocused) {
                    commitEdit();
                    setFocusedCell({
                        row: rowIdx,
                        field
                    });
                    setEditValue(rows[rowIdx][field] || "");
                }
            },
            onDoubleClick: (e)=>{
                if (st) {
                    const r = e.currentTarget.getBoundingClientRect();
                    setAccountPopup({
                        isOpen: true,
                        row: rowIdx,
                        field,
                        searchType: st,
                        anchorRect: {
                            top: r.bottom,
                            left: r.left
                        }
                    });
                }
            },
            children: [
                isFocused ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    autoFocus: true,
                    readOnly: isDropdownOnly,
                    className: `w-full h-full outline-none bg-transparent font-medium ${isDropdownOnly ? "caret-transparent cursor-pointer text-gray-800" : "text-gray-900"}`,
                    value: editValue,
                    onChange: (e)=>{
                        if (isDropdownOnly) return;
                        let v = e.target.value.replace(/[０-９]/g, (s)=>String.fromCharCode(s.charCodeAt(0) - 0xfee0));
                        setEditValue(v);
                    },
                    onFocus: (e)=>{
                        if (!isDropdownOnly) e.target.select();
                    },
                    onBlur: ()=>commitEdit(),
                    onKeyDown: (e)=>{
                        if (e.key === "Enter" || e.key === "Tab") {
                            e.preventDefault();
                            navigate(e.shiftKey ? "prev" : "next");
                        }
                        if (e.key === "F4" && st) {
                            e.preventDefault();
                            const r = e.currentTarget.getBoundingClientRect();
                            setAccountPopup({
                                isOpen: true,
                                row: rowIdx,
                                field,
                                searchType: st,
                                anchorRect: {
                                    top: r.bottom,
                                    left: r.left
                                }
                            });
                        }
                        // Prevent typing arbitrary text if it's meant to be selected via F4
                        if (isDropdownOnly && e.key !== "Enter" && e.key !== "Tab" && e.key !== "Escape" && e.key !== "F4" && !e.ctrlKey && !e.metaKey && !e.altKey) {
                            e.preventDefault();
                            // Option to open immediately on type
                            if (e.key.length === 1 || e.key === " ") {
                                const r = e.currentTarget.getBoundingClientRect();
                                setAccountPopup({
                                    isOpen: true,
                                    row: rowIdx,
                                    field,
                                    searchType: st,
                                    anchorRect: {
                                        top: r.bottom,
                                        left: r.left
                                    }
                                });
                            }
                        }
                        if (isAmount) {
                            if (e.key === "0") {
                                if (Date.now() - lastZeroTime.current < 250) {
                                    e.preventDefault();
                                    setEditValue((v)=>v + "00");
                                }
                                lastZeroTime.current = Date.now();
                            } else if (e.key === "+" || e.key === "*") {
                                e.preventDefault();
                                setEditValue((v)=>v + "000");
                            }
                        }
                    },
                    placeholder: placeholder
                }, void 0, false, {
                    fileName: "[project]/src/app/components/TransferSlip.tsx",
                    lineNumber: 379,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `truncate w-full inline-block font-medium text-gray-900 ${isAmount && val ? "text-right" : ""}`,
                    children: isAmount && val ? Number(val.replace(/,/g, "")).toLocaleString() : val
                }, void 0, false, {
                    fileName: "[project]/src/app/components/TransferSlip.tsx",
                    lineNumber: 423,
                    columnNumber: 11
                }, this),
                !isFocused && !val && placeholder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-400 absolute left-1.5",
                    children: placeholder
                }, void 0, false, {
                    fileName: "[project]/src/app/components/TransferSlip.tsx",
                    lineNumber: 427,
                    columnNumber: 47
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/TransferSlip.tsx",
            lineNumber: 359,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full bg-[#EEEEEE] overflow-hidden select-none",
        style: {
            fontFamily: "'Noto Sans JP', sans-serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col overflow-x-auto overflow-y-hidden bg-[#EEEEEE]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-[1312px] flex-1 flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex bg-[#EEEEEE] border-y border-[#DDDDDD] text-[10px] text-gray-700 font-bold h-10 items-center shrink-0",
                            style: {
                                scrollbarGutter: 'stable'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 border-r border-[#DDDDDD] h-full flex items-center justify-center shrink-0",
                                    children: "No."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/TransferSlip.tsx",
                                    lineNumber: 439,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 flex h-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-[480px] shrink-0 grid grid-cols-[300px_85px_95px] border-r-2 border-blue-300 bg-[#E1EEFA]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-rows-2 h-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-1.5 flex items-center border-b border-[#DDDDDD] h-full",
                                                            children: "借方勘定科目"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/TransferSlip.tsx",
                                                            lineNumber: 444,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-1.5 flex items-center opacity-70 h-full",
                                                            children: "借方補助科目"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/TransferSlip.tsx",
                                                            lineNumber: 445,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/TransferSlip.tsx",
                                                    lineNumber: 443,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-rows-2 border-l border-[#DDDDDD] h-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-1.5 flex items-center border-b border-[#DDDDDD] h-full",
                                                            children: "借方金額"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/TransferSlip.tsx",
                                                            lineNumber: 448,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-1.5 flex items-center text-blue-600 opacity-80 h-full",
                                                            children: "消費税額"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/TransferSlip.tsx",
                                                            lineNumber: 449,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/TransferSlip.tsx",
                                                    lineNumber: 447,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-rows-2 border-l border-[#DDDDDD] h-full text-[9px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-1.5 flex items-center border-b border-[#DDDDDD] h-full",
                                                            children: "借方部門"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/TransferSlip.tsx",
                                                            lineNumber: 452,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-1.5 flex items-center h-full",
                                                            children: "税区分/税率"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/TransferSlip.tsx",
                                                            lineNumber: 453,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/TransferSlip.tsx",
                                                    lineNumber: 451,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/TransferSlip.tsx",
                                            lineNumber: 442,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-[480px] shrink-0 grid grid-cols-[300px_85px_95px] border-r border-[#DDDDDD] bg-[#FAE1EB]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-rows-2 h-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-1.5 flex items-center border-b border-[#DDDDDD] h-full",
                                                            children: "貸方勘定科目"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/TransferSlip.tsx",
                                                            lineNumber: 459,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-1.5 flex items-center opacity-70 h-full",
                                                            children: "貸方補助科目"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/TransferSlip.tsx",
                                                            lineNumber: 460,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/TransferSlip.tsx",
                                                    lineNumber: 458,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-rows-2 border-l border-[#DDDDDD] h-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-1.5 flex items-center border-b border-[#DDDDDD] h-full",
                                                            children: "貸方金額"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/TransferSlip.tsx",
                                                            lineNumber: 463,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-1.5 flex items-center text-red-600 opacity-80 h-full",
                                                            children: "消費税額"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/TransferSlip.tsx",
                                                            lineNumber: 464,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/TransferSlip.tsx",
                                                    lineNumber: 462,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-rows-2 border-l border-[#DDDDDD] h-full text-[9px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-1.5 flex items-center border-b border-[#DDDDDD] h-full",
                                                            children: "貸方部門"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/TransferSlip.tsx",
                                                            lineNumber: 467,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-1.5 flex items-center h-full",
                                                            children: "税区分/税率"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/TransferSlip.tsx",
                                                            lineNumber: 468,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/TransferSlip.tsx",
                                                    lineNumber: 466,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/TransferSlip.tsx",
                                            lineNumber: 457,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-[180px] grid grid-rows-2 border-l-2 border-gray-400 bg-[#F5F5F5] h-full shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-1.5 flex items-center border-b border-[#DDDDDD] h-full",
                                                    children: "摘要"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/TransferSlip.tsx",
                                                    lineNumber: 473,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-1.5 flex items-center h-full",
                                                    children: "取引先 / 請求書"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/TransferSlip.tsx",
                                                    lineNumber: 474,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/TransferSlip.tsx",
                                            lineNumber: 472,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/TransferSlip.tsx",
                                    lineNumber: 440,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/TransferSlip.tsx",
                            lineNumber: 438,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-scroll bg-white",
                            style: {
                                scrollbarGutter: 'stable'
                            },
                            children: rows.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex border-b border-[#DDDDDD] hover:bg-blue-50/50 ${i % 2 === 1 ? "bg-gray-50/50" : ""}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 border-r border-[#DDDDDD] flex flex-col items-center py-1 text-[10px] text-gray-400 bg-[#F9F9F9] shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mb-1",
                                                    children: i + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/TransferSlip.tsx",
                                                    lineNumber: 484,
                                                    columnNumber: 19
                                                }, this),
                                                renderInput(i, "date", "", "border-none text-center bg-transparent mt-auto !min-h-[16px] !px-0")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/TransferSlip.tsx",
                                            lineNumber: 483,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 flex min-h-[48px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-[480px] shrink-0 grid grid-cols-[300px_85px_95px] border-r-2 border-blue-200 lg:bg-[#F0F8FF]/30",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-rows-2 h-full",
                                                            children: [
                                                                renderInput(i, "debitAccount", "借方勘定科目", "font-medium text-gray-900 bg-white/40"),
                                                                renderInput(i, "debitSub", "借方補助科目", "text-gray-700")
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/TransferSlip.tsx",
                                                            lineNumber: 490,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-rows-2 border-l border-[#DDDDDD] h-full text-right",
                                                            children: [
                                                                renderInput(i, "debitAmount", "0", "font-bold text-blue-900 bg-white/40"),
                                                                renderInput(i, "debitTaxAmount", "0", "text-blue-700/80")
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/TransferSlip.tsx",
                                                            lineNumber: 494,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-rows-2 border-l border-[#DDDDDD] h-full",
                                                            children: [
                                                                renderInput(i, "debitDept", "部門名", "text-[10px] text-gray-700"),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex h-full",
                                                                    children: [
                                                                        renderInput(i, "debitTax", "税区分", "flex-1 border-r border-[#EEEEEE] text-[9px] text-gray-600 px-1"),
                                                                        renderInput(i, "debitTaxRate", "10%", "w-8 text-[9px] text-center text-gray-600 !px-0")
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/components/TransferSlip.tsx",
                                                                    lineNumber: 500,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/TransferSlip.tsx",
                                                            lineNumber: 498,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/TransferSlip.tsx",
                                                    lineNumber: 489,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-[480px] shrink-0 grid grid-cols-[300px_85px_95px] border-r border-[#DDDDDD] lg:bg-[#FFF0F5]/30",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-rows-2 h-full",
                                                            children: [
                                                                renderInput(i, "creditAccount", "貸方勘定科目", "font-medium text-gray-900 bg-white/40"),
                                                                renderInput(i, "creditSub", "貸方補助科目", "text-gray-700")
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/TransferSlip.tsx",
                                                            lineNumber: 508,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-rows-2 border-l border-[#DDDDDD] h-full text-right",
                                                            children: [
                                                                renderInput(i, "creditAmount", "0", "font-bold text-red-900 bg-white/40"),
                                                                renderInput(i, "creditTaxAmount", "0", "text-red-700/80")
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/TransferSlip.tsx",
                                                            lineNumber: 512,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-rows-2 border-l border-[#DDDDDD] h-full",
                                                            children: [
                                                                renderInput(i, "creditDept", "部門名", "text-[10px] text-gray-700"),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex h-full",
                                                                    children: [
                                                                        renderInput(i, "creditTax", "税区分", "flex-1 border-r border-[#EEEEEE] text-[9px] text-gray-600 px-1"),
                                                                        renderInput(i, "creditTaxRate", "10%", "w-8 text-[9px] text-center text-gray-600 !px-0")
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/components/TransferSlip.tsx",
                                                                    lineNumber: 518,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/TransferSlip.tsx",
                                                            lineNumber: 516,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/TransferSlip.tsx",
                                                    lineNumber: 507,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-[180px] border-l-2 border-gray-400 bg-[#FAFAFA] shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-rows-2 h-full",
                                                        children: [
                                                            renderInput(i, "summary", "摘要", "text-gray-900"),
                                                            renderInput(i, "client", "取引先 / 請求書", "text-gray-700")
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/TransferSlip.tsx",
                                                        lineNumber: 526,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/TransferSlip.tsx",
                                                    lineNumber: 525,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/TransferSlip.tsx",
                                            lineNumber: 487,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/app/components/TransferSlip.tsx",
                                    lineNumber: 482,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/TransferSlip.tsx",
                            lineNumber: 480,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/TransferSlip.tsx",
                    lineNumber: 436,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/TransferSlip.tsx",
                lineNumber: 435,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-8 bg-[#D6D6D6] border-t border-gray-400 flex items-center px-4 gap-8 text-[11px] shrink-0 font-medium text-gray-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "借方合計:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/TransferSlip.tsx",
                                lineNumber: 541,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-blue-700 font-bold",
                                children: [
                                    "¥ ",
                                    debitTotal.toLocaleString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/TransferSlip.tsx",
                                lineNumber: 542,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/TransferSlip.tsx",
                        lineNumber: 540,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "貸方合計:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/TransferSlip.tsx",
                                lineNumber: 545,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-700 font-bold",
                                children: [
                                    "¥ ",
                                    creditTotal.toLocaleString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/TransferSlip.tsx",
                                lineNumber: 546,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/TransferSlip.tsx",
                        lineNumber: 544,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 ml-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "貸借差額:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/TransferSlip.tsx",
                                lineNumber: 549,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `font-bold ${diff === 0 ? "text-green-700" : "text-orange-600"}`,
                                children: [
                                    "¥ ",
                                    Math.abs(diff).toLocaleString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/TransferSlip.tsx",
                                lineNumber: 550,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/TransferSlip.tsx",
                        lineNumber: 548,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/TransferSlip.tsx",
                lineNumber: 539,
                columnNumber: 7
            }, this),
            accountPopup.isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$AccountSearchPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountSearchPopup"], {
                isOpen: true,
                onClose: ()=>setAccountPopup({
                        isOpen: false,
                        row: -1,
                        field: "",
                        searchType: "account",
                        anchorRect: null
                    }),
                searchType: accountPopup.searchType,
                onSelect: (acc)=>{
                    const { row, field } = accountPopup;
                    setAccountPopup({
                        isOpen: false,
                        row: -1,
                        field: "",
                        searchType: "account",
                        anchorRect: null
                    });
                    setRows((prev)=>{
                        const next = [
                            ...prev
                        ];
                        const newRow = {
                            ...next[row]
                        };
                        newRow[field] = acc.name;
                        if (accountPopup.searchType === "account") {
                            const taxField = field.replace("Account", "Tax");
                            if (taxField !== field && newRow[taxField] === "") {
                                newRow[taxField] = acc.taxType || "";
                            }
                        }
                        const calcTax = (amtStr, rateStr, taxType)=>{
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
                        else if (field === "client" && nextRow < next.length - 1) {
                            nextRow++;
                            nextIdx = FIELDS.indexOf("debitAccount");
                        }
                        if (nextIdx >= FIELDS.length) {
                            if (nextRow < next.length - 1) {
                                nextRow++;
                                nextIdx = 0;
                            } else nextIdx = FIELDS.length - 1;
                        }
                        const nextField = FIELDS[nextIdx];
                        setTimeout(()=>{
                            setFocusedCell({
                                row: nextRow,
                                field: nextField
                            });
                            setEditValue(next[nextRow][nextField] || "");
                        }, 0);
                        return next;
                    });
                },
                anchorRect: accountPopup.anchorRect
            }, void 0, false, {
                fileName: "[project]/src/app/components/TransferSlip.tsx",
                lineNumber: 557,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/TransferSlip.tsx",
        lineNumber: 433,
        columnNumber: 5
    }, this);
}
_s(TransferSlip, "3xvYLSq4w2Ec0F+Kyfw0Pts5Fcc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c2 = TransferSlip;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "INITIAL_ROWS$Array.from({ length: 1 }).map");
__turbopack_context__.k.register(_c1, "INITIAL_ROWS");
__turbopack_context__.k.register(_c2, "TransferSlip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/SubsidiaryLedger.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubsidiaryLedger",
    ()=>SubsidiaryLedger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$virtual$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-virtual/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function fmt(n) {
    if (n === null || n === 0) return "";
    return n.toLocaleString();
}
function SubsidiaryLedger() {
    _s();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const [selectedRow, setSelectedRow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedAccountId, setSelectedAccountId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SubsidiaryLedger.useEffect": ()=>{
            const handleAction = {
                "SubsidiaryLedger.useEffect.handleAction": (e)=>{
                    if (e.detail === "refresh") {
                        queryClient.invalidateQueries({
                            queryKey: [
                                "ledger"
                            ]
                        });
                        queryClient.invalidateQueries({
                            queryKey: [
                                "accounts"
                            ]
                        });
                    }
                }
            }["SubsidiaryLedger.useEffect.handleAction"];
            window.addEventListener("a2e-toolbar-action", handleAction);
            return ({
                "SubsidiaryLedger.useEffect": ()=>window.removeEventListener("a2e-toolbar-action", handleAction)
            })["SubsidiaryLedger.useEffect"];
        }
    }["SubsidiaryLedger.useEffect"], [
        queryClient
    ]);
    const { data: accountsData = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "accounts"
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAccounts"],
        staleTime: 1000 * 60 * 60
    });
    const { data: ledgerData = [], isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "ledger",
            selectedAccountId
        ],
        queryFn: {
            "SubsidiaryLedger.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchLedger"])(selectedAccountId)
        }["SubsidiaryLedger.useQuery"],
        enabled: !!selectedAccountId,
        refetchInterval: 2000
    });
    const parentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rowVirtualizer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$virtual$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useVirtualizer"])({
        count: ledgerData.length,
        getScrollElement: {
            "SubsidiaryLedger.useVirtualizer[rowVirtualizer]": ()=>parentRef.current
        }["SubsidiaryLedger.useVirtualizer[rowVirtualizer]"],
        estimateSize: {
            "SubsidiaryLedger.useVirtualizer[rowVirtualizer]": ()=>24
        }["SubsidiaryLedger.useVirtualizer[rowVirtualizer]"],
        overscan: 20
    });
    const columns = [
        {
            label: "日付",
            width: 60,
            align: "center",
            key: "date"
        },
        {
            label: "番号",
            width: 50,
            align: "center",
            key: "id"
        },
        {
            label: "相手勘定科目",
            width: 140,
            align: "left",
            key: "opposite_account"
        },
        {
            label: "摘要",
            width: "100%",
            align: "left",
            key: "summary"
        },
        {
            label: "借方金額",
            width: 110,
            align: "right",
            key: "debit_amount"
        },
        {
            label: "貸方金額",
            width: 110,
            align: "right",
            key: "credit_amount"
        },
        {
            label: "残高",
            width: 120,
            align: "right",
            key: "balance"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full bg-white select-none",
        style: {
            fontFamily: "'Noto Sans JP', sans-serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-2",
                style: {
                    height: 26,
                    backgroundColor: "#005BAC",
                    color: "#fff",
                    fontSize: 12,
                    flexShrink: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "補助元帳"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/SubsidiaryLedger.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "勘定科目:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/SubsidiaryLedger.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: selectedAccountId || "",
                                        onChange: (e)=>setSelectedAccountId(Number(e.target.value)),
                                        className: "text-black text-[11px] px-1 h-5 outline-none",
                                        style: {
                                            border: "1px solid #b0b0b0",
                                            borderRadius: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "選択してください"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/SubsidiaryLedger.tsx",
                                                lineNumber: 87,
                                                columnNumber: 15
                                            }, this),
                                            accountsData.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: a.id,
                                                    children: [
                                                        a.code,
                                                        " ",
                                                        a.name
                                                    ]
                                                }, a.id, true, {
                                                    fileName: "[project]/src/app/components/SubsidiaryLedger.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/SubsidiaryLedger.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/SubsidiaryLedger.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[11px]",
                                children: "令和7年度"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/SubsidiaryLedger.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/SubsidiaryLedger.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/SubsidiaryLedger.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex",
                style: {
                    backgroundColor: "#d0dce8",
                    borderBottom: "2px solid #005BAC",
                    flexShrink: 0
                },
                children: columns.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: col.width,
                            padding: "4px 6px",
                            borderRight: "1px solid #b0b0b0",
                            textAlign: col.align,
                            fontSize: 11,
                            color: "#333",
                            flexShrink: col.width === "100%" ? 1 : 0,
                            flexGrow: col.width === "100%" ? 1 : 0
                        },
                        children: col.label
                    }, col.label, false, {
                        fileName: "[project]/src/app/components/SubsidiaryLedger.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/components/SubsidiaryLedger.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: parentRef,
                className: "flex-1 overflow-auto bg-white",
                tabIndex: 0,
                style: {
                    outline: "none"
                },
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 text-sm text-gray-500",
                    children: "読み込み中..."
                }, void 0, false, {
                    fileName: "[project]/src/app/components/SubsidiaryLedger.tsx",
                    lineNumber: 121,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        height: `${rowVirtualizer.getTotalSize()}px`,
                        width: "100%",
                        position: "relative"
                    },
                    children: rowVirtualizer.getVirtualItems().map((virtualRow)=>{
                        const entry = ledgerData[virtualRow.index];
                        const isSelected = selectedRow === virtualRow.index;
                        const isNegative = entry.balance < 0;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex absolute top-0 left-0 w-full",
                            style: {
                                height: `${virtualRow.size}px`,
                                transform: `translateY(${virtualRow.start}px)`,
                                backgroundColor: isSelected ? "#E1F1FF" : virtualRow.index % 2 === 0 ? "#fff" : "#FAFAFA",
                                cursor: "pointer",
                                fontSize: 12
                            },
                            onClick: ()=>setSelectedRow(virtualRow.index),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 60,
                                        padding: "2px 6px",
                                        textAlign: "center",
                                        borderRight: "1px solid #e0e0e0",
                                        borderBottom: "1px solid #e0e0e0",
                                        flexShrink: 0
                                    },
                                    children: entry.date
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/SubsidiaryLedger.tsx",
                                    lineNumber: 142,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 50,
                                        padding: "2px 6px",
                                        textAlign: "center",
                                        borderRight: "1px solid #e0e0e0",
                                        borderBottom: "1px solid #e0e0e0",
                                        color: "#888",
                                        flexShrink: 0
                                    },
                                    children: entry.id
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/SubsidiaryLedger.tsx",
                                    lineNumber: 145,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 140,
                                        padding: "2px 6px",
                                        borderRight: "1px solid #e0e0e0",
                                        borderBottom: "1px solid #e0e0e0",
                                        flexShrink: 0
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate block",
                                        children: entry.opposite_account
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/SubsidiaryLedger.tsx",
                                        lineNumber: 149,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/SubsidiaryLedger.tsx",
                                    lineNumber: 148,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1,
                                        padding: "2px 6px",
                                        borderRight: "1px solid #e0e0e0",
                                        borderBottom: "1px solid #e0e0e0",
                                        minWidth: 0
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate block",
                                        children: entry.summary
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/SubsidiaryLedger.tsx",
                                        lineNumber: 152,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/SubsidiaryLedger.tsx",
                                    lineNumber: 151,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 110,
                                        padding: "2px 6px",
                                        textAlign: "right",
                                        borderRight: "1px solid #e0e0e0",
                                        borderBottom: "1px solid #e0e0e0",
                                        fontVariantNumeric: "tabular-nums",
                                        color: entry.debit_amount ? "#005BAC" : "#ccc",
                                        flexShrink: 0
                                    },
                                    children: fmt(entry.debit_amount)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/SubsidiaryLedger.tsx",
                                    lineNumber: 154,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 110,
                                        padding: "2px 6px",
                                        textAlign: "right",
                                        borderRight: "1px solid #e0e0e0",
                                        borderBottom: "1px solid #e0e0e0",
                                        fontVariantNumeric: "tabular-nums",
                                        color: entry.credit_amount ? "#C0392B" : "#ccc",
                                        flexShrink: 0
                                    },
                                    children: fmt(entry.credit_amount)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/SubsidiaryLedger.tsx",
                                    lineNumber: 157,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 120,
                                        padding: "2px 6px",
                                        textAlign: "right",
                                        borderBottom: "1px solid #e0e0e0",
                                        fontVariantNumeric: "tabular-nums",
                                        color: isNegative ? "#E74C3C" : "#222",
                                        backgroundColor: isNegative ? "#fff5f5" : "transparent",
                                        flexShrink: 0,
                                        fontWeight: "bold"
                                    },
                                    children: [
                                        isNegative && "△",
                                        Math.abs(entry.balance).toLocaleString()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/SubsidiaryLedger.tsx",
                                    lineNumber: 160,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, virtualRow.index, true, {
                            fileName: "[project]/src/app/components/SubsidiaryLedger.tsx",
                            lineNumber: 130,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/components/SubsidiaryLedger.tsx",
                    lineNumber: 123,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/SubsidiaryLedger.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-2",
                style: {
                    height: 28,
                    backgroundColor: "#E8E8E8",
                    borderTop: "2px solid #005BAC",
                    fontSize: 12,
                    flexShrink: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "#555"
                        },
                        children: [
                            "件数: ",
                            ledgerData.length.toLocaleString(),
                            "件"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/SubsidiaryLedger.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "借方合計: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "#005BAC",
                                            fontWeight: "bold"
                                        },
                                        children: [
                                            "¥",
                                            ledgerData.reduce((s, e)=>s + (e.debit_amount || 0), 0).toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/SubsidiaryLedger.tsx",
                                        lineNumber: 175,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/SubsidiaryLedger.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "貸方合計: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "#C0392B",
                                            fontWeight: "bold"
                                        },
                                        children: [
                                            "¥",
                                            ledgerData.reduce((s, e)=>s + (e.credit_amount || 0), 0).toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/SubsidiaryLedger.tsx",
                                        lineNumber: 176,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/SubsidiaryLedger.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "合計残高: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: ledgerData.length > 0 && ledgerData[ledgerData.length - 1].balance < 0 ? "#E74C3C" : "#27AE60",
                                            fontWeight: "bold"
                                        },
                                        children: [
                                            "¥",
                                            ledgerData.length > 0 ? Math.abs(ledgerData[ledgerData.length - 1].balance).toLocaleString() : "0"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/SubsidiaryLedger.tsx",
                                        lineNumber: 177,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/SubsidiaryLedger.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/SubsidiaryLedger.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/SubsidiaryLedger.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/SubsidiaryLedger.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_s(SubsidiaryLedger, "1WMgAGeGxAv7JRR4Plz6aohN+GQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$virtual$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useVirtualizer"]
    ];
});
_c = SubsidiaryLedger;
var _c;
__turbopack_context__.k.register(_c, "SubsidiaryLedger");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/Dashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dashboard",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calculator.js [app-client] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-client] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
;
;
function Dashboard({ onNavigate }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full overflow-auto",
        style: {
            fontFamily: "'Noto Sans JP', sans-serif",
            backgroundColor: "#f5f6f8"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-3",
                style: {
                    height: 30,
                    backgroundColor: "#005BAC",
                    color: "#fff",
                    fontSize: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "ダッシュボード — 株式会社サンプル"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Dashboard.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 11
                        },
                        children: "令和7年度 (2025/04/01 ～ 2026/03/31)"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Dashboard.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Dashboard.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 flex flex-col gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-4 gap-2",
                        children: [
                            {
                                label: "当月売上高",
                                value: "¥3,520,000",
                                change: "+12.3%",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                                color: "#005BAC",
                                changeBg: "#e8f4fd"
                            },
                            {
                                label: "当月仕入高",
                                value: "¥1,875,000",
                                change: "-3.1%",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"],
                                color: "#27ae60",
                                changeBg: "#e8fce8"
                            },
                            {
                                label: "当月経費",
                                value: "¥4,327,200",
                                change: "+5.7%",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
                                color: "#e67e22",
                                changeBg: "#fef5e7"
                            },
                            {
                                label: "普通預金残高",
                                value: "¥4,631,250",
                                change: "",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"],
                                color: "#555",
                                changeBg: "#f0f0f0"
                            }
                        ].map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col rounded",
                                style: {
                                    backgroundColor: "#fff",
                                    border: "1px solid #e0e0e0",
                                    padding: "10px 12px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        style: {
                                            fontSize: 11,
                                            color: "#888"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: card.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Dashboard.tsx",
                                                lineNumber: 89,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(card.icon, {
                                                size: 14,
                                                color: card.color
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Dashboard.tsx",
                                                lineNumber: 90,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Dashboard.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 18,
                                            color: "#222",
                                            fontVariantNumeric: "tabular-nums",
                                            marginTop: 4
                                        },
                                        children: card.value
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Dashboard.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this),
                                    card.change && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex self-start rounded px-1 mt-1",
                                        style: {
                                            fontSize: 10,
                                            backgroundColor: card.changeBg,
                                            color: card.color
                                        },
                                        children: [
                                            "前月比 ",
                                            card.change
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Dashboard.tsx",
                                        lineNumber: 103,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, card.label, true, {
                                fileName: "[project]/src/app/components/Dashboard.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Dashboard.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded",
                        style: {
                            backgroundColor: "#fff",
                            border: "1px solid #e0e0e0",
                            padding: "10px 12px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 12,
                                    color: "#555",
                                    marginBottom: 8
                                },
                                children: "クイックアクセス"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Dashboard.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-5 gap-2",
                                children: [
                                    {
                                        id: "transfer-slip",
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
                                        label: "振替伝票",
                                        desc: "仕訳入力"
                                    },
                                    {
                                        id: "subsidiary-ledger",
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"],
                                        label: "補助元帳",
                                        desc: "残高確認"
                                    },
                                    {
                                        id: "journal",
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
                                        label: "仕訳日記帳",
                                        desc: "仕訳一覧"
                                    },
                                    {
                                        id: "general-ledger",
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"],
                                        label: "総勘定元帳",
                                        desc: "勘定照会"
                                    },
                                    {
                                        id: "trial-balance",
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
                                        label: "残高試算表",
                                        desc: "集計表"
                                    }
                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center gap-1 cursor-pointer rounded py-2",
                                        style: {
                                            border: "1px solid #e8e8e8",
                                            fontSize: 11,
                                            transition: "all 0.1s"
                                        },
                                        onClick: ()=>onNavigate(item.id),
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.borderColor = "#005BAC";
                                            e.currentTarget.style.backgroundColor = "#f0f7ff";
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.borderColor = "#e8e8e8";
                                            e.currentTarget.style.backgroundColor = "transparent";
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                size: 20,
                                                color: "#005BAC"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Dashboard.tsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: "#333"
                                                },
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Dashboard.tsx",
                                                lineNumber: 157,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 10,
                                                    color: "#999"
                                                },
                                                children: item.desc
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Dashboard.tsx",
                                                lineNumber: 158,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/src/app/components/Dashboard.tsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Dashboard.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Dashboard.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded",
                        style: {
                            backgroundColor: "#fff",
                            border: "1px solid #e0e0e0",
                            padding: "10px 12px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                style: {
                                    fontSize: 12,
                                    color: "#555",
                                    marginBottom: 6
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "最近の仕訳（直近5件）"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Dashboard.tsx",
                                        lineNumber: 177,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "cursor-pointer",
                                        style: {
                                            color: "#005BAC",
                                            fontSize: 11
                                        },
                                        onClick: ()=>onNavigate("transfer-slip"),
                                        children: "すべて表示 →"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Dashboard.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Dashboard.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full",
                                style: {
                                    borderCollapse: "collapse",
                                    fontSize: 11
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            style: {
                                                backgroundColor: "#f5f5f5"
                                            },
                                            children: [
                                                "日付",
                                                "借方科目",
                                                "貸方科目",
                                                "金額",
                                                "摘要"
                                            ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: {
                                                        padding: "4px 6px",
                                                        borderBottom: "1px solid #e0e0e0",
                                                        textAlign: h === "金額" ? "right" : "left",
                                                        color: "#666"
                                                    },
                                                    children: h
                                                }, h, false, {
                                                    fileName: "[project]/src/app/components/Dashboard.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Dashboard.tsx",
                                            lineNumber: 191,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Dashboard.tsx",
                                        lineNumber: 190,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: [
                                            [
                                                "04/28",
                                                "租税公課",
                                                "普通預金",
                                                "120,000",
                                                "固定資産税 第1期分"
                                            ],
                                            [
                                                "04/28",
                                                "普通預金",
                                                "売掛金",
                                                "880,000",
                                                "売掛金回収 ㈱田中製作所"
                                            ],
                                            [
                                                "04/25",
                                                "法定福利費",
                                                "普通預金",
                                                "385,000",
                                                "社会保険料 事業主負担分"
                                            ],
                                            [
                                                "04/22",
                                                "売掛金",
                                                "売上高",
                                                "550,000",
                                                "製品販売 A-100型"
                                            ],
                                            [
                                                "04/20",
                                                "水道光熱費",
                                                "普通預金",
                                                "67,200",
                                                "電気料金 4月分"
                                            ]
                                        ].map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                style: {
                                                    borderBottom: "1px solid #f0f0f0"
                                                },
                                                onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = "#f8f9fb",
                                                onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = "transparent",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: "4px 6px"
                                                        },
                                                        children: row[0]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Dashboard.tsx",
                                                        lineNumber: 229,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: "4px 6px"
                                                        },
                                                        children: row[1]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Dashboard.tsx",
                                                        lineNumber: 230,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: "4px 6px"
                                                        },
                                                        children: row[2]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Dashboard.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: "4px 6px",
                                                            textAlign: "right",
                                                            fontVariantNumeric: "tabular-nums"
                                                        },
                                                        children: [
                                                            "¥",
                                                            row[3]
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/Dashboard.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: "4px 6px",
                                                            color: "#666"
                                                        },
                                                        children: row[4]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Dashboard.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/app/components/Dashboard.tsx",
                                                lineNumber: 217,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Dashboard.tsx",
                                        lineNumber: 209,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Dashboard.tsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Dashboard.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded",
                        style: {
                            backgroundColor: "#fff",
                            border: "1px solid #e0e0e0",
                            padding: "10px 12px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 12,
                                    color: "#555",
                                    marginBottom: 6
                                },
                                children: "お知らせ・アラート"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Dashboard.tsx",
                                lineNumber: 259,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-1",
                                children: [
                                    {
                                        type: "warning",
                                        msg: "消費税の中間申告期限が近づいています（5月末）"
                                    },
                                    {
                                        type: "info",
                                        msg: "4月度の仕訳入力が完了していません（残り3件）"
                                    },
                                    {
                                        type: "info",
                                        msg: "弥生会計A2E v0.1 がリリースされました"
                                    }
                                ].map((n, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 rounded px-2 py-1",
                                        style: {
                                            fontSize: 11,
                                            backgroundColor: n.type === "warning" ? "#fff8e1" : "#e8f4fd",
                                            color: n.type === "warning" ? "#e65100" : "#005BAC",
                                            border: `1px solid ${n.type === "warning" ? "#ffe082" : "#bbdefb"}`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Dashboard.tsx",
                                                lineNumber: 290,
                                                columnNumber: 17
                                            }, this),
                                            n.msg
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/app/components/Dashboard.tsx",
                                        lineNumber: 277,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Dashboard.tsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Dashboard.tsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Dashboard.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Dashboard.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = Dashboard;
var _c;
__turbopack_context__.k.register(_c, "Dashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/TrialBalance.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrialBalance",
    ()=>TrialBalance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function TrialBalance({ onDrilldown }) {
    _s();
    const { data, isLoading, isError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "trial-balance"
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchTrialBalance"],
        refetchInterval: 2000
    });
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 text-sm",
        children: "読み込み中..."
    }, void 0, false, {
        fileName: "[project]/src/app/components/TrialBalance.tsx",
        lineNumber: 17,
        columnNumber: 27
    }, this);
    if (isError) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 text-sm text-red-500",
        children: "エラーが発生しました。"
    }, void 0, false, {
        fileName: "[project]/src/app/components/TrialBalance.tsx",
        lineNumber: 18,
        columnNumber: 25
    }, this);
    const tbData = data || [];
    const totalDebit = tbData.reduce((sum, r)=>sum + (r.debit_total || 0), 0);
    const totalCredit = tbData.reduce((sum, r)=>sum + (r.credit_total || 0), 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full bg-white select-none",
        style: {
            fontFamily: "'Noto Sans JP', sans-serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-2",
                style: {
                    height: 26,
                    backgroundColor: "#005BAC",
                    color: "#fff",
                    fontSize: 12,
                    flexShrink: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "残高試算表"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/TrialBalance.tsx",
                        lineNumber: 32,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "令和7年度"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/TrialBalance.tsx",
                        lineNumber: 33,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/TrialBalance.tsx",
                lineNumber: 28,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-auto p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full",
                    style: {
                        borderCollapse: "collapse",
                        fontSize: 13
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            style: {
                                backgroundColor: "#f0f0f0"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "border p-2 text-center",
                                        style: {
                                            width: 120
                                        },
                                        children: "借方残高"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/TrialBalance.tsx",
                                        lineNumber: 40,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "border p-2 text-center",
                                        style: {
                                            width: 120
                                        },
                                        children: "借方合計"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/TrialBalance.tsx",
                                        lineNumber: 41,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "border p-2 text-center",
                                        style: {
                                            width: 150
                                        },
                                        children: "勘定科目"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/TrialBalance.tsx",
                                        lineNumber: 42,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "border p-2 text-center",
                                        style: {
                                            width: 120
                                        },
                                        children: "貸方合計"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/TrialBalance.tsx",
                                        lineNumber: 43,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "border p-2 text-center",
                                        style: {
                                            width: 120
                                        },
                                        children: "貸方残高"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/TrialBalance.tsx",
                                        lineNumber: 44,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/TrialBalance.tsx",
                                lineNumber: 39,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/TrialBalance.tsx",
                            lineNumber: 38,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: tbData.map((row)=>{
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "hover:bg-blue-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "border p-2 text-right",
                                            children: row.debit_balance > 0 ? row.debit_balance.toLocaleString() : ""
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/TrialBalance.tsx",
                                            lineNumber: 51,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "border p-2 text-right text-gray-600",
                                            children: row.debit_total > 0 ? row.debit_total.toLocaleString() : ""
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/TrialBalance.tsx",
                                            lineNumber: 54,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "border p-2 text-center text-blue-600 cursor-pointer hover:underline font-medium",
                                            onClick: ()=>onDrilldown(row.account_name, row.account_code),
                                            children: row.account_name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/TrialBalance.tsx",
                                            lineNumber: 57,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "border p-2 text-right text-gray-600",
                                            children: row.credit_total > 0 ? row.credit_total.toLocaleString() : ""
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/TrialBalance.tsx",
                                            lineNumber: 63,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "border p-2 text-right",
                                            children: row.credit_balance > 0 ? row.credit_balance.toLocaleString() : ""
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/TrialBalance.tsx",
                                            lineNumber: 66,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, row.account_code, true, {
                                    fileName: "[project]/src/app/components/TrialBalance.tsx",
                                    lineNumber: 50,
                                    columnNumber: 33
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/TrialBalance.tsx",
                            lineNumber: 47,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                style: {
                                    backgroundColor: "#e2e8f0",
                                    fontWeight: "bold"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "border p-2 text-right"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/TrialBalance.tsx",
                                        lineNumber: 75,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "border p-2 text-right",
                                        children: totalDebit.toLocaleString()
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/TrialBalance.tsx",
                                        lineNumber: 76,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "border p-2 text-center",
                                        children: "合計"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/TrialBalance.tsx",
                                        lineNumber: 77,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "border p-2 text-right",
                                        children: totalCredit.toLocaleString()
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/TrialBalance.tsx",
                                        lineNumber: 78,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "border p-2 text-right"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/TrialBalance.tsx",
                                        lineNumber: 79,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/TrialBalance.tsx",
                                lineNumber: 74,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/TrialBalance.tsx",
                            lineNumber: 73,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/TrialBalance.tsx",
                    lineNumber: 37,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/TrialBalance.tsx",
                lineNumber: 36,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/TrialBalance.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, this);
}
_s(TrialBalance, "MSjTYoPrHxtduNXA41YFDDh1ZTg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = TrialBalance;
var _c;
__turbopack_context__.k.register(_c, "TrialBalance");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/JournalDiary.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JournalDiary",
    ()=>JournalDiary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function JournalDiary({ onDrilldown }) {
    _s();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const searchInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { data: diary = [], isLoading, isError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "diary"
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchDiary"],
        refetchInterval: 2000
    });
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JournalDiary.useEffect": ()=>{
            const handleAction = {
                "JournalDiary.useEffect.handleAction": (e)=>{
                    if (e.detail === "search") {
                        searchInputRef.current?.focus();
                    }
                    if (e.detail === "refresh") {
                        queryClient.invalidateQueries({
                            queryKey: [
                                "diary"
                            ]
                        });
                    }
                    if (e.detail === "delete" || e.detail === "delete_row") {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("仕訳の削除・修正は、ダブルクリックで振替伝票を開いてから行ってください。");
                    }
                }
            }["JournalDiary.useEffect.handleAction"];
            window.addEventListener("a2e-toolbar-action", handleAction);
            return ({
                "JournalDiary.useEffect": ()=>window.removeEventListener("a2e-toolbar-action", handleAction)
            })["JournalDiary.useEffect"];
        }
    }["JournalDiary.useEffect"], [
        queryClient
    ]);
    const filteredDiary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "JournalDiary.useMemo[filteredDiary]": ()=>{
            if (!searchQuery) return diary;
            const lower = searchQuery.toLowerCase();
            return diary.filter({
                "JournalDiary.useMemo[filteredDiary]": (row)=>(row.debit_account || "").toLowerCase().includes(lower) || (row.credit_account || "").toLowerCase().includes(lower) || (row.summary || "").toLowerCase().includes(lower) || (row.date || "").includes(lower) || (row.debit_amount?.toString() || "").includes(lower) || (row.credit_amount?.toString() || "").includes(lower)
            }["JournalDiary.useMemo[filteredDiary]"]);
        }
    }["JournalDiary.useMemo[filteredDiary]"], [
        diary,
        searchQuery
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full bg-[#EEEEEE] overflow-hidden select-none",
        style: {
            fontFamily: "'Noto Sans JP', sans-serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-2 shrink-0",
                style: {
                    height: 26,
                    backgroundColor: "#005BAC",
                    color: "#fff",
                    fontSize: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "仕訳日記帳"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/JournalDiary.tsx",
                        lineNumber: 61,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        size: 12,
                                        className: "absolute left-1.5 text-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/JournalDiary.tsx",
                                        lineNumber: 64,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: searchInputRef,
                                        type: "text",
                                        placeholder: "検索(F10)...",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        className: "text-black text-[11px] pl-5 pr-1 py-0.5 outline-none rounded-sm w-48",
                                        style: {
                                            border: "1px solid #b0b0b0"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/JournalDiary.tsx",
                                        lineNumber: 65,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/JournalDiary.tsx",
                                lineNumber: 63,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px]",
                                children: "令和7年度"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/JournalDiary.tsx",
                                lineNumber: 75,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/JournalDiary.tsx",
                        lineNumber: 62,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/JournalDiary.tsx",
                lineNumber: 57,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col overflow-x-auto overflow-y-hidden bg-[#EEEEEE]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-[1344px] flex-1 flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex bg-[#EEEEEE] border-b border-[#DDDDDD] text-[10px] text-gray-700 font-bold h-10 items-center shrink-0",
                            style: {
                                scrollbarGutter: 'stable'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 border-r border-[#DDDDDD] h-full grid grid-rows-2 shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center border-b border-[#DDDDDD] h-full",
                                            children: "日付"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                                            lineNumber: 85,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center h-full",
                                            children: "伝票No."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                                            lineNumber: 86,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/JournalDiary.tsx",
                                    lineNumber: 84,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 flex h-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-[480px] shrink-0 grid grid-cols-[300px_85px_95px] border-r-2 border-blue-300 bg-[#E1EEFA]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-rows-2 h-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-1.5 flex items-center border-b border-[#DDDDDD] h-full",
                                                            children: "借方勘定科目"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                            lineNumber: 92,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-1.5 flex items-center opacity-70 h-full",
                                                            children: "借方補助科目"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                            lineNumber: 93,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-rows-2 border-l border-[#DDDDDD] h-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-1.5 flex items-center border-b border-[#DDDDDD] h-full",
                                                            children: "借方金額"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                            lineNumber: 96,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-1.5 flex items-center text-blue-600 opacity-80 h-full",
                                                            children: "消費税額"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                            lineNumber: 97,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-rows-2 border-l border-[#DDDDDD] h-full text-[9px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-1.5 flex items-center border-b border-[#DDDDDD] h-full",
                                                            children: "借方部門"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                            lineNumber: 100,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-1.5 flex items-center h-full",
                                                            children: "税区分/税率"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                            lineNumber: 101,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                                            lineNumber: 90,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-[480px] shrink-0 grid grid-cols-[300px_85px_95px] border-r border-[#DDDDDD] bg-[#FAE1EB]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-rows-2 h-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-1.5 flex items-center border-b border-[#DDDDDD] h-full",
                                                            children: "貸方勘定科目"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-1.5 flex items-center opacity-70 h-full",
                                                            children: "貸方補助科目"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                            lineNumber: 108,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-rows-2 border-l border-[#DDDDDD] h-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-1.5 flex items-center border-b border-[#DDDDDD] h-full",
                                                            children: "貸方金額"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                            lineNumber: 111,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-1.5 flex items-center text-red-600 opacity-80 h-full",
                                                            children: "消費税額"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                            lineNumber: 112,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-rows-2 border-l border-[#DDDDDD] h-full text-[9px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-1.5 flex items-center border-b border-[#DDDDDD] h-full",
                                                            children: "貸方部門"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                            lineNumber: 115,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-1.5 flex items-center h-full",
                                                            children: "税区分/税率"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                                            lineNumber: 105,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-[180px] grid grid-rows-2 border-l-2 border-gray-400 bg-[#F5F5F5] h-full shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-1.5 flex items-center border-b border-[#DDDDDD] h-full",
                                                    children: "摘要"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-1.5 flex items-center h-full",
                                                    children: "取引先 / 請求書"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                                            lineNumber: 120,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/JournalDiary.tsx",
                                    lineNumber: 88,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                            lineNumber: 83,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-scroll bg-white",
                            tabIndex: 0,
                            style: {
                                outline: "none",
                                scrollbarGutter: 'stable'
                            },
                            children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 text-sm text-gray-500",
                                children: "読み込み中..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/JournalDiary.tsx",
                                lineNumber: 130,
                                columnNumber: 29
                            }, this) : isError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 text-sm text-red-500",
                                children: "エラーが発生しました。"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/JournalDiary.tsx",
                                lineNumber: 132,
                                columnNumber: 29
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    filteredDiary.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `flex border-b border-[#DDDDDD] cursor-pointer hover:bg-blue-50/50 ${i % 2 === 1 ? "bg-gray-50/50" : "bg-white"}`,
                                            onDoubleClick: ()=>onDrilldown(row.id),
                                            onClick: (e)=>e.currentTarget.focus(),
                                            onKeyDown: (e)=>{
                                                if (e.key === 'Enter') onDrilldown(row.id);
                                            },
                                            tabIndex: 0,
                                            style: {
                                                outline: "none"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-16 border-r border-[#DDDDDD] grid grid-rows-2 text-[10px] text-gray-500 shrink-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-center border-b border-[#DDDDDD]",
                                                            children: row.date
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-center",
                                                            children: row.id
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 flex min-h-[48px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-[480px] shrink-0 grid grid-cols-[300px_85px_95px] border-r-2 border-blue-200",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-rows-2 h-full text-[11px]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "px-1.5 flex items-center border-b border-[#DDDDDD] font-medium text-gray-900",
                                                                            children: row.debit_account
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                                            lineNumber: 155,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "px-1.5 flex items-center text-gray-700",
                                                                            children: row.debit_sub
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                                            lineNumber: 156,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                                    lineNumber: 154,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-rows-2 border-l border-[#DDDDDD] h-full text-[11px] font-variant-numeric-tabular",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "px-1.5 flex items-center justify-end border-b border-[#DDDDDD] font-bold text-blue-900",
                                                                            children: row.debit_amount ? row.debit_amount.toLocaleString() : ""
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                                            lineNumber: 159,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "px-1.5 flex items-center justify-end text-blue-700/80",
                                                                            children: row.debit_tax_amount ? row.debit_tax_amount.toLocaleString() : "0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                                            lineNumber: 162,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                                    lineNumber: 158,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-rows-2 border-l border-[#DDDDDD] h-full",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "px-1.5 flex items-center border-b border-[#DDDDDD] text-[10px] text-gray-700",
                                                                            children: row.debit_dept
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                                            lineNumber: 167,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex h-full",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex-1 px-1.5 flex items-center border-r border-[#EEEEEE] text-[9px] text-gray-600 truncate px-1",
                                                                                    children: row.debit_tax
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                                                    lineNumber: 169,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-8 flex items-center justify-center text-[9px] text-gray-600 !px-0",
                                                                                    children: row.debit_tax ? "10%" : ""
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                                                    lineNumber: 170,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                                            lineNumber: 168,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                                    lineNumber: 166,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                            lineNumber: 153,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-[480px] shrink-0 grid grid-cols-[300px_85px_95px] border-r border-[#DDDDDD]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-rows-2 h-full text-[11px]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "px-1.5 flex items-center border-b border-[#DDDDDD] font-medium text-gray-900",
                                                                            children: row.credit_account
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                                            lineNumber: 177,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "px-1.5 flex items-center text-gray-700",
                                                                            children: row.credit_sub
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                                            lineNumber: 178,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                                    lineNumber: 176,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-rows-2 border-l border-[#DDDDDD] h-full text-[11px] font-variant-numeric-tabular",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "px-1.5 flex items-center justify-end border-b border-[#DDDDDD] font-bold text-red-900",
                                                                            children: row.credit_amount ? row.credit_amount.toLocaleString() : ""
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                                            lineNumber: 181,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "px-1.5 flex items-center justify-end text-red-700/80",
                                                                            children: row.credit_tax_amount ? row.credit_tax_amount.toLocaleString() : "0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                                            lineNumber: 184,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                                    lineNumber: 180,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-rows-2 border-l border-[#DDDDDD] h-full",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "px-1.5 flex items-center border-b border-[#DDDDDD] text-[10px] text-gray-700",
                                                                            children: row.credit_dept
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                                            lineNumber: 189,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex h-full",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex-1 px-1.5 flex items-center border-r border-[#EEEEEE] text-[9px] text-gray-600 truncate px-1",
                                                                                    children: row.credit_tax
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                                                    lineNumber: 191,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-8 flex items-center justify-center text-[9px] text-gray-600 !px-0",
                                                                                    children: row.credit_tax ? "10%" : ""
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                                                    lineNumber: 192,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                                            lineNumber: 190,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                                    lineNumber: 188,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                            lineNumber: 175,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-[180px] border-l-2 border-gray-400 bg-[#FAFAFA] text-[11px] shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-rows-2 h-full",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "px-1.5 flex items-center border-b border-[#DDDDDD] text-gray-900 truncate",
                                                                        children: row.summary
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                                        lineNumber: 199,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "px-1.5 flex items-center text-gray-700 truncate"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                                        lineNumber: 200,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                                lineNumber: 198,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                            lineNumber: 197,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/JournalDiary.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, row.id, true, {
                                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                                            lineNumber: 136,
                                            columnNumber: 37
                                        }, this)),
                                    filteredDiary.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 text-center text-xs text-gray-500",
                                        children: "一致する仕訳がありません。"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/JournalDiary.tsx",
                                        lineNumber: 207,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/JournalDiary.tsx",
                                lineNumber: 134,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/JournalDiary.tsx",
                            lineNumber: 128,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/JournalDiary.tsx",
                    lineNumber: 81,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/JournalDiary.tsx",
                lineNumber: 80,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-8 bg-[#D6D6D6] border-t border-gray-400 flex items-center px-4 gap-8 text-[11px] shrink-0 font-medium text-gray-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "#555"
                        },
                        children: [
                            "表示件数: ",
                            filteredDiary.length.toLocaleString(),
                            "件"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/JournalDiary.tsx",
                        lineNumber: 216,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 10,
                            color: "#888"
                        },
                        className: "ml-auto",
                        children: "※ ダブルクリックまたは Enter で振替伝票を開きます"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/JournalDiary.tsx",
                        lineNumber: 217,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/JournalDiary.tsx",
                lineNumber: 215,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/JournalDiary.tsx",
        lineNumber: 55,
        columnNumber: 9
    }, this);
}
_s(JournalDiary, "pPlwCz4tUnYOCeeoV+ZDvVFu1xg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = JournalDiary;
var _c;
__turbopack_context__.k.register(_c, "JournalDiary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/GeneralLedger.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GeneralLedger",
    ()=>GeneralLedger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function GeneralLedger({ initialAccountId, initialAccountCode }) {
    _s();
    const [selectedAccountId, setSelectedAccountId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialAccountId || null);
    const { data: accountsData = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "accounts"
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAccounts"],
        staleTime: 1000 * 60 * 60
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GeneralLedger.useEffect": ()=>{
            if (!selectedAccountId && initialAccountCode && accountsData.length > 0) {
                const match = accountsData.find({
                    "GeneralLedger.useEffect.match": (a)=>a.code === initialAccountCode
                }["GeneralLedger.useEffect.match"]);
                if (match) setSelectedAccountId(match.id);
            }
        }
    }["GeneralLedger.useEffect"], [
        initialAccountCode,
        accountsData,
        selectedAccountId
    ]);
    const { data: ledger = [], isLoading, isError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "ledger",
            selectedAccountId
        ],
        queryFn: {
            "GeneralLedger.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchLedger"])(selectedAccountId)
        }["GeneralLedger.useQuery"],
        enabled: !!selectedAccountId,
        refetchInterval: 2000
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full bg-white select-none",
        style: {
            fontFamily: "'Noto Sans JP', sans-serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-2",
                style: {
                    height: 26,
                    backgroundColor: "#005BAC",
                    color: "#fff",
                    fontSize: 12,
                    flexShrink: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "総勘定元帳"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/GeneralLedger.tsx",
                        lineNumber: 42,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "勘定科目:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/GeneralLedger.tsx",
                                lineNumber: 44,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedAccountId || "",
                                onChange: (e)=>setSelectedAccountId(Number(e.target.value)),
                                className: "text-black text-xs px-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "選択してください"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/GeneralLedger.tsx",
                                        lineNumber: 50,
                                        columnNumber: 25
                                    }, this),
                                    accountsData.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: a.id,
                                            children: [
                                                a.code,
                                                " ",
                                                a.name
                                            ]
                                        }, a.id, true, {
                                            fileName: "[project]/src/app/components/GeneralLedger.tsx",
                                            lineNumber: 52,
                                            columnNumber: 29
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/GeneralLedger.tsx",
                                lineNumber: 45,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/GeneralLedger.tsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "令和7年度"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/GeneralLedger.tsx",
                        lineNumber: 56,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/GeneralLedger.tsx",
                lineNumber: 38,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-auto p-4",
                children: !selectedAccountId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm text-gray-500 text-center mt-10",
                    children: "勘定科目を選択してください"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/GeneralLedger.tsx",
                    lineNumber: 61,
                    columnNumber: 21
                }, this) : isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 text-sm",
                    children: "読み込み中..."
                }, void 0, false, {
                    fileName: "[project]/src/app/components/GeneralLedger.tsx",
                    lineNumber: 63,
                    columnNumber: 21
                }, this) : isError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 text-sm text-red-500",
                    children: "エラーが発生しました。"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/GeneralLedger.tsx",
                    lineNumber: 65,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full",
                    style: {
                        borderCollapse: "collapse",
                        fontSize: 12
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            style: {
                                backgroundColor: "#f0f0f0"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "border p-2 text-center",
                                        style: {
                                            width: 80
                                        },
                                        children: "日付"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/GeneralLedger.tsx",
                                        lineNumber: 70,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "border p-2 text-center",
                                        style: {
                                            width: 150
                                        },
                                        children: "相手勘定科目"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/GeneralLedger.tsx",
                                        lineNumber: 71,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "border p-2 text-center",
                                        children: "摘要"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/GeneralLedger.tsx",
                                        lineNumber: 72,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "border p-2 text-center",
                                        style: {
                                            width: 120
                                        },
                                        children: "借方金額"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/GeneralLedger.tsx",
                                        lineNumber: 73,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "border p-2 text-center",
                                        style: {
                                            width: 120
                                        },
                                        children: "貸方金額"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/GeneralLedger.tsx",
                                        lineNumber: 74,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "border p-2 text-center",
                                        style: {
                                            width: 120
                                        },
                                        children: "差引残高"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/GeneralLedger.tsx",
                                        lineNumber: 75,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/GeneralLedger.tsx",
                                lineNumber: 69,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/GeneralLedger.tsx",
                            lineNumber: 68,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: [
                                ledger.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "hover:bg-blue-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "border p-2 text-center",
                                                children: row.date
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/GeneralLedger.tsx",
                                                lineNumber: 81,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "border p-2",
                                                children: row.opposite_account
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/GeneralLedger.tsx",
                                                lineNumber: 82,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "border p-2 truncate max-w-xs",
                                                children: row.summary
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/GeneralLedger.tsx",
                                                lineNumber: 83,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "border p-2 text-right",
                                                children: row.debit_amount ? row.debit_amount.toLocaleString() : ""
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/GeneralLedger.tsx",
                                                lineNumber: 84,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "border p-2 text-right",
                                                children: row.credit_amount ? row.credit_amount.toLocaleString() : ""
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/GeneralLedger.tsx",
                                                lineNumber: 85,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "border p-2 text-right font-semibold",
                                                children: row.balance.toLocaleString()
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/GeneralLedger.tsx",
                                                lineNumber: 86,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, row.id, true, {
                                        fileName: "[project]/src/app/components/GeneralLedger.tsx",
                                        lineNumber: 80,
                                        columnNumber: 33
                                    }, this)),
                                ledger.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: 6,
                                        className: "text-center p-4 text-gray-500",
                                        children: "仕訳データがありません"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/GeneralLedger.tsx",
                                        lineNumber: 91,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/GeneralLedger.tsx",
                                    lineNumber: 90,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/GeneralLedger.tsx",
                            lineNumber: 78,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/GeneralLedger.tsx",
                    lineNumber: 67,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/GeneralLedger.tsx",
                lineNumber: 59,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/GeneralLedger.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, this);
}
_s(GeneralLedger, "GBIXyOKhdwi0VEAviABZIspkDQc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = GeneralLedger;
var _c;
__turbopack_context__.k.register(_c, "GeneralLedger");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/InitialBalance.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InitialBalance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function InitialBalance() {
    _s();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("資産");
    const [balances, setBalances] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [showToast, setShowToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Default query to ensure we have accounts
    const { data: accountsData = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'accounts'
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAccounts"],
        staleTime: 1000 * 60 * 60
    });
    // Fetch initial statements to pre-fill if they exist
    const { data: fsData = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'financialStatements'
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchFinancialStatements"]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InitialBalance.useEffect": ()=>{
            // Basic pre-fill logic if data exists (simplistic for PoC)
            // Real app would fetch the raw balances table directly, but calculating from FS works if no journals
            if (Array.isArray(fsData) && fsData.length > 0 && Object.keys(balances).length === 0) {
                const newBalances = {};
                let hasAny = false;
                fsData.forEach({
                    "InitialBalance.useEffect": (cat)=>{
                        if (cat && Array.isArray(cat.accounts)) {
                            cat.accounts.forEach({
                                "InitialBalance.useEffect": (accInfo)=>{
                                    const accDef = Array.isArray(accountsData) ? accountsData.find({
                                        "InitialBalance.useEffect": (a)=>a.name === accInfo.name
                                    }["InitialBalance.useEffect"]) : undefined;
                                    if (accDef) {
                                        newBalances[accDef.id] = accInfo.amount;
                                        hasAny = true;
                                    }
                                }
                            }["InitialBalance.useEffect"]);
                        }
                    }
                }["InitialBalance.useEffect"]);
                if (hasAny) {
                    setBalances(newBalances);
                }
            }
        }
    }["InitialBalance.useEffect"], [
        fsData,
        accountsData,
        balances
    ]);
    const handleAmountChange = (accountId, value)=>{
        const numericValue = parseInt(value.replace(/,/g, ''), 10) || 0;
        setBalances((prev)=>({
                ...prev,
                [accountId]: numericValue
            }));
    };
    const { debitTotal, creditTotal, isBalanced } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InitialBalance.useMemo": ()=>{
            let d = 0;
            let c = 0;
            if (Array.isArray(accountsData)) {
                accountsData.forEach({
                    "InitialBalance.useMemo": (acc)=>{
                        const amt = balances[acc.id] || 0;
                        if (acc.category === "資産") d += amt;
                        if (acc.category === "負債" || acc.category === "純資産") c += amt;
                    }
                }["InitialBalance.useMemo"]);
            }
            return {
                debitTotal: d,
                creditTotal: c,
                isBalanced: d === c && d > 0 // Require some input
            };
        }
    }["InitialBalance.useMemo"], [
        balances,
        accountsData
    ]);
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "InitialBalance.useMutation[mutation]": async ()=>{
                const payload = Object.entries(balances).filter({
                    "InitialBalance.useMutation[mutation].payload": ([_, amt])=>amt > 0
                }["InitialBalance.useMutation[mutation].payload"]).map({
                    "InitialBalance.useMutation[mutation].payload": ([id, amt])=>({
                            account_id: parseInt(id),
                            amount: amt
                        })
                }["InitialBalance.useMutation[mutation].payload"]);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateInitialBalances"])({
                    balances: payload
                });
            }
        }["InitialBalance.useMutation[mutation]"],
        onSuccess: {
            "InitialBalance.useMutation[mutation]": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'trialBalance'
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        'financialStatements'
                    ]
                });
                setShowToast(true);
                setTimeout({
                    "InitialBalance.useMutation[mutation]": ()=>setShowToast(false)
                }["InitialBalance.useMutation[mutation]"], 3000);
            }
        }["InitialBalance.useMutation[mutation]"],
        onError: {
            "InitialBalance.useMutation[mutation]": (error)=>{
                alert(error.message);
            }
        }["InitialBalance.useMutation[mutation]"]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InitialBalance.useEffect": ()=>{
            const handleKeyDown = {
                "InitialBalance.useEffect.handleKeyDown": (e)=>{
                    if (e.key === 'F12') {
                        e.preventDefault();
                        if (isBalanced) {
                            mutation.mutate();
                        } else {
                            alert("貸借合計が一致しないため、登録できません。");
                        }
                    }
                }
            }["InitialBalance.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "InitialBalance.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["InitialBalance.useEffect"];
        }
    }["InitialBalance.useEffect"], [
        isBalanced,
        mutation
    ]);
    const renderGrid = (targetCategory)=>{
        const filteredAccounts = Array.isArray(accountsData) ? accountsData.filter((a)=>{
            if (targetCategory === "資産") return a.category === "資産";
            return a.category === "負債" || a.category === "純資産";
        }) : [];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border border-gray-300 bg-white",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex bg-[#F3F3F3] border-b border-gray-300 text-xs font-bold text-gray-700 h-8 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-24 text-center border-r border-gray-300",
                            children: "コード"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/InitialBalance.tsx",
                            lineNumber: 125,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-64 px-2 border-r border-gray-300",
                            children: "勘定科目"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/InitialBalance.tsx",
                            lineNumber: 126,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-48 text-center border-r border-gray-300",
                            children: "期首残高"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/InitialBalance.tsx",
                            lineNumber: 127,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/InitialBalance.tsx",
                    lineNumber: 124,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-y-auto",
                    style: {
                        height: 'calc(100vh - 280px)'
                    },
                    children: filteredAccounts.map((acc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex border-b border-gray-200 h-8 items-center hover:bg-blue-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-24 text-center border-r border-gray-200 text-sm text-gray-600",
                                    children: acc.code
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/InitialBalance.tsx",
                                    lineNumber: 132,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-64 px-2 border-r border-gray-200 text-sm",
                                    children: acc.name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/InitialBalance.tsx",
                                    lineNumber: 133,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-48 px-1 border-r border-gray-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        inputMode: "numeric",
                                        className: "w-full text-right outline-none bg-transparent text-sm focus:bg-yellow-100",
                                        value: balances[acc.id] ? balances[acc.id].toLocaleString() : "",
                                        onChange: (e)=>handleAmountChange(acc.id, e.target.value),
                                        onFocus: (e)=>e.target.select()
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/InitialBalance.tsx",
                                        lineNumber: 135,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/InitialBalance.tsx",
                                    lineNumber: 134,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, acc.id, true, {
                            fileName: "[project]/src/app/components/InitialBalance.tsx",
                            lineNumber: 131,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/InitialBalance.tsx",
                    lineNumber: 129,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/InitialBalance.tsx",
            lineNumber: 123,
            columnNumber: 13
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full bg-[#E5E5E5] font-sans",
        children: [
            showToast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-8 py-4 rounded shadow-2xl z-50 text-xl font-bold animate-pulse",
                children: "開始残高を登録しました"
            }, void 0, false, {
                fileName: "[project]/src/app/components/InitialBalance.tsx",
                lineNumber: 155,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex px-2 pt-2 gap-1 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `px-6 py-1 text-sm font-bold rounded-t-lg border-t border-l border-r border-gray-300 ${activeTab === '資産' ? 'bg-white text-blue-800 border-b-0 relative top-[1px]' : 'bg-[#D4D4D4] text-gray-600 hover:bg-[#E0E0E0]'}`,
                        onClick: ()=>setActiveTab('資産'),
                        children: "資産"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/InitialBalance.tsx",
                        lineNumber: 162,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `px-6 py-1 text-sm font-bold rounded-t-lg border-t border-l border-r border-gray-300 ${activeTab === '負債・純資産' ? 'bg-white text-blue-800 border-b-0 relative top-[1px]' : 'bg-[#D4D4D4] text-gray-600 hover:bg-[#E0E0E0]'}`,
                        onClick: ()=>setActiveTab('負債・純資産'),
                        children: "負債・純資産"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/InitialBalance.tsx",
                        lineNumber: 169,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/InitialBalance.tsx",
                lineNumber: 161,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 p-2 bg-white pb-24",
                children: renderGrid(activeTab)
            }, void 0, false, {
                fileName: "[project]/src/app/components/InitialBalance.tsx",
                lineNumber: 178,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-6 left-48 right-0 bg-[#F8F9FA] border-t-2 border-gray-300 p-2 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-8 text-sm font-bold",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600",
                                            children: "借方合計 (資産):"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/InitialBalance.tsx",
                                            lineNumber: 187,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg w-32 text-right",
                                            children: debitTotal.toLocaleString()
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/InitialBalance.tsx",
                                            lineNumber: 188,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/InitialBalance.tsx",
                                    lineNumber: 186,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600",
                                            children: "貸方合計 (負債・純資産):"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/InitialBalance.tsx",
                                            lineNumber: 191,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg w-32 text-right",
                                            children: creditTotal.toLocaleString()
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/InitialBalance.tsx",
                                            lineNumber: 192,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/InitialBalance.tsx",
                                    lineNumber: 190,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 ml-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600",
                                            children: "貸借差額:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/InitialBalance.tsx",
                                            lineNumber: 195,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-lg w-32 text-right ${isBalanced ? 'text-green-600' : 'text-red-600'}`,
                                            children: Math.abs(debitTotal - creditTotal).toLocaleString()
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/InitialBalance.tsx",
                                            lineNumber: 196,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/InitialBalance.tsx",
                                    lineNumber: 194,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/InitialBalance.tsx",
                            lineNumber: 185,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                !isBalanced && debitTotal > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-red-600 font-bold bg-red-100 px-3 py-1 border border-red-300 rounded animate-pulse",
                                    children: "⚠️ 貸借が一致していないため、登録できません"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/InitialBalance.tsx",
                                    lineNumber: 204,
                                    columnNumber: 29
                                }, this),
                                isBalanced && debitTotal > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-green-600 font-bold bg-green-100 px-3 py-1 border border-green-300 rounded",
                                    children: "✓ 貸借一致"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/InitialBalance.tsx",
                                    lineNumber: 209,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>mutation.mutate(),
                                    disabled: !isBalanced || mutation.isPending,
                                    className: `px-6 py-2 rounded font-bold transition-colors ${isBalanced ? 'bg-[#005BAC] text-white hover:bg-[#004B8F] shadow-sm cursor-pointer' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`,
                                    children: mutation.isPending ? '登録中...' : '登録 (F12)'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/InitialBalance.tsx",
                                    lineNumber: 213,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/InitialBalance.tsx",
                            lineNumber: 202,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/InitialBalance.tsx",
                    lineNumber: 184,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/InitialBalance.tsx",
                lineNumber: 183,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/InitialBalance.tsx",
        lineNumber: 152,
        columnNumber: 9
    }, this);
}
_s(InitialBalance, "ebsm6d637StYA4kCfMI1vopk9/M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = InitialBalance;
var _c;
__turbopack_context__.k.register(_c, "InitialBalance");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/FinancialStatements.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FinancialStatements
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function FinancialStatements() {
    _s();
    const { data: fsData = [], isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'financialStatements'
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchFinancialStatements"],
        // Keep it fresh for demo purposes
        refetchInterval: 2000
    });
    const bsCategories = [
        "流動資産",
        "固定資産",
        "流動負債",
        "固定負債",
        "純資産",
        "株主資本"
    ];
    const plCategories = [
        "売上高",
        "売上原価",
        "販売費及び一般管理費",
        "営業外収益",
        "営業外費用"
    ];
    const safeFsData = Array.isArray(fsData) ? fsData : [];
    const bsData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FinancialStatements.useMemo[bsData]": ()=>safeFsData.filter({
                "FinancialStatements.useMemo[bsData]": (c)=>bsCategories.includes(c.category_name)
            }["FinancialStatements.useMemo[bsData]"])
    }["FinancialStatements.useMemo[bsData]"], [
        safeFsData,
        bsCategories
    ]);
    const plData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FinancialStatements.useMemo[plData]": ()=>safeFsData.filter({
                "FinancialStatements.useMemo[plData]": (c)=>plCategories.includes(c.category_name)
            }["FinancialStatements.useMemo[plData]"])
    }["FinancialStatements.useMemo[plData]"], [
        safeFsData,
        plCategories
    ]);
    // Calculate high level totals for B/S
    const totalAssets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FinancialStatements.useMemo[totalAssets]": ()=>{
            return bsData.filter({
                "FinancialStatements.useMemo[totalAssets]": (c)=>[
                        "流動資産",
                        "固定資産"
                    ].includes(c.category_name)
            }["FinancialStatements.useMemo[totalAssets]"]).reduce({
                "FinancialStatements.useMemo[totalAssets]": (sum, c)=>sum + c.total_amount
            }["FinancialStatements.useMemo[totalAssets]"], 0);
        }
    }["FinancialStatements.useMemo[totalAssets]"], [
        bsData
    ]);
    const totalLiabilitiesAndEquity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FinancialStatements.useMemo[totalLiabilitiesAndEquity]": ()=>{
            return bsData.filter({
                "FinancialStatements.useMemo[totalLiabilitiesAndEquity]": (c)=>[
                        "流動負債",
                        "固定負債",
                        "純資産",
                        "株主資本"
                    ].includes(c.category_name)
            }["FinancialStatements.useMemo[totalLiabilitiesAndEquity]"]).reduce({
                "FinancialStatements.useMemo[totalLiabilitiesAndEquity]": (sum, c)=>sum + c.total_amount
            }["FinancialStatements.useMemo[totalLiabilitiesAndEquity]"], 0);
        }
    }["FinancialStatements.useMemo[totalLiabilitiesAndEquity]"], [
        bsData
    ]);
    // Calculate Net Income for P/L
    const netIncome = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FinancialStatements.useMemo[netIncome]": ()=>{
            const revenue = plData.filter({
                "FinancialStatements.useMemo[netIncome].revenue": (c)=>[
                        "売上高",
                        "営業外収益"
                    ].includes(c.category_name)
            }["FinancialStatements.useMemo[netIncome].revenue"]).reduce({
                "FinancialStatements.useMemo[netIncome].revenue": (sum, c)=>sum + c.total_amount
            }["FinancialStatements.useMemo[netIncome].revenue"], 0);
            const expenses = plData.filter({
                "FinancialStatements.useMemo[netIncome].expenses": (c)=>[
                        "売上原価",
                        "販売費及び一般管理費",
                        "営業外費用"
                    ].includes(c.category_name)
            }["FinancialStatements.useMemo[netIncome].expenses"]).reduce({
                "FinancialStatements.useMemo[netIncome].expenses": (sum, c)=>sum + c.total_amount
            }["FinancialStatements.useMemo[netIncome].expenses"], 0);
            return revenue - expenses;
        }
    }["FinancialStatements.useMemo[netIncome]"], [
        plData
    ]);
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 text-gray-500",
        children: "決算書データを読み込み中..."
    }, void 0, false, {
        fileName: "[project]/src/app/components/FinancialStatements.tsx",
        lineNumber: 54,
        columnNumber: 27
    }, this);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 text-red-500",
        children: [
            "エラーが発生しました: ",
            error.message
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/FinancialStatements.tsx",
        lineNumber: 55,
        columnNumber: 23
    }, this);
    const renderCategory = (category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between font-bold text-gray-800 border-b-2 border-gray-400 pb-1 mb-2 text-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "【 ",
                            category.category_name,
                            " 】"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/FinancialStatements.tsx",
                        lineNumber: 60,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/FinancialStatements.tsx",
                    lineNumber: 59,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pl-4",
                    children: category.accounts.map((acc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between py-1 border-b border-gray-200 border-dotted text-gray-600 hover:bg-gray-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: acc.name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/FinancialStatements.tsx",
                                    lineNumber: 65,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: acc.amount < 0 ? "text-red-600" : "",
                                    children: acc.amount < 0 ? `△ ${Math.abs(acc.amount).toLocaleString()}` : acc.amount.toLocaleString()
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/FinancialStatements.tsx",
                                    lineNumber: 66,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, acc.name, true, {
                            fileName: "[project]/src/app/components/FinancialStatements.tsx",
                            lineNumber: 64,
                            columnNumber: 21
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/FinancialStatements.tsx",
                    lineNumber: 62,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between font-bold text-gray-800 pt-2 mt-2 bg-gray-100 px-4 py-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                category.category_name,
                                " 合計"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/FinancialStatements.tsx",
                            lineNumber: 73,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: category.total_amount < 0 ? "text-red-600" : "",
                            children: category.total_amount < 0 ? `△ ${Math.abs(category.total_amount).toLocaleString()}` : category.total_amount.toLocaleString()
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/FinancialStatements.tsx",
                            lineNumber: 74,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/FinancialStatements.tsx",
                    lineNumber: 72,
                    columnNumber: 13
                }, this)
            ]
        }, category.category_name, true, {
            fileName: "[project]/src/app/components/FinancialStatements.tsx",
            lineNumber: 58,
            columnNumber: 9
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full bg-[#E5E5E5] font-sans overflow-y-auto pb-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-4 p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 bg-white p-6 shadow-sm border border-gray-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-gray-800 tracking-widest",
                                    children: "貸借対照表 (B/S)"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/FinancialStatements.tsx",
                                    lineNumber: 88,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500 mt-1",
                                    children: "令和7年度 決算（プレビュー）"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/FinancialStatements.tsx",
                                    lineNumber: 89,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/FinancialStatements.tsx",
                            lineNumber: 87,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-blue-800 mb-4 border-l-4 border-blue-800 pl-2",
                                            children: "資産の部"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/FinancialStatements.tsx",
                                            lineNumber: 95,
                                            columnNumber: 29
                                        }, this),
                                        bsData.filter((c)=>[
                                                "流動資産",
                                                "固定資産"
                                            ].includes(c.category_name)).map(renderCategory)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/FinancialStatements.tsx",
                                    lineNumber: 94,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-red-800 mb-4 border-l-4 border-red-800 pl-2",
                                            children: "負債の部"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/FinancialStatements.tsx",
                                            lineNumber: 101,
                                            columnNumber: 29
                                        }, this),
                                        bsData.filter((c)=>[
                                                "流動負債",
                                                "固定負債"
                                            ].includes(c.category_name)).map(renderCategory),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-green-800 mb-4 mt-8 border-l-4 border-green-800 pl-2",
                                            children: "純資産の部"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/FinancialStatements.tsx",
                                            lineNumber: 104,
                                            columnNumber: 29
                                        }, this),
                                        bsData.filter((c)=>[
                                                "純資産",
                                                "株主資本"
                                            ].includes(c.category_name)).map(renderCategory),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between font-bold text-gray-800 pt-2 mt-2 bg-green-50 px-4 py-1 border border-green-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "当期純利益（未処分利益）"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/FinancialStatements.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: netIncome < 0 ? "text-red-600" : "",
                                                    children: netIncome < 0 ? `△ ${Math.abs(netIncome).toLocaleString()}` : netIncome.toLocaleString()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/FinancialStatements.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/FinancialStatements.tsx",
                                            lineNumber: 108,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/FinancialStatements.tsx",
                                    lineNumber: 100,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/FinancialStatements.tsx",
                            lineNumber: 92,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 border-t-4 border-gray-800 pt-4 flex justify-between px-8 bg-gray-50 text-xl font-bold",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "資産合計:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/FinancialStatements.tsx",
                                            lineNumber: 120,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: totalAssets.toLocaleString()
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/FinancialStatements.tsx",
                                            lineNumber: 121,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/FinancialStatements.tsx",
                                    lineNumber: 119,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex gap-4 ${totalLiabilitiesAndEquity + netIncome !== totalAssets ? 'text-red-600 animate-pulse' : ''}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "負債・純資産合計:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/FinancialStatements.tsx",
                                            lineNumber: 124,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: (totalLiabilitiesAndEquity + netIncome).toLocaleString()
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/FinancialStatements.tsx",
                                            lineNumber: 125,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/FinancialStatements.tsx",
                                    lineNumber: 123,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/FinancialStatements.tsx",
                            lineNumber: 118,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/FinancialStatements.tsx",
                    lineNumber: 86,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 bg-white p-6 shadow-sm border border-gray-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-gray-800 tracking-widest",
                                    children: "損益計算書 (P/L)"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/FinancialStatements.tsx",
                                    lineNumber: 133,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500 mt-1",
                                    children: "令和7年度 決算（プレビュー）"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/FinancialStatements.tsx",
                                    lineNumber: 134,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/FinancialStatements.tsx",
                            lineNumber: 132,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-xl mx-auto",
                            children: [
                                plData.filter((c)=>c.category_name === "売上高").map(renderCategory),
                                plData.filter((c)=>c.category_name === "売上原価").map(renderCategory),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between text-lg font-bold text-blue-800 bg-blue-50 px-4 py-2 border-y-2 border-blue-200 my-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "【 売上総利益 】"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/FinancialStatements.tsx",
                                            lineNumber: 143,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: (()=>{
                                                const rev = plData.find((c)=>c.category_name === "売上高")?.total_amount || 0;
                                                const cogs = plData.find((c)=>c.category_name === "売上原価")?.total_amount || 0;
                                                const gp = rev - cogs;
                                                return gp < 0 ? `△ ${Math.abs(gp).toLocaleString()}` : gp.toLocaleString();
                                            })()
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/FinancialStatements.tsx",
                                            lineNumber: 144,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/FinancialStatements.tsx",
                                    lineNumber: 142,
                                    columnNumber: 25
                                }, this),
                                plData.filter((c)=>c.category_name === "販売費及び一般管理費").map(renderCategory),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between text-lg font-bold text-blue-800 bg-blue-50 px-4 py-2 border-y-2 border-blue-200 my-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "【 営業利益 】"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/FinancialStatements.tsx",
                                            lineNumber: 158,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: (()=>{
                                                const rev = plData.find((c)=>c.category_name === "売上高")?.total_amount || 0;
                                                const cogs = plData.find((c)=>c.category_name === "売上原価")?.total_amount || 0;
                                                const sga = plData.find((c)=>c.category_name === "販売費及び一般管理費")?.total_amount || 0;
                                                const op = rev - cogs - sga;
                                                return op < 0 ? `△ ${Math.abs(op).toLocaleString()}` : op.toLocaleString();
                                            })()
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/FinancialStatements.tsx",
                                            lineNumber: 159,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/FinancialStatements.tsx",
                                    lineNumber: 157,
                                    columnNumber: 25
                                }, this),
                                plData.filter((c)=>[
                                        "営業外収益",
                                        "営業外費用"
                                    ].includes(c.category_name)).map(renderCategory),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between text-2xl font-bold text-white bg-[#005BAC] px-6 py-4 mt-8 shadow-inner rounded-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "当期純利益"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/FinancialStatements.tsx",
                                            lineNumber: 174,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: netIncome < 0 ? `△ ${Math.abs(netIncome).toLocaleString()}` : netIncome.toLocaleString()
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/FinancialStatements.tsx",
                                            lineNumber: 175,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/FinancialStatements.tsx",
                                    lineNumber: 173,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/FinancialStatements.tsx",
                            lineNumber: 137,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/FinancialStatements.tsx",
                    lineNumber: 131,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/FinancialStatements.tsx",
            lineNumber: 83,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/FinancialStatements.tsx",
        lineNumber: 82,
        columnNumber: 9
    }, this);
}
_s(FinancialStatements, "2f/NT01n3Ff+CNIoG4WB+68o8qo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = FinancialStatements;
var _c;
__turbopack_context__.k.register(_c, "FinancialStatements");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useKeyboardShortcuts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useKeyboardShortcuts",
    ()=>useKeyboardShortcuts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)"); // Using sonner as it is available in package.json
var _s = __turbopack_context__.k.signature();
;
;
function useKeyboardShortcuts(options) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useKeyboardShortcuts.useEffect": ()=>{
            function handleKeyDown(e) {
                const isFunctionKey = /^F(1[0-2]|[1-9])$/.test(e.key);
                const isTab = e.key === "Tab";
                const isAltKey = e.key === "Alt" || e.altKey;
                const isCtrlKey = e.ctrlKey || e.metaKey;
                const keyStr = e.key.toLowerCase();
                // Intercept Ctrl + S, O, P and Alt+N
                const isInterceptedCtrl = isCtrlKey && [
                    "s",
                    "o",
                    "p"
                ].includes(keyStr);
                const isInterceptedAlt = isAltKey && keyStr === "n";
                if (isFunctionKey || isTab || isAltKey || isInterceptedCtrl || isInterceptedAlt) {
                    // Prevent default browser behavior completely
                    e.preventDefault();
                    e.stopPropagation();
                }
                // 2. Map F-keys to toolbar actions
                if (isFunctionKey) {
                    if (e.key === "F12") {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("登録を受け付けました", {
                            duration: 2000,
                            position: "bottom-right",
                            style: {
                                background: "#005BAC",
                                color: "#fff",
                                border: "none"
                            }
                        });
                        options?.onToolbarAction?.("submit");
                    } else if (e.key === "F11") {
                        options?.onToolbarAction?.("cancel");
                    } else if (e.key === "F10") {
                        options?.onToolbarAction?.("search");
                    } else if (e.key === "F9") {
                        options?.onToolbarAction?.("delete");
                    } else if (e.key === "F8") {
                        options?.onToolbarAction?.("insert_row");
                    } else if (e.key === "F7") {
                        options?.onToolbarAction?.("delete_row");
                    } else if (e.key === "F4") {
                        options?.onToolbarAction?.("reference");
                    } else if (e.key === "F3") {
                        options?.onToolbarAction?.("dictionary");
                    } else if (e.key === "F5") {
                        options?.onToolbarAction?.("refresh");
                    }
                }
                // 3. Handle Ctrl+Keys
                if (isInterceptedCtrl) {
                    if (keyStr === "s") {
                        // Same as F12 submit
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("登録を受け付けました", {
                            duration: 2000,
                            position: "bottom-right",
                            style: {
                                background: "#005BAC",
                                color: "#fff",
                                border: "none"
                            }
                        });
                        options?.onToolbarAction?.("submit");
                    } else if (keyStr === "o") {
                        options?.onToolbarAction?.("view:journal");
                    } else if (keyStr === "p") {
                        setTimeout({
                            "useKeyboardShortcuts.useEffect.handleKeyDown": ()=>window.print()
                        }["useKeyboardShortcuts.useEffect.handleKeyDown"], 100);
                    }
                }
                // 4. Handle Alt+Keys (specific ones we want to capture)
                if (isInterceptedAlt) {
                    if (keyStr === "n") {
                        options?.onToolbarAction?.("action:new_slip");
                    }
                }
                // 5. Escape Key
                if (e.key === "Escape") {
                    e.preventDefault();
                    options?.onEscape?.();
                }
            }
            // Use capture phase to ensure we intercept before other specific handlers can rely on default behavior
            window.addEventListener("keydown", handleKeyDown, {
                capture: true
            });
            return ({
                "useKeyboardShortcuts.useEffect": ()=>{
                    window.removeEventListener("keydown", handleKeyDown, {
                        capture: true
                    });
                }
            })["useKeyboardShortcuts.useEffect"];
        }
    }["useKeyboardShortcuts.useEffect"], [
        options
    ]);
}
_s(useKeyboardShortcuts, "OD7bBpZva5O2jO+Puf00hKivP7c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$MenuBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/MenuBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Toolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Toolbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$StatusBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/StatusBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$TransferSlip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/TransferSlip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SubsidiaryLedger$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/SubsidiaryLedger.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Dashboard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$TrialBalance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/TrialBalance.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$JournalDiary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/JournalDiary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$GeneralLedger$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/GeneralLedger.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$InitialBalance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/InitialBalance.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$FinancialStatements$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/FinancialStatements.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useKeyboardShortcuts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useKeyboardShortcuts.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function PlaceholderView({ title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full",
        style: {
            fontFamily: "'Noto Sans JP', sans-serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center px-2",
                style: {
                    height: 26,
                    backgroundColor: "#005BAC",
                    color: "#fff",
                    fontSize: 12
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex items-center justify-center",
                style: {
                    backgroundColor: "#f8f8f8",
                    color: "#999",
                    fontSize: 13
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: 32,
                                opacity: 0.3
                            },
                            children: "📋"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 40,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                title,
                                " — 実装準備中"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 41,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: 11
                            },
                            children: "振替伝票・補助元帳画面をご覧ください"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 42,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 39,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
}
_c = PlaceholderView;
const VIEW_TITLES = {
    dashboard: "ダッシュボード",
    "transfer-slip": "振替伝票",
    journal: "仕訳日記帳",
    "subsidiary-ledger": "補助元帳",
    "general-ledger": "総勘定元帳",
    "trial-balance": "残高試算表",
    "initial-balance": "開始残高",
    "financial-statements": "決算書",
    settings: "事業所設定",
    help: "ヘルプ"
};
function App() {
    _s();
    const [activeView, setActiveView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dashboard");
    const [openTabs, setOpenTabs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        "dashboard"
    ]);
    const [drilldownData, setDrilldownData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const switchView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[switchView]": (viewId)=>{
            setActiveView(viewId);
            setOpenTabs({
                "App.useCallback[switchView]": (prev)=>prev.includes(viewId) ? prev : [
                        ...prev,
                        viewId
                    ]
            }["App.useCallback[switchView]"]);
        }
    }["App.useCallback[switchView]"], []);
    const closeTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[closeTab]": (viewId)=>{
            if (viewId === "dashboard") return;
            setOpenTabs({
                "App.useCallback[closeTab]": (prev)=>{
                    const nextTabs = prev.filter({
                        "App.useCallback[closeTab].nextTabs": (t)=>t !== viewId
                    }["App.useCallback[closeTab].nextTabs"]);
                    if (activeView === viewId) {
                        const index = prev.indexOf(viewId);
                        const nextActive = nextTabs[index - 1] || nextTabs[0] || "dashboard";
                        setActiveView(nextActive);
                    }
                    return nextTabs;
                }
            }["App.useCallback[closeTab]"]);
        }
    }["App.useCallback[closeTab]"], [
        activeView
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            const handleViewAction = {
                "App.useEffect.handleViewAction": (e)=>{
                    if (e.detail && typeof e.detail === "string" && e.detail.startsWith("view:")) {
                        const targetView = e.detail.split(":")[1];
                        switchView(targetView);
                    }
                    if (e.detail === "action:new_slip") {
                        switchView("transfer-slip");
                        // Small delay to let component mount before sending the clear command
                        setTimeout({
                            "App.useEffect.handleViewAction": ()=>{
                                window.dispatchEvent(new CustomEvent("a2e-toolbar-action", {
                                    detail: "new_slip"
                                }));
                            }
                        }["App.useEffect.handleViewAction"], 100);
                    }
                }
            }["App.useEffect.handleViewAction"];
            window.addEventListener("a2e-toolbar-action", handleViewAction);
            return ({
                "App.useEffect": ()=>window.removeEventListener("a2e-toolbar-action", handleViewAction)
            })["App.useEffect"];
        }
    }["App.useEffect"], [
        switchView
    ]);
    // Global Keyboard Shortcut Engine
    const handleToolbarAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[handleToolbarAction]": (action)=>{
            console.log("Toolbar Action:", action);
            window.dispatchEvent(new CustomEvent("a2e-toolbar-action", {
                detail: action
            }));
        }
    }["App.useCallback[handleToolbarAction]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useKeyboardShortcuts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeyboardShortcuts"])({
        onToolbarAction: handleToolbarAction
    });
    const renderView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "App.useCallback[renderView]": ()=>{
            switch(activeView){
                case "dashboard":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dashboard"], {
                        onNavigate: switchView
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 118,
                        columnNumber: 24
                    }, this);
                case "transfer-slip":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$TransferSlip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransferSlip"], {
                        initialJournalId: drilldownData.journalId
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 120,
                        columnNumber: 24
                    }, this);
                case "subsidiary-ledger":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SubsidiaryLedger$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubsidiaryLedger"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 122,
                        columnNumber: 24
                    }, this);
                case "trial-balance":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$TrialBalance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrialBalance"], {
                        onDrilldown: {
                            "App.useCallback[renderView]": (name, code)=>{
                                setDrilldownData({
                                    accountCode: code
                                });
                                switchView("general-ledger");
                            }
                        }["App.useCallback[renderView]"]
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 124,
                        columnNumber: 24
                    }, this);
                case "journal":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$JournalDiary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JournalDiary"], {
                        onDrilldown: {
                            "App.useCallback[renderView]": (id)=>{
                                setDrilldownData({
                                    journalId: id
                                });
                                switchView("transfer-slip");
                            }
                        }["App.useCallback[renderView]"]
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 129,
                        columnNumber: 24
                    }, this);
                case "general-ledger":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$GeneralLedger$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeneralLedger"], {
                        initialAccountCode: drilldownData.accountCode
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 134,
                        columnNumber: 24
                    }, this);
                case "initial-balance":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$InitialBalance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 136,
                        columnNumber: 24
                    }, this);
                case "financial-statements":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$FinancialStatements$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 138,
                        columnNumber: 24
                    }, this);
                default:
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlaceholderView, {
                        title: VIEW_TITLES[activeView] || activeView
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 141,
                        columnNumber: 21
                    }, this);
            }
        }
    }["App.useCallback[renderView]"], [
        activeView,
        drilldownData,
        switchView
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen w-screen overflow-hidden",
        style: {
            fontFamily: "'Noto Sans JP', sans-serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {
                activeView: activeView,
                onViewChange: switchView
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 154,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$MenuBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuBar"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 159,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Toolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toolbar"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 162,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "print-hidden flex items-end gap-0 overflow-x-auto",
                        style: {
                            height: 28,
                            backgroundColor: "#d8d8d8",
                            paddingLeft: 4,
                            borderBottom: "1px solid #b0b0b0",
                            flexShrink: 0
                        },
                        children: openTabs.map((viewId)=>{
                            const isActive = activeView === viewId;
                            const title = VIEW_TITLES[viewId] || viewId;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 cursor-pointer group",
                                style: {
                                    padding: "4px 12px 4px 12px",
                                    fontSize: 11,
                                    backgroundColor: isActive ? "#fff" : "#e0e0e0",
                                    borderTop: isActive ? "2px solid #005BAC" : "1px solid #c0c0c0",
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
                                },
                                onClick: ()=>setActiveView(viewId),
                                children: [
                                    title,
                                    viewId !== "dashboard" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            marginLeft: 6,
                                            fontSize: 10,
                                            color: "#999",
                                            lineHeight: 1,
                                            visibility: isActive ? "visible" : "hidden"
                                        },
                                        className: "group-hover:visible",
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            closeTab(viewId);
                                        },
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 206,
                                        columnNumber: 41
                                    }, this)
                                ]
                            }, viewId, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 180,
                                columnNumber: 33
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 165,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "print-expand flex-1 min-h-0 overflow-hidden",
                        children: renderView()
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 230,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$StatusBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusBar"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 233,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 157,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 149,
        columnNumber: 9
    }, this);
}
_s(App, "1RavrUYWYKRqde3ZTn+695yQjog=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useKeyboardShortcuts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeyboardShortcuts"]
    ];
});
_c1 = App;
var _c, _c1;
__turbopack_context__.k.register(_c, "PlaceholderView");
__turbopack_context__.k.register(_c1, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_29208c54._.js.map