import "../academy/Academy.css";
const Academy = () => {
  return (
    <section className="academic" id="formacion">
      <div className="academic__container">
        <h2 className="academic__title">Formación académica</h2>
        <div className="academic__courses" id="academic__all">
          <div className="academic__courses__box">
            <ul className="academic__courses__list">
              <li className="academic__courses__item__img">
                <img
                  className="academic__courses__item__img__logo"
                  src="./img/Logo_Alura_Latam.png"
                  alt="Alura Latam"
                />
              </li>
              <li className="academic__courses__item__title">
                <h4>Formación Principiante en Programación</h4>
              </li>
              <li className="academic__courses__item__subtitle">
                <p>2023 - Alura Latam</p>
              </li>
            </ul>
          </div>
          <div className="academic__courses__box">
            <ul className="academic__courses__list">
              <li className="academic__courses__item__img">
                <img
                  className="academic__courses__item__img__logo"
                  src="./img/Logo_Alura_Latam.png"
                  alt="Alura Latam"
                />
              </li>
              <li className="academic__courses__item__title">
                <h4>Formación Front End G4 - ONE</h4>
              </li>
              <li className="academic__courses__item__subtitle">
                <p>2023 - Alura Latam</p>
              </li>
            </ul>
          </div>
          <div className="academic__courses__box">
            <ul className="academic__courses__list">
              <li className="academic__courses__item__img">
                <img
                  className="academic__courses__item__img__logo"
                  src="./img/Logo_Universidadrural-Guatemala.png"
                  alt="Universidad Rural de Guatemala"
                />
              </li>
              <li className="academic__courses__item__title">
                <h4>Actualmente en formación - Ing. Industrial</h4>
              </li>
              <li className="academic__courses__item__subtitle">
                <p>2024 - Universidad Rural de Guatemala</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academy;
