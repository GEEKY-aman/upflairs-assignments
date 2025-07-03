import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import './App.css';

const API_KEY = '48ff526faa5c133936413850363bb58a';  // ✅ Your new key

function App() {
  const [city, setCity] = useState('');
  const [forecast, setForecast] = useState([]);
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const fetchWeather = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;

    try {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7`
      );
      setForecast(res.data.forecast.forecastday);
      setLocation(`${res.data.location.name}, ${res.data.location.country}`);
      setError('');
    } catch (err) {
      console.log("API error:", err.response?.data || err.message);
      setError(err.response?.data?.error?.message || 'City not found or API error.');
      setForecast([]);
      setLocation('');
    }
  };

  return (
    <div className="app">
      <h1>🌦️ 7-Day Weather Forecast</h1>

      <form onSubmit={fetchWeather}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {error && <p className="error">{error}</p>}
      {location && <h2 className="location">📍 {location}</h2>}

      <div className="forecast-container">
        {forecast.map((day) => (
          <WeatherCard key={day.date} day={day} />
        ))}
      </div>
    </div>
  );
}

export default App;
