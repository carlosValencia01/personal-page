import React, { useState } from "react";
import background from "../../assets/images/background1.jpg";

export const AboutScreen = () => {

  const [language, setLanguage] = useState("En");

  const setEn = ()=>{
      setLanguage("En");
  }

  const setEs = ()=>{
    setLanguage("Es");
  }


  return (
    <div
      className="about__main"
      style={{
        background: `url(${background})`,
      }}
    >

      

      <div className="about__container">
        <div class="btn-group-sm about__lanButtons" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-secondary" onClick={setEn}>En</button>
          <button type="button" class="btn btn-secondary" onClick={setEs}>Es</button>
        </div>
      
        {language === "En"
        ?(
          <>
          <h2 className="about__title animate__animated animate__slideInLeft animate__faster">
            About Me
          </h2>
          <p className="about__text animate__animated animate__pulse">
            I am a software developer. Passionate about Programming for desktop environments and web applications. Motivated by the constant development of my skills and always looking to learn new technologies. With experience in requirements analysis, design, development and support of systems and web applications. Ability to work in teams. Able to work with different programming languages simultaneously.
            I am a Systems Engineer graduated from the Technological Institute of Tepic. 
            I have some experience in web development with Angular, React and .Net, my favorite language is JavaScript.
            My hobbies are learning new development technologies through books and online courses, I like listen to music and watch Formula 1.
          </p>
          </>
        )
        :(
          <>
          <h2 className="about__title animate__animated animate__slideInLeft animate__faster">
            Acerca de mi
          </h2>
          <p className="about__text animate__animated animate__pulse">

          Soy un desarrollador apasionado por la programación tanto de escritorio como de aplicaciones web.
          <br />
          Me motiva el constante desarrollo de mis habilidades y la búsqueda constante de aprender nuevas tecnologías
          <br />
          Cuento con experiencia en análisis de requerimientos, diseño, desarrollo y soporte de sistemas y aplicaciones web.
          <br />
          Capaz de trabajar en conjunto con otros programadores y con múltiples lenguajes simultáneamente.
          <br />
          Titulado de la carrera de Ingeniería en sistemas computacionales del instituto nacional de Mexico campus Tepic.
          <br />
          Con experiencia en desarrollo web con Angular, React y .Net, mi lenguaje favorito es JavaScript.
          <br />
          Mis hobbies son aprender nuevas tecnologías de desarrollo a través de cursos, libros y documentación.
          <br />
          Me gusta escuchar música y ver carreras de Formula 1.



          </p>
          </>
        )
      }
        
        
        <img
          className="about__image animate__animated animate__fadeIn"
          src="https://live.staticflickr.com/65535/52506697051_d363e50d27_k.jpg"
          alt="https://live.staticflickr.com/65535/51907203687_9616b4f39d_c.jpg"
          
        />
        <hr />

        {language === "En"
        ?(
          <>
          <h2 className="about__title animate__animated animate__slideInLeft animate__faster">
            About This Page
          </h2>
            <p className="about__text animate__animated animate__pulse">
            This page was created as a tool to share my knowledge, some interesting information for other developers through tutorials and blogs and also share documentation of my projects and API`s.
            </p>
            <br />
          </>
        )
        :(
          <>
            <h2 className="about__title animate__animated animate__slideInLeft animate__faster">
              Acerca de esta página
            </h2>
            <p className="about__text animate__animated animate__pulse">
              Esta pagina fue creada como una herramienta para compartir mi conocimiento, así como información interesante que pudiese ayudar a otros desarrolladores a través de tutoriales y blogs.
              <br />
              También fue creada con la finalidad de compartir documentación de mis proyectos y API´s y en general funcionar como un portafolio.
            </p>
            <br />
          </>
        )
      }







        
      </div>
    </div>
  );
};
