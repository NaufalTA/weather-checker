import { displayWeatherUI } from './component/weatherUI.js';
import { displayErrorUI } from './component/errorUI.js';

async function getWeatherData(cityName) {
    const API = 'https://api.weatherapi.com/v1/forecast.json?';
    const params = new URLSearchParams({
        key: "e24fb6437d124a699f784239252909",  
        q: cityName
    });


    try {
        const response = await fetch(API + params);
        if(!response.ok){
            throw new Error(response.status);
        }
        const result = await response.json();
        displayWeatherUI(result);
    } catch (error) {
        displayErrorUI(error.message);
    }
}

document.getElementById("formLocation").addEventListener('submit', (e) => {
    const city = document.getElementById('inputLocation').value;

    getWeatherData(city);
    e.preventDefault();
})