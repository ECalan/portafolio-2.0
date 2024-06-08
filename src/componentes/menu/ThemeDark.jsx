const ThemeDark =()=>{
    document.querySelector("#themes").innerHTML = "Theme Dark";
    
    document.querySelector("body").style =
"background: 0% 0% / 100px 100px repeat repeating-linear-gradient(to bottom left, #adbadcff 0% 10%, #c3d2f8ff 10% 20%, #dbe1f0ff 20% 30%, #f1f3f8ff 30% 40%, #ffffffff 40% 50%), 0% 0% / 100px 100px repeat repeating-linear-gradient(to bottom right, #adbadcff 0% 10%, #c3d2f8ff 10% 20%, #dbe1f0ff 20% 30%, #f1f3f8ff 30% 40%, #ffffffff 40% 50%), 50% 50% / 100% 100% repeat radial-gradient(circle farthest-corner at 50% 50%, #ffffffff 100%, #000000ff 100%);";
};

export default ThemeDark;