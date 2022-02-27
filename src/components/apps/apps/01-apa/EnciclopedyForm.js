import React from "react";
import { useForm } from "../../../hooks/useForm";

export const EnciclopedyForm = () => {
  const initialState = {
    author: "",
    year: "",
    article: "",
    enciclopedy: "",
    volume: "",
    page: "",
    place: "",
    publisher: "",
  };
  const [formValues, handleInputChange, reset] = useForm(initialState);
  const { author, year, article, enciclopedy, volume, page, place, publisher } =
    formValues;

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
    } else if (enciclopedy.trim().length === 0) {
      return false;
    } else if (volume.trim().length === 0) {
      return false;
    } else if (page.trim().length === 0) {
      return false;
    } else if (place.trim().length === 0) {
      return false;
    } else if (publisher.trim().length === 0) {
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
          <p>Titulo del artículo</p>
          <input
            className="form__input"
            type="text"
            placeholder="La selección natural de Darwin"
            name="article"
            autoComplete="off"
            value={article}
            onChange={handleInputChange}
          />
          <p>Nombre de la enciclopedia</p>
          <input
            className="form__input"
            type="text"
            autoComplete="off"
            onChange={handleInputChange}
            placeholder="Enciclopedia"
            name="enciclopedy"
            value={enciclopedy}
          />
          <p>Volumen</p>
          <input
            className="form__input"
            type="text"
            autoComplete="off"
            onChange={handleInputChange}
            placeholder="1"
            name="volume"
            value={volume}
          />
          <p>Páginas</p>
          <input
            className="form__input"
            type="text"
            autoComplete="off"
            onChange={handleInputChange}
            placeholder="45 Ó 45-50"
            name="page"
            value={page}
          />
          <p>Lugar de publicación de la enciclopedia</p>
          <input
            className="form__input"
            type="text"
            autoComplete="off"
            onChange={handleInputChange}
            placeholder="México"
            name="place"
            value={place}
          />
          <p>Editorial</p>
          <input
            className="form__input"
            type="text"
            autoComplete="off"
            onChange={handleInputChange}
            placeholder="Editorial"
            name="publisher"
            value={publisher}
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
            {author}. {year}. <i>{article}</i>. {enciclopedy} ({volume}, {page}){" "}
            {place}: {publisher}.
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
