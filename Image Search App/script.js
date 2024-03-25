const api = "-z84MOOFWlZE7-mL0HUjdJ_GCkyQm77asREbXF67WGw";
const form = document.querySelector('form');
const input = document.getElementById('search-input');
const search = document.querySelector('.search-results');
const show = document.getElementById('show-btn');
let inputData = "";
let page = 1;
async function searchImages(){
    inputData = input.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${api}`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    if(page === 1){
        results.innerHTML = "";
    }
    results.map((result) => {
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add("search-result");
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;
        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        search.appendChild(imageWrapper);
    });
    page++;
    if(page > 1){
        show.style.display = "block";
    }
}
form.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
})
show.addEventListener("click", (event) => {
    searchImages();
})