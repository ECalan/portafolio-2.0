const ThemeDark = () => {
  document.querySelector("#themes").innerHTML = "Theme Light";
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
};

export default ThemeDark;
