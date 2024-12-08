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
                <svg
                  className="skills__all__imgs"
                  xmlns="http://www.w3.org/2000/svg"
                  width={104}
                  height={104}
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <g
                      className="skills__color__icon__fill"
                      fill="#40ff00"
                      clipPath="url(#akarIconsHtmlFill0)"
                    >
                      <path d="M5.08 0h1.082v1.069h.99V0h1.082v3.236H7.152V2.153h-.99v1.083H5.081zm4.576 1.073h-.952V0h2.987v1.073h-.953v2.163H9.656zM12.165 0h1.128l.694 1.137L14.68 0h1.128v3.236h-1.077V1.632l-.744 1.151h-.019l-.745-1.15v1.603h-1.058zm4.181 0h1.083v2.167h1.52v1.07h-2.603z"></path>
                      <path
                        fillRule="evenodd"
                        d="M5.046 22.072L3 4.717h18L18.953 22.07L11.99 24zm4.137-9.5l-.194-2.18h8.145l.19-2.128H6.664l.574 6.437h7.377l-.247 2.76l-2.374.642h-.002l-2.37-.64l-.152-1.697H7.332l.298 3.342l4.36 1.21l4.367-1.21l.532-5.964l.052-.571z"
                        clipRule="evenodd"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="akarIconsHtmlFill0">
                        <path fill="#fff" d="M0 0h24v24H0z"></path>
                      </clipPath>
                    </defs>
                  </g>
                </svg>
              </li>
              <p className="skills__name"> HTML 5</p>
            </ul>
          </div>
          <div className="skills__box">
            <ul className="skills__items">
              <li className="skills__img">
                <svg
                  className="skills__all__imgs"
                  xmlns="http://www.w3.org/2000/svg"
                  width={104}
                  height={104}
                  viewBox="0 0 24 24"
                >
                  <g
                    className="skills__color__icon__stroke"
                    fill="none"
                    stroke="#40ff00"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  >
                    <path d="m20 4l-2 14.5l-6 2l-6-2L4 4z"></path>
                    <path d="M7.5 8h3v8l-2-1m8-7H14a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.423a.5.5 0 0 1 .495.57L15.5 15.5l-2 .5"></path>
                  </g>
                </svg>
              </li>
              <p className="skills__name">Javascript</p>
            </ul>
          </div>
          <div className="skills__box">
            <ul className="skills__items">
              <li className="skills__img">
                <svg
                  className="skills__all__imgs"
                  xmlns="http://www.w3.org/2000/svg"
                  width={104}
                  height={104}
                  viewBox="0 0 24 24"
                >
                  <path
                    className="skills__color__icon__fill"
                    fill="#40ff00"
                    d="M14.448 16.24a22 22 0 0 1-1.747 2.175c1.673 1.623 3.228 2.383 4.091 1.884c.863-.498.982-2.225.413-4.484c-.853.19-1.779.334-2.757.424m-1.31.087a28 28 0 0 1-2.275 0c.376.492.758.948 1.137 1.363q.571-.623 1.138-1.364m5.04-7.894c2.665.764 4.406 2.034 4.406 3.567s-1.74 2.803-4.405 3.567c.67 2.69.44 4.832-.887 5.598c-1.327.767-3.297-.105-5.292-2.031c-1.994 1.925-3.964 2.798-5.291 2.031s-1.557-2.908-.887-5.598C3.157 14.803 1.417 13.533 1.417 12s1.74-2.803 4.405-3.567c-.67-2.69-.44-4.832.887-5.599c1.327-.766 3.297.106 5.291 2.032c1.995-1.926 3.965-2.798 5.292-2.032c1.327.767 1.557 2.909.887 5.599m-.973-.248c.57-2.26.45-3.986-.413-4.485c-.863-.498-2.418.262-4.09 1.885a22 22 0 0 1 1.746 2.175c.978.09 1.904.234 2.757.425m-10.41 7.63c-.569 2.26-.45 3.986.414 4.484c.863.498 2.418-.261 4.09-1.884a22 22 0 0 1-1.746-2.176a22 22 0 0 1-2.757-.425m4.068-8.142a28 28 0 0 1 2.275 0A21 21 0 0 0 12 6.31q-.57.625-1.137 1.364m-1.31.087a22 22 0 0 1 1.746-2.175C9.627 3.962 8.072 3.202 7.21 3.7c-.863.499-.983 2.226-.413 4.485c.853-.19 1.779-.334 2.757-.425m4.34 7.52A25.4 25.4 0 0 0 15.788 12a25.4 25.4 0 0 0-1.893-3.28a25.4 25.4 0 0 0-3.787 0A25.4 25.4 0 0 0 8.213 12a25.4 25.4 0 0 0 1.894 3.28a25.4 25.4 0 0 0 3.787 0m1.285-.132q.924-.12 1.75-.303a21 21 0 0 0-.612-1.667a28 28 0 0 1-1.137 1.97M8.823 8.851q-.924.121-1.75.304q.255.806.613 1.667a28 28 0 0 1 1.137-1.97m-1.75 5.994q.826.182 1.75.303a28 28 0 0 1-1.137-1.97a21 21 0 0 0-.613 1.667m-.978-.245c.262-.834.6-1.708 1.01-2.6a22 22 0 0 1-1.01-2.6c-2.241.636-3.677 1.604-3.677 2.6s1.436 1.963 3.677 2.6M16.93 9.155q-.827-.183-1.75-.304a28 28 0 0 1 1.137 1.97q.357-.86.613-1.666m.977.245c-.26.834-.6 1.708-1.01 2.6c.41.892.75 1.766 1.01 2.6c2.242-.637 3.678-1.604 3.678-2.6s-1.436-1.963-3.678-2.6M12 13.879a1.88 1.88 0 1 1 0-3.758a1.88 1.88 0 0 1 0 3.758"
                  ></path>
                </svg>
              </li>
              <p className="skills__name">React</p>
            </ul>
          </div>
          <div className="skills__box">
            <ul className="skills__items">
              <li className="skills__img">
                <svg
                  className="skills__all__imgs"
                  xmlns="http://www.w3.org/2000/svg"
                  width={104}
                  height={104}
                  viewBox="0 0 24 24"
                >
                  <path
                    className="skills__color__icon__fill"
                    fill="#40ff00"
                    d="M7.502 0h2.578v1.078h-1.5v1.078h1.5v1.078H7.502zm3.093 0h2.579v.938h-1.5v.187h1.5v2.156h-2.579v-.984h1.5v-.188h-1.5zm3.095 0h2.577v.938h-1.5v.187h1.5v2.156H13.69v-.984h1.5v-.188h-1.5z"
                  ></path>
                  <path
                    className="skills__color__icon__fill"
                    fill="#40ff00"
                    fillRule="evenodd"
                    d="m11.991 24l-6.944-1.928L3 4.717h18L18.954 22.07zM7.047 12.573l.191 2.128h7.377l-.247 2.76l-2.374.642h-.002l-2.37-.64l-.152-1.697H7.333l.298 3.342l4.36 1.21l4.367-1.21l.532-5.964l.052-.571l.384-4.309H6.664l.194 2.129h8.136l-.194 2.18z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </li>
              <p className="skills__name">CSS</p>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
