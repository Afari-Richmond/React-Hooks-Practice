import { useEffect, useRef, useState } from "react";
import "./App.css";

const App = () => {
  const [value, setValue] = useState(0);
  const count = useRef(0)
useEffect( ()=> {
 count.current = count.current + 1
}, )

  return (
    <>
      <button
        className="button-1"
        onClick={() => {
          setValue((prev) => prev - 1);
        }}
      >
        -
      </button>
      <h1> {value}</h1>
      <button
        className="button-1"
        onClick={() => {
          setValue((prev) => prev + 1);
        }}
      >
        +
      </button>
      <h1>Render Count: {count.current}</h1>
    </>
  );
};

export default App;
