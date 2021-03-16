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