const searchBox = document.querySelector('.search input');
const searchbtn = document.getElementsByClassName('.btn');
const weatherIcon = document.querySelector('.weather-icon');
const apiKey = "1d91a93a1a248212e68254b6849830dd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=Metric&q=";
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
    }
    else{
        var data = await response.json();
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.floor(data.main.temp) + "°c";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + " KM/H";
        if(data.weather[0].main === "Clouds"){
            weatherIcon.src = "./Assets/clouds.png";
        }
        else if(data.weather[0].main === "Clear"){
            weatherIcon.src = "./Assets/clear.png";
        }
        else if(data.weather[0].main === "Rain"){
            weatherIcon.src = "./Assets/rain.png";
        }
        else if(data.weather[0].main === "Drizzle"){
            weatherIcon.src = "./Assets/drizzle.png";
        }
        else if(data.weather[0].main === "Mist"){
            weatherIcon.src = "./Assets/snow.png";
        }
        document.querySelector('.error').style.display = "none";
        document.querySelector('.weather').style.display = "block";
    }
}
searchbtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})