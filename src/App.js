import React from "react";
import "./App.css";
import Header from "./features/components/Header";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Main from "./features/components/Main";
import Theme from "./features/components/Theme";

function App() {
  return (
    <div className="App">
      <Header />
      <Theme />
      <Main />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
