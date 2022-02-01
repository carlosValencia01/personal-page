import React from "react";

export const Card = ({ title, img, description, date, route }) => {
  return (
    <div className="card card__main">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p>
          <small>{date}</small>
        </p>
        <a href={route} className="btn btn-primary">
          Abrir
        </a>
      </div>
    </div>
  );
};
