import React, { useState } from 'react';
import PageContainer from '../components/layout/PageContainer';
import SectionTitle from '../components/common/SectionTitle';

const Gallery = () => {
  const galleryItems = [
    { id: 1, title: "Solar Computer Lab Launch", category: "Education", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80" },
    { id: 2, title: "Mobile Eye Screening Drive", category: "Healthcare", image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80" },
    { id: 3, title: "Artisan Weaving Cooperative", category: "Empowerment", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" },
    { id: 4, title: "Afforestation Tree Plantation Drive", category: "Environment", image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80" },
    { id: 5, title: "Clean Water Hub Inauguration", category: "Healthcare", image: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&w=800&q=80" },
    { id: 6, title: "Girl Scholar Mentorship Seminar", category: "Education", image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80" }
  ];

  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Education', 'Healthcare', 'Empowerment', 'Environment'];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <PageContainer title="Media & Gallery">
      <section className="page-hero">
        <div className="container">
          <h1>Media & Gallery</h1>
          <p>Visual highlights of our field programs, community drives, and beneficiary moments.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`btn ${activeCategory === cat ? 'btn-primary' : 'btn-outline'}`}
                style={{ borderRadius: 'var(--radius-full)', padding: '8px 20px', fontSize: '0.875rem' }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
            {filteredItems.map((item) => (
              <div key={item.id} className="card">
                <div className="card-media" style={{ aspectRatio: '4 / 3' }}>
                  <img src={item.image} alt={item.title} className="card-image" loading="lazy" />
                  <span className="badge badge-primary card-badge">{item.category}</span>
                </div>
                <div className="card-body" style={{ padding: '16px' }}>
                  <h4 style={{ fontSize: '1.05rem', margin: 0 }}>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default Gallery;
