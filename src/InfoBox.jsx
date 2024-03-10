import React, { useState, useEffect } from "react";
import Sunrise from "./assets/sunrise.svg";
import Sunset from "./assets/sunset.svg";
import Wind from "./assets/wind.svg";
import Humidity from "./assets/humidity.svg";

function InfoBox({ info, city }) {
  const [bgshow, setBgShow] = useState("");

  useEffect(() => {
    console.log("Info in useEffect:", info);
    console.log("City in useEffect:", city);

    const weatherImg = {
      rain: "https://images.unsplash.com/photo-1433863448220-78aaa064ff47?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      haze: "https://images.unsplash.com/photo-1520351497804-e95d64a88431?q=80&w=1577&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      clouds:
        "https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    };

    const bgImageUrl = weatherImg[info.description] || "";
    console.log("Background image URL:", bgImageUrl);

    setBgShow(bgImageUrl);
  }, [info.description, city]);
  //  Include info.weather and city in the dependency array

  const sunriseTime = new Date(info.sunrise * 1000);
  const Sunrisehours = sunriseTime.getHours().toString().padStart(2, "0");
  const Sunriseminutes = sunriseTime.getMinutes().toString().padStart(2, "0");
  const Sunrisetime = `${Sunrisehours}:${Sunriseminutes}`;

  const sunsetTime = new Date(info.sunset * 1000);
  const Sunsethours = sunsetTime.getHours().toString().padStart(2, "0");
  const Sunsetminutes = sunsetTime.getMinutes().toString().padStart(2, "0");
  const Sunsettime = `${Sunsethours}:${Sunsetminutes}`;

  return (
    <div className="info-box" style={{ backgroundImage: `url(${bgshow})` }}>
      <div className="card-container ">
        <div className="info-city ">{info.city}</div>
        <div className="info-temp  ">
          {info.temp} <span className="">&deg;C</span>{" "}
        </div>
        <div className="min-max ">
          <div className="min  ">
            Min {info.tempMin} <span className="">&deg;C</span>
          </div>
          <div className="dash">-</div>
          <div className="max">
            Max {info.tempMax} <span className="">&deg;C</span>
          </div>
        </div>
        <div className="info-description">{info.description}</div>
      </div>

      <div className=" Additional-info">
        <div className="add-info-box backdrop-sepia-0 bg-white/30 rounded-xl ">
          <img src={Wind} alt="" className="w-[5vw] mb-[0.2vw] " />
          <h1 className="">{info.wind} KM/H</h1>
          <h2>Wind</h2>

        </div>
        <div className="add-info-box backdrop-sepia-0 bg-white/30 rounded-xl">
          <img src={Sunrise} alt="" className="w-[4vw] mb-[1vw] " />
          <h1>{Sunrisetime}</h1>
          <h2>Sunrise</h2>

        </div>
        <div className="add-info-box backdrop-sepia-0 bg-white/30 rounded-xl">
          <img src={Sunset} alt="" className="w-[5vw] mb-[0.2vw] " />
          <h1>{Sunsettime}</h1>
          <h2>Sunset</h2>
        </div>
        <div className="add-info-box backdrop-sepia-0 bg-white/30 rounded-xl">
          <img src={Humidity} alt="" className="w-[5vw] mb-[0.2vw] " />
          <h1>{info.humidity}%</h1>
          <h2>Humidity</h2>

        </div>
      </div>
    </div>
  );
}

export default InfoBox;
