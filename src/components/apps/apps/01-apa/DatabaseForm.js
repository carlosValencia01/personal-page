import React from "react";
import { useForm } from "../../../hooks/useForm";

export const DatabaseForm = () => {
  const initialState = {
    author: "",
    date: "",
    article: "",
    journal: "",
    volume: "",
    page: "",
    recoveryDate: "",
    db: "",
  };

  const [formValues, handleInputChange, reset] = useForm(initialState);
  const { author, date, article, journal, volume, page, recoveryDate, db } =
    formValues;

  const clear = (e) => {
    e.preventDefault();
    reset();
  };

  const isFormValid = () => {
    if (author.trim().length === 0) {
      return false;
    } else if (date.trim().length === 0) {
      return false;
    } else if (article.trim().length === 0) {
      return false;
    } else if (journal.trim().length === 0) {
      return false;
    } else if (volume.trim().length === 0) {
      return false;
    } else if (page.trim().length === 0) {
      return false;
    } else if (recoveryDate.trim().length === 0) {
      return false;
    } else if (db.trim().length === 0) {
      return false;
    }
    return true;
  };

  return (
    <div>
      <div className="form__formulario">
        <form>
          <p>Autor(es)</p>
          {/* author */}
          <input
            className="form__input"
            type="text"
            autoComplete="off"
            onChange={handleInputChange}
            placeholder="Kats, I., Gbayan, K., & Aghajan, H"
            name="author"
            value={author}
          />
          <p>Fecha</p>
          {/* date */}
          <input
            className="form__input"
            type="text"
            autoComplete="off"
            onChange={handleInputChange}
            placeholder="2007, diciembre 20"
            name="date"
            value={date}
          />
          <p>Título del artículo</p>
          {/* article */}
          <input
            className="form__input"
            type="text"
            autoComplete="off"
            onChange={handleInputChange}
            placeholder="La selección natural de Darwin"
            name="article"
            value={article}
          />
          <p>Nombre del periódico o revista</p>
          {/* journal */}
          <input
            className="form__input"
            type="text"
            autoComplete="off"
            onChange={handleInputChange}
            placeholder="Journal"
            name="journal"
            value={journal}
          />
          <p>Volumen</p>
          {/* volume */}
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
          {/* page */}
          <input
            className="form__input"
            type="text"
            autoComplete="off"
            onChange={handleInputChange}
            placeholder="45 Ó 45-50"
            name="page"
            value={page}
          />
          <p>Fecha en que se obtuvo la información de la base de datos</p>
          {/* recoveryDate */}
          <input
            className="form__input"
            type="text"
            autoComplete="off"
            onChange={handleInputChange}
            placeholder="2007, diciembre 20"
            name="recoveryDate"
            value={recoveryDate}
          />
          <p>Nombre de la base de datos de la cual se obtuvo la información</p>
          {/* db */}
          <input
            className="form__input"
            type="text"
            autoComplete="off"
            onChange={handleInputChange}
            placeholder="Microsoft Academic"
            name="db"
            value={db}
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
            {author}. ({date}). {article}. <i>{journal}</i>, {volume}, {page}.{" "}
            {recoveryDate}, De {db}
            Base de datos
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
