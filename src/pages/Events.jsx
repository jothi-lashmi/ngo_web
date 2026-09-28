import React from 'react';
import PageContainer from '../components/layout/PageContainer';
import SectionTitle from '../components/common/SectionTitle';
import CardGrid from '../components/common/CardGrid';
import EventCard from '../components/cards/EventCard';
import CTASection from '../components/common/CTASection';
import { eventsData } from '../data/events';

const Events = () => {
  return (
    <PageContainer title="Events & Workshops">
      <section className="page-hero">
        <div className="container">
          <h1>Events & Workshops</h1>
          <p>Join our upcoming health camps, STEM workshops, and artisan exhibitions.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            subtitle="Upcoming Schedule"
            title="Community Gatherings & Drives"
          />
          <CardGrid columns={3}>
            {eventsData.map((ev) => (
              <EventCard key={ev.id} event={ev} />
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

export default Events;
