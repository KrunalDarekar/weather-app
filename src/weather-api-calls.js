const getCurrentWeather = async (location) => {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=503d861821ea4a11b6e163936230307&q=${location}`, { mode: "cors" });
    const currentWeatherData = await response.json();

    return currentWeatherData;
}

const getForecastWeather = async (location) => {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=503d861821ea4a11b6e163936230307&q=${location}&days=3`, { mode: "cors" });
    const forecastWeatherData = await response.json();

    return forecastWeatherData;
}


export {
    getCurrentWeather,
    getForecastWeather,
}