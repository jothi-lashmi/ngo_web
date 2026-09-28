import React, { useState } from 'react';
import UpiQr from './UpiQr';
import { Heart, ShieldCheck, Award } from 'lucide-react';

const DonationSection = () => {
  const [selectedAmount, setSelectedAmount] = useState('1000');
  const [customAmount, setCustomAmount] = useState('');

  const handlePresetClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(e.target.value);
  };

  return (
    <div className="donation-card">
      <div className="donation-grid">
        <div className="donation-content">
          <span className="badge badge-secondary" style={{ marginBottom: '12px' }}>
            <Heart size={14} /> Direct Impact Donation
          </span>
          <h2 style={{ marginBottom: '16px' }}>Support Our Mission</h2>
          <p className="text-muted" style={{ marginBottom: '24px', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Your contribution directly funds child education kits, mobile health clinics, clean water installations, and artisan training for rural communities.
          </p>

          <div style={{ marginBottom: '24px' }}>
            <label className="form-label" style={{ marginBottom: '8px', display: 'block' }}>
              Select Donation Amount (₹ INR)
            </label>
            <div className="amount-presets">
              {['500', '1000', '2500', '5000'].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  className={`preset-btn ${selectedAmount === amt && !customAmount ? 'active' : ''}`}
                  onClick={() => handlePresetClick(amt)}
                >
                  ₹{amt}
                </button>
              ))}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="custom-amount">Or Enter Custom Amount</label>
              <input
                id="custom-amount"
                type="number"
                min="10"
                className="form-control"
                placeholder="Enter custom amount (e.g. 1500)"
                value={customAmount}
                onChange={handleCustomChange}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', background: 'var(--bg-surface)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-main)' }}>
              <ShieldCheck size={18} style={{ color: 'var(--primary)' }} /> 100% Direct & Transparent Transfer
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-main)' }}>
              <Award size={18} style={{ color: 'var(--primary)' }} /> Tax Exemption under Section 80G
            </div>
          </div>
        </div>

        <div className="donation-payment-method">
          <UpiQr selectedAmount={selectedAmount} />
        </div>
      </div>
    </div>
  );
};

export default DonationSection;
