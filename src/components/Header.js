import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../theme';

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: theme.colors.primary,
  padding: '0.5rem 2rem',
  borderBottom: `4px solid ${theme.colors.accent}`,
};
const logoStyle = {
  height: 48,
};
const navStyle = {
  display: 'flex',
  gap: '1.5rem',
};
const linkStyle = {
  color: theme.colors.accent,
  textDecoration: 'none',
  fontWeight: 600,
  fontSize: 18,
};

function Header() {
  return (
    <header style={headerStyle}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <img src={process.env.PUBLIC_URL + '/meesho_logo.png'} alt="Meesho Logo" style={logoStyle} />
        <span style={{ fontWeight: 700, fontSize: 24, color: '#fff', letterSpacing: 1 }}>Bharat Bazaar Buddy</span>
      </div>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/seller" style={linkStyle}>Seller Dashboard</Link>
        <Link to="/buyer" style={linkStyle}>Buyer</Link>
        <Link to="/add-product" style={linkStyle}>Add Product</Link>
      </nav>
    </header>
  );
}

export default Header; 