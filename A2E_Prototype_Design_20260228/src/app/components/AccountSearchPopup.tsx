import { useState, useEffect, useRef, useCallback } from "react";
import { Search, X } from "lucide-react";

export interface AccountItem {
  code: string;
  name: string;
  category: string;
  taxType: string;
}

export const ACCOUNT_MASTER: AccountItem[] = [
  // 資産
  { code: "100", name: "現金", category: "資産", taxType: "対象外" },
  { code: "110", name: "当座預金", category: "資産", taxType: "対象外" },
  { code: "111", name: "普通預金", category: "資産", taxType: "対象外" },
  { code: "120", name: "受取手形", category: "資産", taxType: "対象外" },
  { code: "130", name: "売掛金", category: "資産", taxType: "対象外" },
  { code: "140", name: "有価証券", category: "資産", taxType: "対象外" },
  { code: "150", name: "商品", category: "資産", taxType: "対象外" },
  { code: "160", name: "前払金", category: "資産", taxType: "対象外" },
  { code: "170", name: "前払費用", category: "資産", taxType: "対象外" },
  { code: "180", name: "未収入金", category: "資産", taxType: "対象外" },
  { code: "190", name: "仮払金", category: "資産", taxType: "対象外" },
  { code: "200", name: "建物", category: "資産", taxType: "対象外" },
  { code: "210", name: "車両運搬具", category: "資産", taxType: "対象外" },
  { code: "220", name: "工具器具備品", category: "資産", taxType: "対象外" },
  { code: "230", name: "土地", category: "資産", taxType: "対象外" },
  { code: "240", name: "ソフトウエア", category: "資産", taxType: "対象外" },
  // 負債
  { code: "300", name: "支払手形", category: "負債", taxType: "対象外" },
  { code: "310", name: "買掛金", category: "負債", taxType: "対象外" },
  { code: "320", name: "短期借入金", category: "負債", taxType: "対象外" },
  { code: "330", name: "未払金", category: "負債", taxType: "対象外" },
  { code: "340", name: "未払費用", category: "負債", taxType: "対象外" },
  { code: "350", name: "前受金", category: "負債", taxType: "対象外" },
  { code: "360", name: "預り金", category: "負債", taxType: "対象外" },
  { code: "370", name: "仮受金", category: "負債", taxType: "対象外" },
  { code: "380", name: "長期借入金", category: "負債", taxType: "対象外" },
  // 純資産
  { code: "400", name: "資本金", category: "純資産", taxType: "対象外" },
  { code: "410", name: "資本準備金", category: "純資産", taxType: "対象外" },
  { code: "420", name: "利益準備金", category: "純資産", taxType: "対象外" },
  { code: "430", name: "繰越利益剰余金", category: "純資産", taxType: "対象外" },
  // 収益
  { code: "500", name: "売上高", category: "収益", taxType: "課税売上10%" },
  { code: "510", name: "受取利息", category: "収益", taxType: "非課税売上" },
  { code: "520", name: "受取配当金", category: "収益", taxType: "対象外" },
  { code: "530", name: "雑収入", category: "収益", taxType: "課税売上10%" },
  // 費用
  { code: "600", name: "仕入高", category: "費用", taxType: "課税仕入10%" },
  { code: "610", name: "給与手当", category: "費用", taxType: "対象外" },
  { code: "611", name: "賞与", category: "費用", taxType: "対象外" },
  { code: "612", name: "役員報酬", category: "費用", taxType: "対象外" },
  { code: "620", name: "法定福利費", category: "費用", taxType: "対象外" },
  { code: "621", name: "福利厚生費", category: "費用", taxType: "課税仕入10%" },
  { code: "630", name: "旅費交通費", category: "費用", taxType: "課税仕入10%" },
  { code: "640", name: "通信費", category: "費用", taxType: "課税仕入10%" },
  { code: "650", name: "消耗品費", category: "費用", taxType: "課税仕入10%" },
  { code: "660", name: "水道光熱費", category: "費用", taxType: "課税仕入10%" },
  { code: "670", name: "地代家賃", category: "費用", taxType: "非課税仕入" },
  { code: "680", name: "接待交際費", category: "費用", taxType: "課税仕入10%" },
  { code: "690", name: "広告宣伝費", category: "費用", taxType: "課税仕入10%" },
  { code: "700", name: "支払手数料", category: "費用", taxType: "課税仕入10%" },
  { code: "710", name: "租税公課", category: "費用", taxType: "対象外" },
  { code: "720", name: "減価償却費", category: "費用", taxType: "対象外" },
  { code: "730", name: "保険料", category: "費用", taxType: "非課税仕入" },
  { code: "740", name: "修繕費", category: "費用", taxType: "課税仕入10%" },
  { code: "750", name: "荷造運賃", category: "費用", taxType: "課税仕入10%" },
  { code: "760", name: "新聞図書費", category: "費用", taxType: "課税仕入10%" },
  { code: "770", name: "諸会費", category: "費用", taxType: "対象外" },
  { code: "780", name: "雑費", category: "費用", taxType: "課税仕入10%" },
  { code: "790", name: "支払利息", category: "費用", taxType: "非課税仕入" },
];

