import React from 'react';

function WeatherCard({ day }) {
  return (
    <div className="weather-card">
      <h3>{day.date}</h3>
      <img src={day.day.condition.icon} alt={day.day.condition.text} />
      <p>{day.day.condition.text}</p>
      <p><strong>Max:</strong> {day.day.maxtemp_c}°C</p>
      <p><strong>Min:</strong> {day.day.mintemp_c}°C</p>
    </div>
  );
}

export default WeatherCard;
