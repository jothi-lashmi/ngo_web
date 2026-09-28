import React from 'react';
import Button from './Button';
import { Heart, ArrowRight } from 'lucide-react';

const Hero = ({
  badge = "Transforming Grassroots Lives",
  title = "Empowering Communities Through Hope & Action",
  description = "Join our mission to provide quality education, healthcare access, and sustainable livelihood opportunities for rural families.",
  primaryCtaText = "Donate Now",
  primaryCtaLink = "/donate",
  secondaryCtaText = "Explore Projects",
  secondaryCtaLink = "/projects",
  image = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
}) => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            {badge && (
              <span className="badge badge-primary hero-badge">
                <Heart size={14} /> {badge}
              </span>
            )}
            <h1 className="hero-title">{title}</h1>
            <p className="hero-description">{description}</p>
            <div className="hero-actions">
              {primaryCtaText && (
                <Button to={primaryCtaLink} variant="donate" size="lg">
                  <Heart size={18} /> {primaryCtaText}
                </Button>
              )}
              {secondaryCtaText && (
                <Button to={secondaryCtaLink} variant="outline" size="lg">
                  {secondaryCtaText} <ArrowRight size={18} />
                </Button>
              )}
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src={image} alt={title} className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
