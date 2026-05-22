import { useState } from "react";

const steps = [
  {
    id: 1,
    icon: "⬡",
    label: "Repository",
    color: "#f97316",
    description: "Kho chứa toàn bộ code & lịch sử của dự án",
    detail: [
      { cmd: "git init", note: "Khởi tạo repo mới" },
      { cmd: "git clone <url>", note: "Sao chép repo từ GitHub" },
    ],
    tip: "Repository = toàn bộ dự án của bạn, bao gồm code, lịch sử, và các branch.",
  },
  {
    id: 2,
    icon: "⑂",
    label: "Branch",
    color: "#a855f7",
    description: "Tạo nhánh riêng để làm việc độc lập",
    detail: [
      { cmd: "git checkout -b feature/login", note: "Tạo & chuyển sang branch mới" },
      { cmd: "git branch", note: "Xem danh sách branch" },
    ],
    tip: "Luôn tạo branch mới thay vì làm việc trực tiếp trên main.",
  },
  {
    id: 3,
    icon: "✎",
    label: "Commit",
    color: "#3b82f6",
    description: "Lưu lại snapshot của thay đổi",
    detail: [
      { cmd: "git add .", note: "Đưa file vào staging area" },
      { cmd: 'git commit -m "message"', note: "Tạo commit với mô tả" },
    ],
    tip: "Commit thường xuyên, mỗi commit chỉ nên giải quyết MỘT vấn đề cụ thể.",
  },
  {
    id: 4,
    icon: "↑",
    label: "Push",
    color: "#06b6d4",
    description: "Đẩy code từ máy local lên GitHub",
    detail: [
      { cmd: "git push origin feature/login", note: "Push branch lên GitHub" },
      { cmd: "git push -u origin main", note: "Push lần đầu & set upstream" },
    ],
    tip: "Push thường xuyên để backup code và team có thể thấy tiến độ của bạn.",
  },
  {
    id: 5,
    icon: "⇄",
    label: "Pull Request",
    color: "#10b981",
    description: "Đề xuất merge code vào nhánh chính",
    detail: [
      { cmd: "GitHub UI", note: "Mở PR trên github.com" },
      { cmd: "gh pr create", note: "Tạo PR qua GitHub CLI" },
    ],
    tip: "PR là nơi team review code, thảo luận, và đảm bảo chất lượng trước khi merge.",
  },
  {
    id: 6,
    icon: "✓",
    label: "Merge",
    color: "#f59e0b",
    description: "Hợp nhất branch vào main",
    detail: [
      { cmd: "git merge feature/login", note: "Merge branch vào nhánh hiện tại" },
      { cmd: "git branch -d feature/login", note: "Xóa branch sau khi merge" },
    ],
    tip: "Sau khi merge thành công, nên xóa branch cũ để giữ repo gọn gàng.",
  },
];

const flowArrows = ["→", "→", "→", "→", "→"];

