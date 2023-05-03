import "./styles.css";
import render_weather from "./render_data";
import weather_data from "./weather_data";

const city_input = document.getElementById("city-input");
const city_form = document.getElementById("city-form");
const temp = document.querySelector(".temp");

let city_weather;
let current_unit = "celsius";

window.onload = async () => {
  city_weather = weather_data();
  await city_weather.fetch_weather_data("Turin");
  console.log(JSON.stringify(city_weather.data));
  render_weather(city_weather.data, current_unit);
};

city_form.onsubmit = async (e) => {
  e.preventDefault();
  city_weather = weather_data();
  await city_weather.fetch_weather_data(city_input.value);
  render_weather(city_weather.data, current_unit);
  city_form.reset();
};

temp.onclick = () => {
  if (current_unit === "celsius") {
    current_unit = "fahrenheit";
    render_weather(city_weather.data, current_unit);
  } else if (current_unit === "fahrenheit") {
    current_unit = "celsius";
    render_weather(city_weather.data, current_unit);
  }
};

function switch_unit() {}
