import React, { useState } from "react";

export const BookForm = () => {
  const initialState = {
    author: "",
    year: "",
    title: "",
    place: "",
    publisher: "",
  };
  const [values, setValues] = useState(initialState);

  const { author, year, title, place, publisher } = values;

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
    } else if (year.trim().length === 0) {
      return false;
    } else if (title.trim().length === 0) {
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
          <p>Año de publicación</p>
          <input
            className="form__input"
            //   className="border-gray-300 mb-4 w-96 border-solid border rounded py-2 px-4"
            type="text"
            placeholder="2022"
            name="year"
            autoComplete="off"
            value={year}
            onChange={handleInputChange}
            onKeyUp={handleQuote}
          />
          <p>Título del libro</p>
          <input
            className="form__input"
            //   className="border-gray-300 mb-4 w-96 border-solid border rounded py-2 px-4"
            type="text"
            placeholder="titulo del libro"
            name="title"
            autoComplete="off"
            value={title}
            onChange={handleInputChange}
            onKeyUp={handleQuote}
          />
          <p>Lugar de publicación</p>
          <input
            className="form__input"
            type="text"
            placeholder="México"
            name="place"
            autoComplete="off"
            value={place}
            onChange={handleInputChange}
            onKeyUp={handleQuote}
          />
          <p>Editorial</p>
          <input
            className="form__input"
            //   className="border-gray-300 mb-4 w-96 border-solid border rounded py-2 px-4"
            type="text"
            placeholder="Editorial"
            name="publisher"
            autoComplete="off"
            value={publisher}
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
            {author}. ({year}). <i>{title}</i>. {place}: {publisher}
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
