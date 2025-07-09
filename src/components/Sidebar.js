import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { theme } from '../theme';

const links = [
  { to: '/seller', label: 'Dashboard', icon: '🏠' },
  { to: '/seller', label: 'My Listings', icon: '📦' },
  { to: '/add-product', label: 'Add Product', icon: '➕' },
  { to: '/seller', label: 'Orders', icon: '🧾' },
  { to: '/seller', label: 'Support', icon: '💬' },
  { to: '/seller', label: 'Settings', icon: '⚙️' },
];

function Sidebar() {
  const location = useLocation();
  return (
    <aside style={{
      width: 200,
      background: theme.colors.primary,
      color: '#fff',
      padding: '2rem 1rem',
      minHeight: '80vh',
      borderRight: `3px solid ${theme.colors.accent}`,
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
    }}>
      {links.map((link, i) => (
        <Link
          key={i}
          to={link.to}
          style={{
            color: location.pathname === link.to ? theme.colors.accent : '#fff',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: 18,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '0.5rem 0',
          }}
        >
          <span>{link.icon}</span> {link.label}
        </Link>
      ))}
    </aside>
  );
}

export default Sidebar; 