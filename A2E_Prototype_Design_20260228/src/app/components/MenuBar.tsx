import { useState, useRef, useEffect, useCallback } from "react";

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
      { label: "新規作成", shortcut: "Ctrl+N" },
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
  const [altMode, setAltMode] = useState(false);
  const menuBarRef = useRef<HTMLDivElement>(null);

  // Close menu on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        menuBarRef.current &&
        !menuBarRef.current.contains(e.target as Node)
      ) {
        setOpenMenu(null);
        setAltMode(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Alt+key global handler
  useEffect(() => {
    let altPressed = false;
    let altOnly = false;

    function handleKeyDown(e: KeyboardEvent) {
      // Track Alt key
      if (e.key === "Alt") {
        altPressed = true;
        altOnly = true;
        return;
      }

      // If Alt is held, check for menu shortcuts
      if (e.altKey && !e.ctrlKey && !e.metaKey) {
        const key = e.key.toLowerCase();
        if (key in altKeyMap) {
          e.preventDefault();
          e.stopPropagation();
          altOnly = false;
          setOpenMenu((prev) =>
            prev === altKeyMap[key] ? null : altKeyMap[key]
          );
          setAltMode(true);
          return;
        }
      }

      // If a menu is open and we're in alt mode, allow arrow navigation
      if (altMode || openMenu !== null) {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          setOpenMenu((prev) =>
            prev !== null ? (prev + 1) % menus.length : 0
          );
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          setOpenMenu((prev) =>
            prev !== null
              ? (prev - 1 + menus.length) % menus.length
              : menus.length - 1
          );
        } else if (e.key === "Escape") {
          e.preventDefault();
          setOpenMenu(null);
          setAltMode(false);
        }
      }

      altOnly = false;
    }

    function handleKeyUp(e: KeyboardEvent) {
      if (e.key === "Alt") {
        altPressed = false;
        // If Alt was pressed and released alone, toggle alt-mode (underline shortcut keys)
        if (altOnly) {
          setAltMode((prev) => {
            if (prev) {
              setOpenMenu(null);
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
  }, [altMode, openMenu]);

  // Render menu label with underlined shortcut key
  const renderLabel = (label: string, menuKey: string) => {
    // Find the position of (X) pattern
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
        height: 24,
        backgroundColor: "#f0f0f0",
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
                  : altMode && openMenu === null
                  ? "transparent"
                  : "transparent",
              color: openMenu === idx ? "#fff" : "#222",
              transition: "background-color 0.05s",
            }}
            onMouseDown={() =>
              setOpenMenu(openMenu === idx ? null : idx)
            }
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
                top: 24,
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
                      color: item.disabled ? "#999" : "#222",
                    }}
                    onMouseEnter={(e) => {
                      if (!item.disabled) {
                        e.currentTarget.style.backgroundColor = "#005BAC";
                        e.currentTarget.style.color = "#fff";
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = item.disabled
                        ? "#999"
                        : "#222";
                    }}
                    onClick={() => {
                      setOpenMenu(null);
                      setAltMode(false);
                    }}
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
