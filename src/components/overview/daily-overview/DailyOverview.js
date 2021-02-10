import React from "react";
import "./style.css";
import { formatDate } from "../../../util/DateFormatter";

export default function DailyOverview({ date, data }) {
  function getHighestTemperature() {
    let highestTemperature = -Number.MAX_VALUE;
    data.forEach(el => {
      if (el.temp > highestTemperature) {
        highestTemperature = el.temp;
      }
    });
    return highestTemperature;
  }

  function getLowestTemperature() {
    let lowestTemperature = Number.MAX_VALUE;
    data.forEach(el => {
      if (el.temp < lowestTemperature) {
        lowestTemperature = el.temp;
      }
    });
    return lowestTemperature;
  }

  function getWeatherIconCode() {
    let weatherIconCode = "";
    let weatherCode = Number.MAX_VALUE;
    data.forEach(el => {
      if (el.weather.code < weatherCode) {
        weatherCode = el.weather.code;
        weatherIconCode = el.weather.icon;
      }
    });
    return weatherIconCode;
  }

  return (
    <div className="daily-overview-container">
      <div className="daily-overview-column-1">
        <h2 className="daily-overview-fixed-height">{formatDate({date})}</h2>
        <p className="highest-temperature">
          Tags <span className="highest-temperature-value">{getHighestTemperature()}°C</span>
        </p>
        <p className="lowest-temperature">
          Nachts <span className="lowest-temperature-value">{getLowestTemperature()}°C</span>
        </p>
      </div>
      <div className="daily-overview-column-2">
        <img src={`/images/weather-icons/${getWeatherIconCode()}.png`} alt="Wetter Icon" />
      </div>
    </div>
  );
}