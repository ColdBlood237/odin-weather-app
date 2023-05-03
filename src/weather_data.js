function weather_data() {
  let data = {};

  async function fetch_weather_data(location) {
    let response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=8c76b9fbf906405186e162024230205&q=${location}&aqi=no&alerts=no`
    );
    let json = await response.json();

    if (response.ok) {
      Object.assign(data, weather_data_factory(json));
      document.querySelector(".error").innerHTML = "";
    } else {
      console.log(json.error.message);
      document.querySelector(".error").innerHTML = json.error.message;
    }
  }

  function weather_data_factory(json_data) {
    const temp_c = json_data.current.temp_c;
    const temp_f = json_data.current.temp_f;
    const feels_like_c = json_data.current.feelslike_c;
    const feels_like_f = json_data.current.feelslike_f;
    const wind_kph = json_data.current.wind_kph;
    const wind_mph = json_data.current.wind_mph;
    const humidity = json_data.current.humidity;
    const country = json_data.location.country;
    const city = json_data.location.name;
    const condition_text = json_data.current.condition.text;
    const condition_icon = json_data.current.condition.icon;

    return {
      temp_c,
      temp_f,
      feels_like_c,
      feels_like_f,
      wind_kph,
      wind_mph,
      humidity,
      country,
      city,
      condition_text,
      condition_icon,
    };
  }

  return { data, fetch_weather_data };
}

export default weather_data;
