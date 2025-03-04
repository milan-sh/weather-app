import { useEffect, useState } from "react";
import { key } from "../APIkey.js";
import {
  AirCondition,
  Input,
  MainCard,
  TodayForecast,
  WeeklyForecast,
} from "./components/index";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  const [city, setCity] = useState("New Delhi");
  const [weather, setWeather] = useState();
  const [todayForecast, setTodayForecast] = useState(null);
  const [sevenForecast, setSevenForecast] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false)

  const fetchWeather = async () => {
    try {
      setLoading(true)
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=7`
      );
      const data = await response.json();
      if (data) {
        setError(false);
        setWeather(data);
        setSevenForecast(data.forecast.forecastday);
        setTodayForecast(
          data.forecast.forecastday[0].hour.filter((item) => {
            return item.time_epoch;
          })
        )
        setLoading(false)
      }
    } catch (error) {
      setError(true);
      setLoading(false)
      console.log("city not found", error);
    }
  };
  
  useEffect(() => {
    fetchWeather();
  }, [city]);

  return (
    <WeatherProvider
      value={{
        city,
        weather,
        error,
        todayForecast,
        sevenForecast,
        loading,
        setCity,
        setWeather,
        setError,
        fetchWeather,
        setTodayForecast,
        setSevenForecast,
        setLoading
      }}
    >
      <div className="w-full min-h-screen  bg-[#0B111D] p-3 text-white flex flex-col  font-Rubik items-center box-border ">
        <div className="md:w-3/5 w-full m-auto md:m-0 self-start">
          <Input />
        </div>
        {error ? (
          <div className="w-full h-[80vh] flex md:items-center justify-center">
            <h1 className="text-red-600 font-bold md:text-5xl text-3xl text-center">
              Enter the correct city name and try again :(
            </h1>
          </div>
        ) : (loading ? (<h1 className="text-green-600 text-4xl mt-12 h-[80vh]">Loading.....</h1>) : (
          <div className="w-full h-full flex flex-col items-center justify-between gap-4 md:justify-between md:items-start md:flex-row md:flex-wrap ">
            <div className="left flex flex-col w-full h-full md:w-3/5">
              <MainCard />
              <TodayForecast />
              <AirCondition />
            </div>
            <div className="w-full md:w-[35%] md:pr-4 md:self-end">
              <WeeklyForecast />
            </div>
          </div>
        ))}
      </div>
    </WeatherProvider>
  );
}

export default App;
