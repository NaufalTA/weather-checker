function getIconWeather(weather, dateTime) {
    const hours = parseInt(dateTime.split(' ')[1].split(':')[0]);

    const cerah = [1000];
    const matahariBerawan = [1003];
    const berawan = [1006, 1009];
    const hujan = [1063, 1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1240, 1243, 1246];
    const hujanPetir = [1087, 1273, 1276];
    const salju = [1066, 1114, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258, 1069, 1204, 1207, 1237, 1249, 1252, 1261, 1264];
    const hujanSaljuBadai = [1117, 1279, 1282];

    if (cerah.includes(weather) && hours > 5 && hours < 19) {
        return 'src/img/mingcute_sun-line.svg'
    } else if (cerah.includes(weather)) {
        return 'src/img/solar_moon-line-duotone.svg'
    } else if (matahariBerawan.includes(weather) && hours > 5 && hours < 19) {
        return 'src/img/lineicons_cloud-sun.svg'
    } else if (matahariBerawan.includes(weather)) {
        return 'src/img/fluent-mdl2_partly-cloudy-night.svg'
    } else if (berawan.includes(weather)) {
        return 'src/img/fluent_weather-cloudy-48-regular.svg'
    } else if (hujan.includes(weather)) {
        return 'src/img/material-symbols_rainy-outline.svg'
    } else if (hujanPetir.includes(weather)) {
        return 'src/img/carbon_thunderstorm-strong.svg'
    } else if (salju.includes(weather)) {
        return 'src/img/fluent_weather-snow-48-regular.svg'
    } else if (hujanSaljuBadai.includes(weather)) {
        return 'src/img/wi_night-snow-thunderstorm.svg'
    }
}

function displayWeatherUI(data) {
    const codeWeather = data.current.condition.code;
    const dateTime = data.location.localtime;

    const iconWeather = getIconWeather(codeWeather, dateTime);

    document.getElementById("mainDisplay").innerHTML = `
            <p class="font-inria text-lg max-md:text-base" id="datetimeDisplay">${data.location.country}</p>
            <h1 class="font-instrument text-7xl max-md:text-4xl" id="cityDisplay">${data.location.name}</h1>
            <p class="font-inria text-lg font-light max-md:text-base" id="datetimeDisplay">${data.location.localtime}</p>
            
            <div class="flex flex-col items-center mt-2">
                <img src="${iconWeather}" alt="weather icon" id="weatherIconDisplay" class="w-50 max-md:w-45">
                <h1 class="font-inria text-8xl max-md:text-6xl" id="temperatureDisplay">${data.current.temp_c}&deg;C</h1>
                <p class="font-inria text-2xl max-md:text-lg" id="weatherNameDisplay">${data.current.condition.text}</p>
            </div>

            <div class="flex gap-12 mt-12 max-md:gap-8 max-md:mt-10">
                <div class="flex gap-1 items-center">
                    <img src="/src/img/material-symbols-light_water.svg" alt="water icon" class="h-20 max-md:h-15">
                    <div class="flex-col">
                        <h1 class="font-inria text-4xl max-md:text-2xl" id="humidityDisplay">${data.current.humidity}%</h1>
                        <p class="font-instrument">Humidity</p>
                    </div>
                </div>
                <div class="flex gap-2 items-center">
                    <img src="/src/img/solar_wind-linear.svg" alt="wind icon" class="h-15 max-md:h-10">
                    <div class="flex-col">
                        <h1 class="font-inria text-4xl max-md:text-2xl" id="windSpeedDisplay">${data.current.wind_kph}km/h</h1>
                        <p class="font-instrument">Wind Speed</p>
                    </div>
                </div>
            </div>
    `
}

export {
    displayWeatherUI
};