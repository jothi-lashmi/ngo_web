import React from 'react';
import Button from './Button';
import { Heart } from 'lucide-react';

const CTASection = ({
  title = "Make a Difference in Someone's Life Today",
  description = "Your generous support enables us to provide clean drinking water, quality digital education, and healthcare access to underserved communities.",
  primaryText = "Donate via UPI / Bank",
  primaryLink = "/donate",
  secondaryText = "Become a Volunteer",
  secondaryLink = "/volunteer"
}) => {
  return (
    <div className="cta-banner">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="cta-banner-actions">
        {primaryText && (
          <Button to={primaryLink} variant="secondary" size="lg">
            <Heart size={18} /> {primaryText}
          </Button>
        )}
        {secondaryText && (
          <Button to={secondaryLink} variant="outline" size="lg" style={{ color: '#ffffff', borderColor: '#ffffff' }}>
            {secondaryText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default CTASection;
