import React, { useState } from "react";

export const MagazineForm = () => {
  const initialState = {
    author: "",
    date: "",
    article: "",
    magazine: "",
    volume: "",
    page: "",
  };

  const [values, setValues] = useState(initialState);

  const { author, date, article, magazine, volume, page } = values;

  const reset = (e) => {
    e.preventDefault();
    setValues(initialState);
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const handleQuote = () => {
    isFormValid();
  };

  const isFormValid = () => {
    if (author.trim().length === 0) {
      return false;
    } else if (date.trim().length === 0) {
      return false;
    } else if (article.trim().length === 0) {
      return false;
    } else if (magazine.trim().length === 0) {
      return false;
    } else if (volume.trim().length === 0) {
      return false;
    } else if (page.trim().length === 0) {
      return false;
    }
    return true;
  };

  return (
    <div>
      <div className="form__formulario">
        <form>
          <p>Autor(es)</p>
          <input
            className="form__input"
            type="text"
            placeholder="Kats, I., Gbayan, K., & Aghajan, H"
            name="author"
            autoComplete="off"
            value={author}
            onChange={handleInputChange}
            onKeyUp={handleQuote}
          />
          <p>Fecha</p>
          <input
            className="form__input"
            type="text"
            placeholder="2021, diciembre 20"
            name="date"
            autoComplete="off"
            value={date}
            onChange={handleInputChange}
            onKeyUp={handleQuote}
          />
          <p>Título del artículo</p>
          <input
            className="form__input"
            type="text"
            placeholder="La selección natural de Darwin"
            name="article"
            autoComplete="off"
            value={article}
            onChange={handleInputChange}
            onKeyUp={handleQuote}
          />
          <p>Nombre de la revista</p>
          <input
            className="form__input"
            type="text"
            placeholder="Revista"
            name="magazine"
            autoComplete="off"
            value={magazine}
            onChange={handleInputChange}
            onKeyUp={handleQuote}
          />
          <p>Volumen</p>
          <input
            className="form__input"
            type="text"
            placeholder="1"
            name="volume"
            autoComplete="off"
            value={volume}
            onChange={handleInputChange}
            onKeyUp={handleQuote}
          />
          <p>Páginas</p>
          <input
            className="form__input"
            type="text"
            placeholder="45 Ó 45-50"
            name="page"
            autoComplete="off"
            value={page}
            onChange={handleInputChange}
            onKeyUp={handleQuote}
          />
          <button className="form__button_info" onClick={reset}>
            Limpiar
          </button>
        </form>
      </div>
      {isFormValid() ? (
        <div>
          <p>La ficha bibliográfica es :</p>
          <p>
            {author}. ({date}). {article}. <i>{magazine}</i>, {volume}, {page}
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
