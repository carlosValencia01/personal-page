import React from "react";
import { useForm } from "../../../hooks/useForm";

export const BookArticleForm = () => {
  const initialState = {
    author: "",
    year: "",
    chapter: "",
    book: "",
    page: "",
    place: "",
    publisher: "",
  };
  const [formValues, handleInputChange, reset] = useForm(initialState);
  const { author, year, chapter, book, page, place, publisher } = formValues;

  const clear = (e) => {
    e.preventDefault();
    reset();
  };

  const isFormValid = () => {
    if (author.trim().length === 0) {
      return false;
    } else if (year.trim().length === 0) {
      return false;
    } else if (chapter.trim().length === 0) {
      return false;
    } else if (book.trim().length === 0) {
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
          <p>Título del capítulo</p>
          <input
            className="form__input"
            type="text"
            placeholder="Capítulo"
            name="chapter"
            autoComplete="off"
            value={chapter}
            onChange={handleInputChange}
          />

          <p>Nombre del libro</p>
          <input
            className="form__input"
            type="text"
            autoComplete="off"
            onChange={handleInputChange}
            placeholder="Libro"
            name="book"
            value={book}
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
          <p>Lugar de publicación del libro</p>
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
            {author}. ({year}). <i>{chapter}</i>. En {book}({page}). {place}:{" "}
            {publisher}.
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
