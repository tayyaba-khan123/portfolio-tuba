import React, { useState } from "react";
import "./Weather.css";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const apiKey = "fa072bb9e2d589156f89d49a1bc88b6f";

  const getWeather = async () => {
    if (!city) {
      setError("Please enter a city name");
      setWeather(null);
      return;
    }

    try {
      setError("");
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();

      if (data.cod === "404") {
        setError("City not found");
        setWeather(null);
      } else {
        setWeather(data);
      }
    } catch (err) {
      setError("Something went wrong! Please try again.");
      setWeather(null);
    }
  };

  return (
    <div className="weather-container">
      <h1 className="weather-title">🌤️ Weather App</h1>

      <div className="input-group">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name (e.g., Lahore)"
          className="input-box"
        />
        <button onClick={getWeather} className="search-btn">
          Search
        </button>
      </div>

      {error && <p className="error-msg">{error}</p>}

      {weather && (
        <div className="weather-card">
          <h2>{weather.name}</h2>
          <p className="weather-desc">{weather.weather[0].description}</p>
          <h3 className="temp">{weather.main.temp}°C</h3>

          <div className="weather-details">
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind: {weather.wind.speed} m/s</p>
          </div>
        </div>
      )}
    </div>
  );
}