import "./styles.css";
import render_weather from "./render_data";
import weather_data from "./weather_data";

const city_input = document.getElementById("city-input");
const city_form = document.getElementById("city-form");

window.onload = async () => {
  let city_weather = weather_data();
  await city_weather.fetch_weather_data("Turin");
  console.log(JSON.stringify(city_weather.data));
  render_weather(city_weather.data);
};

city_form.onsubmit = async (e) => {
  e.preventDefault();
  let city_weather = weather_data();
  await city_weather.fetch_weather_data(city_input.value);
  render_weather(city_weather.data);
  city_form.reset();
};
