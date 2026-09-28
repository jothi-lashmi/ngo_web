import React from 'react';

const CardGrid = ({ children, columns = 3, className = '' }) => {
  return (
    <div className={`card-grid ${className}`}>
      {children}
    </div>
  );
};

export default CardGrid;
