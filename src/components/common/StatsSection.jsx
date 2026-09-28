import React from 'react';
import { siteData } from '../../data/siteData';

const StatsSection = ({ stats = siteData.impactStats }) => {
  return (
    <div className="stats-grid">
      {stats.map((stat) => (
        <div key={stat.id} className="stat-card">
          <div className="stat-number">{stat.number}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
