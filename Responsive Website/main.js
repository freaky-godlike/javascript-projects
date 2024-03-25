var menu = document.getElementById('menu-list');
menu.style.maxHeight = "0px";
function toogleMenu(){
    if(menu.style.maxHeight == "0px"){
        menu.style.maxHeight = "130px";
    }
    else{
        menu.style.maxHeight = "0px";
    }
}