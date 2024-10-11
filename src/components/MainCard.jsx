import useWeather from "../context/WeatherContext";

function MainCard() {
  const {weather} = useWeather()

  return (
    <div className="w-full p-5 flex justify-between">
      <div className="left flex flex-col justify-between ">
        <div>
          <h1 className="md:text-4xl font-semibold text-2xl">{weather?.location.name}, {weather?.location.country}</h1>
          <p className="text-[#e5e2e297] md:text-lg text-sm">chance of rain: {weather?.forecast.forecastday[0].day.daily_chance_of_rain}%</p>
        </div>
        <p className="md:text-5xl text-3xl font-bold">{Math.round(weather?.current.temp_c)}<sup>o</sup></p>
      </div>
      <div className="right">
        <img className="md:h-[180px] h-[150px] object-contain" src={weather?.current.condition.icon} alt="" />
      </div>
    </div>
  );
}

export default MainCard;
