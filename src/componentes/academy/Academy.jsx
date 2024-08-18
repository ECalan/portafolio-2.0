import "../academy/Academy.css";
const Academy = () => {
  return (
    <section className="academy" id="formacion">
      <div className="academy__container">
        <h2 className="academy__title">Formación académica</h2>
        <div className="academy__courses" id="academy__all">
          <div className="academy__courses__box">
            <ul className="academy__courses__list">
              <li className="academy__courses__item__img">
                <img
                  className="academy__courses__item__img__logo"
                  src="./img/Logo_Alura_Latam.png"
                  alt="Alura Latam"
                />
              </li>
              <li className="academy__courses__item__title">
                <h4>Formación Principiante en Programación</h4>
              </li>
              <li className="academy__courses__item__subtitle">
                <p>2023 - Alura Latam</p>
              </li>
            </ul>
          </div>
          <div className="academy__courses__box">
            <ul className="academy__courses__list">
              <li className="academy__courses__item__img">
                <img
                  className="academy__courses__item__img__logo"
                  src="./img/Logo_Alura_Latam.png"
                  alt="Alura Latam"
                />
              </li>
              <li className="academy__courses__item__title">
                <h4>Formación Front End G4 - ONE</h4>
              </li>
              <li className="academy__courses__item__subtitle">
                <p>2023 - Alura Latam</p>
              </li>
            </ul>
          </div>
          <div className="academy__courses__box">
            <ul className="academy__courses__list">
              <li className="academy__courses__item__img">
                <img
                  className="academy__courses__item__img__logo academy__university"
                  src="./img/Logo_Universidadrural-Guatemala.png"
                  alt="Universidad Rural de Guatemala"
                />
              </li>
              <li className="academy__courses__item__title">
                <h4>1 curso - Ing. Industrial</h4>
              </li>
              <li className="academy__courses__item__subtitle">
                <p>2023 - Universidad Rural de Guatemala</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academy;
