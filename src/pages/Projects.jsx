import React, { useState } from 'react';
import PageContainer from '../components/layout/PageContainer';
import SectionTitle from '../components/common/SectionTitle';
import CardGrid from '../components/common/CardGrid';
import ProjectCard from '../components/cards/ProjectCard';
import CTASection from '../components/common/CTASection';
import { projectsData } from '../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Education', 'Healthcare', 'Empowerment', 'Environment'];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <PageContainer title="All Projects">
      <section className="page-hero">
        <div className="container">
          <h1>Grassroots Projects</h1>
          <p>Explore our active and completed development projects across education, healthcare, and livelihood support.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Category Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`btn ${filter === cat ? 'btn-primary' : 'btn-outline'}`}
                style={{ borderRadius: 'var(--radius-full)', padding: '8px 20px', fontSize: '0.875rem' }}
              >
                {cat}
              </button>
            ))}
          </div>

          <CardGrid columns={3}>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
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

export default Projects;
