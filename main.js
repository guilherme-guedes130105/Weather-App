
    
const apiKey = "fe4ea06e9708006791e5a310e0a6034f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const wheaterIcon = document.querySelector(".wheater-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }else{
        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

    if(data.weather[0].main == "Clouds"){
        wheaterIcon.src = "img/clouds.png"
    } else if(data.weather[0].main == "Clear"){
        wheaterIcon.src = "img/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        wheaterIcon.src = "img/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        wheaterIcon.src = "img/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        wheaterIcon.src = "img/mist.png"
    }

    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none"
    }

    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
});