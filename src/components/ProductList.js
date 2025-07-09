import React from 'react';
import { theme } from '../theme';

const products = [
  { id: 1, img: '', title: 'Cotton Saree', status: 'Active' },
  { id: 2, img: '', title: 'Handmade Basket', status: 'Pending' },
  { id: 3, img: '', title: 'Tribal Jewelry', status: 'Active' },
];

function ProductList() {
  return (
    <table style={{ width: '100%', background: '#fff', color: theme.colors.primary, borderRadius: 12, overflow: 'hidden', marginTop: 16 }}>
      <thead>
        <tr style={{ background: theme.colors.accent, color: theme.colors.primary }}>
          <th style={{ padding: 12 }}>Image</th>
          <th>Title</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p.id}>
            <td style={{ textAlign: 'center', padding: 8 }}>
              <div style={{ width: 48, height: 48, background: '#eee', borderRadius: 8, display: 'inline-block' }}></div>
            </td>
            <td>{p.title}</td>
            <td>{p.status}</td>
            <td>
              <button style={{ marginRight: 8, background: theme.colors.accent, color: theme.colors.primary, border: 'none', borderRadius: 6, padding: '4px 10px', fontWeight: 600, cursor: 'pointer' }}>Edit</button>
              <button style={{ background: '#eee', color: theme.colors.primary, border: 'none', borderRadius: 6, padding: '4px 10px', fontWeight: 600, cursor: 'pointer' }}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductList; 