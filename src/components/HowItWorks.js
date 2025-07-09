import React from "react";
import { theme } from "../theme";

const steps = [
  {
    icon: "💬",
    title: "Chat in your language",
    desc: "Talk to the bot in 20+ Indian languages.",
  },
  {
    icon: "🤖",
    title: "AI helps you list or find products",
    desc: "AI auto-generates listings and finds what you need.",
  },
  {
    icon: "🛒",
    title: "Buy or sell with trust",
    desc: "Seamless, secure transactions for all.",
  },
];

function HowItWorks() {
  const [hoveredCard, setHoveredCard] = React.useState(null);

  const cardGradients = [
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  ];

  const hoverGradients = [
    "linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)",
    "linear-gradient(135deg, #ec4899 0%, #ef4444 100%)",
    "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
  ];

  return (
    <section
      style={{
        background: `linear-gradient(135deg, ${theme.colors.primary}10 0%, ${theme.colors.accent}05 50%, #fff 100%)`,
        padding: "3rem 2rem",
        display: "flex",
        justifyContent: "center",
        gap: 32,
        flexWrap: "wrap",
      }}
    >
      {steps.map((step, i) => (
        <div
          key={i}
          onMouseEnter={() => setHoveredCard(i)}
          onMouseLeave={() => setHoveredCard(null)}
          style={{
            background:
              hoveredCard === i ? hoverGradients[i] : cardGradients[i],
            color: "#fff",
            borderRadius: 20,
            padding: "2.5rem 2rem",
            minWidth: 240,
            maxWidth: 280,
            boxShadow:
              hoveredCard === i
                ? "0 20px 40px rgba(98, 0, 56, 0.3), 0 8px 20px rgba(255, 185, 0, 0.2)"
                : "0 10px 30px rgba(0, 0, 0, 0.15)",
            textAlign: "center",
            transform:
              hoveredCard === i
                ? "translateY(-8px) scale(1.05)"
                : "translateY(0) scale(1)",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            cursor: "pointer",
            border: "2px solid rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            style={{
              fontSize: 48,
              marginBottom: 16,
              filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))",
              transform: hoveredCard === i ? "scale(1.2)" : "scale(1)",
              transition: "all 0.3s ease",
            }}
          >
            {step.icon}
          </div>
          <div
            style={{
              fontWeight: 700,
              fontSize: 22,
              marginBottom: 12,
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
              lineHeight: 1.3,
            }}
          >
            {step.title}
          </div>
          <div
            style={{
              fontSize: 16,
              opacity: 0.95,
              lineHeight: 1.5,
              textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
            }}
          >
            {step.desc}
          </div>
        </div>
      ))}
    </section>
  );
}

export default HowItWorks;
