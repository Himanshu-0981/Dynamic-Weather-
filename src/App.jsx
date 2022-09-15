import { useState, useEffect, useLayoutEffect } from "react";
import {
  WiDayCloudy,
  WiSunrise,
  BsDropletHalf,
  BiCloudDrizzle,
  SiTailwindcss,
} from "react-icons/all";

const App = () => {
  const [input, setInput] = useState("Delhi");
  const [data, setData] = useState({});

  console.log(data);
  const handleSearch = async () => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=debcccd68278ece68ac1307ea3166c95`;
    try {
      const req = await fetch(URL);
      const res = await req.json();

      const { temp, pressure, humidity } = res.main;
      const { speed } = res.wind;
      const { country, sunrise } = res.sys;
      const { name: city } = res;
      const { main: weatherMood } = res.weather[0];

      const myWeatherInfo = {
        temp,
        pressure,
        humidity,
        speed,
        country,
        sunrise,
        city,
        weatherMood,
      };
      setData(myWeatherInfo);
    } catch (err) {
      console.log(err);
    }
  };

  useLayoutEffect(() => {
    handleSearch();
  }, []);
  return (
    <>
      <div className="text-center mt-10 ">
        <input
          type="text"
          placeholder="Search for location"
          className="outline-none  pl-2 pr-2 pt-1 pb-1  w-96 bg-white rounded-l-md"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="pt-1 pb-1 pr-1 pl-1 uppercase text-white bg-blue-500 rounded-r-md hover:bg-blue-300 ease-linear"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className=" flex justify-center mt-10 flex-col items-center ">
        <div className="h-96 w-[40rem] bg-white rounded-xl shadow-2xl">
          <WiDayCloudy className="h-40 mt-5 w-full bg-white" />
          <div className="bg-black text-white flex justify-between items-center">
            <div className="flex items-center">
              <div>
                <p className="text-7xl font-light pl-2">
                  {(data.temp - 273.15).toFixed(2)}
                </p>
              </div>
              <div className="ml-5">
                <p className="text-4xl tracking-wide font-thin">
                  {data.weatherMood}
                </p>
                <p className="ml-1 font-light">
                  {data.city}, {data.country}
                </p>
              </div>
            </div>
            <div className="bg-cyan-600 pt-6 pb-5 pr-4 pl-4 text-center">
              <p className="text-3xl">12/12/2012</p>
              <p className="text-2xl">0:00:00 PM</p>
            </div>
          </div>
          <div className="flex justify-around items-center mt-4">
            <div className="flex">
              <div>
                <WiSunrise className="h-14 w-8 mr-3  text-orange-400" />
              </div>
              <div className="flex flex-col">
                <p>Sunrise</p>
                <p>6:00 PM</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <BsDropletHalf className="h-14 w-8 mr-3 text-yellow-900" />
              </div>
              <div className="flex flex-col">
                <p>Humidity</p>
                <p>{data.humidity}</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <BiCloudDrizzle className="h-14 w-8 mr-3 text-cyan-600" />
              </div>
              <div className="flex flex-col">
                <p>Pressure</p>
                <p>{data.pressure}</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <SiTailwindcss className="h-14 w-8 mr-3 text-blue-900" />
              </div>
              <div className="flex flex-col">
                <p>Wind</p>
                <p>{data.speed}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
