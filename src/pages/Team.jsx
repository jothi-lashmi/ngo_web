import React from 'react';
import PageContainer from '../components/layout/PageContainer';
import SectionTitle from '../components/common/SectionTitle';
import CardSlider from '../components/common/CardSlider';
import TeamCard from '../components/cards/TeamCard';
import CTASection from '../components/common/CTASection';
import ScrollReveal from '../components/common/ScrollReveal';
import { teamData } from '../data/team';

const Team = () => {
  return (
    <PageContainer title="Our Team">
      <section className="page-hero">
        <div className="container">
          <h1>Our Team & Leadership</h1>
          <p>Meet the dedicated leaders, coordinators, and advisors driving our grassroots social programs.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <SectionTitle
              subtitle="Executive Leadership"
              title="People Behind the Mission"
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

export default Team;
