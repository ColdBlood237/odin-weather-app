const condition_text = document.querySelector(".condition-text");
const location = document.querySelector(".location");
const condition_icon = document.querySelector(".condition-icon>img");
const temp = document.querySelector(".temp");
const feels_like = document.querySelector(".feels-like");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");

function render_weather(weather_data) {
  if (Object.keys(weather_data).length !== 0) {
    condition_text.innerHTML = `${weather_data.condition_text}`;
    location.innerHTML = `${weather_data.city}, ${weather_data.country}`;
    condition_icon.src = weather_data.condition_icon;
    temp.innerHTML = `${weather_data.temp_c}<sup>°C</sup>`;
    feels_like.innerHTML = `FEELS LIKE: ${weather_data.feels_like_c}<sup>°C</sup>`;
    wind.innerHTML = `WIND: ${weather_data.wind_kph} KPH`;
    humidity.innerHTML = `HUMIDITY: ${weather_data.humidity}%`;
  }
}

export default render_weather;
