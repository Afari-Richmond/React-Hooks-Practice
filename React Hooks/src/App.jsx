import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [times, setTime] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTime(times + 1);
    }, 2000);
  } , [times]);

  return <h1>I have rendered {times} times</h1>;
};

export default App;
