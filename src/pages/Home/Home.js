import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.portfolio.theme);
  const color = useSelector((state) => state.portfolio.color);

  return (
    <div className="home-container d-flex justify-center items-center animate__animated animate__fadeInUp">
      <div className="home ">
        <h1>
          ION <span className={`text-${theme}`}>PARA</span>
        </h1>
        <h2 className="text-3xl">
          <span className="text-zinc-400">Full Stack</span> Web Developer
        </h2>
        <button
          onClick={() => navigate("/contact")}
          className="button mt-4"
          style={{ border: `2px solid ${color}` }}
        >
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default Home;
