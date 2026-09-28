import React from 'react';
import PageContainer from '../components/layout/PageContainer';
import VolunteerForm from '../components/forms/VolunteerForm';
import ImageTextSection from '../components/common/ImageTextSection';

const Volunteer = () => {
  return (
    <PageContainer title="Join as Volunteer">
      <section className="page-hero">
        <div className="container">
          <h1>Join Our Volunteer Network</h1>
          <p>Share your skills, time, and enthusiasm to create meaningful impact in rural communities.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="image-text-section" style={{ alignItems: 'flex-start', marginBottom: '48px' }}>
            <ImageTextSection
              subtitle="Why Volunteer With Us?"
              title="A Purpose-Driven Volunteer Experience"
              description="Our volunteers work directly alongside experienced project directors, gaining hands-on field experience and mentoring opportunity."
              points={[
                "Flexible remote or on-ground assignments",
                "Official volunteer certificate upon completion",
                "Opportunity to mentor rural students & youth",
                "Direct exposure to social sector impact"
              ]}
              image="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
            />
          </div>

          <VolunteerForm />
        </div>
      </section>
    </PageContainer>
  );
};

export default Volunteer;
