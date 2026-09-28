import React from 'react';
import PageContainer from '../components/layout/PageContainer';
import DonationSection from '../components/donation/DonationSection';
import SectionTitle from '../components/common/SectionTitle';
import StatsSection from '../components/common/StatsSection';

const Donate = () => {
  return (
    <PageContainer title="Make a Donation">
      <section className="page-hero">
        <div className="container">
          <h1>Make a Difference Today</h1>
          <p>Support education, healthcare, and rural empowerment through secure, transparent UPI transfers.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <DonationSection />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            subtitle="Your Impact"
            title="Every Contribution Transforms Lives"
          />
          <StatsSection />
        </div>
      </section>
    </PageContainer>
  );
};

export default Donate;
