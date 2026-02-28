import { useState, useEffect } from "react";

export function StatusBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="flex items-center justify-between px-2"
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
          {time.toLocaleDateString("ja-JP")} {time.toLocaleTimeString("ja-JP")}
        </span>
      </div>
    </div>
  );
}
