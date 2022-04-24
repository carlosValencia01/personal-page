import { getAll, getNewest, getPortfolio } from "../../data/entrieslist";

import { CardShared } from "../shared/CardShared";

import "./styles.scss";

export const HomeScreen = () => {
  const entries = getAll();
  const newest = getNewest();
  const portfolio = getPortfolio();
  return (
    <>
      {/* Blog section starts */}
      <section className="portfolio" id="blogs">
        <h1 className="heading">
          <span>portafolio</span>
        </h1>
        <div className="box-container">
          {portfolio.map((entry) => (
            <div className="box">
              <div className="image">
                <img src={entry.img} alt="portfolio" />
              </div>
              <div className="content">
                <h3>{entry.title}</h3>
                <p>{entry.description}</p>
                <span>{entry.date}</span>
                <a href={entry.route} className="btn">
                  abrir
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Blog section ends */}

      <div className="seccion">
        <h2 className="title">
          <strong>Lo más nuevo</strong>
        </h2>

        <div className="seccion-grid">
          {newest.map((entry) => (
            <CardShared key={entry.id} {...entry} />
          ))}
        </div>
      </div>
      <div className="list__main">
        <div className="list__grid">
          {entries.map((entry) => (
            <CardShared key={entry.id} {...entry} />
          ))}
        </div>
      </div>
    </>
  );
};
