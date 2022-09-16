import { useEffect, useState } from "react";
import {
  WiSunrise,
  BsDropletHalf,
  BiCloudDrizzle,
  SiTailwindcss,
  TiWeatherCloudy,
  BsCloudDrizzle,
  IoThunderstormOutline,
  BsCloudHaze,
  IoSunnyOutline,
  WiFog,
  BsCloudRain,
} from "react-icons/all";

const Weather = (props) => {
  const { weatherInfo } = props;
  const {
    temp,
    pressure,
    humidity,
    speed,
    country,
    sunrise,
    city,
    weatherMood,
  } = weatherInfo;

  const [weatherMoodInfo, setWeatherMoodInfo] = useState("");

  const myClassName = "h-40 mt-5 w-full bg-white pt-5 pb-5";

  useEffect(() => {
    switch (weatherMood) {
      case "Clouds":
        setWeatherMoodInfo(<TiWeatherCloudy className={myClassName} />);
        break;
      case "Thunderstorm":
        setWeatherMoodInfo(<IoThunderstormOutline className={myClassName} />);
        break;
      case "Haze":
        setWeatherMoodInfo(<BsCloudHaze className={myClassName} />);
        break;
      case "Clear":
        setWeatherMoodInfo(<IoSunnyOutline className={myClassName} />);
        break;
      case "Drizzle":
        setWeatherMoodInfo(<BsCloudDrizzle className={myClassName} />);
        break;
      case "Mist":
        setWeatherMoodInfo(<WiFog className={myClassName} />);
        break;
      case "Rain":
        setWeatherMoodInfo(<BsCloudRain className={myClassName} />);
        break;
    }
  }, [weatherMood]);
  return (
    <>
      <div className=" flex justify-center mt-10 flex-col items-center ">
        <div className="h-96 w-[40rem] bg-white rounded-xl shadow-2xl">
          {weatherMoodInfo}
          <div className="bg-black text-white flex justify-between items-center">
            <div className="flex items-center">
              <div>
                <p className="text-7xl font-light pl-2">
                  {(temp - 273.15).toFixed(2)}
                </p>
              </div>
              <div className="ml-5">
                <p className="text-3xl tracking-wide font-thin">
                  {weatherMood}
                </p>
                <p className="ml-1 font-light">
                  {city}, {country}
                </p>
              </div>
            </div>
            <div className="bg-cyan-600 pt-6 pb-5 pr-4 pl-4 text-center w-52">
              <p className="text-3xl">{new Date().toLocaleString()}</p>
            </div>
          </div>
          <div className="flex justify-around items-center mt-4">
            <div className="flex">
              <div>
                <WiSunrise className="h-14 w-8 mr-3  text-orange-400" />
              </div>
              <div className="flex flex-col">
                <p>Sunrise</p>
                <p>6:00 AM</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <BsDropletHalf className="h-14 w-8 mr-3 text-yellow-900" />
              </div>
              <div className="flex flex-col">
                <p>Humidity</p>
                <p>{humidity}</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <BiCloudDrizzle className="h-14 w-8 mr-3 text-cyan-600" />
              </div>
              <div className="flex flex-col">
                <p>Pressure</p>
                <p>{pressure}</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <SiTailwindcss className="h-14 w-8 mr-3 text-blue-900" />
              </div>
              <div className="flex flex-col">
                <p>Wind</p>
                <p>{speed}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
