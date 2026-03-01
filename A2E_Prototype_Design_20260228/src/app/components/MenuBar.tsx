import { useState, useRef, useEffect, useCallback } from "react";
import { toast } from "sonner";

interface MenuItem {
  label: string;
  shortcut?: string;
  divider?: boolean;
  disabled?: boolean;
}

interface Menu {
  label: string;
  key: string;
  items: MenuItem[];
}

const menus: Menu[] = [
  {
    label: "ファイル(F)",
    key: "F",
    items: [
      { label: "新規作成", shortcut: "Alt+N" },
      { label: "開く", shortcut: "Ctrl+O" },
      { divider: true, label: "" },
      { label: "上書き保存", shortcut: "Ctrl+S" },
      { label: "名前を付けて保存" },
      { divider: true, label: "" },
      { label: "印刷", shortcut: "Ctrl+P" },
      { label: "印刷プレビュー" },
      { divider: true, label: "" },
      { label: "終了", shortcut: "Alt+F4" },
    ],
  },
  {
    label: "編集(E)",
    key: "E",
    items: [
      { label: "元に戻す", shortcut: "Ctrl+Z" },
      { label: "やり直し", shortcut: "Ctrl+Y" },
      { divider: true, label: "" },
      { label: "切り取り", shortcut: "Ctrl+X" },
      { label: "コピー", shortcut: "Ctrl+C" },
      { label: "貼り付け", shortcut: "Ctrl+V" },
    ],
  },
  {
    label: "表示(V)",
    key: "V",
    items: [
      { label: "ツールバー" },
      { label: "ステータスバー" },
      { divider: true, label: "" },
      { label: "最新の情報に更新", shortcut: "F5" },
    ],
  },
  {
    label: "帳簿(A)",
    key: "A",
    items: [
      { label: "仕訳日記帳" },
      { label: "総勘定元帳" },
      { label: "補助元帳" },
      { label: "現金出納帳" },
      { label: "預金出納帳" },
      { label: "売掛帳" },
      { label: "買掛帳" },
    ],
  },
  {
    label: "伝票(B)",
    key: "B",
    items: [
      { label: "振替伝票" },
      { label: "入金伝票" },
      { label: "出金伝票" },
    ],
  },
  {
    label: "集計(C)",
    key: "C",
    items: [
      { label: "残高試算表" },
      { label: "日計表" },
      { label: "補助残高一覧表" },
      { divider: true, label: "" },
      { label: "消費税集計表" },
    ],
  },
  {
    label: "決算(P)",
    key: "P",
    items: [
      { label: "決算書作成" },
      { label: "消費税申告書" },
      { label: "勘定科目内訳書" },
    ],
  },
  {
    label: "ツール(T)",
    key: "T",
    items: [
      { label: "仕訳データ取込" },
      { label: "仕訳データ書出" },
      { divider: true, label: "" },
      { label: "データバックアップ" },
      { label: "データ復元" },
    ],
  },
  {
    label: "設定(S)",
    key: "S",
    items: [
      { label: "事業所設定" },
      { label: "科目設定" },
      { label: "補助科目設定" },
      { label: "部門設定" },
      { divider: true, label: "" },
      { label: "消費税設定" },
    ],
  },
  {
    label: "ウィンドウ(W)",
    key: "W",
    items: [
      { label: "並べて表示" },
      { label: "重ねて表示" },
    ],
  },
  {
    label: "ヘルプ(H)",
    key: "H",
    items: [
      { label: "ヘルプトピック", shortcut: "F1" },
      { divider: true, label: "" },
      { label: "バージョン情報" },
    ],
  },
];

// Build a map of Alt+key -> menu index
const altKeyMap: Record<string, number> = {};
menus.forEach((menu, idx) => {
  altKeyMap[menu.key.toLowerCase()] = idx;
});

