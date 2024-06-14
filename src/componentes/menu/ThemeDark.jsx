const ThemeDark =()=>{
    document.querySelector("#themes").innerHTML = "Theme Light";
    document.querySelector(".menu__header").style = "color: grey;";
    document.querySelector("a").style = "color: green;";
    document.querySelector(".menu").style= "background-color: #212121;"
    document.querySelector(".title__bio").style = "background-color: #212121;"
    document.querySelector("body").style =
    "background: 0% 0% / 100px 100px repeat repeating-linear-gradient(to bottom left, #4e6ab1ff 0% 10%, #91a3cfff 10% 20%, #adbadbff 20% 30%, #d8deeeff 30% 40%, #f4f6faff 40% 50%), 0% 0% / 100px 100px repeat repeating-linear-gradient(to bottom right, #4e6ab1ff 0% 10%, #91a3cfff 10% 20%, #adbadbff 20% 30%, #d8deeeff 30% 40%, #f4f6faff 40% 50%), 50% 50% / 100% 100% repeat radial-gradient(farthest-corner at 50% 50%, #4dcd23ff 0%, #000000ff 100%);";

};

export default ThemeDark;
