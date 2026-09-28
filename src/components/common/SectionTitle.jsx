import React from 'react';

const SectionTitle = ({
  subtitle,
  title,
  description,
  align = 'center', // 'center', 'left'
  className = ''
}) => {
  return (
    <div className={`section-title-wrapper ${align === 'left' ? 'align-left' : ''} ${className}`}>
      {subtitle && <span className="section-subtitle">{subtitle}</span>}
      {title && <h2 className="section-title">{title}</h2>}
      {description && <p className="section-description">{description}</p>}
    </div>
  );
};

export default SectionTitle;
