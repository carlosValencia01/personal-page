import React from "react";
import { useForm } from "../../../hooks/useForm";

export const WebForm = () => {
  const initialState = {
    author: "",
    year: "",
    article: "",
    recoveryDate: "",
    publisher: "",
    url: "",
  };
  const [formValues, handleInputChange, reset] = useForm(initialState);
  const { author, year, article, recoveryDate, publisher, url } = formValues;

  const clear = (e) => {
    e.preventDefault();
    reset();
  };

  const isFormValid = () => {
    if (author.trim().length === 0) {
      return false;
    } else if (year.trim().length === 0) {
      return false;
    } else if (article.trim().length === 0) {
      return false;
    } else if (recoveryDate.trim().length === 0) {
      return false;
    } else if (publisher.trim().length === 0) {
      return false;
    } else if (url.trim().length === 0) {
      return false;
    }
    return true;
  };

  return (
    <div>
      <div className="form__formulario">
        <form>
          <p> Autor(es)</p>
          <input
            className="form__input"
            type="text"
            placeholder="Kats, I., Gbayan, K., & Aghajan, H"
            name="author"
            autoComplete="off"
            value={author}
            onChange={handleInputChange}
          />
          <p>Año de publicación</p>
          <input
            className="form__input"
            type="text"
            placeholder="2022"
            name="year"
            autoComplete="off"
            value={year}
            onChange={handleInputChange}
          />
          <p>Título del artículo</p>
          <input
            className="form__input"
            type="text"
            placeholder="Articulo"
            name="article"
            autoComplete="off"
            value={article}
            onChange={handleInputChange}
          />

          <p>Fecha de recuperación del documento</p>
          <input
            className="form__input"
            type="text"
            autoComplete="off"
            onChange={handleInputChange}
            placeholder="diciembre 20, 2021"
            name="recoveryDate"
            value={recoveryDate}
          />

          <p>Asociación que publica el artículo</p>
          <input
            className="form__input"
            type="text"
            autoComplete="off"
            onChange={handleInputChange}
            placeholder="Asociacion"
            name="publisher"
            value={publisher}
          />
          <p>URL</p>
          <input
            className="form__input"
            type="text"
            autoComplete="off"
            onChange={handleInputChange}
            placeholder="www.url.com"
            name="url"
            value={url}
          />

          <button className="form__button_info" onClick={clear}>
            Limpiar
          </button>
        </form>
      </div>
      {isFormValid() ? (
        <div>
          <p>La ficha bibliográfica es :</p>
          <p>
            {author}. ({year}). <i>{article}</i>. {recoveryDate}, de {publisher}{" "}
            Sitio web: {url}
          </p>
        </div>
      ) : (
        <div>
          <p>Llene todos los campos</p>
        </div>
      )}
    </div>
  );
};
