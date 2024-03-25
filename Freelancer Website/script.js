let navbar = document.querySelector('nav');
let menuLinks = document.getElementById('menu-links');
let clicks = 1;
function toogleMenu(){
    if(clicks > 0){
        menuLinks.classList.add('show-menu');
        clicks = 0;
    }else{
        menuLinks.classList.remove('show-menu');
        clicks = 1;
    }
}
window.onscroll = function(){
    if(window.scrollY > 0){
        navbar.style.background = "#eefff9";
    }else{
        navbar.style.background = "rgba(0, 0, 0, 0)";
    }
}