const nav = document.getElementById('nav');

window.addEventListener('scroll', function(e) {
    let positionPage = window.pageYOffset;
    if(positionPage !== 0)
    {
        nav.className = "nav nav--scroll";
    }else {
        nav.className = "nav nav--static";
    }
});

let dark = document.getElementById("dark");
let light = document.getElementById("light");



function changeDark(mode) {
    if(mode === 0){
        dark.className = "nav--item dark-mode__disabled";
        light.className = "nav--item";
        document.body.style.backgroundColor = "#303030";
    }else if(mode === 1 ){
        light.className = "nav--item dark-mode__disabled";
        dark.className = "nav--item";
        document.body.style.backgroundColor = "#fff";
    }
}
