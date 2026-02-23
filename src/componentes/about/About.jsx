import "../about/About.css";

const About = () => {
  return (
    <section className="about" id="sobre-mi">
      <div className="about__container">
        <h3 className="about__title">Sobre mi</h3>
        <div className="about__container__paragraph">
          <p className="about__paragraph">
            Soy una persona apasionada, enfocada en lograr mis metas. Me
            especializo en la atención al cliente, con experiencia en el área de
            Recursos Humanos y Administrativa. Empecé como operador de máquina
            clasificadora; ascendí a Asistente Administrativo de Operaciones,
            luego al área de Recursos Humanos como Asistente de Recursos Humanos
            y, por último, como Asistente de Relaciones Laborales en el área de
            Factor Humano, logrando así varios años de experiencia profesional.
            Soy fiel creyente de que hay un solo Dios y que sin Él no
            lograríamos nada.
          </p>
          <p className="about__paragraph">
            Soy fanático de todo lo relacionado con la tecnología, tanto a nivel
            de hardware como de software. Me encanta programar, escuchar música,
            diseñar, editar, dibujar, ver anime, bailar y jugar videojuegos.
          </p>
        </div>
        <img
          className="about__img"
          src="/img/Logo_Platinum_Design.png"
          alt="Platinum Design"
        />
      </div>
      <div className="about__container__soft__skills">
        <h3 className="about__title_soft_skills">Soft Skills</h3>
        <div className="about__container__paragraph">
          <ul className="about__list">
            <p className="about__item">
              ➢ Comunicación para trabajar en equipo.
            </p>
            <p className="about__item">➢ Enfocarse en lo mas importante.</p>
            <p className="about__item">➢ Ser productivo.</p>
            <p className="about__item">
              ➢ Estrategias para actividades diarias.
            </p>
            <p className="about__item">➢ transformación ágil</p>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
