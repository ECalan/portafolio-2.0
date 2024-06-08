import { useState } from "react";
import ThemeDark from "./ThemeDark";
import ThemeLight from "./ThemeLight";
import "../menu/Menu.css"



const Menu = () => {
    
    const [value, setValue] = useState(0)
    
    if (value === true) {
        ThemeDark();
    }else if (value === false) {
        ThemeLight();
    }
    return (
        <header className="menu">
            <div className="menu__header">
                <img className ="image__header" src="/img/icon_eddy.svg" alt="icono_eddy"/>
                <h3 className="menu__title">Eddy Calan</h3>
            </div>
            <nav className="menu_content">
            <ul className="menu__list">
                {/*<li className="menu__list__item" id="menu__list__item__theme">
                    <a className="menu__list__item__icon" href="#Change__theme">
                        <img className="menu__list_img" src="/img/icon_eddy.svg" alt="icono_theme"/>
                        <select className="menu__list__themes" name="Themes" id="themes">
                            <option value="Dark">Theme Dark</option>
                            <option value="White">Theme White</option>
    </select></a></li>*/}
            <button id="themes"  className="menu__button__themes" onClick={()=> setValue(value === false)}>
                Theme Light
            </button> {value}
                <li className="menu__list__item"><a href="#sobre-mi">Sobre mi</a></li>
                <li className="menu__list__item"><a href="#skills">Skills</a></li>
                <li className="menu__list__item"><a href="#hobbies">Hobbies</a></li>
                <li className="menu__list__item"><a href="#formacion">Formación</a></li>
                <li className="menu__list__item"><a href="#xp">Proyectos</a></li>
                <li className="menu__list__item contacto"><a href="#contacto">@contacto</a></li>
                <li className="menu__list__item__contacto"><a href="#contacto">@contacto</a></li>
            </ul>
        </nav>
        </header>
    );};

    export default Menu;