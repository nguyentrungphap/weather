import React, { useState } from "react";
import "./style.css";
import SearchIcon from "../Assets/search.png";
import ClearIcon from "../Assets/clear.png";
import CloudIcon from "../Assets/cloud.png";
import DrizzleIcon from "../Assets/drizzle.png";
import RainIcon from "../Assets/rain.png";
import SnowIcon from "../Assets/snow.png";
import WindIcon from "../Assets/wind.png";
import HumidityIcon from "../Assets/humidity.png";

let api_key = "bae9bd97c9a35dd14911d60db608a5c5";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [temprature, setTemprature] = useState(0);
  const [location, setLocation] = useState("");

  const handleCityInputChange = (e) => {
    setCity(e.target.value);
  };

  const heandleSearch = async () => {
    console.log(city);
    console.log("1234");
    if (city.trim() === "") {
      alert("Vui lòng nhập vào thành phố");
    } else {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&unis=Metric&appid=${api_key}`;
      let reponse = await fetch(url);
      let data = await reponse.json();
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setTemprature(parseFloat((data.main.temp / 10).toFixed(2)));
      setLocation(data.name);
    }
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input
          type="text"
          className="cityInput"
          placeholder="city"
          onChange={handleCityInputChange}
        />
        <div className="search-icon" onClick={heandleSearch}>
          <img src={SearchIcon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={CloudIcon} alt="" className="search-icon" />
      </div>
      <div className="weather-temp">{temprature}°C</div>
      <div className="weather-location">{location}</div>
      <div className="data-container">
        <div className="element">
          <img src={HumidityIcon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">{humidity}%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={WindIcon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">wind km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
