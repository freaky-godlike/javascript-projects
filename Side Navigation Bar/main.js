let Navbar = document.querySelector('.nav-bar');
document.addEventListener("click", (e) => {
    e.preventDefault();
    if(e.target.closest(".open") && !Navbar.classList.contains("open")){
        Navbar.classList.add("open");
    }
    else{
        Navbar.classList.remove("open");
    }
});