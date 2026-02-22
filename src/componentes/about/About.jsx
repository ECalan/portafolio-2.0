import "../about/About.css";

const About = () => {
  return (
    <section className="about" id="sobre-mi">
      <div className="about__container">
        <h3 className="about__title">Sobre mi</h3>
        <div className="about__container__paragraph">
          <p className="about__paragraph">
            Soy una persona apasionada enfocada a lograr mis metas, me
            especializo en la atencion al cliente con experiencia en el area de
            Recursos Humano y Administrativa, empece como operador de maquina
            clasificadora, luego fui ascendido en el area adminstrativa, despues
            al area de Recursos Humanos como Asistente de Recursos Humanos y por
            ultimo como Asistente de Relaciones Laborales, logrando asi varios
            años de profesión, soy fien creyente de que hay un solo Dios y que
            sin el no lograriamos nada.
          </p>
          <p className="about__paragraph">
            Soy fanatico de todo lo relacionado con la tecnología tanto a nivel
            de hardware como software, me encanta programar, escuchar música,
            diseñar, editar, dibujar, ver anime, bailar y jugar videojuegos.
            Suelo ser muy sociable, tengo un gusto por las peliculas de acción,
            suelo tener mucha facinacion por las Artes marciales y la cultura
            Asiática.{" "}
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
