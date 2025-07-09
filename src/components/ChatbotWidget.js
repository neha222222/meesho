import React, { useState } from "react";
import { theme } from "../theme";

function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: "fixed",
          bottom: 32,
          right: 32,
          background: `linear-gradient(135deg, ${theme.colors.accent} 0%, #ff9500 50%, ${theme.colors.primary} 100%)`,
          color: "#fff",
          border: `3px solid ${theme.colors.primary}`,
          borderRadius: "50%",
          width: 70,
          height: 70,
          fontSize: 32,
          boxShadow: `0 8px 25px rgba(98, 0, 56, 0.4), 0 4px 15px rgba(255, 185, 0, 0.3)`,
          cursor: "pointer",
          zIndex: 1000,
          transform: isHovered ? "scale(1.1)" : "scale(1)",
          transition: "all 0.3s ease",
          animation: open ? "none" : "pulse 2s infinite",
        }}
        aria-label="Open Chatbot"
      >
        🤖
      </button>
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 110,
            right: 32,
            width: 340,
            height: 420,
            background: "#fff",
            color: theme.colors.primary,
            borderRadius: 18,
            boxShadow: "0 4px 24px #0004",
            zIndex: 1001,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              background: theme.colors.primary,
              color: "#fff",
              borderTopLeftRadius: 18,
              borderTopRightRadius: 18,
              padding: "1rem",
              fontWeight: 700,
              fontSize: 18,
            }}
          >
            Talk to Bharat Bazaar Buddy
            <button
              onClick={() => setOpen(false)}
              style={{
                float: "right",
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: 20,
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </div>
          <div
            style={{
              flex: 1,
              padding: "1rem",
              overflowY: "auto",
              fontSize: 16,
            }}
          >
            <div style={{ color: "#888", textAlign: "center", marginTop: 40 }}>
              [Multilingual chat coming soon]
            </div>
          </div>
          <form style={{ display: "flex", borderTop: "1px solid #eee" }}>
            <input
              type="text"
              placeholder="Type your message..."
              style={{
                flex: 1,
                padding: 12,
                border: "none",
                borderRadius: 0,
                fontSize: 16,
              }}
            />
            <button
              type="submit"
              style={{
                background: theme.colors.accent,
                color: theme.colors.primary,
                border: "none",
                padding: "0 18px",
                fontWeight: 700,
                fontSize: 18,
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default ChatbotWidget;
