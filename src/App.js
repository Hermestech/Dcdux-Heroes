import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HeroDetails from "./pages/HeroDetails";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="superheroes/:id" element={<HeroDetails/>} />
      </Routes>
    </Router>
  )
}

export default App;
