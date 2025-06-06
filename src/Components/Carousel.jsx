// components/Carousel.jsx
import React, { useRef } from 'react';
import './Carousel.css';

/**
 * props:
 *  items: Array<{ id: string|number, title: string, excerpt: string, image: string, link: string }>
 */
const Carousel = ({ items = [] }) => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (!containerRef.current) return;
    const { clientWidth } = containerRef.current;
    containerRef.current.scrollBy({
      left: direction === 'next' ? clientWidth : -clientWidth,
      behavior: 'smooth',
    });
  };

  return (
    <div className="carousel-wrapper">
      <button
        className="carousel-btn prev"
        onClick={() => scroll('prev')}
        aria-label="Previous"
      >
        &#10094;
      </button>

      <div className="carousel-container" ref={containerRef}>
        {items.map((item) => (
          <article className="carousel-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="card-body">
              <h3>{item.title}</h3>
              <p className='card-excert'>{item.excerpt}</p>
              <a href={item.link} className="card-link">
                Leer más →
              </a>
            </div>
          </article>
        ))}
      </div>

      <button
        className="carousel-btn next"
        onClick={() => scroll('next')}
        aria-label="Next"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
