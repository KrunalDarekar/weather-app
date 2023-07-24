import { getCurrentWeather } from "../weather-api-calls";

getCurrentWeather("london")
    .then((data) => {
        console.log(data.current.temp_c);
    });