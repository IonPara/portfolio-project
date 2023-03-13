import React from "react";
import "./Portfolio.css";
import { projects } from "../../features/projects";
import Project from "../../features/components/Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";

const Portfolio = () => {
  // const [disable, setDisable] = useState(true);
  const [showInfo, setShowInfo] = useState("");
  const [hide, setHide] = useState(true);
  const ref = useRef(null);
  const scroll = (scrollOffSet) => {
    ref.current.scrollLeft += scrollOffSet;
  };
  const theme = useSelector((state) => state.portfolio.theme);

  return (
    <section className=" portfolio-container animate__animated animate__fadeInUp">
      <div className="port-heading-container">
        <h1>
          Projects <span className={`text-${theme}`}>Portfolio</span>
        </h1>
      </div>
      <div className="projects-container" ref={ref}>
        {projects.map((project, index) => {
          return (
            <Project
              showInfo={showInfo}
              setShowInfo={setShowInfo}
              hide={hide}
              setHide={setHide}
              project={project}
              key={index}
              index={index}
            />
          );
        })}
        <div className="arrows-container d-flex justify-evenly">
          <div className="arrows ">
            <button
              className={`arrow hover-${theme}`}
              onClick={() => {
                scroll(-350);
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              className={`arrow hover-${theme}`}
              onClick={() => {
                scroll(350);
              }}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
