import React from "react";
import background from "../../assets/images/background1.jpg";

export const AboutScreen = () => {
  return (
    <div
      className="about__main"
      style={{
        background: `url(${background})`,
      }}
    >
      <div className="about__container">
        <h2 className="about__title animate__animated animate__slideInLeft animate__faster">
          About Me
        </h2>
        <p className="about__text animate__animated animate__pulse">
          I am a Systems Engineer graduated from the Technological Institute of
          Tepic. I have some experience in web development with Angular and
          React and also Node, my favorite language is JavaScript I am
          interested in web design and development. My hobbies are learning new
          development technologies throg books and online courses, I like music
          and Formula 1.
        </p>
        <img
          className="about__image animate__animated animate__fadeIn"
          src="https://live.staticflickr.com/65535/52506697051_d363e50d27_k.jpg"
          alt="https://live.staticflickr.com/65535/51907203687_9616b4f39d_c.jpg"
          
        />
        <hr />
        <h2 className="about__title animate__animated animate__slideInLeft animate__faster">
          About This Page
        </h2>
        <p className="about__text animate__animated animate__pulse">
          This page was created as a tool to share my knowledge, some
          interesting information for other developers throg tutorials and blogs
          and also share documentation of my projects and API`s.
        </p>
        <br />
      </div>
    </div>
  );
};
