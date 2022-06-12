import React, { useState, useEffect, Component } from "react";
import Wbox from "./components/Wbox";
import Wbutton from "./components/Wbutton";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ClipLoader from "react-spinners/ClipLoader";

const App = () => {
  const cities = ["Paris", "Seoul", "Tokyo", "Hanoi"];
  const [curweather, setCurWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const curPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      curData(lat, lon);
    });
  };

  const curData = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6eaa5e3aad882d93faab1bc853a80422&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setCurWeather(data);
    setLoading(false);
    console.log("data1", data);
  };

  const curDataByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6eaa5e3aad882d93faab1bc853a80422&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setCurWeather(data);
    setLoading(false);
    console.log("data2", data);
  };

  useEffect(() => {
    if (city == "") {
      curPosition();
    } else {
      curDataByCity();
    }
  }, [city]);

  const handleCityChange = (city) => {
    if (city === "current") {
      setCity("");
    } else {
      setCity(city);
    }
  };

  return (
    <div>
      {loading ? (
        <div className="container">
          <ClipLoader color="#f88c6b" loading={loading} size={150} />
        </div>
      ) : (
        <div className="container">
          <Wbox curweather={curweather} />
          <Wbutton
            cities={cities}
            setCity={setCity}
            handleCityChange={handleCityChange}
          />
        </div>
      )}
    </div>
  );
};

export default App;
