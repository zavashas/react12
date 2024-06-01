import React from "react";

const Info = ({ ageRating, url, description, name, length, country, year, rating }) => {
  return (
    <div className="info-card">
      {ageRating && <h3>{rating}, {ageRating}+, {length} мин, {country}</h3>}
      <img src={url} />
      <h2> {name} ({year})</h2>
      
      
      <p>{description.substring(0, 250)}...</p>
    </div>
  );
};

export default Info;
