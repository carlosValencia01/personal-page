import React from "react";

export const SolidPrinciple = () => {
  return (
    <div className="blog__main_container">
      <article className="blog__main_article">
        <h1 className="blog__title">Principio SOLID</h1>
        <em className="blog__date">2/05/2022</em>
        <hr />
        <p className="blog__text">
          Los principios SOLID son uno de los conceptos de programación y diseño
          de software mas populares cuando queremos comenzar a utilizar las
          buenas practicas de desarrollo de software.
          <br />
          Estos principios fueron publicados por primera vez por{" "}
          <strong>Robert C. Martin</strong>, también conocido como Uncle Bob, en
          uno de los libros mas conocidos en el mundo de la programación{" "}
          <strong>
            Agile Software Development: Principles, Patterns, and Practices.
          </strong>
          <br />
          <br />
          SOLID es un acrónimo, y cada una de las letras que lo componen tiene
          un significado:
        </p>
        <hr />
        <h3 className="blog__subtitle">
          Single Responsibility Principle (Principio de Responsabilidad Única)
        </h3>
        <p className="blog__text">
          <br />
          <strong>
            “Una clase debe tener una y solo una razón para cambiar”
          </strong>
          <br />
          <br />
          Este principio dicta que cada modulo, ya sea método, función, clase,
          etc. Debe tener una única razón para cambiar. Este es el principio mas
          importante y fundamental de SOLID, es bastante sencillo de explicar y
          entender, sin embargo, en la practica es el mas difícil de seguir.
          <br />
          El propio Bob resume este principio como “Reúne las cosas que cambian
          por las mismas razones. Separa aquellas que cambian por razones
          diferentes”.
        </p>
        <hr />
        <h3 className="blog__subtitle">
          Open/Closed Principle (Principio de Abierto/Cerrado)
        </h3>
        <p className="blog__text">
          <br />
          <strong>
            “Debes ser capaz de extender el comportamiento de una clase, sin
            modificarla”
          </strong>
          <br />
          <br />
          Este principio dice que el código debería estar abierto para
          extenderlo y para añadirle nuevas funcionalidades, pero en cambio
          debería estar cerrado a modificaciones, salvo aquellas que se deban
          realizar si se encuentra algún error.
          <br />
          Es importante tener en cuenta el Open/Closed Principle (OCP) a la hora
          de desarrollar clases, librerías o frameworks.
        </p>
        <hr />
        <h3 className="blog__subtitle">
          Liskov Substitution Principle (Principio de Sustitución de Liskov )
        </h3>
        <p className="blog__text">
          <strong>
            “Las clases derivadas deben permitir ser sustituidas por sus clases
            base.”
          </strong>
          <br />
          <br />
          La L de SOLID alude al apellido de quien lo creó, Barbara Liskov, y
          dice que “las clases derivadas deben poder sustituirse por sus clases
          base”.
          <br />
          <br />
          Esto significa que los objetos deben poder ser reemplazados por
          instancias de sus subtipos sin alterar el correcto funcionamiento del
          sistema o lo que es lo mismo: si en un programa utilizamos cierta
          clase, deberíamos poder usar cualquiera de sus subclases sin
          interferir en la funcionalidad del programa.
          <br />
          <br />
          Según Robert C. Martin incumplir el Liskov Substitution Principle
          (LSP) implica violar también el principio de Abierto/Cerrado.
        </p>
        <hr />
        <h3 className="blog__subtitle">
          Interface Segregation Principle (Principio de Segregación de
          Interfaces)
        </h3>
        <p className="blog__text">
          <strong>
            “Crea interfaces detalladas que sean específicas del cliente.”
          </strong>
          <br />
          <br />
          Este cuarto principio dice que se han de utilizar interfaces con
          propósito específicos, o sea que tengan responsabilidades concretas,
          únicas y que se piensen bien y no se hagan interfaces grandes.
          <br />
          <br />
          En este sentido, según el Interface Segregation Principle (ISP), es
          preferible contar con muchas interfaces que definan pocos métodos que
          tener una interface forzada a implementar muchos métodos a los que no
          dará uso.
        </p>
        <hr />
        <h3 className="blog__subtitle">
          Dependency Inversion Principle (Principio de Inversión de la
          Tendencia)
        </h3>
        <p className="blog__text">
          <strong>"Depende de abstracciones, no de clases concretas."</strong>
          <br />
          <br />
          Para este ultimo principio el tío Bob no recomienda:
          <br />
          <br />
          1-Los módulos de alto nivel no deberían depender de módulos de bajo
          nivel. Ambos deberían depender de abstracciones.
          <br />
          2-Las abstracciones no deberían depender de los detalles. Los detalles
          deberían depender de las abstracciones.
          <br />
          <br />
          El objetivo del Dependency Inversion Principle (DIP) consiste en
          reducir las dependencias entre los módulos del código, es decir,
          alcanzar un bajo acoplamiento de las clases.
        </p>
        <hr />
        <h2 className="blog__subtitle">Conclusión</h2>
        <p className="blog__text">
          Los principios SOLID son buenas practicas que a final de cuentas
          podemos utilizar como recomendaciones para escribir un mejor código,
          mas limpio, mantenible y escalable, sin embargo también es importante
          tomar en cuenta que no se trata de ningún estándar y a pesar de
          seguirlos al pie de la letra no nos aseguran la calidad de nuestro
          software.
          <br />
          <br />
          Si te estas iniciando en el mundo de las buenas practicas y tienes la
          intención de aplicar estos principios en tus proyectos, personalmente
          te recomiendo iniciar por el principio de responsabilidad única,
          personalmente he encontrado este muy útil tanto para desarrollar
          software como para depurarlo y mantenerlo.
          <br />
        </p>
        <img
          className="blog__main_image"
          src="https://live.staticflickr.com/65535/52044233319_10c3bd705c.jpg"
          alt="nft-"
        />
      </article>
    </div>
  );
};
