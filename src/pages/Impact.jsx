import React from 'react';
import PageContainer from '../components/layout/PageContainer';
import SectionTitle from '../components/common/SectionTitle';
import StatsSection from '../components/common/StatsSection';
import ImageTextSection from '../components/common/ImageTextSection';
import CTASection from '../components/common/CTASection';

const Impact = () => {
  return (
    <PageContainer title="Our Impact">
      <section className="page-hero">
        <div className="container">
          <h1>Measurable Impact & Transparency</h1>
          <p>Over 14 years of accountability, field verification, and social transformation.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            subtitle="Key Metrics"
            title="By The Numbers"
          />
          <StatsSection />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <ImageTextSection
            subtitle="Financial Audit"
            title="Where Does Your Money Go?"
            description="We prioritize financial transparency and lean administrative overhead. Every rupee contributed is accounted for in our annual public financial audits."
            points={[
              "92% Direct Program Implementation",
              "5% Field Monitoring & Quality Assurance",
              "3% Administrative & Operational Support",
              "100% Tax Deductible (Section 80G Compliant)"
            ]}
            image="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <CTASection />
        </div>
      </section>
    </PageContainer>
  );
};

export default Impact;
