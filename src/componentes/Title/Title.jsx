import "./Title.css";
const Title=()=>{ return(
    <main className = "title__about">
<section className="title">
        <div className="title__div">
            <img className="title__profile" src="/img/Foto_para_portafolio.jpg" alt="profile" />
            <div className="title__container">
                <h2 className="title__bio title__biography">Hola, mi nombre es Eddy Calan y construyo paginas web</h2>
                <h3 className="title__subsection title__biography">Soy orgullosamente Guatemalteco, tengo 34 años de edad, formado en Bachillerato en Computación con Orientación Comercial, futuramente estudiante de Ingenieria en Sistemas y actualmente alumno Alumni One en Oracle ONE en Alura Latam.</h3>
                <ul className="title__network">
                    <li className="title__network__item"><a className="title__network__link" href="https://github.com/ECalan" target="_blank" rel="noopener noreferrer">Github <img className="litle__network__iconos" src="/img/GitHub.png" alt="GitHub"/></a></li>
                    <li className="title__network__item"><a className="title__network__link" href="https://www.linkedin.com/in/eddy-calan-asisrh/" target="_blank" rel="noopener noreferrer">Linkedin <img className="litle__network__iconos" src="/img/Linkedin.png" alt="Linkedin"/></a></li>
                    <li className="title__network__item"><a className="title__network__link" href="https://www.instagram.com/eddy_web_designer/" target="_blank" rel="noopener noreferrer">Instagram <img className="litle__network__iconos" src="/img/Instagram.png" alt="Instragram"/></a></li>
                    <li className="title__network__item"><a className="title__network__link" href="https://mega.nz/file/Cx0QwZSD#HHvYbX-tGVvOa5MPEHPNPWrHrTjjtNfBdHc7e-shAO0" target="_blank" rel="noopener noreferrer">Currículo <img class="litle__network__iconos" src="/img/Curriculum.png" alt="Curriculum"/></a></li>
                </ul>
            </div>
        </div>
    </section>
    </main>
);
};

export default Title;