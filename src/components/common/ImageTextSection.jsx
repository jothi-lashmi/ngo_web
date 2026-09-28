import React from 'react';
import Button from './Button';

const ImageTextSection = ({
  subtitle,
  title,
  description,
  points = [],
  image,
  imageAlt = "NGO activity image",
  reverse = false,
  ctaText,
  ctaLink
}) => {
  return (
    <div className={`image-text-section ${reverse ? 'reverse' : ''}`}>
      <div className="image-text-media">
        <img src={image} alt={imageAlt} className="image-text-img" />
      </div>
      <div className="image-text-content">
        {subtitle && <span className="section-subtitle">{subtitle}</span>}
        {title && <h2>{title}</h2>}
        {description && <p className="section-description">{description}</p>}
        {points.length > 0 && (
          <ul style={{ marginBlock: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {points.map((point, index) => (
              <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span> {point}
              </li>
            ))}
          </ul>
        )}
        {ctaText && ctaLink && (
          <div style={{ marginTop: '24px' }}>
            <Button to={ctaLink} variant="primary">
              {ctaText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageTextSection;
