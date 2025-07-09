import React from 'react';
import { theme } from '../theme';

const products = [
  { id: 1, title: 'Cotton Saree', price: '₹499', seller: 'Asha', img: '' },
  { id: 2, title: 'Handmade Basket', price: '₹199', seller: 'Ravi', img: '' },
  { id: 3, title: 'Tribal Jewelry', price: '₹299', seller: 'Sunita', img: '' },
];

function BuyerPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', gap: 16, marginBottom: 32 }}>
        <input
          type="text"
          placeholder="Type or speak what you need"
          style={{ flex: 1, padding: 12, borderRadius: 8, border: 'none', fontSize: 18 }}
        />
        <button style={{ background: theme.colors.accent, color: theme.colors.primary, border: 'none', borderRadius: 8, padding: '0 18px', fontSize: 22, cursor: 'pointer' }}>🎤</button>
      </div>
      <div style={{ marginBottom: 24 }}>
        <span style={{ color: theme.colors.accent, fontWeight: 600 }}>Filters:</span>
        <select style={{ marginLeft: 12, padding: 6, borderRadius: 6 }}>
          <option>All Categories</option>
          <option>Sarees</option>
          <option>Baskets</option>
          <option>Jewelry</option>
        </select>
        <select style={{ marginLeft: 12, padding: 6, borderRadius: 6 }}>
          <option>All Prices</option>
          <option>Below ₹200</option>
          <option>₹200-₹500</option>
          <option>Above ₹500</option>
        </select>
        <select style={{ marginLeft: 12, padding: 6, borderRadius: 6 }}>
          <option>All Languages</option>
          <option>Hindi</option>
          <option>English</option>
          <option>Gondi</option>
        </select>
      </div>
      <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
        {products.map((p) => (
          <div key={p.id} style={{ background: '#fff', color: theme.colors.primary, borderRadius: 16, padding: 24, minWidth: 220, maxWidth: 260, boxShadow: '0 2px 12px #0001', textAlign: 'center' }}>
            <div style={{ width: 80, height: 80, background: '#eee', borderRadius: 12, margin: '0 auto 12px auto' }}></div>
            <div style={{ fontWeight: 700, fontSize: 20 }}>{p.title}</div>
            <div style={{ fontSize: 18, margin: '8px 0' }}>{p.price}</div>
            <div style={{ fontSize: 15, color: theme.colors.accent }}>Seller: {p.seller}</div>
            <button style={{ marginTop: 12, background: theme.colors.accent, color: theme.colors.primary, border: 'none', borderRadius: 8, padding: '8px 18px', fontWeight: 600, fontSize: 16, cursor: 'pointer' }}>Chat to Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuyerPage; 