const displayCurrentWeatherData = (data) => {
    const location = document.querySelector(".location");
    const localDayDate = document.querySelector(".local-day-date");
    const localTime = document.querySelector(".local-time")
    const icon = document.querySelector(".current>.condition>.icon");
    const text = document.querySelector(".current>.condition>.text");
    const temperature = document.querySelector(".current>.condition>.temperature");
    const feelsLike = document.querySelector(".feels-like-temp>.data");
    const humidity = document.querySelector(".humidity>.data");
    const windSpeed = document.querySelector(".wind-speed>.data");

    location.textContent = `${data.name}, ${data.country}`;
    localDayDate.textContent = `${data.localTime.day}, ${data.localTime.date}`;
    if (parseInt(data.localTime.time.slice(0, 2), 10) === 12) {
        localTime.textContent = `${data.localTime.time} pm`
    } else if (parseInt(data.localTime.time.slice(0, 2), 10) === 0) {
        localTime.textContent = `12${data.localTime.time.slice(2)} am`
    } else {
        localTime.textContent = parseInt(data.localTime.time.slice(0, 2), 10) > 12 ? `${parseInt(data.localTime.time.slice(0, 2), 10) - 12}${data.localTime.time.slice(2)} pm` : `${data.localTime.time} am`;
    }
    icon.src = data.icon;
    text.textContent = data.condition.text;
    temperature.textContent = `${data.temp_c} °C`;
    feelsLike.textContent = `${data.feelsLike_c} °C`;
    humidity.textContent = `${data.humidity} %`;
    windSpeed.textContent = `${data.windSpeed} kmph`;
}

const displayForecastWeatherData = (data) => {
    const plusOneDay = document.querySelector(".plus-one>.day");
    const plusOneIcon = document.querySelector(".plus-one>.icon");
    const plusOneText = document.querySelector(".plus-one>.text");
    const plusOneTemp = document.querySelector(".plus-one>.temperature");
    const plusTwoDay = document.querySelector(".plus-two>.day")
    const plusTwoIcon = document.querySelector(".plus-two>.icon");
    const plusTwoText = document.querySelector(".plus-two>.text");
    const plusTwoTemp = document.querySelector(".plus-two>.temperature");
    const plusThreeDay = document.querySelector(".plus-three>.day")
    const plusThreeIcon = document.querySelector(".plus-three>.icon");
    const plusThreeText = document.querySelector(".plus-three>.text");
    const plusThreeTemp = document.querySelector(".plus-three>.temperature");

    plusOneDay.textContent = data.day1.day;
    plusOneIcon.src = data.day1.icon;
    plusOneText.textContent = data.day1.condition.text;
    plusOneTemp.textContent = `${data.day1.avgTemp_c}°C`;

    plusTwoDay.textContent = data.day2.day;
    plusTwoIcon.src = data.day2.icon;
    plusTwoText.textContent = data.day2.condition.text;
    plusTwoTemp.textContent = `${data.day2.avgTemp_c}°C`;

    plusThreeDay.textContent = data.day3.day;
    plusThreeIcon.src = data.day3.icon;
    plusThreeText.textContent = data.day3.condition.text;
    plusThreeTemp.textContent = `${data.day3.avgTemp_c}°C`;

}

export {
    displayCurrentWeatherData,
    displayForecastWeatherData
}