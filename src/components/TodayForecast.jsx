
import useWeather from "../context/WeatherContext";

function TodayForecast() {
  const { todayForecast } = useWeather();

  return (
    <div className="w-full bg-[#202C3C] rounded-md p-5 flex flex-col text-gray-400 font-semibold gap-2">
      <div className="heading">
        <p className="text-sm md:text-lg">{`TODAY'S FORECAST`}</p>
      </div>
      <div className="cards flex items-center justify-around gap-4 overflow-x-scroll">
        {todayForecast &&
          todayForecast.map((item) => (
            <>
              <div
                className={`card flex  items-center justify-center shrink-0 gap-x-5 mb-2`}
                key={item.time_epoch}
                style={{
                  order:
                    new Date(item.time_epoch * 1000).getHours() >=
                    new Date().getHours()
                      ? new Date(item.time_epoch * 1000).getHours() -
                        new Date().getHours()
                      : 24 -
                        (new Date().getHours() -
                          new Date(item.time_epoch * 1000).getHours()),
                }}
              >
                <div className="info flex flex-col items-center justify-center">
                  <p>{new Date(item.time_epoch * 1000).getHours()}:00</p>
                  <img src={item.condition.icon} alt="" />
                  <p className="text-white text-xl">
                    {Math.round(item.temp_c)}
                    <sup>o</sup>
                  </p>
                </div>
                <div className="bg-gray-500 h-[100px] w-[1px] shrink-0"></div>
              </div>
              
            </>
          ))}
      </div>
    </div>
  );
}

export default TodayForecast;
