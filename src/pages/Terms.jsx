import React from 'react';
import PageContainer from '../components/layout/PageContainer';

const Terms = () => {
  return (
    <PageContainer title="Terms & Conditions">
      <section className="page-hero">
        <div className="container">
          <h1>Terms & Conditions</h1>
          <p>General terms governing the use of the HopeCare Foundation website.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow" style={{ lineHeight: '1.8' }}>
          <h3 style={{ marginBottom: '16px' }}>1. Website Usage</h3>
          <p className="text-muted" style={{ marginBottom: '24px' }}>
            By accessing and browsing this website, you agree to comply with these terms. Content on this site is provided for informational purposes regarding non-profit programs and social impact.
          </p>

          <h3 style={{ marginBottom: '16px' }}>2. Intellectual Property</h3>
          <p className="text-muted" style={{ marginBottom: '24px' }}>
            All logos, photographs, text, and program resources displayed on this site are property of HopeCare Foundation or licensed to us. Unauthorized reproduction for commercial gain is strictly prohibited.
          </p>

          <h3 style={{ marginBottom: '16px' }}>3. Donation Policy</h3>
          <p className="text-muted" style={{ marginBottom: '24px' }}>
            Voluntary contributions made via UPI or bank transfer directly fund non-profit initiatives. Tax deduction certificates (80G) are issued for eligible donations.
          </p>

          <h3 style={{ marginBottom: '16px' }}>4. Governing Law</h3>
          <p className="text-muted">
            These terms are governed by and construed in accordance with the laws of India.
          </p>
        </div>
      </section>
    </PageContainer>
  );
};

export default Terms;
