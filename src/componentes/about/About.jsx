import "../about/About.css";

const About =()=>{  return(
    <section className="about" id="sobre-mi">
        <div className="about__container">
            <h3 className="about__title">Sobre mi</h3>
                <div className="about__container__paragraph">
                    <p className="about__paragraph">Soy una persona apasionada enfocada a lograr mis metas, me especializo en la atencion al cliente con experiencia en el area Administrativa y Recursos Humano, empece desde abajo como operador de maquina clasificadora, luego fui ascendido en el area adminstrativa como Asistente Administrativo de Operaciones en la empresa "Granjazul" despues de tres años de ejercer mi puesto, inicie nuevamente en la empresa "Polyproductos de Guatemala, S.A", donde se me dio la oportunidad de ascender al area de Recursos Humanos como Asistente de Recursos Humanos, logrando asi varios años de profesión, creo en un solo Dios y que sin el no lograriamos nada.</p>
                    <p className="about__paragraph">soy fanatico de todo lo relacionado con la tecnología tanto a nivel de hardware como software, me encanta programar, escuchar música, diseñar, editar, dibujar, ver anime, bailar y jugar videojuegos. Suelo ser muy sociable, tengo un gusto por las peliculas de acción, suelo tener mucha facinacion por las Artes marciales y la cultura Asiática. </p>
                </div>
            <img className="about__img" src="/img/Logo_Platinum_Design.png"/>
        </div>
        <div className="about__container__soft__skills">
            <h3 className="abaut__title_soft_skills">Soft Skills</h3>
            <div className="about__container__paragraph">
                <ul className="about__list">
                    <li className="about__item">➢ Comunicación para trabajar en equipo.</li>
                    <li className="about__item">➢ Enfocarse en lo mas importante.</li>
                    <li className="about__item">➢ Ser productivo.</li>
                    <li className="about__item">➢ Estrategias para actividades diarias.</li>
                    <li className="about__item">➢ transformación ágil</li>
                </ul>
            </div>
        </div>
    </section>
); };

export default About;