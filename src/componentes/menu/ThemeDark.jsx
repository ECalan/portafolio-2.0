const ThemeDark =()=>{
    document.querySelector("#themes").innerHTML = "Theme Light";
    document.querySelector(".menu__header").style = "color: grey;";
    document.querySelectorAll("a").forEach(function(e){
        e.classList.remove("black", "green-hover");
        e.classList.add("green");
    });
    document.querySelector(".menu").style= "background-color: #212121;"
    document.querySelector(".title__bio").style = "background-color: #212121;"
    document.querySelector("body").style =
    "background: 0% 0% / 100px 100px repeat repeating-linear-gradient(to bottom left, #4e6ab1ff 0% 10%, #91a3cfff 10% 20%, #adbadbff 20% 30%, #d8deeeff 30% 40%, #f4f6faff 40% 50%), 0% 0% / 100px 100px repeat repeating-linear-gradient(to bottom right, #4e6ab1ff 0% 10%, #91a3cfff 10% 20%, #adbadbff 20% 30%, #d8deeeff 30% 40%, #f4f6faff 40% 50%), 50% 50% / 100% 100% repeat radial-gradient(farthest-corner at 50% 50%, #4dcd23ff 0%, #000000ff 100%);";
    document.querySelector(".title__div").style ="background-color: rgba(255, 255, 255, 0.1);";
};

export default ThemeDark;
