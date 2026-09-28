import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageContainer from '../components/layout/PageContainer';
import Breadcrumb from '../components/common/Breadcrumb';
import Button from '../components/common/Button';
import CardGrid from '../components/common/CardGrid';
import StoryCard from '../components/cards/StoryCard';
import { storiesData } from '../data/stories';
import { Calendar, MapPin, Quote, Heart } from 'lucide-react';

const StoryDetails = () => {
  const { id } = useParams();
  const story = storiesData.find((s) => s.id === id) || storiesData[0];
  const relatedStories = storiesData.filter((s) => s.id !== story.id).slice(0, 2);

  return (
    <PageContainer title={story.title}>
      <div className="container" style={{ paddingTop: '32px' }}>
        <Breadcrumb
          items={[
            { label: 'Stories', path: '/stories' },
            { label: story.title }
          ]}
        />
      </div>

      <section className="section" style={{ paddingTop: '16px' }}>
        <div className="container-narrow">
          <span className="badge badge-secondary" style={{ marginBottom: '12px' }}>{story.category}</span>
          <h1 style={{ marginBottom: '20px' }}>{story.title}</h1>

          <div style={{ display: 'flex', gap: '20px', fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '32px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={16} /> {story.date}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={16} /> {story.location}</span>
          </div>

          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '36px', boxShadow: 'var(--shadow-md)' }}>
            <img src={story.image} alt={story.name} style={{ width: '100%', maxHeight: '440px', objectFit: 'cover' }} />
          </div>

          {story.quote && (
            <div style={{ background: 'var(--primary-light)', padding: '24px 32px', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--primary-dark)', marginBottom: '36px' }}>
              <Quote size={28} style={{ color: 'var(--primary-dark)', marginBottom: '8px' }} />
              <p style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--primary-dark)', fontStyle: 'italic' }}>
                "{story.quote}"
              </p>
              <div style={{ marginTop: '8px', fontWeight: 700, fontSize: '0.9rem', color: 'var(--dark-heading)' }}>
                — {story.name}
              </div>
            </div>
          )}

          <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '48px' }}>
            <p>{story.fullStory || story.summary}</p>
          </div>

          <div style={{ textAlign: 'center', padding: '40px', background: 'var(--bg-surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
            <h3 style={{ marginBottom: '12px' }}>Help Us Create More Impact Stories</h3>
            <p className="text-muted" style={{ marginBottom: '24px' }}>
              Your donation directly enables students like Sunita and communities like Ramesh's village to achieve dignity and independence.
            </p>
            <Button to="/donate" variant="donate" size="lg">
              <Heart size={18} /> Support Our Cause
            </Button>
          </div>

          {/* Related Stories */}
          <div style={{ marginTop: '64px' }}>
            <h3 style={{ marginBottom: '24px' }}>More Beneficiary Stories</h3>
            <CardGrid columns={2}>
              {relatedStories.map((rel) => (
                <StoryCard key={rel.id} story={rel} />
              ))}
            </CardGrid>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default StoryDetails;
