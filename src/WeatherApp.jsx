import React, { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
function WeatherApp() {
  const [Weather, setWeather] = useState({
    temp: "",
    tempMax: "",
    tempMin: "",
    humidity: "",
    pressure: "",
    feelsLike: "",
    description: "",
    city: "",
    wind: "",
    weather: "",
    clouds: "",
    sunrise: "",
    sunset: "",
  });

  let updateInfo = (result) => {
    setWeather(result);
  }

  // let weatehr
  return (
    <div className={`bg-[url("https://images.unsplash.com/photo-1491969657250-e08020fa391f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover`}>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={Weather} />
    </div>
  );
}

export default WeatherApp;
