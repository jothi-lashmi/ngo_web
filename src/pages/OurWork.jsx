import React from 'react';
import PageContainer from '../components/layout/PageContainer';
import SectionTitle from '../components/common/SectionTitle';
import CardSlider from '../components/common/CardSlider';
import ProgramCard from '../components/cards/ProgramCard';
import ImageTextSection from '../components/common/ImageTextSection';
import CTASection from '../components/common/CTASection';
import ScrollReveal from '../components/common/ScrollReveal';
import { programsData } from '../data/programs';

const OurWork = () => {
  return (
    <PageContainer title="Our Work">
      <section className="page-hero">
        <div className="container">
          <h1>Our Work & Social Impact</h1>
          <p>Discover how our multi-faceted grassroots programs create holistic development across rural India.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <SectionTitle
              subtitle="Core Pillars"
              title="Strategic Program Areas"
              description="We focus on interconnected verticals to break the cycle of poverty and enable self-reliance."
            />
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={150}>
            <CardSlider autoPlayInterval={4500}>
              {programsData.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </CardSlider>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <ImageTextSection
              subtitle="Methodology"
              title="How We Execute Grassroots Programs"
              description="Our implementation methodology places community participation at the core of every project stage, ensuring long-term sustainability."
              points={[
                "Need Assessment Surveys & Village Council Alignments",
                "Local Youth & Volunteer Training",
                "Resource Mobilization & Technical Support",
                "Continuous Impact Auditing & Community Reporting"
              ]}
              image="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <CTASection />
          </ScrollReveal>
        </div>
      </section>
    </PageContainer>
  );
};

export default OurWork;
