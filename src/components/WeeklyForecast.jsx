// import React from "react";
import {  useState } from "react";
import useWeather from "../context/WeatherContext";
function WeeklyForecast() {
  const { sevenForecast } = useWeather();
  
  const [day] = useState(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"])
  

  return (
    <div className="w-full bg-[#202C3C] rounded-md p-5 text-gray-400 font-semibold">
      <div className="heading mb-3">
        <p className="text-sm md:text-lg">7 Days Forecast</p>
      </div>
      <div className="cards flex flex-col">
        {sevenForecast &&
          sevenForecast.map((item) => (
            <>
              <div className="card grid grid-flow-row gap-3 grid-cols-4 items-center justify-items-start">
                <p className="font-medium">{day[new Date(item.date).getDay()]}</p>
                <img src={item.day.condition.icon} alt="" />
                <h3 className="text-white">{item.day.condition.text}</h3>
                <p><span className="text-white">{Math.round(item.day.mintemp_c)}</span>/{Math.round(item.day.maxtemp_c)}</p>
              </div>
              <div className="line h-[1px] w-full bg-gray-500"></div>
            </>
          ))}
      </div>
    </div>
  );
}

export default WeeklyForecast;
