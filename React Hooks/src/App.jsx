import { useEffect, useRef, useState } from "react";
import "./App.css";
import Profile from "./context/Profile";
import Footer from "./components/Footer";
import useLocalStorage from "./Hooks/useLocalStorage";


const App = () => {

 const [name, setName] = useLocalStorage('username', '')
 

  return (
   <>
<Profile />
<Footer />


   </>
  );
};

export default App;
