import React from 'react';
import PageContainer from '../components/layout/PageContainer';
import SectionTitle from '../components/common/SectionTitle';
import ImageTextSection from '../components/common/ImageTextSection';
import StatsSection from '../components/common/StatsSection';
import CardSlider from '../components/common/CardSlider';
import TeamCard from '../components/cards/TeamCard';
import CTASection from '../components/common/CTASection';
import ScrollReveal from '../components/common/ScrollReveal';
import { teamData } from '../data/team';
import { siteData } from '../data/siteData';

const About = () => {
  return (
    <PageContainer title="About Us">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>About {siteData.name}</h1>
          <p>Dedicated to sustainable grassroots development, child education, accessible healthcare, and women empowerment.</p>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="section">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <ImageTextSection
              subtitle="Our Mission & Philosophy"
              title="Building Dignity, Opportunity & Resilience"
              description="Founded in 2012, HopeCare Foundation operates with a firm conviction that sustainable development must be driven from within the community. We work alongside village leaders, educators, and healthcare workers to craft long-term solutions."
              points={[
                "Community Ownership: Every project is co-designed with local village councils.",
                "Transparency & Accountability: 100% auditable utilization of donor contributions.",
                "Inclusivity: Special focus on women, children, and marginalized rural groups."
              ]}
              image="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section section-alt">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <SectionTitle
              subtitle="Our Footprint"
              title="Measuring Over a Decade of Impact"
            />
            <StatsSection />
          </ScrollReveal>
        </div>
      </section>

      {/* Leadership Team Slider */}
      <section className="section">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <SectionTitle
              subtitle="Leadership & Mentors"
              title="Meet the Team Behind HopeCare"
              description="Our passionate team brings decades of combined expertise in non-profit management, public health, and education."
            />
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={150}>
            <CardSlider autoPlayInterval={4000}>
              {teamData.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </CardSlider>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
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

export default About;
