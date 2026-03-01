import { useState, useEffect } from "react";

export function StatusBar() {
  const [time, setTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="print-hidden flex items-center justify-between px-2"
      style={{
        height: 22,
        backgroundColor: "#e0e0e0",
        borderTop: "1px solid #c0c0c0",
        fontFamily: "'Noto Sans JP', sans-serif",
        fontSize: 11,
        color: "#555",
        userSelect: "none",
        flexShrink: 0,
      }}
    >
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="font-bold text-[#005BAC]">Cloud Synced</span>
        </div>
        <span style={{ color: "#999" }}>|</span>
        <span>準備完了</span>
        <span style={{ color: "#999" }}>|</span>
        <span>株式会社サンプル</span>
        <span style={{ color: "#999" }}>|</span>
        <span>令和7年度（個別）</span>
      </div>
      <div className="flex items-center gap-4">
        <span>INS</span>
        <span style={{ color: "#999" }}>|</span>
        <span>
          {mounted ? `${time.toLocaleDateString("ja-JP")} ${time.toLocaleTimeString("ja-JP")}` : ""}
        </span>
      </div>
    </div>
  );
}
