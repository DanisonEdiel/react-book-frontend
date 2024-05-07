import React from "react";

function Card({ title, ImageURL, description, price }) {
  return (
    <div className="card text-center bg-dark">
      <img src={ImageURL} alt="" />
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary description-scroll">
          {description}
        </p>
        <h5 className="card-text">$.{price}</h5>
      </div>
    </div>
  );
}
export default Card;
