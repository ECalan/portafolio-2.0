const Skills = () =>{
<section className="skills" id="skills">
        <h3 className="skills__title">Skills</h3>
        <div className="skills__container">
            <div className="skills__line" id="skills__all">
                <div className="skills__box">
                    <ul className="skills__items">
                        <li className="skills__img"><img className="skills__all__imgs" src="assets/img/Html.png"/></li>
                        <li className="skills__name"> HTML 5</li>
                    </ul>
                </div>
                <div className="skills__box">
                    <ul className="skills__items">
                        <li className="skills__img"> <img className="skills__all__imgs" src="assets/img/JavaScript.png" alt=""/></li>
                        <li className="skills__name">Javascript</li>
                    </ul>
                </div>
                <div className="skills__box">
                    <ul className="skills__items">
                        <li className="skills__img"> <img className="skills__all__imgs" src="assets/img/React.png" alt=""/> </li>
                        <li className="skills__name">React</li>
                    </ul>
                </div>
                <div className="skills__box">
                    <ul className="skills__items">
                        <li className="skills__img"> <img className="skills__all__imgs" src="assets/img/Css.png" alt=""/> </li>
                        <li className="skills__name">CSS</li>
                    </ul>
                </div>
            </div>    
        </div>
    </section>
};

export default Skills;