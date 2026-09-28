import React from 'react';
import PageContainer from '../components/layout/PageContainer';

const PrivacyPolicy = () => {
  return (
    <PageContainer title="Privacy Policy">
      <section className="page-hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>How HopeCare Foundation collects, protects, and respects your personal information.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow" style={{ lineHeight: '1.8' }}>
          <h3 style={{ marginBottom: '16px' }}>1. Data Collection</h3>
          <p className="text-muted" style={{ marginBottom: '24px' }}>
            We collect personal information voluntarily provided by visitors when submitting contact forms, volunteer applications, or donation inquiries (such as name, email address, phone number, and city).
          </p>

          <h3 style={{ marginBottom: '16px' }}>2. Use of Information</h3>
          <p className="text-muted" style={{ marginBottom: '24px' }}>
            Personal information is used solely to process communications, issue donation tax exemption receipts under Section 80G, and coordinate volunteer assignments. We never sell or share donor data with third parties.
          </p>

          <h3 style={{ marginBottom: '16px' }}>3. Data Security</h3>
          <p className="text-muted" style={{ marginBottom: '24px' }}>
            We implement strict technical and organizational safeguards to protect your personal information against unauthorized access, disclosure, or destruction.
          </p>

          <h3 style={{ marginBottom: '16px' }}>4. Contact Us</h3>
          <p className="text-muted">
            If you have questions regarding our privacy policy, please write to info@hopecarefoundation.org.
          </p>
        </div>
      </section>
    </PageContainer>
  );
};

export default PrivacyPolicy;
