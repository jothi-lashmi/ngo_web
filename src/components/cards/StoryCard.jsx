import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import Button from '../common/Button';

const StoryCard = ({ story }) => {
  const { id, name, title, summary, quote, date, location, image, category } = story;

  return (
    <article className="card story-card">
      <div className="card-media">
        <img src={image} alt={name || title} className="card-image" loading="lazy" />
        {category && <span className="badge badge-secondary card-badge">{category}</span>}
      </div>
      <div className="card-body">
        <div className="card-meta">
          {date && (
            <span className="card-meta-item">
              <Calendar size={14} /> {date}
            </span>
          )}
          {location && (
            <span className="card-meta-item">
              <MapPin size={14} /> {location}
            </span>
          )}
        </div>
        <h3 className="card-title">
          <Link to={`/stories/${id}`}>{title}</Link>
        </h3>
        {quote && <div className="card-quote">"{quote}"</div>}
        <p className="card-description">{summary}</p>
        <div className="card-footer">
          <Button to={`/stories/${id}`} variant="outline" size="sm">
            Read Full Story <ArrowRight size={14} />
          </Button>
        </div>
      </div>
    </article>
  );
};

export default StoryCard;
