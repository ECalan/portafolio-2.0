const ThemeLight =()=>{
    document.querySelector("#themes").innerHTML = "Theme Dark";
    document.querySelector(".menu__header").style = "color: black;";
    document.querySelectorAll("a").forEach(function(e){
        e.classList.remove("green");
        e.classList.add("black", "green-hover");
    });
    document.querySelector(".menu").style = "background-color: #e5e5f7; background-image:  linear-gradient(30deg, #d2d4fc 12%, transparent 12.5%, transparent 87%, #d2d4fc 87.5%, #d2d4fc), linear-gradient(150deg, #d2d4fc 12%, transparent 12.5%, transparent 87%, #d2d4fc 87.5%, #d2d4fc), linear-gradient(30deg, #d2d4fc 12%, transparent 12.5%, transparent 87%, #d2d4fc 87.5%, #d2d4fc), linear-gradient(150deg, #d2d4fc 12%, transparent 12.5%, transparent 87%, #d2d4fc 87.5%, #d2d4fc), linear-gradient(60deg, #d2d4fc77 25%, transparent 25.5%, transparent 75%, #d2d4fc77 75%, #d2d4fc77), linear-gradient(60deg, #d2d4fc77 25%, transparent 25.5%, transparent 75%, #d2d4fc77 75%, #d2d4fc77);"
    document.querySelector(".title__bio").style = "background-color: #e5e5f7; background-image:  linear-gradient(30deg, #d2d4fc 12%, transparent 12.5%, transparent 87%, #d2d4fc 87.5%, #d2d4fc), linear-gradient(150deg, #d2d4fc 12%, transparent 12.5%, transparent 87%, #d2d4fc 87.5%, #d2d4fc), linear-gradient(30deg, #d2d4fc 12%, transparent 12.5%, transparent 87%, #d2d4fc 87.5%, #d2d4fc), linear-gradient(150deg, #d2d4fc 12%, transparent 12.5%, transparent 87%, #d2d4fc 87.5%, #d2d4fc), linear-gradient(60deg, #d2d4fc77 25%, transparent 25.5%, transparent 75%, #d2d4fc77 75%, #d2d4fc77), linear-gradient(60deg, #d2d4fc77 25%, transparent 25.5%, transparent 75%, #d2d4fc77 75%, #d2d4fc77);"
    document.querySelector("body").style =
    "background: 0% 0% / 100px 100px repeat repeating-linear-gradient(to bottom left, #adbadcff 0% 10%, #c3d2f8ff 10% 20%, #dbe1f0ff 20% 30%, #f1f3f8ff 30% 40%, #ffffffff 40% 50%), 0% 0% / 100px 100px repeat repeating-linear-gradient(to bottom right, #adbadcff 0% 10%, #c3d2f8ff 10% 20%, #dbe1f0ff 20% 30%, #f1f3f8ff 30% 40%, #ffffffff 40% 50%), 50% 50% / 100% 100% repeat radial-gradient(circle farthest-corner at 50% 50%, #ffffffff 100%, #000000ff 100%);";
    document.querySelector(".title__div").style ="background-color: rgba(0, 0, 0, 0.1);";
};

export default ThemeLight;