import "../experiences/Experiences.css";
import { createAnimatable, utils, stagger } from "https://esm.sh/animejs";
const Experiences = () => {
  const buttons = document.querySelectorAll(".experience__boton--demo");

  buttons.forEach(($button, index) => {
    const $img = $button.querySelector(".experience__boton--img");

    // Asignar un identificador único a cada imagen
    $img.setAttribute("data-eye-index", index);

    let buttonBounds = $button.getBoundingClientRect();
    let imgBounds = $img.getBoundingClientRect();

    const refreshBounds = () => {
      buttonBounds = $button.getBoundingClientRect();
      imgBounds = $img.getBoundingClientRect();
    };

    const eye = createAnimatable(`[data-eye-index="${index}"]`, {
      x: 0,
      y: 0,
      ease: "out(4)",
    });

    const onMouseMove = (e) => {
      const { width, height, left, top } = buttonBounds;
      const hw = width / 2;
      const hh = height / 2;

      const maxX = (width - imgBounds.width) / 2;
      const maxY = (height - imgBounds.height) / 2;

      const x = utils.clamp(e.clientX - left - hw, -maxX, maxX);
      const y = utils.clamp(e.clientY - top - hh, -maxY, maxY);

      eye.x(x).y(y);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", refreshBounds);
    window.addEventListener("scroll", refreshBounds);
  });

  return (
    <section className="experience" id="xp">
      <div className="experience__container_title">
        <h2 className="experience__section__title">Experiencia Profesional</h2>
      </div>
      <div className="experiencie__box">
        <img
          className="experience__img"
          id="expereince__img_proyecto1"
          src="https://raw.githubusercontent.com/ECalan/Portafolio_Eddy_Calan/master/assets/img/Img_encriptator_de_texto.jpg"
          alt="Encriptador de texto"
        />
        <div className="experience__info" id="experience__info1">
          <h3 className="experience__title">Encriptador de texto</h3>
          <p className="experience__text">
            Challenge Alura - Codificador de texto
          </p>
          <div className="experience__description">
            <span className="experience__repo">
              <a
                href="https://github.com/ECalan/challenge_encriptador_de_texto_tematica_anime"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="experience__boton--repo">
                  {" "}
                  Repositório
                </button>
              </a>
            </span>
            <span className="experience__demo">
              <a
                href="https://ecalan.github.io/challenge_encriptador_de_texto_tematica_anime/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="experience__boton--demo">
                  <img
                    className="experience__boton--img"
                    src="/img/Ojos_anime.png"
                    alt="Ojos Anime"
                  />
                  Ver demo
                </button>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="experiencie__box reverse__box">
        <img
          className="experience__img"
          id="expereince__img_proyecto2"
          src="https://raw.githubusercontent.com/ECalan/Portafolio_Eddy_Calan/master/assets/img/img_organizador%20de%20equipo.jpg"
          alt="Organizador de Equipos"
        />
        <div
          className="experience__info info__izquierda"
          id="experience__info2"
        >
          <h3 className="experience__title">Organizador de equipos</h3>
          <p className="experience__text">
            Clase impartida por Alura _ Desarrollado en React
          </p>
          <div className="experience__description">
            <span className="experience__repo">
              <a
                href="https://github.com/ECalan/org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="experience__boton--repo">Repositório</button>
              </a>
            </span>
            <span className="experience__demo">
              <a
                href="https://org-one-sigma.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="experience__boton--demo">
                  <img
                    className="experience__boton--img"
                    src="/img/Ojos_anime.png"
                    alt="Ojos Anime"
                  />
                  Ver demo
                </button>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="experiencie__box">
        <img
          className="experience__img"
          id="expereince__img_proyecto3"
          src="https://raw.githubusercontent.com/ECalan/Portafolio_Eddy_Calan/master/assets/img/Alura_Geek.png"
          alt="E-commerce"
        />
        <div className="experience__info" id="experience__info3">
          <h3 className="experience__title">E-Commerce _ AluraGeek</h3>
          <p className="experience__text">
            Challenge Oracle - simulador de E-commerce
          </p>
          <div className="experience__description">
            <span className="experience__repo">
              <a
                href="https://github.com/ECalan/Alura-Geek"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="experience__boton--repo">Repositório</button>
              </a>
            </span>
            <span className="experience__demo">
              <a
                href="https://eddydesign-alura-geek.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="experience__boton--demo">
                  <img
                    className="experience__boton--img"
                    src="/img/Ojos_anime.png"
                    alt="Ojos Anime"
                  />
                  Ver demo
                </button>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="experiencie__box reverse__box">
        <img
          className="experience__img"
          id="expereince__img_proyecto4"
          src="https://raw.githubusercontent.com/ECalan/Portafolio_Eddy_Calan/master/assets/img/Img_Portafolio.jpg"
          alt="E-commerce"
        />
        <div
          className="experience__info info__izquierda"
          id="experience__info4"
        >
          <h3 className="experience__title">Portafolio_0.1 _ Eddy Calan</h3>
          <p className="experience__text">Challenge Oracle - Portafolio</p>
          <div className="experience__description">
            <span className="experience__repo">
              <a
                href="https://github.com/ECalan/Portafolio_Eddy_Calan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="experience__boton--repo">Repositório</button>
              </a>
            </span>
            <span className="experience__demo">
              <a
                href="https://eddydesign-portafolio.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="experience__boton--demo">
                  <img
                    className="experience__boton--img"
                    src="/img/Ojos_anime.png"
                    alt="Ojos Anime"
                  />
                  Ver demo
                </button>
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
