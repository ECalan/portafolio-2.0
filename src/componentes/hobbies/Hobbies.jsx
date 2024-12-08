import "../hobbies/Hobbies.css";

const Hobbies = () => {
  return (
    <section className="hobbies" id="hobbies">
      <div className="hobbies__container">
        <h3 className="hobbies__title">Hobbies</h3>
        <div className="hobbies__line" id="hobbies__all">
          <div className="hobbies__box">
            <ul className="hobbies__items">
              <li className="hobbies__img">
                <svg
                  className="hobbies__svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width={104}
                  height={104}
                  viewBox="0 0 26 26"
                >
                  <g fill="#40ff00">
                    <path d="M12.781 4.698c4.323 2.937 6.469 5.064 6.469 6.606c0 1.492-.82 2.7-2.396 3.583c-.436.245-.922-.232-.685-.672c.407-.758.273-1.607-.461-2.617c-.774-1.065-1.89-1.84-3.365-2.328A.5.5 0 0 1 12 8.795V5.111a.5.5 0 0 1 .781-.413M10.75 20.75c-1.77 0-3.25-1.143-3.25-2.625S8.98 15.5 10.75 15.5S14 16.643 14 18.125s-1.48 2.625-3.25 2.625"></path>
                    <path d="M13 7a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1"></path>
                    <path
                      fillRule="evenodd"
                      d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"
                      clipRule="evenodd"
                    ></path>
                  </g>
                </svg>
              </li>
              <p className="hobbies__name">Escuchar música</p>
            </ul>
          </div>
          <div className="hobbies__box">
            <ul className="hobbies__items">
              <li className="hobbies__img">
                <svg
                  className="hobbies__svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width={104}
                  height={104}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#40ff00"
                    d="M5.575 2.074A.75.75 0 0 1 6 2.75c0 .83.312 1.308.703 1.89l.029.042c.332.494.768 1.141.768 2.068c0 .946-.477 1.78-1.204 2.275q.287.24.506.593c.476.77.698 1.947.698 3.637c0 1.712-.23 3.768-.605 5.41c-.186.816-.417 1.569-.692 2.134a3 3 0 0 1-.51.77c-.206.211-.523.436-.943.436s-.737-.225-.942-.436a3 3 0 0 1-.51-.77c-.276-.566-.507-1.318-.693-2.135A26 26 0 0 1 2 13.254c0-1.69.222-2.866.698-3.636a2.4 2.4 0 0 1 .506-.593A2.75 2.75 0 0 1 2 6.75c0-.368 0-1.001.383-1.818c.375-.8 1.088-1.719 2.398-2.768a.75.75 0 0 1 .794-.09M3.5 6.749v.001a1.25 1.25 0 0 0 2.5 0c0-.439-.185-.743-.542-1.274l-.012-.018c-.229-.34-.5-.743-.692-1.26c-.543.552-.843 1.01-1.012 1.37c-.242.516-.242.883-.242 1.18m.474 3.657c-.248.402-.474 1.226-.474 2.849c0 1.601.218 3.545.567 5.076c.176.77.376 1.395.579 1.811q.056.115.104.195q.048-.08.104-.195c.203-.416.403-1.042.579-1.811c.35-1.53.567-3.474.567-5.076c0-1.623-.226-2.447-.474-2.849a.8.8 0 0 0-.325-.317a1 1 0 0 0-.451-.084c-.2 0-.343.031-.451.084a.8.8 0 0 0-.325.317M10 14.918a6 6 0 0 1-1.532-.476a23 23 0 0 0 .025-1.703c.451.303.96.526 1.507.65V10.5A1.5 1.5 0 0 1 11.5 9h4a4.5 4.5 0 0 0-7.234-3.574c-.2-.553-.485-.976-.683-1.27l-.04-.06A6 6 0 0 1 17 9h3.5a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5zm1.5.063v4.52h9v-9h-3.69a6 6 0 0 1-5.31 4.48m3.744-4.48H11.5v2.973a4.5 4.5 0 0 0 3.744-2.973"
                  ></path>
                </svg>
              </li>
              <p className="hobbies__name">Diseñar</p>
            </ul>
          </div>
          <div className="hobbies__box">
            <ul className="hobbies__items">
              <li className="hobbies__img">
                <svg
                  className="hobbies__svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width={104}
                  height={104}
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fillRule="evenodd">
                    <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
                    <path
                      fill="#40ff00"
                      d="M5 2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h3v-2H5V4h12v4h2V4a2 2 0 0 0-2-2zm3 5a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zm7.949 3.811a3 3 0 0 1 4.242 4.243l-5.656 5.657a1 1 0 0 1-.707.293h-2.829a1 1 0 0 1-1-1v-2.829a1 1 0 0 1 .293-.707zm2.828 1.414a1 1 0 0 0-1.414 0l1.414 1.415a1 1 0 0 0 0-1.415m-1.414 2.829l-1.414-1.414l-3.95 3.95v1.414h1.414z"
                    ></path>
                  </g>
                </svg>
              </li>
              <p className="hobbies__name">Editar</p>
            </ul>
          </div>
          <div className="hobbies__box">
            <ul className="hobbies__items">
              <li className="hobbies__img">
                <svg
                  className="hobbies__svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width={104}
                  height={104}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#40ff00"
                    d="M21 6.25A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25v12.283c0 1.303 1.57 1.962 2.5 1.048l4.03-3.96l.02-.021l1.925-1.885l.083-.071a.75.75 0 0 1 .966.07l2.08 2.037l1.06-1.06l-2.09-2.048l-.129-.116a2.25 2.25 0 0 0-3.02.116l-4.452 4.36h.01L4.5 18.46V6.25c0-.966.784-1.75 1.75-1.75h11.5c.967 0 1.75.784 1.75 1.75v4.982c.48-.19.994-.263 1.5-.22zm-3.496 2.502a2.252 2.252 0 1 0-4.505 0a2.252 2.252 0 0 0 4.505 0m-3.005 0a.752.752 0 1 1 1.505 0a.752.752 0 0 1-1.505 0m-1.302 9.82l5.902-5.902a2.285 2.285 0 1 1 3.233 3.232l-5.903 5.902a2.7 2.7 0 0 1-1.247.707l-1.83.457q-.075.02-.15.027c-.59.204-2.979.574-3.827-.088c-.574-.448-.46-1.334-.218-1.818c.04-.078-.02-.18-.105-.166c-.66.103-1.243.45-1.827.799c-.783.468-1.57.936-2.549.815s-1.468-.726-1.71-1.255c-.099-.216.18-.401.388-.287c.469.255 1.106.496 1.631.38c.375-.084.904-.458 1.496-.877c1.066-.753 2.337-1.653 3.292-1.268c.84.337 1.46 1.15 1.03 2.113c-.052.118 0 .264.127.293c.423.097.778.066 1.133-.105l.428-1.712c.118-.472.362-.903.706-1.247"
                  ></path>
                </svg>
              </li>
              <p className="hobbies__name">Dibujar</p>
            </ul>
          </div>
          <div className="hobbies__box">
            <ul className="hobbies__items">
              <li className="hobbies__img">
                <svg
                  className="hobbies__svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width={104}
                  height={104}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#40ff00"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm4-2v16m8-16v16M4 8h4m-4 8h4m-4-4h16m-4-4h4m-4 8h4"
                  ></path>
                </svg>
              </li>
              <p className="hobbies__name">Ver series</p>
            </ul>
          </div>
          <div className="hobbies__box">
            <ul className="hobbies__items">
              <li className="hobbies__img">
                <svg
                  className="hobbies__svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width={104}
                  height={104}
                  viewBox="0 0 48 48"
                >
                  <g fill="none">
                    <path
                      stroke="#40ff00"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={4}
                      d="M19 30v3a7 7 0 0 1-7 7v0a7 7 0 0 1-7-7V19m24 11v3a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7V19"
                    ></path>
                    <rect
                      width={38}
                      height={22}
                      x={5}
                      y={8}
                      stroke="#40ff00"
                      strokeWidth={4}
                      rx={11}
                    ></rect>
                    <path
                      stroke="#40ff00"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={4}
                      d="M21 19h-8m4-4v8"
                    ></path>
                    <rect
                      width={4}
                      height={4}
                      x={32}
                      y={15}
                      fill="#40ff00"
                      rx={2}
                    ></rect>
                    <rect
                      width={4}
                      height={4}
                      x={28}
                      y={20}
                      fill="#40ff00"
                      rx={2}
                    ></rect>
                  </g>
                </svg>
              </li>
              <p className="hobbies__name">Jugar videojuegos</p>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
