import React from 'react';
import PageContainer from '../components/layout/PageContainer';
import Hero from '../components/common/Hero';
import SectionTitle from '../components/common/SectionTitle';
import CardGrid from '../components/common/CardGrid';
import ProjectCard from '../components/cards/ProjectCard';
import StoryCard from '../components/cards/StoryCard';
import ImageTextSection from '../components/common/ImageTextSection';
import StatsSection from '../components/common/StatsSection';
import QuoteSection from '../components/common/QuoteSection';
import CTASection from '../components/common/CTASection';
import DonationSection from '../components/donation/DonationSection';
import ScrollReveal from '../components/common/ScrollReveal';
import { projectsData } from '../data/projects';
import { storiesData } from '../data/stories';

const Home = () => {
  const featuredProjects = projectsData.slice(0, 3);
  const featuredStories = storiesData.slice(0, 2);

  return (
    <PageContainer title="Empowering Communities">
      {/* Hero Section */}
      <Hero
        badge="Transforming Grassroots Lives"
        title="Together We Can Empower Lives & Build Sustainable Futures"
        description="HopeCare Foundation works with rural communities to provide quality digital education, clean drinking water, accessible healthcare, and artisan livelihood support."
        primaryCtaText="Donate via UPI"
        primaryCtaLink="/donate"
        secondaryCtaText="Explore Projects"
        secondaryCtaLink="/projects"
        image="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
      />

      {/* Impact Stats */}
      <section className="section">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <StatsSection />
          </ScrollReveal>
        </div>
      </section>

      {/* About Overview (Image + Text) */}
      <section className="section section-alt">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <ImageTextSection
              subtitle="About HopeCare"
              title="Grassroots Development Built on Integrity & Hope"
              description="Since 2012, HopeCare Foundation has spearheaded community-first development initiatives. We believe that empowering individuals with skills, resources, and healthcare creates self-sustaining economic transformation."
              points={[
                "100% direct project funding transparently reported",
                "Community-led development models",
                "Tax exemption under Section 80G",
                "Registered non-profit organization"
              ]}
              image="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
              ctaText="Learn More About Us"
              ctaLink="/about"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <SectionTitle
              subtitle="Current Initiatives"
              title="Featured Projects Making Impact Today"
              description="Explore our active projects bridging the education, health, and economic gap in remote rural regions."
            />
          </ScrollReveal>
          <CardGrid columns={3}>
            {featuredProjects.map((project, index) => (
              <ScrollReveal key={project.id} animation="fade-up" delay={index * 150}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </CardGrid>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="section section-alt">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <QuoteSection />
          </ScrollReveal>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="section">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <SectionTitle
              subtitle="Real Lives, Real Change"
              title="Stories of Hope & Transformation"
              description="Read inspiring journeys of beneficiaries who transformed their lives through community support."
            />
          </ScrollReveal>
          <CardGrid columns={2}>
            {featuredStories.map((story, index) => (
              <ScrollReveal key={story.id} animation="fade-up" delay={index * 150}>
                <StoryCard story={story} />
              </ScrollReveal>
            ))}
          </CardGrid>
        </div>
      </section>

      {/* UPI Donation Section */}
      <section className="section section-alt" id="donate-section">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <DonationSection />
          </ScrollReveal>
        </div>
      </section>

      {/* Call To Action */}
      <section className="section">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <CTASection />
          </ScrollReveal>
        </div>
      </section>
    </PageContainer>
  );
};

export default Home;
