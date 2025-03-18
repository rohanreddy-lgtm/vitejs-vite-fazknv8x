import React from "react";
import "./DestinationCard.css";

const DestinationCard = ({ name, location, image, description, price }) => {
  return (
    <div className="destination-card">
      <img src={image} alt={name} className="destination-image" />
      <div className="destination-info">
        <h2>{name}</h2>
        <p><strong>Location:</strong> {location}</p>
        <p>{description}</p>
        <p><strong>Price:</strong> {price}</p>
      </div>
    </div>
  );
};

export default DestinationCard;