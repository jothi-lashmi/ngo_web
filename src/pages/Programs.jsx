import React from 'react';
import PageContainer from '../components/layout/PageContainer';
import SectionTitle from '../components/common/SectionTitle';
import CardSlider from '../components/common/CardSlider';
import ProgramCard from '../components/cards/ProgramCard';
import CTASection from '../components/common/CTASection';
import ScrollReveal from '../components/common/ScrollReveal';
import { programsData } from '../data/programs';

const Programs = () => {
  return (
    <PageContainer title="Our Programs">
      <section className="page-hero">
        <div className="container">
          <h1>Community Development Programs</h1>
          <p>Holistic grassroots initiatives aimed at fostering self-sustaining communities.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <SectionTitle
              subtitle="Focus Areas"
              title="Comprehensive Social Intervention"
              description="Our programs are carefully designed with input from village leaders and thematic experts."
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={150}>
            <CardSlider autoPlayInterval={4500}>
              {programsData.map((prog) => (
                <ProgramCard key={prog.id} program={prog} />
              ))}
            </CardSlider>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <CTASection />
          </ScrollReveal>
        </div>
      </section>
    </PageContainer>
  );
};

export default Programs;
