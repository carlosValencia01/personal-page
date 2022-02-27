import React, { useState } from "react";
import { BookArticleForm } from "./01-apa/BookArticleForm";
import { BookForm } from "./01-apa/BookForm";
import { DatabaseForm } from "./01-apa/DatabaseForm";
import { EnciclopedyForm } from "./01-apa/EnciclopedyForm";
import { MagazineForm } from "./01-apa/MagazineForm";
import { NewsForm } from "./01-apa/NewsForm";
import { WebForm } from "./01-apa/WebForm";

export const Apa = () => {
  const [{ source }, setSource] = useState("");

  const handleInputChange = ({ target }) => {
    setSource({
      source: target.value,
    });
  };

  return (
    <div className="app__main_container">
      <div className="app__main_article">
        <p>Aplicacion para citar en formato APA</p>
        <select
          className="form__select"
          //   className="pt-1 pb-1 border-gray-300 mb-4 w-96 border-solid border rounded py-2 px-4"
          name="source"
          value={source}
          onChange={handleInputChange}
        >
          <option hidden defaultValue="">
            Seleccione una fuente
          </option>
          <option value="book">Libro</option>
          <option value="magazine">Revista</option>
          <option value="news">Periódico</option>
          <option value="enciclopedy">Enciclopedia</option>
          <option value="book-article">Articulo de libro</option>
          <option value="web">Web</option>
          <option value="data-base">Base de datos</option>
        </select>
        {source === "book" && <BookForm />}
        {source === "magazine" && <MagazineForm />}
        {source === "news" && <NewsForm />}
        {/* TODO: pendientes */}
        {source === "enciclopedy" && <EnciclopedyForm />}
        {source === "book-article" && <BookArticleForm />}
        {source === "web" && <WebForm />}
        {source === "data-base" && <DatabaseForm />}
      </div>
    </div>
  );
};
