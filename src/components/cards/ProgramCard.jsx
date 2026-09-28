import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Button from '../common/Button';

const ProgramCard = ({ program }) => {
  const { id, title, summary, highlights = [], image } = program;

  return (
    <article className="card">
      {image && (
        <div className="card-media">
          <img src={image} alt={title} className="card-image" loading="lazy" />
        </div>
      )}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{summary}</p>
        
        {highlights.length > 0 && (
          <div style={{ marginBottom: '20px' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--dark-heading)', marginBottom: '8px' }}>
              Key Highlights:
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {highlights.map((item, idx) => (
                <li key={idx} style={{ fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)' }}>
                  <CheckCircle2 size={14} style={{ color: 'var(--primary)', flexShrink: 0 }} /> {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="card-footer">
          <Button to="/programs" variant="outline" size="sm">
            Explore Program <ArrowRight size={14} />
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProgramCard;
