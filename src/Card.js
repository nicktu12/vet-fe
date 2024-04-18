import React from 'react';

const Card = ({ appointment }) => {
  return (
    <div className="card">
      <h2>{appointment.pet} <span className="heart">❤️</span></h2>
      <p>Date: {appointment.date}</p>
      <p>Time: {appointment.time}</p>
    </div>
  );  
};

export default Card;