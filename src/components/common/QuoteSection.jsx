import React from 'react';
import { Quote } from 'lucide-react';

const QuoteSection = ({
  quote = "No act of kindness, no matter how small, is ever wasted. Real community transformation starts with one step.",
  author = "Dr. Ananya Sharma",
  role = "Founder, HopeCare Foundation"
}) => {
  return (
    <div className="section-alt" style={{ paddingBlock: '48px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
      <div className="container-narrow text-center">
        <Quote size={40} style={{ color: 'var(--primary)', marginBottom: '16px', opacity: 0.8 }} />
        <blockquote style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', fontWeight: 600, fontStyle: 'italic', marginBottom: '20px', color: 'var(--dark-heading)' }}>
          "{quote}"
        </blockquote>
        <div style={{ fontWeight: 700, color: 'var(--primary-dark)' }}>{author}</div>
        {role && <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{role}</div>}
      </div>
    </div>
  );
};

export default QuoteSection;
