import "./Skills.css";
const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills__container">
        <h3 className="skills__title">Skills</h3>
        <div className="skills__line" id="skills__all">
          <div className="skills__box">
            <ul className="skills__items">
              <li className="skills__img">
                <img
                  className="skills__all__imgs"
                  src="/img/Html.png"
                  alt="Html"
                />
              </li>
              <li className="skills__name"> HTML 5</li>
            </ul>
          </div>
          <div className="skills__box">
            <ul className="skills__items">
              <li className="skills__img">
                {" "}
                <img
                  className="skills__all__imgs"
                  src="/img/JavaScript.png"
                  alt="JavaScript"
                />
              </li>
              <li className="skills__name">Javascript</li>
            </ul>
          </div>
          <div className="skills__box">
            <ul className="skills__items">
              <li className="skills__img">
                {" "}
                <img
                  className="skills__all__imgs"
                  src="/img/React.png"
                  alt="React"
                />{" "}
              </li>
              <li className="skills__name">React</li>
            </ul>
          </div>
          <div className="skills__box">
            <ul className="skills__items">
              <li className="skills__img">
                {" "}
                <img
                  className="skills__all__imgs"
                  src="/img/Css.png"
                  alt="Css"
                />{" "}
              </li>
              <li className="skills__name">CSS</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