const CATEGORY_COLORS: Record<string, string> = {
  資産: "#005BAC",
  負債: "#c0392b",
  純資産: "#8e44ad",
  収益: "#27ae60",
  費用: "#e67e22",
};

interface AccountSearchPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (account: AccountItem) => void;
  anchorRect: { top: number; left: number } | null;
  initialQuery?: string;
}

export function AccountSearchPopup({
  isOpen,
  onClose,
  onSelect,
  anchorRect,
  initialQuery = "",
}: AccountSearchPopupProps) {
  const [query, setQuery] = useState(initialQuery);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const filtered = ACCOUNT_MASTER.filter((a) => {
    const matchText =
      !query ||
      a.name.includes(query) ||
      a.code.includes(query) ||
      a.category.includes(query);
    const matchCategory = !categoryFilter || a.category === categoryFilter;
    return matchText && matchCategory;
  });

  useEffect(() => {
    if (isOpen) {
      setQuery(initialQuery);
      setSelectedIndex(0);
      setCategoryFilter(null);
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [isOpen, initialQuery]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query, categoryFilter]);

  // Scroll selected item into view
  useEffect(() => {
    if (listRef.current) {
      const el = listRef.current.children[selectedIndex] as HTMLElement;
      if (el) {
        el.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          onSelect(filtered[selectedIndex]);
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "Tab") {
        e.preventDefault();
        // Cycle through category filters
        const cats = [null, "資産", "負債", "純資産", "収益", "費用"];
        const currentIdx = cats.indexOf(categoryFilter);
        setCategoryFilter(cats[(currentIdx + 1) % cats.length]);
      }
    },
    [filtered, selectedIndex, onSelect, onClose, categoryFilter]
  );

  if (!isOpen) return null;

  const popupStyle: React.CSSProperties = {
    position: "fixed",
    top: anchorRect ? anchorRect.top : "50%",
    left: anchorRect ? anchorRect.left : "50%",
    transform: anchorRect ? undefined : "translate(-50%, -50%)",
    width: 420,
    maxHeight: 360,
    backgroundColor: "#fff",
    border: "2px solid #005BAC",
    boxShadow: "4px 4px 12px rgba(0,0,0,0.25)",
    zIndex: 9999,
    display: "flex",
    flexDirection: "column",
    fontFamily: "'Noto Sans JP', sans-serif",
    fontSize: 12,
  };

  return (
    <>
      {/* Backdrop */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9998,
          backgroundColor: "rgba(0,0,0,0.1)",
        }}
        onClick={onClose}
      />
      <div style={popupStyle} onKeyDown={handleKeyDown}>
        {/* Header */}
        <div
          className="flex items-center justify-between px-2"
          style={{
            height: 26,
            backgroundColor: "#005BAC",
            color: "#fff",
            fontSize: 11,
            flexShrink: 0,
          }}
        >
          <span className="flex items-center gap-1">
            <Search size={12} />
            勘定科目検索 [F4]
          </span>
          <span
            className="cursor-pointer flex items-center"
            onClick={onClose}
          >
            <X size={14} />
          </span>
        </div>

        {/* Search input */}
        <div
          className="flex items-center gap-2 px-2"
          style={{
            height: 32,
            borderBottom: "1px solid #d0d0d0",
            flexShrink: 0,
          }}
        >
          <Search size={13} color="#999" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="科目名・コードで検索..."
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              fontSize: 12,
              padding: "2px 0",
              backgroundColor: "transparent",
            }}
          />
          <span style={{ fontSize: 10, color: "#999" }}>
            {filtered.length}件
          </span>
        </div>

        {/* Category filter tabs */}
        <div
          className="flex items-center gap-0 px-1"
          style={{
            height: 24,
            borderBottom: "1px solid #e0e0e0",
            flexShrink: 0,
            backgroundColor: "#f8f8f8",
          }}
        >
          {[
            { key: null, label: "全て" },
            { key: "資産", label: "資産" },
            { key: "負債", label: "負債" },
            { key: "純資産", label: "純資産" },
            { key: "収益", label: "収益" },
            { key: "費用", label: "費用" },
          ].map((tab) => (
            <div
              key={tab.label}
              className="cursor-pointer"
              style={{
                padding: "2px 8px",
                fontSize: 10,
                borderRadius: 2,
                backgroundColor:
                  categoryFilter === tab.key ? "#005BAC" : "transparent",
                color: categoryFilter === tab.key ? "#fff" : "#666",
                transition: "all 0.05s",
              }}
              onClick={() => setCategoryFilter(tab.key)}
            >
              {tab.label}
            </div>
          ))}
          <span
            style={{
              marginLeft: "auto",
              fontSize: 9,
              color: "#aaa",
            }}
          >
            Tab:絞込 / ↑↓:選択 / Enter:確定
          </span>
        </div>

        {/* List */}
        <div
          ref={listRef}
          className="flex-1 overflow-y-auto"
          style={{ minHeight: 0 }}
        >
          {filtered.length === 0 ? (
            <div
              className="flex items-center justify-center"
              style={{ height: 60, color: "#999", fontSize: 11 }}
            >
              該当する勘定科目がありません
            </div>
          ) : (
            filtered.map((account, idx) => (
              <div
                key={account.code}
                className="flex items-center cursor-pointer"
                style={{
                  padding: "3px 8px",
                  backgroundColor:
                    idx === selectedIndex ? "#005BAC" : "transparent",
                  color: idx === selectedIndex ? "#fff" : "#333",
                  borderBottom: "1px solid #f0f0f0",
                }}
                onMouseEnter={() => setSelectedIndex(idx)}
                onClick={() => onSelect(account)}
              >
                <span
                  style={{
                    width: 36,
                    fontSize: 10,
                    color: idx === selectedIndex ? "#ccc" : "#999",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {account.code}
                </span>
                <span style={{ flex: 1 }}>{account.name}</span>
                <span
                  className="rounded px-1"
                  style={{
                    fontSize: 9,
                    backgroundColor:
                      idx === selectedIndex
                        ? "rgba(255,255,255,0.2)"
                        : `${CATEGORY_COLORS[account.category]}15`,
                    color:
                      idx === selectedIndex
                        ? "#fff"
                        : CATEGORY_COLORS[account.category],
                    border: `1px solid ${
                      idx === selectedIndex
                        ? "rgba(255,255,255,0.3)"
                        : `${CATEGORY_COLORS[account.category]}30`
                    }`,
                  }}
                >
                  {account.category}
                </span>
                <span
                  style={{
                    width: 80,
                    textAlign: "right",
                    fontSize: 10,
                    color: idx === selectedIndex ? "#ddd" : "#888",
                  }}
                >
                  {account.taxType}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
