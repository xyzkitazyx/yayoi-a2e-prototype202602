import { useState, useEffect, useRef, useCallback } from "react";
import { Search, X, List } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchAccounts } from "../../lib/api";

export type SearchType = "account" | "sub" | "dept" | "tax" | "taxRate";

export interface AccountItem {
  code?: string;
  name: string;
  category?: string;
  taxType?: string;
}

export const ACCOUNT_MASTER: AccountItem[] = [
  { code: "100", name: "現金", category: "資産", taxType: "対象外" },
  { code: "111", name: "普通預金", category: "資産", taxType: "対象外" },
  { code: "130", name: "売掛金", category: "資産", taxType: "対象外" },
  { code: "310", name: "買掛金", category: "負債", taxType: "対象外" },
  { code: "500", name: "売上高", category: "収益", taxType: "課税売上10%" },
  { code: "600", name: "仕入高", category: "費用", taxType: "課税仕入10%" },
  { code: "630", name: "旅費交通費", category: "費用", taxType: "課税仕入10%" },
  { code: "640", name: "通信費", category: "費用", taxType: "課税仕入10%" },
  { code: "650", name: "消耗品費", category: "費用", taxType: "課税仕入10%" },
  { code: "660", name: "水道光熱費", category: "費用", taxType: "課税仕入10%" },
  { code: "670", name: "地代家賃", category: "費用", taxType: "非課税仕入" },
  { code: "680", name: "接待交際費", category: "費用", taxType: "課税仕入10%" },
];

const MASTER_SUB: AccountItem[] = [
  { name: "みずほ銀行" }, { name: "三井住友銀行" }, { name: "三菱UFJ銀行" }, { name: "PayPay銀行" }, { name: "得意先A" }, { name: "仕入先B" }
];

const MASTER_DEPT: AccountItem[] = [
  { name: "全社" }, { name: "営業部" }, { name: "総務部" }, { name: "開発部" }
];

const MASTER_TAX: AccountItem[] = [
  { name: "対象外" }, { name: "課税仕入10%" }, { name: "課税売上10%" }, { name: "非課税仕入" }, { name: "非課税売上" }
];

const MASTER_TAX_RATE: AccountItem[] = [
  { name: "10%" }, { name: "8%" }, { name: "0%" }
];

const CATEGORY_COLORS: Record<string, string> = {
  資産: "#005BAC",
  負債: "#C0392B",
  純資産: "#8E44AD",
  収益: "#27AE60",
  費用: "#E67E22",
};

interface AccountSearchPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (account: AccountItem) => void;
  anchorRect: { top: number; left: number } | null;
  initialQuery?: string;
  searchType?: SearchType;
}

