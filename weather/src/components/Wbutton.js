import React from "react";
import "../App.css";
import { Button } from "react-bootstrap";

const Wbutton = ({ handleCityChange, cities, setCity }) => {
  return (
    <div className="menu-container">
      <Button variant="warning" onClick={() => handleCityChange("current")}>
        Current
      </Button>
      {cities.map((city, idx) => (
        <Button
          variant="warning"
          key={idx}
          onClick={() => handleCityChange(city)}
        >
          {city}
        </Button>
      ))}
    </div>
  );
};

export default Wbutton;
