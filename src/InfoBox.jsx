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
      clouds: "https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    };
  
    const bgImageUrl = weatherImg[info.description] || "";
    console.log("Background image URL:", bgImageUrl);
  
    setBgShow(bgImageUrl);
  }, [info.description, city]);
   // Include info.weather and city in the dependency array

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
      <div className="card-container flex flex-col items-center justify-center ">
        <div className="svg w-[5vw]"></div>
        <div className="text-[2vw]">{info.city}</div>
        <div className="temperature text-[8vw] leading-none flex  ">
          {info.temp} <span className="text-[3vw]">&deg;C</span>{" "}
        </div>
        <div className="text-[3vw] capitalize">{info.max}</div>
        <div className="flex items-center justify-between gap-10">
          <div className="text-[1.5vw] flex">
            Min {info.tempMin - 1} <span className="text-[1vw]">&deg;C</span>
          </div>
          <div className="text-[1.5vw] flex">-</div>
          <div className="text-[1.5vw] flex">
            Max {info.tempMax + 0.5} <span className="text-[1vw]">&deg;C</span>
          </div>
        </div>
        <div className="text-[3vw] capitalize">{info.description}</div>
      </div>

      <div className=" Additional-info w-full h-[30vh] px-[4vw] flex items-center justify-between  ">
        <div className="backdrop-sepia-0 bg-white/30 rounded-lg w-[10vw] h-[10vw] flex flex-col items-center justify-center text-[1.3vw]">
          <img src={Wind} alt="" className="w-[5vw] mb-[0.2vw]" />
          {info.wind} KM/H
        </div>
        <div className="backdrop-sepia-0 bg-white/30 rounded-lg w-[10vw] h-[10vw] flex flex-col items-center justify-center text-[1.3vw]">
          <img src={Sunrise} alt="" className="w-[4vw] mb-[1vw]" />
          {Sunrisetime}
        </div>
        <div className="backdrop-sepia-0 bg-white/30 rounded-lg w-[10vw] h-[10vw] flex flex-col items-center justify-center text-[1.3vw]">
          <img src={Sunset} alt="" className="w-[5vw] mb-[0.2vw]" />
          {Sunsettime}
        </div>
        <div className="backdrop-sepia-0 bg-white/30 rounded-lg w-[10vw] h-[10vw] flex flex-col items-center justify-center text-[1.3vw]">
          <img src={Humidity} alt="" className="w-[5vw] mb-[0.2vw]" />
          {info.humidity}%
        </div>
      </div>
    </div>
  );
}

export default InfoBox;
