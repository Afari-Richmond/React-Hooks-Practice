import { useState } from "react";
import "./App.css";

const App = () => {

  const [brand, setBrand] = useState("Bentley");
  const [model, setModel] = useState("Rome");
  const [year, setYear] = useState(2025);
  const [color, setColor] = useState("red");
 
  return (
    <>
     <h1>My {brand}</h1>
    <h2>It is a {color} {model} from {year}</h2>
    </>
  );
};

export default App;
