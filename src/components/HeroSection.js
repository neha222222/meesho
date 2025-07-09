import React from 'react';
import { theme } from '../theme';

function HeroSection() {
  return (
    <section style={{
      background: theme.colors.primary,
      color: '#fff',
      padding: '4rem 0 2rem 0',
      textAlign: 'center',
    }}>
      <h1 style={{ fontSize: 40, fontWeight: 700, marginBottom: 16 }}>
        Empowering Bharat’s Sellers with GenAI on WhatsApp
      </h1>
      <p style={{ fontSize: 22, marginBottom: 32 }}>
        List, discover, and sell products in your language, with AI-powered ease.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
        <button style={{
          background: theme.colors.accent,
          color: theme.colors.primary,
          border: 'none',
          borderRadius: 24,
          padding: '0.75rem 2rem',
          fontWeight: 700,
          fontSize: 18,
          cursor: 'pointer',
        }}>
          Try the Bot
        </button>
        <button style={{
          background: 'transparent',
          color: theme.colors.accent,
          border: `2px solid ${theme.colors.accent}`,
          borderRadius: 24,
          padding: '0.75rem 2rem',
          fontWeight: 700,
          fontSize: 18,
          cursor: 'pointer',
        }}>
          See How It Works
        </button>
      </div>
    </section>
  );
}

export default HeroSection; 