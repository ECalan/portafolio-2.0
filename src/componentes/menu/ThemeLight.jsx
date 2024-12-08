const ThemeLight = () => {
  document.querySelector("#themes").innerHTML = "Theme Dark";
  document.querySelector(".menu__button__themes").style =
    "background-color: var(--blue-light-color);";
  document.querySelector(".title__profile").style =
    "border: 0.5rem solid var(--blue-light-color);";
  document.querySelectorAll("a").forEach(function (e) {
    e.classList.remove("green_anchor");
    e.classList.add("grey_anchor", "green_hover");
  });
  document.querySelector(".menu").style =
    "background-color: #e5e5f7; background-image:  linear-gradient(30deg, #d2d4fc 12%, transparent 12.5%, transparent 87%, #d2d4fc 87.5%, #d2d4fc), linear-gradient(150deg, #d2d4fc 12%, transparent 12.5%, transparent 87%, #d2d4fc 87.5%, #d2d4fc), linear-gradient(30deg, #d2d4fc 12%, transparent 12.5%, transparent 87%, #d2d4fc 87.5%, #d2d4fc), linear-gradient(150deg, #d2d4fc 12%, transparent 12.5%, transparent 87%, #d2d4fc 87.5%, #d2d4fc), linear-gradient(60deg, #d2d4fc77 25%, transparent 25.5%, transparent 75%, #d2d4fc77 75%, #d2d4fc77), linear-gradient(60deg, #d2d4fc77 25%, transparent 25.5%, transparent 75%, #d2d4fc77 75%, #d2d4fc77);";
  document.querySelector(".title__biography").style =
    "background-color: #e5e5f7; background-image:  linear-gradient(30deg, #d2d4fc 12%, transparent 12.5%, transparent 87%, #d2d4fc 87.5%, #d2d4fc), linear-gradient(150deg, #d2d4fc 12%, transparent 12.5%, transparent 87%, #d2d4fc 87.5%, #d2d4fc), linear-gradient(30deg, #d2d4fc 12%, transparent 12.5%, transparent 87%, #d2d4fc 87.5%, #d2d4fc), linear-gradient(150deg, #d2d4fc 12%, transparent 12.5%, transparent 87%, #d2d4fc 87.5%, #d2d4fc), linear-gradient(60deg, #d2d4fc77 25%, transparent 25.5%, transparent 75%, #d2d4fc77 75%, #d2d4fc77), linear-gradient(60deg, #d2d4fc77 25%, transparent 25.5%, transparent 75%, #d2d4fc77 75%, #d2d4fc77);";
  document.querySelector("body").style =
    "background: 0% 0% / 100px 100px repeat repeating-linear-gradient(to bottom left, #edf0f7ff 0% 10%, #f0f2faff 10% 20%, #f0f6ffff 20% 30%, #f8f8fcff 30% 40%, #fcfcfcff 40% 50%), 0% 0% / 100px 100px repeat repeating-linear-gradient(to bottom right, #edf0f7ff 0% 10%, #f0f2faff 10% 20%, #f0f6ffff 20% 30%, #f8f8fcff 30% 40%, #fcfcfcff 40% 50%);background-blend-mode: multiply;";
  document
    .querySelectorAll(
      ".title__div, .about__container, .about__container__soft__skills, .skills__container, .hobbies__container, .academy__container, .experiencie__box, .formcontact__contact"
    )
    .forEach((e) => {
      e.style = "background-color: rgba(0, 0, 0, 0.1);";
    });
  document.querySelectorAll("h2, h3, h4").forEach((e) => {
    e.classList.remove("title_white_color");
    e.classList.add("title_dark_grey_color");
  });
  document.querySelectorAll("p").forEach((e) => {
    e.classList.remove("paragraph_semi_white_color");
    e.classList.add("paragraph_semi_dark_grey_color");
  });
  document
    .querySelectorAll(".skills__all__imgs, .hobbies__all__svg")
    .forEach((e) => {
      e.style.filter = "drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))";
    });
  document.querySelectorAll(".skills__color__icon__fill").forEach((e) => {
    e.classList.remove("icon_light_green_color_fill");
    e.classList.add("icon_light_blue_color_fill");
  });
  document.querySelectorAll(".skills__color__icon__stroke").forEach((e) => {
    e.classList.remove("icon_light_green_color_stroke");
    e.classList.add("icon_light_blue_color_stroke");
  });
  document.querySelectorAll(".experience__img").forEach((e) => {
    e.style.border = "2px solid var(--blue-light-color)";
  });
  document
    .querySelectorAll(
      ".experience__boton--repo, .experience__boton--demo, .formcontact__boton"
    )
    .forEach((e) => {
      e.style.borderColor = "var(--blue-light-color)";
    });
  document
    .querySelectorAll(
      ".experience__boton--repo, .formcontact__boton, .textarea__mensaje__caracteres"
    )
    .forEach((e) => {
      e.style.color = "var(--blue-light-color)";
    });
  document.querySelectorAll(".experience__boton--demo").forEach((e) => {
    e.style.backgroundColor = "var(--blue-light-color)";
  });
  document.querySelectorAll(".formcontact__input").forEach((e) => {
    e.style.borderBottom = "1px solid var(--grey-color)";
  });
  document.querySelectorAll(".email__input").forEach((e) => {
    e.style.borderBottomColor = "var(--blue-light-color)";
  });
  document.querySelectorAll(".formcontact__textarea").forEach((e) => {
    e.style.borderColor = "var(--blue-light-color)";
  });
};

export default ThemeLight;
