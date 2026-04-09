document.addEventListener('DOMContentLoaded', ()=> {
    const cityInput = document.getElementById('city-input');
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityName = document.getElementById("city-name");
    const temprature = document.getElementById("temerature");
    const descriptions = document.getElementById("description");
    const errorMsg = document.getElementById("error-message");

    const API_KEY = "8853b2dc70d00dd6133941fe0d1468e7"; 


    function fetchweatherData(city)
    {
        
    }


    function displayWeatherData(weatherData)
    {

    }

    function showError()
    {
        weatherInfo.classList.add("hidden");
        errorMsg.classList.remove("hidden");
    }

    function getWeather(){
     const  city = cityInput.value.trim();
     if(!city)return; 
     
    } 

    getWeatherBtn.addEventListener("click", getWeather);
});