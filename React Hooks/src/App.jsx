import { useState } from "react";
import "./App.css";

const App = () => {
  const [color, setColor] = useState("blue");

  const changeColor = () => {
    const position = true;
   
    setColor(() => {
      position ? setColor("red") : setColor("blue");
    });
  };

  return (
    <>
      <h1>My favourite Color is {color}!</h1>
      <button onClick={changeColor}>Blue</button>
    </>
  );
};

export default App;
