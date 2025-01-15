import { useState } from "react";
import "./App.css";

const App = () => {
  const [car, setCar] = useState({
    brand: "Bentley",
    model: "Rome",
    year: "2025",
    color: "red",
  });

  const changeColor = () => {
    setCar((prevCar) => {
      return { ...prevCar, color: "blue" };
    });
  };

  return (
    <>
      <h1>My {car.brand}</h1>
      <h2>
        It is a {car.color} {car.model} from {car.year}
      </h2>
      <button onClick={changeColor}>Blue</button>
    </>
  );
};

export default App;
