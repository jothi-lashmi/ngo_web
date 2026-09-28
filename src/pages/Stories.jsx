import React from 'react';
import PageContainer from '../components/layout/PageContainer';
import SectionTitle from '../components/common/SectionTitle';
import CardGrid from '../components/common/CardGrid';
import StoryCard from '../components/cards/StoryCard';
import CTASection from '../components/common/CTASection';
import { storiesData } from '../data/stories';

const Stories = () => {
  return (
    <PageContainer title="Impact Stories">
      <section className="page-hero">
        <div className="container">
          <h1>Stories of Change</h1>
          <p>Read inspiring testimonials and life transformations of beneficiaries across our program areas.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            subtitle="Voices from the Field"
            title="Real Lives, Extraordinary Resilience"
          />
          <CardGrid columns={2}>
            {storiesData.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </CardGrid>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <CTASection />
        </div>
      </section>
    </PageContainer>
  );
};

export default Stories;