export function MenuBar() {
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [focusedItemIndex, setFocusedItemIndex] = useState<number | null>(null);
  const [altMode, setAltMode] = useState(false);
  const menuBarRef = useRef<HTMLDivElement>(null);

  const handleMenuAction = useCallback((item: MenuItem) => {
    if (item.disabled || item.divider) return;

    setOpenMenu(null);
    setAltMode(false);
    setFocusedItemIndex(null);

    const label = item.label;
    const actionMap: Record<string, string> = {
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
      "科目設定": "view:initial-balance",
    };

    if (actionMap[label]) {
      window.dispatchEvent(new CustomEvent("a2e-toolbar-action", { detail: actionMap[label] }));
      return;
    }

    if (label === "印刷") {
      setTimeout(() => window.print(), 100);
      return;
    }
    if (label === "終了") {
      toast.info("ブラウザのタブを閉じて終了してください。");
      return;
    }
    if (label === "開く") {
      window.dispatchEvent(new CustomEvent("a2e-toolbar-action", { detail: "view:journal" }));
      return;
    }
    if (label === "バージョン情報") {
      toast("A2E Prototype v1.0", {
        description: "弥生会計互換 クラウドネイティブプロトタイプ",
        position: "top-center"
      });
      return;
    }
    if (["切り取り", "コピー", "貼り付け"].includes(label)) {
      return;
    }

    toast.info("次期アップデートで公開予定です", {
      description: `「${label}」はプロダクトロードマップの対象です`
    });
  }, []);

  // Close menu on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        menuBarRef.current &&
        !menuBarRef.current.contains(e.target as Node)
      ) {
        setOpenMenu(null);
        setAltMode(false);
        setFocusedItemIndex(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Navigation helper
  const moveFocus = useCallback((direction: number) => {
    if (openMenu === null) return;
    const items = menus[openMenu].items;
    let nextIdx = focusedItemIndex === null ? (direction > 0 ? 0 : items.length - 1) : focusedItemIndex + direction;

    // Loop until we find a selectable item or complete a full cycle
    let count = 0;
    while (count < items.length) {
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
  }, [openMenu, focusedItemIndex]);

  // Alt+key global handler
  useEffect(() => {
    let altPressed = false;
    let altOnly = false;

    function handleKeyDown(e: KeyboardEvent) {
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
          const firstSelectable = menus[targetMenuIdx].items.findIndex(it => !it.divider && !it.disabled);
          setFocusedItemIndex(firstSelectable !== -1 ? firstSelectable : 0);
          return;
        }
      }

      if (altMode || openMenu !== null) {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          setOpenMenu((prev) => {
            const next = prev !== null ? (prev + 1) % menus.length : 0;
            const firstSelectable = menus[next].items.findIndex(it => !it.divider && !it.disabled);
            setFocusedItemIndex(firstSelectable !== -1 ? firstSelectable : 0);
            return next;
          });
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          setOpenMenu((prev) => {
            const next = prev !== null ? (prev - 1 + menus.length) % menus.length : menus.length - 1;
            const firstSelectable = menus[next].items.findIndex(it => !it.divider && !it.disabled);
            setFocusedItemIndex(firstSelectable !== -1 ? firstSelectable : 0);
            return next;
          });
        } else if (e.key === "ArrowDown" || (e.key === "Tab" && !e.shiftKey)) {
          e.preventDefault();
          moveFocus(1);
        } else if (e.key === "ArrowUp" || (e.key === "Tab" && e.shiftKey)) {
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

    function handleKeyUp(e: KeyboardEvent) {
      if (e.key === "Alt") {
        altPressed = false;
        if (altOnly) {
          setAltMode((prev) => {
            if (prev) {
              setOpenMenu(null);
              setFocusedItemIndex(null);
              return false;
            }
            return true;
          });
        }
        altOnly = false;
      }
    }

    window.addEventListener("keydown", handleKeyDown, true);
    window.addEventListener("keyup", handleKeyUp, true);
    return () => {
      window.removeEventListener("keydown", handleKeyDown, true);
      window.removeEventListener("keyup", handleKeyUp, true);
    };
  }, [altMode, openMenu, focusedItemIndex, moveFocus, handleMenuAction]);

  // Render menu label with underlined shortcut key
  const renderLabel = (label: string, menuKey: string) => {
    const match = label.match(/\(([A-Z])\)/);
    if (!match) return <span>{label}</span>;

    const idx = label.indexOf(match[0]);
    const before = label.slice(0, idx);
    const letter = match[1];
    const after = label.slice(idx + match[0].length);

    return (
      <span>
        {before}
        <span style={{ fontSize: 10 }}>(</span>
        <span
          style={{
            textDecoration: altMode ? "underline" : "none",
            textUnderlineOffset: 2,
          }}
        >
          {letter}
        </span>
        <span style={{ fontSize: 10 }}>)</span>
        {after}
      </span>
    );
  };

  return (
    <div
      ref={menuBarRef}
      className="flex items-stretch relative"
      style={{
        height: 28,
        backgroundColor: "#F3F3F3",
        borderBottom: "1px solid #c0c0c0",
        fontFamily: "'Noto Sans JP', sans-serif",
        fontSize: 12,
        userSelect: "none",
        flexShrink: 0,
      }}
    >
      {menus.map((menu, idx) => (
        <div key={menu.key} className="relative">
          <div
            className="flex items-center cursor-pointer"
            style={{
              padding: "0 8px",
              height: "100%",
              backgroundColor:
                openMenu === idx
                  ? "#005BAC"
                  : "transparent",
              color: openMenu === idx ? "#fff" : "#222",
              transition: "background-color 0.05s",
            }}
            onMouseDown={() => {
              if (openMenu === idx) {
                setOpenMenu(null);
                setFocusedItemIndex(null);
              } else {
                setOpenMenu(idx);
                setFocusedItemIndex(null); // Click doesn't necessarily set keyboard focus
              }
            }}
            onMouseEnter={() => {
              if (openMenu !== null) setOpenMenu(idx);
            }}
          >
            {renderLabel(menu.label, menu.key)}
          </div>
          {openMenu === idx && (
            <div
              className="absolute left-0 z-50"
              style={{
                top: 28,
                minWidth: 220,
                backgroundColor: "#fff",
                border: "1px solid #c0c0c0",
                boxShadow: "2px 2px 6px rgba(0,0,0,0.15)",
                padding: "2px 0",
              }}
            >
              {menu.items.map((item, iIdx) =>
                item.divider ? (
                  <div
                    key={`div-${iIdx}`}
                    style={{
                      height: 1,
                      backgroundColor: "#d0d0d0",
                      margin: "2px 4px",
                    }}
                  />
                ) : (
                  <div
                    key={`${menu.key}-${item.label}`}
                    className="flex items-center justify-between cursor-pointer"
                    style={{
                      padding: "3px 20px 3px 24px",
                      fontSize: 12,
                      backgroundColor: focusedItemIndex === iIdx ? "#005BAC" : "transparent",
                      color: focusedItemIndex === iIdx ? "#fff" : (item.disabled ? "#999" : "#222"),
                    }}
                    onMouseEnter={() => {
                      if (!item.disabled) {
                        setFocusedItemIndex(iIdx);
                      }
                    }}
                    onMouseLeave={() => {
                      // We don't necessarily clear focusedItemIndex on mouse leave to keep manual arrow keys stable
                    }}
                    onClick={() => handleMenuAction(item)}
                  >
                    <span>{item.label}</span>
                    {item.shortcut && (
                      <span
                        style={{
                          marginLeft: 24,
                          fontSize: 11,
                          opacity: 0.6,
                        }}
                      >
                        {item.shortcut}
                      </span>
                    )}
                  </div>
                )
              )}
            </div>
          )}
        </div>
      ))}

      {/* Alt mode indicator */}
      {altMode && openMenu === null && (
        <div
          className="flex items-center ml-auto"
          style={{
            fontSize: 10,
            color: "#005BAC",
            padding: "0 8px",
            opacity: 0.8,
          }}
        >
          Alt: メニュー選択モード (文字キーで開く)
        </div>
      )}
    </div>
  );
}
