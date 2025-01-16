import "../App.css";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Contact = () => {


const {phone, name} = useContext(AppContext)

  return (
    <>
      <h1>Contact</h1>
      <h3>Phone : {phone}</h3>
      <h2>{`My Name is ${name}`}</h2>
    </>
  );
};

export default Contact;
