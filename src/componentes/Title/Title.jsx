import "./Title.css";
const Title = () => {
  const fechaActual = new Date();
  const fechaNacimiento = new Date(1990, 1, 1);
  const años = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

  const formacion = "Bachillerato en Computación con Orientación Comercial";
  const formacionFutura = "Ingenieria en Sistema";
  const estudioActual = "Alumni One en Oracle ONE en Alura Latam";

  return (
    <section className="title">
      <div className="title__div">
        <div className="title__container">
          <img
            className="title__profile"
            src="/img/Foto_para_portafolio.jpg"
            alt="profile"
          />
          <h2 className="title__biography">
            Hola, mi nombre es Eddy Calan y construyo paginas web
          </h2>
          <p className="title__subsection">
            Soy orgullosamente Guatemalteco, tengo {años} años de edad, formado
            en {formacion}, futuramente estudiante de {formacionFutura} y
            actualmente alumno {estudioActual}.
          </p>
          <ul className="title__network">
            <li className="title__network__item">
              <a
                className="title__network__link"
                href="https://github.com/ECalan"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github{" "}
                <img
                  className="litle__network__iconos"
                  src="/img/GitHub.png"
                  alt="GitHub"
                />
              </a>
            </li>
            <li className="title__network__item">
              <a
                className="title__network__link"
                href="https://www.linkedin.com/in/eddy-calan-asisrh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin{" "}
                <img
                  className="litle__network__iconos"
                  src="/img/Linkedin.png"
                  alt="Linkedin"
                />
              </a>
            </li>
            <li className="title__network__item">
              <a
                className="title__network__link"
                href="https://www.instagram.com/eddy_web_designer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram{" "}
                <img
                  className="litle__network__iconos"
                  src="/img/Instagram.png"
                  alt="Instragram"
                />
              </a>
            </li>
            <li className="title__network__item">
              <a
                className="title__network__link"
                href="https://mega.nz/file/Cx0QwZSD#HHvYbX-tGVvOa5MPEHPNPWrHrTjjtNfBdHc7e-shAO0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Currículo{" "}
                <img
                  class="litle__network__iconos"
                  src="/img/Curriculum.png"
                  alt="Curriculum"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Title;
