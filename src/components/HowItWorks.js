import React from 'react';
import { theme } from '../theme';

const steps = [
  { icon: '💬', title: 'Chat in your language', desc: 'Talk to the bot in 20+ Indian languages.' },
  { icon: '🤖', title: 'AI helps you list or find products', desc: 'AI auto-generates listings and finds what you need.' },
  { icon: '🛒', title: 'Buy or sell with trust', desc: 'Seamless, secure transactions for all.' },
];

function HowItWorks() {
  return (
    <section style={{
      background: '#fff2',
      padding: '2rem 0',
      display: 'flex',
      justifyContent: 'center',
      gap: 48,
      flexWrap: 'wrap',
    }}>
      {steps.map((step, i) => (
        <div key={i} style={{
          background: '#fff',
          color: theme.colors.primary,
          borderRadius: 16,
          padding: '2rem 1.5rem',
          minWidth: 220,
          maxWidth: 260,
          boxShadow: '0 2px 12px #0001',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>{step.icon}</div>
          <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>{step.title}</div>
          <div style={{ fontSize: 16 }}>{step.desc}</div>
        </div>
      ))}
    </section>
  );
}

export default HowItWorks; 