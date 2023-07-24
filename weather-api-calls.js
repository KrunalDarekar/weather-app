const getCurrentWeather = async (location) => {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=503d861821ea4a11b6e163936230307&q=${location}`, { mode: "cors" });
    const currentWeatherData = await response.json();

    return currentWeatherData;
}

export {
    getCurrentWeather,
}