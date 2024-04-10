import React from 'react';

const Card = ({ applicant }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{applicant.name}</h5>
        <p className="card-text"><strong>Email:</strong> {applicant.email}</p>
        <p className="card-text"><strong>Phone:</strong> {applicant.phone}</p>
        <p className="card-text"><strong>Division:</strong> {applicant.division}</p>
      </div>
    </div>
  );
};

export default Card;
