import React from "react";
import image from "../../assets/images/greenCard.jpg";
import { useState } from "react";
import PersonalInfo from "../../features/components/PersonalInfo";
import "./About.css";
import { useSelector } from "react-redux";

const About = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [hide, setHide] = useState(true);
  const theme = useSelector((state) => state.portfolio.theme);
  const color = useSelector((state) => state.portfolio.color);

  return (
    <section className="about-container  animate__animated animate__fadeInUp">
      <div className="about d-flex">
        <div className="  image-container-container w-72">
          <div className="image-container">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="details-container">
          <h2 className="about-heading text-4xl">
            ION <span className={`text-${theme}`}>PARA</span>
          </h2>
          <h4 className="text-xl h4-about-heading about-heading pb-2 mb-2">
            <span className="text-zinc-400">Full Stack</span> Web Developer
          </h4>
          <p className="about-paragraph">
            My name is{" "}
            <span className="text-lg">
              Ion <span className={`text-${theme}`}>Para</span>
            </span>
            . I am a full stack web developer. Currently seeking junior or
            graduate web development roles. Possesses strong work ethics,
            commitment, dedication and able to work in high-pressure and
            challenging environments.
          </p>
          <div className="button-container">
            <button
              onClick={() => {
                setHide((prev) => !prev);
                setShowInfo((prev) => !prev);
              }}
              className="button mt-2 learn-more-btn"
              style={{ border: `2px solid ${color}` }}
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
      <PersonalInfo
        showInfo={showInfo}
        setShowInfo={setShowInfo}
        hide={hide}
        setHide={setHide}
      />
    </section>
  );
};

export default About;
