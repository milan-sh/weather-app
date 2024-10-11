// import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureQuarter, faWind, faDroplet, faSun } from "@fortawesome/free-solid-svg-icons";
import useWeather from '../context/WeatherContext'
function AirCondition() {
  const {weather} = useWeather()
  return (
    <div className="w-full bg-[#202C3C] rounded-md px-5 py-4 flex flex-col text-gray-400 font-semibold gap-3 mt-2">
      <div className="heading">
        <h1 className="text-sm md:text-lg">AIR CONDITIONS</h1>
      </div>
      <div className="cards md:flex md:justify-between  md:flex-wrap grid grid-cols-2 grid-rows-2 gap-3">
        <div className="card flex flex-col gap-2 md:items-center items-start justify-center">
          <div className="title flex gap-2">
            <FontAwesomeIcon icon={faTemperatureQuarter} size="lg" />
            <p>Real Feel</p>
          </div>
          <h3 className="font-bold text-2xl text-white ml-5">
            {weather?.current.feelslike_c}<sup>o</sup>
          </h3>
        </div>
        <div className="card flex flex-col gap-2 md:items-center items-start justify-center">
          <div className="title flex gap-2">
          <FontAwesomeIcon icon={faDroplet} size="lg" />
            <p>Chance of rain</p>
          </div>
          <h3 className="font-bold text-2xl text-white ml-5">{weather?.forecast.forecastday[0].day.daily_chance_of_rain}%</h3>
        </div>
        <div className="card flex flex-col gap-2 md:items-center items-start justify-center">
          <div className="title flex gap-2">
          <FontAwesomeIcon icon={faWind} size="lg" />
            <p>Wind</p>
          </div>
          <h3 className="font-bold text-2xl text-white ml-5">{weather?.current.wind_kph} km/h</h3>
        </div>        
        <div className="card flex flex-col gap-2 md:items-center items-start justify-center">
          <div className="title flex gap-2">
          <FontAwesomeIcon icon={faSun} size="lg" />
            <p>UV Index</p>
          </div>
          <h3 className="font-bold text-2xl text-white ml-5">{weather?.current.uv}</h3>
        </div>
      </div>
    </div>
  );
}

export default AirCondition;
