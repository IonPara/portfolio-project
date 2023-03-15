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
import News from "./pages/News/News";
import { useState, useEffect } from "react";

function App() {
  const [news, setNews] = useState([]);
  console.log(process.env.REACT_APP_API_KEY);
  useEffect(() => {
    const getNews = async () => {
      const API_KEY = process.env.REACT_APP_API_KEY;
      try {
        const response = await fetch(
          `https://newsdata.io/api/1/news?apikey=${API_KEY}&language=en&category=technology`
        );
        if (!response.ok) throw Error("Did not receive the expected data");
        // Convert the data from json
        const data = await response.json();
        if (data) setNews(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getNews();
  }, []);

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
        <Route path="/news" element={<News news={news} setNews={setNews} />} />
      </Routes>
    </div>
  );
}

export default App;
