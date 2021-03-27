let title = document.getElementsByClassName('content--title');


window.addEventListener('scroll', function() {
    const nav = document.getElementById('nav');
    let positionPage = window.pageYOffset;
    if(positionPage !== 0)
    {
        nav.className = "nav nav--scroll";
    }else {
        nav.className = "nav nav--static";
    }
});

changeTitle("#6a00f4");

function changeDark(mode) {
    const dark = document.getElementById("dark");
    const light = document.getElementById("light");
    
    if(mode === 0){
        dark.className = "nav--item dark-mode__disabled";
        light.className = "nav--item";
        document.body.style.backgroundColor = "#424242";
        changeTitle("#fff");
    }else if(mode === 1 ){
        light.className = "nav--item dark-mode__disabled";
        dark.className = "nav--item";
        document.body.style.backgroundColor = "#fff";
        changeTitle("#6a00f4");
    }
}

function changeTitle(color){
    for(i = 0; title.length ; i++) {
        title[i].style.color = color;
    }
}