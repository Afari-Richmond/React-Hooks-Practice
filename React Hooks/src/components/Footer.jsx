import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const Footer = () => {


const {phone, name }= useContext(AppContext)

  return (
    <>
    <h1>Footer</h1>
    
    
    <h3>Phone : {phone }</h3>
    <h2>{`My name is ${name}`}</h2>
    </>


  )
}

export default Footer