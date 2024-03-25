let scrollContainer = document.querySelector('.gallery');
let backbtn = document.getElementById('backbtn');
let nextbtn = document.getElementById('nextbtn');
scrollContainer.addEventListener("wheel", (e) => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});
nextbtn.addEventListener("click", () => {
    scrollContainer.scrollLeft += 900;
    scrollContainer.style.scrollBehavior = "smooth";
})
backbtn.addEventListener("click", () => {
    scrollContainer.scrollLeft += -900;
    scrollContainer.style.scrollBehavior = "smooth";
})