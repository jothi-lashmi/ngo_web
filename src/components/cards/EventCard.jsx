import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import Button from '../common/Button';

const EventCard = ({ event }) => {
  const { title, date, time, location, category, description, image } = event;

  return (
    <article className="card">
      <div className="card-media">
        <img src={image} alt={title} className="card-image" loading="lazy" />
        {category && <span className="badge badge-accent card-badge">{category}</span>}
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Calendar size={14} style={{ color: 'var(--primary)' }} /> {date}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Clock size={14} style={{ color: 'var(--primary)' }} /> {time}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <MapPin size={14} style={{ color: 'var(--primary)' }} /> {location}
          </div>
        </div>
        <p className="card-description">{description}</p>
        <div className="card-footer">
          <Button to="/contact" variant="primary" size="sm">
            Register / RSVP
          </Button>
        </div>
      </div>
    </article>
  );
};

export default EventCard;
