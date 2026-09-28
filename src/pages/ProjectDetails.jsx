import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageContainer from '../components/layout/PageContainer';
import Breadcrumb from '../components/common/Breadcrumb';
import Button from '../components/common/Button';
import DonationSection from '../components/donation/DonationSection';
import CardGrid from '../components/common/CardGrid';
import ProjectCard from '../components/cards/ProjectCard';
import { projectsData } from '../data/projects';
import { MapPin, Users, Heart, CheckCircle2 } from 'lucide-react';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id) || projectsData[0];
  const relatedProjects = projectsData.filter((p) => p.id !== project.id).slice(0, 2);

  const progressPercent = Math.min(100, Math.round((project.raisedAmount / project.targetAmount) * 100));

  return (
    <PageContainer title={project.title}>
      <div className="container" style={{ paddingTop: '32px' }}>
        <Breadcrumb
          items={[
            { label: 'Projects', path: '/projects' },
            { label: project.title }
          ]}
        />
      </div>

      <section className="section" style={{ paddingTop: '16px' }}>
        <div className="container">
          <div className="image-text-section" style={{ alignItems: 'flex-start', marginBottom: '48px' }}>
            <div className="image-text-media" style={{ borderRadius: 'var(--radius-lg)' }}>
              <img src={project.image} alt={project.title} style={{ width: '100%', maxHeight: '460px', objectFit: 'cover' }} />
            </div>

            <div className="image-text-content">
              <span className="badge badge-primary" style={{ marginBottom: '12px' }}>{project.category}</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '16px' }}>{project.title}</h1>

              <div style={{ display: 'flex', gap: '20px', fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={16} /> {project.location}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Users size={16} /> {project.beneficiaries}</span>
              </div>

              <div className="card-progress" style={{ width: '100%', marginBottom: '24px' }}>
                <div className="progress-bar-bg" style={{ height: '10px' }}>
                  <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }}></div>
                </div>
                <div className="progress-stats" style={{ fontSize: '0.95rem' }}>
                  <span>Raised: ₹{project.raisedAmount.toLocaleString('en-IN')}</span>
                  <span>Goal: ₹{project.targetAmount.toLocaleString('en-IN')} ({progressPercent}%)</span>
                </div>
              </div>

              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '24px' }}>
                {project.fullDescription || project.description}
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Button to="/donate" variant="donate" size="lg">
                  <Heart size={18} /> Donate to this Project
                </Button>
                <Button to="/contact" variant="outline" size="lg">
                  Inquire about Partnership
                </Button>
              </div>
            </div>
          </div>

          {/* Donation Form Container */}
          <div style={{ marginBlock: '56px' }}>
            <DonationSection />
          </div>

          {/* Related Projects */}
          <div style={{ marginTop: '64px' }}>
            <h3 style={{ marginBottom: '24px' }}>Other Active Projects</h3>
            <CardGrid columns={2}>
              {relatedProjects.map((rel) => (
                <ProjectCard key={rel.id} project={rel} />
              ))}
            </CardGrid>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default ProjectDetails;
