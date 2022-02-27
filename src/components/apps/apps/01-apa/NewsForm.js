import React, { useState } from "react";

export const NewsForm = () => {
  const initialState = {
    author: "",
    year: "",
    article: "",
    news: "",
    page: "",
  };

  const [values, setValues] = useState(initialState);

  const { author, year, article, news, page } = values;

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

  const isFormValid = () => {
    if (author.trim().length === 0) {
      return false;
    } else if (year.trim().length === 0) {
      return false;
    } else if (article.trim().length === 0) {
      return false;
    } else if (news.trim().length === 0) {
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
            onKeyUp={isFormValid}
          />
          <p>Año de publicación</p>
          <input
            className="form__input"
            type="text"
            placeholder="2007, diciembre 20"
            name="year"
            autoComplete="off"
            value={year}
            onChange={handleInputChange}
            onKeyUp={isFormValid}
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
            onKeyUp={isFormValid}
          />
          <p>Título del periódico</p>
          <input
            className="form__input"
            type="text"
            placeholder="Periodico"
            name="news"
            autoComplete="off"
            value={news}
            onChange={handleInputChange}
            onKeyUp={isFormValid}
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
            onKeyUp={isFormValid}
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
            {author}. ({year}). {article}. <i>{news}</i>, {page}.
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
