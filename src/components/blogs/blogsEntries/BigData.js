import React from "react";

export const BigData = () => {
  return (
    <div className="blog__main_container">
      <article className="blog__main_article">
        <h1 className="blog__title">¿Qué es BIG DATA</h1>
        <em className="blog__date">01/02/2022</em>
        <hr />
        <img
          className="blog__cover_image"
          src="https://live.staticflickr.com/65535/51883936756_3049eac5f0_c.jpg"
          alt="big-data-"
        />
        <br />
        <hr />
        <h2 className="blog__subtitle">¿Que es Big data?</h2>
        <p className="blog__text">
          El termino Big data es aplicado a un conjunto de datos que por su
          volumen o complejidad superan la capacidad del software común para ser
          capturados, gestionados y procesados.
        </p>
      </article>
    </div>
  );
};
