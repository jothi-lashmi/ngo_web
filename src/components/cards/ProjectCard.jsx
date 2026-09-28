import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import Button from '../common/Button';

const ProjectCard = ({ project }) => {
  const { id, title, category, description, location, raisedAmount, targetAmount, image } = project;
  const progressPercent = Math.min(100, Math.round((raisedAmount / targetAmount) * 100));

  return (
    <article className="card">
      <div className="card-media">
        <img src={image} alt={title} className="card-image" loading="lazy" />
        {category && <span className="badge badge-primary card-badge">{category}</span>}
      </div>
      <div className="card-body">
        {location && (
          <div className="card-meta">
            <span className="card-meta-item">
              <MapPin size={14} /> {location}
            </span>
          </div>
        )}
        <h3 className="card-title">
          <Link to={`/projects/${id}`}>{title}</Link>
        </h3>
        <p className="card-description">{description}</p>
        
        {targetAmount && (
          <div className="card-progress">
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }}></div>
            </div>
            <div className="progress-stats">
              <span>Raised: ₹{raisedAmount.toLocaleString('en-IN')}</span>
              <span>Goal: ₹{targetAmount.toLocaleString('en-IN')}</span>
            </div>
          </div>
        )}

        <div className="card-footer">
          <Button to={`/projects/${id}`} variant="outline" size="sm">
            Read Story <ArrowRight size={14} />
          </Button>
          <Button to="/donate" variant="donate" size="sm">
            Donate
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
