document.addEventListener('DOMContentLoaded', ()=> {
    const cityInput = document.getElementById('city-input');
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityName = document.getElementById("city-name");
    const temprature = document.getElementById("temerature");
    const descriptions = document.getElementById("description");
    const errorMsg = document.getElementById("error-message");

    const API_KEY = "8853b2dc70d00dd6133941fe0d1468e7"; 


   async function fetchweatherData(city)
    {
        //get the data
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
        const response = await fetch(url);
        console.log(typeof(response));
        console.log("Response",response);
        
        if(!response.ok){
            throw new Error("city not found");
        }
        const data = await response.json();
        return data;
    }


    function displayWeatherData(data)
    {
        console.log(data);
        const {name, main, weather} = data;
        cityName.textContent = name;

        temprature.textContent = `Temperature : ${main.temp}`
        descriptions.textContent = `Description : ${weather[0].description}`

         weatherInfo.classList.remove("hidden");
        errorMsg.classList.add("hidden");
    }

    function showError()
    {
        weatherInfo.classList.remove("hidden");
        errorMsg.classList.add("hidden");
    }

    async function getWeather(){
    const  city = cityInput.value.trim();
    if(!city)return; 
     //server may throw an error
     //server/database is always in another continent

     try
     {
       const weatherData = await fetchweatherData(city);
       displayWeatherData(weatherData);
     }catch(error)
     {

     }


    } 

    getWeatherBtn.addEventListener("click", getWeather);
});