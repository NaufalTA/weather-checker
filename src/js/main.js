import { displayWeatherUI } from './component/weatherUI.js';
import { displayErrorUI } from './component/errorUI.js';
import { changeBackgroundUI } from './component/backgroundColor.js';
import { API_KEY } from './config.js';

async function getWeatherData(cityName) {
    const API = 'https://api.weatherapi.com/v1/forecast.json?';
    const params = new URLSearchParams({
        key: API_KEY,
        q: cityName
    });

    try {
        const response = await fetch(API + params);
        if (!response.ok) {
            throw new Error(response.status);
        }
        const result = await response.json();
        displayWeatherUI(result);
        changeBackgroundUI(result);
    } catch (error) {
        displayErrorUI(error.message);
    }
}

document.getElementById("formLocation").addEventListener('submit', (e) => {
    const city = document.getElementById('inputLocation').value;

    getWeatherData(city);
    e.preventDefault();
})