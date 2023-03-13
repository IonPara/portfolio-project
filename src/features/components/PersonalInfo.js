import React from "react";
import profilePic from "../../assets/images/prof-pic.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faEnvelope,
  faPhone,
  faAddressBook,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import hyperion from "../../assets/images/hyperion.png";
import cv from "../../assets/CV/Ion_Para_CV.pdf";
import { useSelector } from "react-redux";

const PersonalInfo = ({ showInfo, setShowInfo, hide, setHide }) => {
  const theme = useSelector((state) => state.portfolio.theme);
  const color = useSelector((state) => state.portfolio.color);

  return (
    <div
      className={
        showInfo
          ? "personal-info-container animate__animated animate__jackInTheBox"
          : !hide
          ? `personal-info-container animate__animated animate__zoomOut`
          : "hide"
      }
    >
      <div className="personal-info d-flex">
        <FontAwesomeIcon
          onClick={() => {
            setTimeout(() => {
              setHide((prev) => !prev);
            }, 2000);
            setShowInfo((prev) => !prev);
          }}
          className="close-icon"
          icon={faClose}
        />
        <section className="contact-details  ">
          <div className="prof-pic-container">
            <img src={profilePic} alt="" />
          </div>
          <h2 className="text-center mb-1">
            ION <span className={`text-${theme}`}>PARA</span>
          </h2>
          <h5 className="text-center mb-4">
            <span className="text-zinc-400">Full Stack</span> Web Developer
          </h5>
          <ul>
            <li className="list-element">
              <FontAwesomeIcon
                className={`mr-2 text-${theme}`}
                icon={faCalendar}
              />
              13/11/1996
            </li>
            <li className="list-element">
              <FontAwesomeIcon
                className={`mr-2 text-${theme}`}
                icon={faAddressBook}
              />
              Downham Market, Norfolk, UK
            </li>
            <li className="list-element">
              <FontAwesomeIcon
                className={`mr-2 text-${theme}`}
                icon={faPhone}
              />
              +44 78 822 414 76
            </li>
            <li className="list-element">
              <FontAwesomeIcon
                className={`mr-2 text-${theme}`}
                icon={faEnvelope}
              />
              <a
                className="text-white"
                href="mailto:fightclub@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                para_ion@hotmail.com
              </a>
            </li>
          </ul>
          <div className=" d-flex mt-4 justify-center ">
            <Link
              to={"https://www.linkedin.com/in/ion-para-934261211/"}
              target={"_blank"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className={`bi bi-linkedin text-${theme}`}
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </Link>{" "}
            <Link to={"https://github.com/IonPara"} target={"_blank"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className={`bi bi-github ml-3 text-${theme}`}
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </Link>
            <Link
              to={"https://www.hyperiondev.com/portfolio/107300/"}
              target={"_blank"}
            >
              <div className="icon-container">
                <img
                  className="hyperionIcon"
                  src={hyperion}
                  alt="hyperionDev"
                />
                <div className="overlay"></div>
              </div>
            </Link>
          </div>
          <div className="d-flex mt-2 justify-center">
            <button className={`button download-btn bg-${theme}`}>
              <a
                //this will save the file as "your_cv.pdf"
                download="Ion_Para_CV.pdf"
                //put the path of your pdf file
                href={cv}
                className="a-tag"
              >
                Download CV
              </a>
            </button>
          </div>
        </section>
        <div className="personal-info skills-container">
          <section>
            {/* About section */}
            <h3>
              About <span className={`text-${theme}`}>Me</span>
            </h3>
            <p className="paragraph ml-2 mt-3">
              A full stack web developer currently seeking junior or graduate
              web development roles. Possesses strong work ethics, commitment,
              dedication and able to work in high-pressure and challenging
              environments. Previous experience of working in a team for over
              six years as well as possessing a strong self-directed learning
              skill which was developed while studying software development.
            </p>
          </section>
          <section className="prog-skills mt-5">
            <h3>
              {/* Programming skills section */}
              Programming <span className={`text-${theme}`}>Skills</span>
            </h3>
            <div className="lists-container d-flex">
              <ul className="unordered-list">
                <li className="list-element circle-checkmark">
                  <span
                    className="circle-checkmark-before"
                    style={{ border: `8px solid ${color}` }}
                  />
                  Full stack application development with MERN stack
                </li>
                <li className="list-element circle-checkmark">
                  <span
                    className="circle-checkmark-before"
                    style={{ border: `8px solid ${color}` }}
                  />
                  Frontend web development in HTML, CSS, JavaScript
                </li>
                <li className="list-element circle-checkmark">
                  <span
                    className="circle-checkmark-before"
                    style={{ border: `8px solid ${color}` }}
                  />
                  Single-page application development with React.js
                </li>
                <li className="list-element circle-checkmark">
                  <span
                    className="circle-checkmark-before"
                    style={{ border: `8px solid ${color}` }}
                  />
                  Software development in JavaScript
                </li>
                <li className="list-element circle-checkmark">
                  <span
                    className="circle-checkmark-before"
                    style={{ border: `8px solid ${color}` }}
                  />
                  Object-oriented programming
                </li>
                <li className="list-element circle-checkmark">
                  <span
                    className="circle-checkmark-before"
                    style={{ border: `8px solid ${color}` }}
                  />
                  Source version control
                </li>
                <li className="list-element circle-checkmark">
                  <span
                    className="circle-checkmark-before"
                    style={{ border: `8px solid ${color}` }}
                  />
                  Web API integration
                </li>
                <li className="list-element circle-checkmark">
                  <span
                    className="circle-checkmark-before"
                    style={{ border: `8px solid ${color}` }}
                  />
                  Git & Github
                </li>
              </ul>
            </div>
          </section>
          <section className=" soft-skills-container mt-5">
            {/* Soft skills section */}

            <h3>
              Soft <span className={`text-${theme}`}>Skills</span>
            </h3>
            <div className="lists-container d-flex justify-between ">
              <ul className="">
                <li className="list-element soft-circle-checkmark">
                  <span
                    className="soft-circle-checkmark-before"
                    style={{ border: `8px solid ${color}` }}
                  />
                  Time management
                </li>
                <li className="list-element soft-circle-checkmark">
                  <span
                    className="soft-circle-checkmark-before"
                    style={{ border: `8px solid ${color}` }}
                  />
                  Problem solving
                </li>
                <li className="list-element soft-circle-checkmark">
                  <span
                    className="soft-circle-checkmark-before"
                    style={{ border: `8px solid ${color}` }}
                  />
                  Team work
                </li>
              </ul>
              <ul className="soft-skill-list">
                <li className="list-element soft-circle-checkmark">
                  <span
                    className="soft-circle-checkmark-before"
                    style={{ border: `8px solid ${color}` }}
                  />
                  Adaptability
                </li>
                <li className="list-element soft-circle-checkmark">
                  <span
                    className="soft-circle-checkmark-before"
                    style={{ border: `8px solid ${color}` }}
                  />
                  Critical thinking
                </li>
                <li className="list-element soft-circle-checkmark">
                  <span
                    className="soft-circle-checkmark-before"
                    style={{ border: `8px solid ${color}` }}
                  />
                  Communication
                </li>
              </ul>
            </div>
          </section>
          <section className="mt-5">
            <h3>
              Language <span className={`text-${theme}`}>Skills</span>
            </h3>
            <div className="charts-container d-flex justify-evenly mt-4">
              <figure className={`figure`}>
                <div className={`english ${theme}`}></div>
                <figcaption className="text-center mt-2">English</figcaption>
              </figure>
              <figure className="">
                <div className={`russian bgi-${theme}`}></div>
                <figcaption className="text-center mt-2">Russian</figcaption>
              </figure>
              <figure className="">
                <div className={`romanian bgi-${theme}`}></div>
                <figcaption className="text-center mt-2">Romanian</figcaption>
              </figure>
            </div>
          </section>
          <section className="experience-container mt-5">
            <h3>
              Tech <span className={`text-${theme}`}>Experience</span>
            </h3>
            <div className="experience">
              <div className="d-flex justify-between">
                <div className="exp-circle-checkmark">
                  <span
                    className="exp-circle-checkmark-before"
                    style={{ border: `8px solid ${color}` }}
                  />
                  Dec 2022 - Mar 2023
                </div>
                <div>
                  <h6 className="exp-heading">HyperionDev</h6>
                  <span className="exp-heading-span">
                    Full Stack Web Development
                  </span>
                </div>
              </div>
              <p className="mt-4">
                Completed a portfolio of 62 tasks, built projects using
                front-end technologies such as JavaScript, HTML, CSS, React,
                back-end technologies such as Node.js and Express.js and full
                stack application projects using MERN (MongoDB, Express.js,
                React.js, Node.js) stack. Troubleshoot given programs,
                identifying issues, and providing solutions.
              </p>
            </div>
          </section>
          <section className="mt-5 education-container">
            <h3>
              Education <span className={`text-${theme}`}>Timeline</span>
            </h3>
            <div className="education">
              <div className="d-flex justify-between mb-3">
                <div className="ed-circle-checkmark">
                  <span
                    className="ed-circle-checkmark-before"
                    style={{ border: `8px solid ${color}` }}
                  />
                  Dec 2022 - Mar 2023
                </div>
                <div className="schools">
                  <h6 className="ed-heading">HyperionDev</h6>
                  <span className="ed-heading-span">
                    Full Stack Web Development
                  </span>
                </div>
              </div>
              <div className="d-flex justify-between mb-3">
                <div className="ed-circle-checkmark">
                  <span
                    className="ed-circle-checkmark-before"
                    style={{ border: `8px solid ${color}` }}
                  />
                  June 2021 - Dec 2022
                </div>
                <div className="schools">
                  <h6 className="ed-heading ">Codecademy</h6>
                  <span className="ed-heading-span">Web Development</span>
                </div>
              </div>
              <div className="d-flex justify-between ">
                <div className="ed-circle-checkmark">
                  <span
                    className="ed-circle-checkmark-before"
                    style={{ border: `8px solid ${color}` }}
                  />
                  Sep 2012 - June 2016
                </div>
                <div className="schools d-flex flex-column">
                  <h6 className="ed-heading ">CEVVC</h6>
                  <span className="ed-heading-span">Republic of Moldova</span>
                  <span className="ed-heading-span">Management in Tourism</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

<div></div>;

export default PersonalInfo;
