import { getCurrentWeather, getForecastWeather } from "./weather-api-calls";
import { processCurrentWeatherData, processForecastWeatherData } from "./process-data";
import { displayCurrentWeatherData, displayForecastWeatherData } from "./display-data";

getCurrentWeather("london")
    .then((data) => {
        console.log(data);
        const requiredCurrentData = processCurrentWeatherData(data);
        console.log(requiredCurrentData);
        displayCurrentWeatherData(requiredCurrentData);
    });

getForecastWeather("london")
    .then((data) => {
        console.log(data);
        const requiredForecastData = processForecastWeatherData(data);
        console.log(requiredForecastData);
        displayForecastWeatherData(requiredForecastData);
    })

