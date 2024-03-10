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
      console.log(jsonRes);

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
      console.log(result);
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
      <h3>
        <img src="./cloudy-line.svg" alt="" />
        Weather App
      </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        {/* <TextField
          
        /> */}
        
        <button type="submit">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
          </svg>
        </button>
        <p>{errors && <p>City not found</p>}</p>
      </form>
    </div>
  );
}

export default SearchBox;
