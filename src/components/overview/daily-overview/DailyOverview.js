import React, { useState, useEffect } from "react";
import "./style.css";

export default function DailyOverview({ date, data }) {
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");

  useEffect(() => {
    const values = date.split("-");
    setDayOfWeek(getDayOfWeek(date));
    setDay(getDay(values[2]));
    setMonth(getMonthByIndex(values[1]));
  }, [date]);

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

  function getDayOfWeek(date) {
    const options = { weekday: "long" };
    const dayOfWeek = new Date(date).toLocaleDateString("de-ch", options);
    return dayOfWeek;
  }

  function getDay(value) {
    try {
      var dayValue = parseInt(value);
    } catch (err) {
      console.error(err);
    }
    return dayValue;
  }

  function getMonthByIndex(index) {
    try {
      var monthIndex = parseInt(index);
    } catch (err) {
      console.error(err);
    }
    const months = ["Januar", "Februar", "März", "April", "Mai", "Juni",
      "Juli", "August", "September", "Oktober", "November", "Dezember"];
    return months[monthIndex];
  }

  return (
    <div className="daily-overview-container">
      <p>{dayOfWeek}, {day}. {month}</p>
      <p>
        Tags {getHighestTemperature()}°C
      </p>
      <p>
        Nachts {getLowestTemperature()}°C
      </p>
      <img src={`/images/weather-icons/${getWeatherIconCode()}.png`} alt="Wetter Icon" />
    </div>
  );
}