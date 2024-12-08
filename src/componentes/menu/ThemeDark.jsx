const ThemeDark = () => {
  document.querySelector("#themes").innerHTML = "Theme Light";
  document.querySelector(".menu__button__themes").style =
    "background-color: var(--green-light-color);";
  document.querySelector(".title__profile").style =
    "border: 0.5rem solid var(--green-light-color);";
  document.querySelectorAll("a").forEach(function (e) {
    e.classList.remove("grey_anchor", "green_hover");
    e.classList.add("green_anchor");
  });
  document.querySelector(".menu").style = "background-color: #212121;";
  document.querySelector(".title__biography").style =
    "background-color: #212121;";
  document.querySelector("body").style =
    "background: 0% 0% / 100px 100px repeat repeating-linear-gradient(to bottom left, #4e6ab1ff 0% 10%, #91a3cfff 10% 20%, #adbadbff 20% 30%, #d8deeeff 30% 40%, #f4f6faff 40% 50%), 0% 0% / 100px 100px repeat repeating-linear-gradient(to bottom right, #4e6ab1ff 0% 10%, #91a3cfff 10% 20%, #adbadbff 20% 30%, #d8deeeff 30% 40%, #f4f6faff 40% 50%), 50% 50% / 100% 100% repeat radial-gradient(farthest-corner at 50% 50%, #4dcd23ff 0%, #000000ff 100%);";
  document
    .querySelectorAll(
      ".title__div, .about__container, .about__container__soft__skills, .skills__container, .hobbies__container, .academy__container, .experiencie__box, .formcontact__contact"
    )
    .forEach((e) => {
      e.style = "background-color: rgba(255, 255, 255, 0.1);";
    });
  document.querySelectorAll("h2, h3, h4").forEach((e) => {
    e.classList.remove("title_dark_grey_color");
    e.classList.add("title_white_color");
  });
  document.querySelectorAll("p").forEach((e) => {
    e.classList.remove("paragraph_semi_dark_grey_color");
    e.classList.add("paragraph_semi_white_color");
  });
  document
    .querySelectorAll(".skills__all__imgs, .hobbies__all__svg")
    .forEach((e) => {
      e.style.filter = "";
    });
  document.querySelectorAll(".skills__color__icon__fill").forEach((e) => {
    e.classList.remove("icon_light_blue_color_fill");
    e.classList.add("icon_light_green_color_fill");
  });
  document.querySelectorAll(".skills__color__icon__stroke").forEach((e) => {
    e.classList.remove("icon_light_blue_color_stroke");
    e.classList.add("icon_light_green_color_stroke");
  });
  document.querySelectorAll(".experience__img").forEach((e) => {
    e.style.border = "";
  });
  document
    .querySelectorAll(
      ".experience__boton--repo,.experience__boton--demo, .formcontact__boton"
    )
    .forEach((e) => {
      e.style.borderColor = "";
    });
  document
    .querySelectorAll(
      ".experience__boton--repo, .formcontact__boton, .textarea__mensaje__caracteres"
    )
    .forEach((e) => {
      e.style.color = "";
    });
  document.querySelectorAll(".experience__boton--demo").forEach((e) => {
    e.style.backgroundColor = "";
  });
  document.querySelectorAll(".formcontact__input").forEach((e) => {
    e.style.borderBottom = "";
  });
  document.querySelectorAll(".email__input").forEach((e) => {
    e.style.borderBottomColor = "";
  });
  document.querySelectorAll(".formcontact__textarea").forEach((e) => {
    e.style.borderColor = "";
  });
};

export default ThemeDark;
