import { useState, useEffect } from "react";
import './App.css'
import Home from "./pages/Home";
import Reserva from "./pages/Reserva";
import { Routes, Route } from "react-router-dom"

function App() {
  const [ping, setPing] = useState("")

  useEffect(() => {
    getPing().then((data) => setPing(data));
  }, [])

  const getPing = () => {
    return fetch("http://localhost:4002/demo")
      .then((response) => response.text())
      .catch(error => console.log('error', error))
      .finally(() => console.log('promise is finished'));
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/reservar" element={ <Reserva /> } />
      </Routes>
    </div>
  )
}

export default App
