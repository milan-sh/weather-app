import { createContext, useContext } from "react";

export const WeatherContext = createContext({
    city: "",
    weather: null,
    todayForecast : null,
    sevenForecast: null,
    error: false,
    loading:false,
    setCity: () => {},
    setWeather: () => {},
    setError: () => {},
    fetchWeather: () => {},
    setTodayForecast: ()=>{},
    setSevenForecast:()=>{},
    setLoading:()=>{}
})

export const WeatherProvider = WeatherContext.Provider

export default function useWeather(){
    return useContext(WeatherContext)
}