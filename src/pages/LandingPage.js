import React from 'react';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';

function LandingPage() {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <div style={{ margin: '2rem auto', textAlign: 'center', color: '#FFB900' }}>
        {/* Placeholder for demo video or illustration */}
        <div style={{
          width: 320, height: 180, background: '#fff2', borderRadius: 16, display: 'inline-block',
          display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 20
        }}>
          Demo/Illustration Coming Soon
        </div>
      </div>
    </div>
  );
}

export default LandingPage; 