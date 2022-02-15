import React from "react";

export const Nft = () => {
  return (
    <div className="blogs__main_container">
      <article className="blog_main_article">
        <h1 className="blogs__title">NFT, ¿Qué es y cómo funciona?</h1>
        <em className="blogs__date">15/02/2022</em>
        <hr />
        <p className="blog__text">
          En los últimos meses el termino NFT se ha puesto de moda debido a
          noticias donde se informa de que alguna persona pago millones de
          dolares por la imagen de algún dibujo o la captura de pantalla de un
          tweet. Pero realmente ¿se trata solo de una imagen? Y si es así ¿por
          qué no simplemente le tomo captura de pantalla?. En este blog te voy a
          explicar que es un NFT y porque simplemente tomar una captura de
          pantalla no te hace dueño de este.
        </p>
        <h2 className="blogs__subtitle">¿Qué es?</h2>

        <p className="blog__text">
          Las siglas de NFT significan <strong>Non-Fungible Token</strong>, un
          token no fungible. Los tokens son unidades de valor que se le asignan
          a un modelo de negocio, por ejemplo las fichas de un casino. los NFT
          son activos únicos que no se pueden modificar ni intercambiar por otro
          que tenga el mismo valor, ya que no hay dos NFT que sean equivalentes.
          En conclusion un NFT es un “certificado digital único, registrado en
          una cadena de bloques, que se utiliza para registrar la propiedad de
          un activo como una obra de arte o un objeto de colección”.
        </p>
        <h2 className="blogs__subtitle">¿Cómo funciona?</h2>
        <p className="blog__text">
          Los NFT funcionan a través de la tecnología blockchain o de cadena de
          bloques. Es la misma tecnología de las criptomonedas, que funcionan
          mediante una red de ordenadores descentralizada, con bloques o nodos
          enlazados y asegurados usando criptografía. Cada bloque enlaza a un
          bloque previo, así como una fecha y datos de transacciones, y por
          diseño son resistentes a la modificación de datos. Se registran
          mediante un contrato inteligente que les asigna un número único, lo
          que proporciona tranquilidad a su propietario frente a posibles
          réplicas. Este registro contiene los datos del propietario y del
          creador, lo que permite preservar por igual los derechos de autor.
        </p>
        <h3 className="blog_subtitle">En resumen</h3>
        <p className="blog__text">
          Un NFT puede ser una imagen, un gráfico, un vídeo, música o cualquier
          otro contenido de carácter digital sobre el que alguien quiera tener
          posesión.
        </p>
        <img
          className="blogs__main_image"
          src="https://live.staticflickr.com/65535/51884255769_770184740a_b.jpg"
          alt="nft-"
        />
      </article>
    </div>
  );
};
