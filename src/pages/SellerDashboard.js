import React from 'react';
import Sidebar from '../components/Sidebar';
import AddProduct from '../components/AddProduct';
import ProductList from '../components/ProductList';

function SellerDashboard() {
  return (
    <div style={{ display: 'flex', minHeight: '80vh' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '2rem' }}>
        <div style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>
          Welcome, Seller! List your products in your language.
        </div>
        <div style={{ display: 'flex', gap: 32, marginBottom: 32 }}>
          {/* Quick Stats */}
          <div style={{ background: '#fff', color: '#620038', borderRadius: 12, padding: 24, minWidth: 160, textAlign: 'center', fontWeight: 600 }}>
            Products Listed<br />12
          </div>
          <div style={{ background: '#fff', color: '#620038', borderRadius: 12, padding: 24, minWidth: 160, textAlign: 'center', fontWeight: 600 }}>
            Orders<br />5
          </div>
          <div style={{ background: '#fff', color: '#620038', borderRadius: 12, padding: 24, minWidth: 160, textAlign: 'center', fontWeight: 600 }}>
            Conversion Rate<br />18%
          </div>
        </div>
        <AddProduct />
        <h3 style={{ marginTop: 40, color: '#FFB900' }}>Recent Listings</h3>
        <ProductList />
      </main>
    </div>
  );
}

export default SellerDashboard; 