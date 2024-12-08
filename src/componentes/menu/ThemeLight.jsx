const ThemeLight = () => {
  document.querySelector("#themes").innerHTML = "Theme Dark";
  document.querySelectorAll("a").forEach(function (e) {
    e.classList.remove("green_anchor");
    e.classList.add("grey_anchor", "green_hover");
  });
  document.querySelector(".menu").style =
    "background-color: #e5e5f7; background-image:  linear-gradient(30deg, #d2d4fc 12%, transparent 12.5%, transparent 87%, #d2d4fc 87.5%, #d2d4fc), linear-gradient(150deg, #d2d4fc 12%, transparent 12.5%, transparent 87%, #d2d4fc 87.5%, #d2d4fc), linear-gradient(30deg, #d2d4fc 12%, transparent 12.5%, transparent 87%, #d2d4fc 87.5%, #d2d4fc), linear-gradient(150deg, #d2d4fc 12%, transparent 12.5%, transparent 87%, #d2d4fc 87.5%, #d2d4fc), linear-gradient(60deg, #d2d4fc77 25%, transparent 25.5%, transparent 75%, #d2d4fc77 75%, #d2d4fc77), linear-gradient(60deg, #d2d4fc77 25%, transparent 25.5%, transparent 75%, #d2d4fc77 75%, #d2d4fc77);";
  document.querySelector(".title__biography").style =
    "background-color: #e5e5f7; background-image:  linear-gradient(30deg, #d2d4fc 12%, transparent 12.5%, transparent 87%, #d2d4fc 87.5%, #d2d4fc), linear-gradient(150deg, #d2d4fc 12%, transparent 12.5%, transparent 87%, #d2d4fc 87.5%, #d2d4fc), linear-gradient(30deg, #d2d4fc 12%, transparent 12.5%, transparent 87%, #d2d4fc 87.5%, #d2d4fc), linear-gradient(150deg, #d2d4fc 12%, transparent 12.5%, transparent 87%, #d2d4fc 87.5%, #d2d4fc), linear-gradient(60deg, #d2d4fc77 25%, transparent 25.5%, transparent 75%, #d2d4fc77 75%, #d2d4fc77), linear-gradient(60deg, #d2d4fc77 25%, transparent 25.5%, transparent 75%, #d2d4fc77 75%, #d2d4fc77);";
  document.querySelector("body").style =
    "background: 0% 0% / 100px 100px repeat repeating-linear-gradient(to bottom left, #dfe4f1ff 0% 10%, #e7eaf4ff 10% 20%, #e9edf6ff 20% 30%, #eef0f7ff 30% 40%, #f4f6faff 40% 50%), 0% 0% / 100px 100px repeat repeating-linear-gradient(to bottom right, #dfe4f1ff 0% 10%, #e6e9f4ff 10% 20%, #e9edf6ff 20% 30%, #f2f2f2ff 30% 40%, #f4f6faff 40% 50%);background-blend-mode: multiply;";
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
};

export default ThemeLight;
