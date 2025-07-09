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
            bottom: 115,
            right: 32,
            width: 360,
            height: 480,
            background: "#fff",
            color: theme.colors.primary,
            borderRadius: 20,
            boxShadow: `0 15px 35px rgba(98, 0, 56, 0.3), 0 5px 15px rgba(255, 185, 0, 0.2)`,
            border: `2px solid ${theme.colors.accent}`,
            zIndex: 1001,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              background: `linear-gradient(135deg, ${theme.colors.primary} 0%, #8b0047 50%, ${theme.colors.accent} 100%)`,
              color: "#fff",
              padding: "1.2rem",
              fontWeight: 700,
              fontSize: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "24px" }}>🤖</span>
              <div>
                <div>भारत बाजार बडी</div>
                <div style={{ fontSize: "12px", opacity: 0.9 }}>
                  AI Language Helper
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "rgba(255,255,255,0.2)",
                border: "none",
                color: "#fff",
                fontSize: 24,
                cursor: "pointer",
                borderRadius: "50%",
                width: 32,
                height: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ×
            </button>
          </div>
          <div
            style={{
              flex: 1,
              padding: "1.5rem",
              overflowY: "auto",
              fontSize: 16,
              background: "linear-gradient(180deg, #fff 0%, #fcf9ff 100%)",
            }}
          >
            <div
              style={{
                background: `linear-gradient(135deg, ${theme.colors.accent}20, ${theme.colors.primary}10)`,
                padding: "1rem",
                borderRadius: "12px",
                border: `1px solid ${theme.colors.accent}30`,
                textAlign: "center",
                marginBottom: "1rem",
              }}
            >
              <div style={{ fontSize: "20px", marginBottom: "8px" }}>🌍</div>
              <div
                style={{
                  color: theme.colors.primary,
                  fontWeight: "600",
                  marginBottom: "8px",
                }}
              >
                मल्टी-लैंग्वेज सपोर्ट
              </div>
              <div style={{ color: "#666", fontSize: "14px" }}>
                Hindi | English | Regional Languages
              </div>
            </div>
            <div
              style={{
                color: theme.colors.primary,
                textAlign: "center",
                fontSize: "15px",
                background: `${theme.colors.accent}10`,
                padding: "12px",
                borderRadius: "8px",
                border: `1px dashed ${theme.colors.accent}`,
              }}
            >
              💬 Multilingual AI Chat Coming Soon!
              <br />
              <span style={{ fontSize: "13px", color: "#666" }}>
                Ask in Hindi, English or your local language
              </span>
            </div>
          </div>
          <form
            style={{
              display: "flex",
              borderTop: `2px solid ${theme.colors.accent}30`,
              background: `linear-gradient(90deg, ${theme.colors.accent}05, ${theme.colors.primary}05)`,
            }}
          >
            <input
              type="text"
              placeholder="अपना संदेश टाइप करें / Type your message..."
              style={{
                flex: 1,
                padding: "15px",
                border: "none",
                fontSize: 16,
                background: "transparent",
                color: theme.colors.primary,
              }}
            />
            <button
              type="submit"
              style={{
                background: `linear-gradient(135deg, ${theme.colors.accent} 0%, #ff9500 100%)`,
                color: "#fff",
                border: "none",
                padding: "0 20px",
                fontWeight: 700,
                fontSize: 18,
                cursor: "pointer",
                transition: "all 0.3s ease",
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
