import { useState, useEffect, useLayoutEffect } from "react";
import Weather from "./Components/Weather";
// import something from '-
const App = () => {
  const [input, setInput] = useState("Mumbai");
  const [data, setData] = useState({});

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=debcccd68278ece68ac1307ea3166c95`;
  const handleSearch = async () => {
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
      console.log(myWeatherInfo);
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

      <Weather weatherInfo={data}/>
    </>
  );
};

export default App;
