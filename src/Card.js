import React from 'react';

const Card = ({ appointment }) => {
  return (
    <div className="vet-card" style={cardStyle}>
      <div style={headerStyle}>
        <h2>{vet.name}</h2>
        <span style={specialtyBadge}>{vet.specialty}</span>
      </div>
      <div style={infoStyle}>
        <div>
          <strong>Location:</strong>
          <p>{vet.location}</p>
        </div>
        <div>
          <strong>Phone:</strong>
          <p>{vet.phone}</p>
        </div>
      </div>
      <button style={buttonStyle}>Contact</button>
    </div>
  );  
};

export default Card;
