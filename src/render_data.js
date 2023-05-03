const condition_text = document.querySelector(".condition-text");
const location = document.querySelector(".location");
const condition_icon = document.querySelector(".condition-icon>img");
const feels_like = document.querySelector(".feels-like");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");

function render_weather(weather_data) {
  console.log(weather_data);
  condition_text.textContent = weather_data.condition_text;
  location.textContent = `${weather_data.city}, ${weather_data.country}`;
  condition_icon.src = weather_data.condition_icon;
  feels_like.textContent = weather_data.feels_like_c;
  wind.textContent = weather_data.wind_kph;
  humidity.textContent = weather_data.humidity;
}

export default render_weather;