export default function App() {
  const [active, setActive] = useState(null);
  const [hovered, setHovered] = useState(null);

  const selected = active !== null ? steps[active] : null;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0d1117",
      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      color: "#e6edf3",
      padding: "40px 24px",
      boxSizing: "border-box",
    }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          background: "#161b22",
          border: "1px solid #30363d",
          borderRadius: 24,
          padding: "6px 18px",
          marginBottom: 16,
          fontSize: 12,
          color: "#8b949e",
          letterSpacing: 2,
        }}>
          <span style={{ color: "#f97316" }}>●</span> GITHUB WORKFLOW
        </div>
        <h1 style={{
          fontSize: "clamp(26px, 5vw, 42px)",
          fontWeight: 800,
          margin: 0,
          background: "linear-gradient(135deg, #f97316 0%, #a855f7 40%, #3b82f6 70%, #10b981 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: -1,
          lineHeight: 1.2,
        }}>
          Quy trình làm việc với Git & GitHub
        </h1>
        <p style={{ color: "#8b949e", marginTop: 10, fontSize: 14 }}>
          Click vào từng bước để xem chi tiết
        </p>
      </div>

      {/* Flow Steps */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 0,
        marginBottom: 40,
        maxWidth: 900,
        margin: "0 auto 40px",
      }}>
        {steps.map((step, i) => (
          <div key={step.id} style={{ display: "flex", alignItems: "center" }}>
            {/* Step Card */}
            <div
              onClick={() => setActive(active === i ? null : i)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                width: 100,
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
                padding: "16px 8px",
                borderRadius: 16,
                border: active === i
                  ? `2px solid ${step.color}`
                  : `2px solid ${hovered === i ? step.color + "60" : "#21262d"}`,
                background: active === i
                  ? `${step.color}18`
                  : hovered === i
                  ? "#161b22"
                  : "#0d1117",
                transition: "all 0.2s ease",
                transform: active === i ? "translateY(-4px)" : hovered === i ? "translateY(-2px)" : "none",
                boxShadow: active === i ? `0 8px 32px ${step.color}30` : "none",
              }}
            >
              {/* Step Number */}
              <div style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: active === i ? step.color : "#21262d",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 12,
                fontWeight: 700,
                color: active === i ? "#0d1117" : "#8b949e",
                transition: "all 0.2s",
              }}>
                {step.id}
              </div>

              {/* Icon */}
              <div style={{
                fontSize: 24,
                color: active === i ? step.color : hovered === i ? step.color : "#8b949e",
                transition: "color 0.2s",
                lineHeight: 1,
              }}>
                {step.icon}
              </div>

              {/* Label */}
              <div style={{
                fontSize: 12,
                fontWeight: 700,
                color: active === i ? step.color : "#c9d1d9",
                letterSpacing: 0.5,
                textAlign: "center",
              }}>
                {step.label}
              </div>
            </div>

            {/* Arrow */}
            {i < steps.length - 1 && (
              <div style={{
                fontSize: 18,
                color: "#30363d",
                padding: "0 2px",
                userSelect: "none",
              }}>
                →
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Detail Panel */}
      <div style={{
        maxWidth: 700,
        margin: "0 auto",
        minHeight: 200,
      }}>
        {selected ? (
          <div style={{
            background: "#161b22",
            border: `1px solid ${selected.color}40`,
            borderRadius: 20,
            padding: "28px 32px",
            boxShadow: `0 0 40px ${selected.color}15`,
            animation: "fadeIn 0.25s ease",
          }}>
            {/* Panel Header */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <div style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: `${selected.color}20`,
                border: `1px solid ${selected.color}50`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
                color: selected.color,
              }}>
                {selected.icon}
              </div>
              <div>
                <div style={{ fontSize: 11, color: "#8b949e", letterSpacing: 2, marginBottom: 2 }}>
                  BƯỚC {selected.id} / 6
                </div>
                <div style={{ fontSize: 20, fontWeight: 700, color: selected.color }}>
                  {selected.label}
                </div>
              </div>
            </div>

            <p style={{ color: "#c9d1d9", margin: "0 0 20px", lineHeight: 1.7, fontSize: 15 }}>
              {selected.description}
            </p>

            {/* Commands */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
              {selected.detail.map((d, i) => (
                <div key={i} style={{
                  background: "#0d1117",
                  border: "1px solid #21262d",
                  borderRadius: 10,
                  padding: "12px 16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                  flexWrap: "wrap",
                }}>
                  <code style={{
                    color: "#79c0ff",
                    fontSize: 13,
                    fontFamily: "inherit",
                  }}>
                    <span style={{ color: "#8b949e", marginRight: 6 }}>$</span>
                    {d.cmd}
                  </code>
                  <span style={{
                    fontSize: 12,
                    color: "#8b949e",
                    background: "#161b22",
                    padding: "3px 8px",
                    borderRadius: 6,
                    whiteSpace: "nowrap",
                  }}>
                    {d.note}
                  </span>
                </div>
              ))}
            </div>

            {/* Tip */}
            <div style={{
              background: `${selected.color}10`,
              border: `1px solid ${selected.color}30`,
              borderRadius: 10,
              padding: "12px 16px",
              display: "flex",
              gap: 10,
              alignItems: "flex-start",
            }}>
              <span style={{ color: selected.color, fontSize: 16, marginTop: 1 }}>💡</span>
              <span style={{ color: "#c9d1d9", fontSize: 13, lineHeight: 1.6 }}>
                {selected.tip}
              </span>
            </div>

            {/* Nav buttons */}
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              <button
                onClick={() => setActive(a => Math.max(0, a - 1))}
                disabled={active === 0}
                style={{
                  flex: 1,
                  padding: "10px",
                  background: active === 0 ? "#21262d40" : "#21262d",
                  border: "1px solid #30363d",
                  borderRadius: 8,
                  color: active === 0 ? "#8b949e60" : "#c9d1d9",
                  cursor: active === 0 ? "default" : "pointer",
                  fontSize: 13,
                  fontFamily: "inherit",
                }}>
                ← Trước
              </button>
              <button
                onClick={() => setActive(a => Math.min(steps.length - 1, a + 1))}
                disabled={active === steps.length - 1}
                style={{
                  flex: 1,
                  padding: "10px",
                  background: active === steps.length - 1 ? "#21262d40" : selected.color,
                  border: "none",
                  borderRadius: 8,
                  color: active === steps.length - 1 ? "#8b949e60" : "#0d1117",
                  cursor: active === steps.length - 1 ? "default" : "pointer",
                  fontSize: 13,
                  fontWeight: 700,
                  fontFamily: "inherit",
                }}>
                Tiếp →
              </button>
            </div>
          </div>
        ) : (
          /* Default state: full flow overview */
          <div style={{
            background: "#161b22",
            border: "1px solid #21262d",
            borderRadius: 20,
            padding: "28px 32px",
          }}>
            <div style={{ fontSize: 13, color: "#8b949e", marginBottom: 20, letterSpacing: 1 }}>
              TOÀN BỘ WORKFLOW
            </div>
            {steps.map((step, i) => (
              <div
                key={step.id}
                onClick={() => setActive(i)}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                  marginBottom: i < steps.length - 1 ? 0 : 0,
                  cursor: "pointer",
                }}
              >
                {/* Left: line + dot */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 24 }}>
                  <div style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: `${step.color}20`,
                    border: `2px solid ${step.color}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 10,
                    fontWeight: 700,
                    color: step.color,
                    flexShrink: 0,
                  }}>
                    {step.id}
                  </div>
                  {i < steps.length - 1 && (
                    <div style={{ width: 2, flex: 1, minHeight: 28, background: "#21262d", margin: "4px 0" }} />
                  )}
                </div>

                {/* Right: content */}
                <div style={{ paddingBottom: i < steps.length - 1 ? 12 : 0, flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                    <span style={{ color: step.color, fontWeight: 700, fontSize: 14 }}>{step.label}</span>
                    <span style={{ color: "#8b949e", fontSize: 12 }}>→ click để xem chi tiết</span>
                  </div>
                  <div style={{ color: "#8b949e", fontSize: 12, lineHeight: 1.5 }}>{step.description}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
