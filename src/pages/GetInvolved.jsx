import React from 'react';
import PageContainer from '../components/layout/PageContainer';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import EnquiryForm from '../components/forms/EnquiryForm';
import { Heart, UserPlus, Building2, Handshake } from 'lucide-react';

const GetInvolved = () => {
  return (
    <PageContainer title="Get Involved">
      <section className="page-hero">
        <div className="container">
          <h1>Get Involved</h1>
          <p>Whether as a donor, volunteer, or corporate partner, your support powers community transformation.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            subtitle="Ways to Contribute"
            title="Choose How You Wish to Help"
          />

          <div className="grid-3" style={{ marginBottom: '64px' }}>
            <div className="card text-center" style={{ padding: '32px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: 'var(--radius-full)', background: 'var(--secondary-light)', color: 'var(--secondary-hover)', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Heart size={28} />
              </div>
              <h3 style={{ marginBottom: '12px' }}>Donate Funds</h3>
              <p className="text-muted" style={{ marginBottom: '24px' }}>Support child education kits, clean water hubs, or mobile medical vans via instant UPI.</p>
              <Button to="/donate" variant="donate" fullWidth>Donate Now</Button>
            </div>

            <div className="card text-center" style={{ padding: '32px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: 'var(--radius-full)', background: 'var(--primary-light)', color: 'var(--primary-dark)', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <UserPlus size={28} />
              </div>
              <h3 style={{ marginBottom: '12px' }}>Become a Volunteer</h3>
              <p className="text-muted" style={{ marginBottom: '24px' }}>Contribute your skills on the ground in village hubs or virtually in design and mentoring.</p>
              <Button to="/volunteer" variant="primary" fullWidth>Apply to Volunteer</Button>
            </div>

            <div className="card text-center" style={{ padding: '32px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: 'var(--radius-full)', background: 'var(--accent-light)', color: 'var(--accent)', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Building2 size={28} />
              </div>
              <h3 style={{ marginBottom: '12px' }}>Corporate CSR Partner</h3>
              <p className="text-muted" style={{ marginBottom: '24px' }}>Partner with us on Schedule VII CSR initiatives with full compliance reporting.</p>
              <Button to="/contact" variant="outline" fullWidth>Partner With Us</Button>
            </div>
          </div>

          <EnquiryForm title="Corporate CSR & Institutional Partnership Form" />
        </div>
      </section>
    </PageContainer>
  );
};

export default GetInvolved;
