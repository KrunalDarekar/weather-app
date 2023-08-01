const processLocalTime = (localtime) => {
    const splitArray = localtime.split(" ");
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const ndate = new Date(splitArray[0]).toDateString().slice(4);
    const nDay = days[new Date(splitArray[0]).getDay()];
    const nTime = splitArray[1];

    const processedLocalTime = { day: nDay, date: ndate, time: nTime };

    return processedLocalTime;
}

const processIcon = (icon) => {
    const processedIcon = `../src${icon.slice(34)}`;
    return processedIcon;
}

const processCurrentWeatherData = (data) => {
    const requiredData = {};

    requiredData.name = data.location.name;
    requiredData.country = data.location.country;
    requiredData.localTime = processLocalTime(data.location.localtime);

    requiredData.temp_c = data.current.temp_c;
    requiredData.temp_f = data.current.temp_f;
    requiredData.feelsLike_c = data.current.feelslike_c;
    requiredData.feelsLike_f = data.current.feelslike_f;
    requiredData.humidity = data.current.humidity;
    requiredData.windSpeed = data.current.wind_kph;
    requiredData.condition = data.current.condition;
    requiredData.icon = processIcon(data.current.condition.icon);

    return requiredData;
}

const processForecastWeatherData = (data) => {
    const requiredData = {};

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    requiredData.day1 = {};
    requiredData.day2 = {};
    requiredData.day3 = {};

    requiredData.day1.avgTemp_c = data.forecast.forecastday[0].day.avgtemp_c;
    requiredData.day1.avgTemp_f = data.forecast.forecastday[0].day.avgtemp_f;
    requiredData.day1.day = days[new Date(data.forecast.forecastday[0].date).getDay()];
    requiredData.day1.condition = data.forecast.forecastday[0].day.condition;
    requiredData.day1.icon = processIcon(data.forecast.forecastday[0].day.condition.icon);

    requiredData.day2.avgTemp_c = data.forecast.forecastday[1].day.avgtemp_c;
    requiredData.day2.avgTemp_f = data.forecast.forecastday[1].day.avgtemp_f;
    requiredData.day2.day = days[new Date(data.forecast.forecastday[1].date).getDay()];
    requiredData.day2.condition = data.forecast.forecastday[1].day.condition;
    requiredData.day2.icon = processIcon(data.forecast.forecastday[1].day.condition.icon);

    requiredData.day3.avgTemp_c = data.forecast.forecastday[2].day.avgtemp_c;
    requiredData.day3.avgTemp_f = data.forecast.forecastday[2].day.avgtemp_f;
    requiredData.day3.day = days[new Date(data.forecast.forecastday[2].date).getDay()];
    requiredData.day3.condition = data.forecast.forecastday[2].day.condition;
    requiredData.day3.icon = processIcon(data.forecast.forecastday[2].day.condition.icon);

    return requiredData;
}

export {
    processCurrentWeatherData,
    processForecastWeatherData,
}