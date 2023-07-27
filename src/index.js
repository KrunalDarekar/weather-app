import { getCurrentWeather, getForecastWeather } from "./weather-api-calls";
import { processCurrentWeatherData, processForecastWeatherData } from "./process-data";

const icon = document.querySelector(".icon-element");


getCurrentWeather("london")
    .then((data) => {
        console.log(data);
        const requiredCurrentData = processCurrentWeatherData(data);
        console.log(requiredCurrentData);
        icon.src = requiredCurrentData.icon;
    });

getForecastWeather("london")
    .then((data) => {
        console.log(data);
        const requiredForecastData = processForecastWeatherData(data);
        console.log(requiredForecastData);
    })

