import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {

    setCount( (prevCount) => {
        return prevCount + 1
    })
    
    // setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
    </>
  );
};

export default App;
