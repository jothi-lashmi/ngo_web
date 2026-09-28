import React, { useState } from 'react';
import { siteData } from '../../data/siteData';
import { Copy, Check, QrCode, Building2 } from 'lucide-react';

const UpiQr = ({ selectedAmount }) => {
  const [copied, setCopied] = useState(false);
  const upiId = siteData.donation.upiId;
  const bank = siteData.donation.bankDetails;

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const dynamicQrUrl = selectedAmount
    ? `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=${upiId}&pn=HopeCare%20Foundation&am=${selectedAmount}`
    : siteData.donation.qrCodeUrl;

  return (
    <div className="upi-box">
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-dark)', fontWeight: 700 }}>
        <QrCode size={20} /> Scan & Pay via Any UPI App
      </div>

      <div className="upi-qr-wrapper">
        <img src={dynamicQrUrl} alt="UPI QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>

      <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
        Supports Google Pay, PhonePe, Paytm, BHIM & All UPI Apps
      </div>

      <div className="upi-id-field">
        <span className="upi-id-text">{upiId}</span>
        <button className="copy-btn" onClick={handleCopy} title="Copy UPI ID">
          {copied ? <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--success)' }}><Check size={14} /> Copied</span> : <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Copy size={14} /> Copy</span>}
        </button>
      </div>

      <div className="bank-details-card" style={{ width: '100%', textAlign: 'left' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, marginBottom: '12px', color: 'var(--dark-heading)' }}>
          <Building2 size={18} style={{ color: 'var(--primary)' }} /> Direct Bank Transfer (NEFT/IMPS)
        </div>
        <div className="bank-detail-item">
          <span>Account Name:</span>
          <strong>{bank.accountName}</strong>
        </div>
        <div className="bank-detail-item">
          <span>Account No:</span>
          <strong>{bank.accountNumber}</strong>
        </div>
        <div className="bank-detail-item">
          <span>Bank Name:</span>
          <strong>{bank.bankName}</strong>
        </div>
        <div className="bank-detail-item">
          <span>IFSC Code:</span>
          <strong>{bank.ifscCode}</strong>
        </div>
      </div>
    </div>
  );
};

export default UpiQr;
