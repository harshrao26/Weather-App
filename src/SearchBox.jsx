import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./App.css";

function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [errors, setErrors] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "7bbd83176fe5bbdbd61fefb3bc13c2e0";

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const getWeatherinfo = async () => {
    try {
      let res = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonRes = await res.json();
      console.log(jsonRes)

      const result = {
        temp: jsonRes.main.temp,
        tempMax: jsonRes.main.temp_max,
        tempMin: jsonRes.main.temp_min,
        humidity: jsonRes.main.humidity,
        pressure: jsonRes.main.pressure,
        feelsLike: jsonRes.main.feels_like,
        description: jsonRes.weather[0].main,
        city: jsonRes.name,
        wind: jsonRes.wind.speed,
        weather: jsonRes.weather[0].main,
        clouds: jsonRes.clouds.all,
        sunrise: jsonRes.sys.sunrise,
        sunset: jsonRes.sys.sunset,
      };
      console.log(result)
      return result;
      
    } catch (err) {
      setErrors(true); 
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setErrors(false); 
    try {
      let weatherInfo = await getWeatherinfo();
      if (weatherInfo) {
        updateInfo(weatherInfo);
      }
    } catch (err) {
      console.error("Error handling form submission:", err);
      setErrors(true);
    }
    setCity("");
  };

  return (
    <div className="search backdrop-sepia-0 bg-white/30">
       <h3><img src="./cloudy-line.svg" alt="" />Weather App</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained">
          Send
        </Button>
        {errors && <p>City not found</p>}
      </form>
    </div>
  );
}

export default SearchBox;
