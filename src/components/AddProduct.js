import React from 'react';
import { theme } from '../theme';

function AddProduct() {
  return (
    <div style={{
      background: '#fff',
      color: theme.colors.primary,
      borderRadius: 16,
      padding: 24,
      marginBottom: 32,
      maxWidth: 500,
    }}>
      <h3 style={{ color: theme.colors.accent }}>Add Product</h3>
      <div style={{ marginBottom: 16 }}>
        <label>Upload Photo: </label>
        <input type="file" accept="image/*" style={{ marginLeft: 8 }} />
      </div>
      <div style={{ marginBottom: 16 }}>
        <label>Product Details: </label>
        <input type="text" placeholder="Type or record details..." style={{ marginLeft: 8, width: 220, padding: 6, borderRadius: 6, border: '1px solid #ccc' }} />
        <button style={{ marginLeft: 8, background: theme.colors.accent, color: theme.colors.primary, border: 'none', borderRadius: 8, padding: '4px 12px', fontWeight: 600, cursor: 'pointer' }}>🎤</button>
      </div>
      <div style={{ marginBottom: 16 }}>
        <label>Language: </label>
        <select style={{ marginLeft: 8, padding: 6, borderRadius: 6 }}>
          <option>Hindi</option>
          <option>English</option>
          <option>Gondi</option>
          <option>Marathi</option>
          <option>Telugu</option>
        </select>
      </div>
      <button style={{
        background: theme.colors.accent,
        color: theme.colors.primary,
        border: 'none',
        borderRadius: 12,
        padding: '0.5rem 1.5rem',
        fontWeight: 700,
        fontSize: 16,
        cursor: 'pointer',
      }}>
        Generate Listing
      </button>
    </div>
  );
}

export default AddProduct; 