export function AccountSearchPopup({
  isOpen,
  onClose,
  onSelect,
  anchorRect,
  initialQuery = "",
  searchType = "account",
}: AccountSearchPopupProps) {
  const [query, setQuery] = useState(initialQuery);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const { data: accountsData = ACCOUNT_MASTER } = useQuery({
    queryKey: ["accounts"],
    queryFn: fetchAccounts,
    staleTime: 1000 * 60 * 60,
  });

  let rawData: AccountItem[] = [];
  if (searchType === "account") rawData = accountsData;
  else if (searchType === "sub") rawData = MASTER_SUB;
  else if (searchType === "dept") rawData = MASTER_DEPT;
  else if (searchType === "tax") rawData = MASTER_TAX;
  else if (searchType === "taxRate") rawData = MASTER_TAX_RATE;

  const filtered = rawData.filter((a: AccountItem) => {
    const matchText = !query || a.name.includes(query) || (a.code && a.code.includes(query)) || (a.category && a.category.includes(query));
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

  useEffect(() => {
    if (listRef.current) {
      const el = listRef.current.children[selectedIndex] as HTMLElement;
      if (el) el.scrollIntoView({ block: "nearest" });
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
        if (filtered[selectedIndex]) onSelect(filtered[selectedIndex]);
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "Tab" && searchType === "account") {
        e.preventDefault();
        const cats = [null, "資産", "負債", "純資産", "収益", "費用"];
        const currentIdx = cats.indexOf(categoryFilter);
        setCategoryFilter(cats[(currentIdx + 1) % cats.length]);
      }
    },
    [filtered, selectedIndex, onSelect, onClose, categoryFilter, searchType]
  );

  if (!isOpen) return null;

  const titles: Record<SearchType, string> = {
    account: "勘定科目検索 [F4]",
    sub: "補助科目検索 [F4]",
    dept: "部門検索 [F4]",
    tax: "税区分検索 [F4]",
    taxRate: "税率選択 [F4]"
  };

  const popupRectStyle: React.CSSProperties = {
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
    fontSize: 12,
  };

  return (
    <>
      <div style={{ position: "fixed", inset: 0, zIndex: 9998 }} onClick={onClose} />
      <div style={popupRectStyle} onKeyDown={handleKeyDown}>
        <div className="flex items-center justify-between px-2" style={{ height: 26, backgroundColor: "#005BAC", color: "#fff", fontSize: 11, flexShrink: 0 }}>
          <span className="flex items-center gap-1">
            {searchType === "account" ? <Search size={12} /> : <List size={12} />}
            {titles[searchType]}
          </span>
          <span className="cursor-pointer flex items-center" onClick={onClose}>
            <X size={14} />
          </span>
        </div>

        <div className="flex items-center gap-2 px-2" style={{ height: 32, borderBottom: "1px solid #d0d0d0", flexShrink: 0 }}>
          <Search size={13} color="#999" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="絞り込み..."
            style={{ flex: 1, border: "none", outline: "none", fontSize: 12, padding: "2px 0", backgroundColor: "transparent" }}
          />
          <span style={{ fontSize: 10, color: "#999" }}>{filtered.length}件</span>
        </div>

        {searchType === "account" && (
          <div className="flex items-center gap-0 px-1" style={{ height: 24, borderBottom: "1px solid #e0e0e0", flexShrink: 0, backgroundColor: "#f8f8f8" }}>
            {[{ key: null, label: "全て" }, { key: "資産", label: "資産" }, { key: "負債", label: "負債" }, { key: "純資産", label: "純資産" }, { key: "収益", label: "収益" }, { key: "費用", label: "費用" }].map((tab) => (
              <div
                key={tab.label}
                className="cursor-pointer"
                style={{
                  padding: "2px 8px", fontSize: 10, borderRadius: 2,
                  backgroundColor: categoryFilter === tab.key ? "#005BAC" : "transparent",
                  color: categoryFilter === tab.key ? "#fff" : "#666", transition: "all 0.05s",
                }}
                onClick={() => setCategoryFilter(tab.key)}
              >
                {tab.label}
              </div>
            ))}
          </div>
        )}

        <div ref={listRef} className="flex-1 overflow-y-auto" style={{ minHeight: 0 }}>
          {filtered.length === 0 ? (
            <div className="flex items-center justify-center" style={{ height: 60, color: "#999", fontSize: 11 }}>該当項目がありません</div>
          ) : (
            filtered.map((account, idx) => (
              <div
                key={account.code || account.name}
                className="flex items-center cursor-pointer"
                style={{
                  padding: "4px 8px", minHeight: "26px",
                  backgroundColor: idx === selectedIndex ? "#005BAC" : "transparent",
                  color: idx === selectedIndex ? "#fff" : "#333",
                  borderBottom: "1px solid #f0f0f0",
                }}
                onMouseEnter={() => setSelectedIndex(idx)}
                onClick={() => onSelect(account)}
              >
                {searchType === "account" ? (
                  <>
                    <span style={{ width: 36, fontSize: 10, color: idx === selectedIndex ? "#ccc" : "#999", fontVariantNumeric: "tabular-nums" }}>{account.code}</span>
                    <span style={{ flex: 1 }}>{account.name}</span>
                    <span className="rounded px-1" style={{ fontSize: 9, backgroundColor: idx === selectedIndex ? "rgba(255,255,255,0.2)" : `${CATEGORY_COLORS[account.category!]}15`, color: idx === selectedIndex ? "#fff" : CATEGORY_COLORS[account.category!], border: `1px solid ${idx === selectedIndex ? "rgba(255,255,255,0.3)" : `${CATEGORY_COLORS[account.category!]}30`}` }}>
                      {account.category}
                    </span>
                    <span style={{ width: 80, textAlign: "right", fontSize: 10, color: idx === selectedIndex ? "#ddd" : "#888" }}>{account.taxType}</span>
                  </>
                ) : (
                  <span style={{ flex: 1 }}>{account.name}</span>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
