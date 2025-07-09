import React, { useState } from 'react';
import { theme } from '../theme';

const steps = [
  'Upload/Take Photo',
  'Enter/Record Details',
  'AI auto-generates Title, Description, Tags, Price',
  'Preview Listing',
  'Publish to WhatsApp/Meesho',
];

function ProductWizard() {
  const [step, setStep] = useState(0);
  return (
    <div style={{ padding: '2rem', maxWidth: 600, margin: '0 auto' }}>
      <h2 style={{ color: theme.colors.accent }}>Product Listing Wizard</h2>
      <div style={{ margin: '2rem 0', background: '#fff', color: theme.colors.primary, borderRadius: 16, padding: 32, minHeight: 220 }}>
        <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 16 }}>Step {step + 1}: {steps[step]}</div>
        <div style={{ marginBottom: 24, color: '#888' }}>[UI for this step coming soon]</div>
        <div>
          <button
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            style={{ marginRight: 16, background: '#eee', color: theme.colors.primary, border: 'none', borderRadius: 8, padding: '8px 18px', fontWeight: 600, fontSize: 16, cursor: step === 0 ? 'not-allowed' : 'pointer' }}
          >
            Previous
          </button>
          <button
            onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
            disabled={step === steps.length - 1}
            style={{ background: theme.colors.accent, color: theme.colors.primary, border: 'none', borderRadius: 8, padding: '8px 18px', fontWeight: 600, fontSize: 16, cursor: step === steps.length - 1 ? 'not-allowed' : 'pointer' }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductWizard; 