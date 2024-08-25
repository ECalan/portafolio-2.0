import "../contact/Contact.css";
const Contact = () => {
  return (
    <section className="formcontact" id="contac">
      <div className="formcontact__contact">
        <div className="formcontact--izquierda">
          <img
            className="formcontact__img"
            src="./img/Smartphone.png"
            alt="Movil"
          />
        </div>
        <div className="formcontact__text">
          <h2 className="formcontact__title">Contacto</h2>
          <h3 className="formcontact__subtext">¿Quieres contactarme?</h3>
          <h3 className="formcontact__subtext">
            Complete el siguiente formulario y me pondré en contacto con usted
            lo antes posible.{" "}
          </h3>
          <form
            className="formcontact__form"
            name="contact"
            data-form
            method="POST"
            netlify
          >
            <div className="input__container">
              <input
                className="formcontact__input"
                type="text"
                name="nombre"
                placeholder="Nombre"
                pattern="[a-zA-Z ]{4,50}"
                required
                data-tipo="nombre"
                data-nombre
              />
              <label className="formcontact__input__label" for="name">
                Nombre
              </label>
              <span className="formcontact__input__message__error">
                Este campo no es valido
              </span>
            </div>
            <div className="input__container">
              <input
                className="formcontact__input email__input"
                type="email"
                name="email"
                placeholder="E-mail"
                required
                data-tipo="email"
                data-email
              />
              <label className="formcontact__input__label" for="email">
                Email
              </label>
              <span className="formcontact__input__message__error">
                Este campo no es valido
              </span>
            </div>
            <div className="input__container">
              <input
                className="formcontact__input"
                type="text"
                name="asunto"
                placeholder="Assunto"
                pattern="[a-zA-Z ]{4,50}"
                required
                data-tipo="asunto"
                data-asunto
              />
              <label className="formcontact__input__label" for="text">
                Asunto
              </label>
              <span className="formcontact__input__message__error">
                Este campo no es valido
              </span>
            </div>
            <div className="textarea__container">
              <textarea
                className="formcontact__textarea"
                rows="5"
                cols="40"
                id="mensaje"
                name="mensaje"
                placeholder="Mensaje"
                maxLength="300"
                required
                data-tipo="mensaje"
                data-mensaje
              ></textarea>
              <label className="formcontact__textarea__label" for="text">
                Mensaje<br></br>
              </label>
              <span className="formcontact__textarea__message__error">
                Este campo no es valido
              </span>
              <span
                className="textarea__mensaje__caracteres"
                id="textarea__contador"
              >
                0/100
              </span>
            </div>
            <button type="submit" className="formcontact__boton">
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
