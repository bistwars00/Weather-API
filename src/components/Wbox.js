import React from "react";
import "../App.css";

const Wbox = ({ curweather }) => {
  let tem1 =
    curweather && curweather.main ? curweather.main.temp.toFixed(2) : "";
  let tem2 =
    curweather && curweather.main
      ? (curweather.main.temp * 1.8 + 32).toFixed(2)
      : "";
  return (
    <div className="box boxBG">
      <h2>Weather Now</h2>
      <h3>Space: {curweather?.name}</h3>
      <h3>
        Temp: {tem1}(℃) / {tem2} (℉){" "}
      </h3>
      <h3>Desc: {curweather && curweather.weather[0]?.description}</h3>
    </div>
  );
};

export default Wbox;
