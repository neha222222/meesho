import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SellerDashboard from './pages/SellerDashboard';
import BuyerPage from './pages/BuyerPage';
import ProductWizard from './pages/ProductWizard';
import Header from './components/Header';
import ChatbotWidget from './components/ChatbotWidget';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/seller" element={<SellerDashboard />} />
        <Route path="/buyer" element={<BuyerPage />} />
        <Route path="/add-product" element={<ProductWizard />} />
      </Routes>
      <ChatbotWidget />
    </div>
  );
}

export default App; 