import React from 'react';

const TeamCard = ({ member }) => {
  const { name, role, bio, image } = member;

  return (
    <article className="card team-card">
      <div className="card-media">
        <img src={image} alt={name} className="card-image" loading="lazy" />
      </div>
      <div className="card-body">
        <h3 className="card-title" style={{ marginBottom: '4px' }}>{name}</h3>
        <div className="team-role">{role}</div>
        <p className="card-description">{bio}</p>
      </div>
    </article>
  );
};

export default TeamCard;
