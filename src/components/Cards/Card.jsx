import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

const Card = ({ title, imageUrl, description }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="card-info">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
      <Link to="/">
        <div className="card-btn-container">
          <button className="card-btn">READ FULL ARTICLE</button>
        </div>
      </Link>
    </div>
  );
};

export default Card;
