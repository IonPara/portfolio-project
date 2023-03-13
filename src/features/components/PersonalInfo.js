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
                <svg
                  className="icon-container hyperionIcon"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 70 61"
                  enable-background="new 0 0 70 61"
                >
                  <path
                    fill={color}
                    opacity="1.000000"
                    stroke="none"
                    d="
M71.000000,37.000000 
	C71.000000,45.318600 71.000000,53.637203 71.000000,61.977901 
	C47.722664,61.977901 24.445303,61.977901 1.083971,61.977901 
	C1.083971,41.758869 1.083971,21.517332 1.083971,1.137890 
	C24.332787,1.137890 47.666267,1.137890 71.000000,1.137890 
	C71.000000,8.087205 71.000000,15.074821 70.677902,22.575211 
	C69.916100,23.397753 69.476387,23.707520 68.947418,24.472351 
	C68.849686,28.020243 68.668457,31.127939 68.932640,34.197300 
	C69.017525,35.183540 70.277588,36.068630 71.000000,37.000000 
M30.722008,51.839458 
	C31.391153,47.649231 32.060299,43.459007 32.756863,39.097095 
	C35.828568,39.097095 39.093727,39.097095 42.922256,39.097095 
	C42.922256,43.481339 42.922256,47.674294 42.922256,51.875870 
	C47.947449,51.875870 52.406239,51.875870 56.487793,51.875870 
	C56.487793,40.582928 56.487793,29.469196 56.487793,18.355465 
	C56.052437,18.362783 55.617081,18.370104 55.181725,18.377422 
	C55.181725,28.727905 55.181725,39.078388 55.181725,49.561642 
	C51.530876,49.561642 48.448448,49.561642 44.839302,49.561642 
	C44.839302,45.133915 44.839302,40.910759 44.839302,36.749809 
	C39.415897,36.749809 34.525520,36.749809 29.160778,36.749809 
	C29.447361,41.875893 29.713621,46.638432 30.722008,51.839458 
M19.681925,19.486141 
	C19.681925,17.535069 19.681925,15.583994 19.681925,13.643161 
	C23.188822,13.643161 26.062572,13.643161 29.374971,13.643161 
	C29.374971,18.080633 29.374971,22.174730 29.374971,26.438446 
	C34.744270,26.438446 39.655037,26.438446 44.439804,26.438446 
	C44.439804,21.152309 44.439804,16.131527 44.439804,11.110745 
	C43.990280,11.116370 43.540756,11.121996 43.091232,11.127622 
	C43.091232,15.284398 43.091232,19.441174 43.091232,23.678123 
	C39.010963,23.678123 35.636707,23.678123 31.835438,23.678123 
	C31.835438,19.235399 31.835438,15.164822 31.835438,11.317225 
	C26.672888,11.317225 21.952951,11.317225 17.743259,11.317225 
	C17.743259,22.806973 17.743259,33.884975 17.743259,44.962975 
	C18.389446,44.966118 19.035633,44.969261 19.681820,44.972404 
	C19.681820,36.811630 19.681820,28.650854 19.681925,19.486141 
z"
                  />
                  <path
                    fill="#000000"
                    opacity="1.000000"
                    stroke="none"
                    d="
M71.000000,36.583336 
	C70.277588,36.068630 69.017525,35.183540 68.932640,34.197300 
	C68.668457,31.127939 68.849686,28.020243 69.277435,24.498302 
	C70.131142,24.046127 70.565575,24.023064 71.000000,24.000000 
	C71.000000,25.066669 71.000000,26.133339 70.795517,27.638523 
	C70.727348,28.384693 70.863670,28.692347 71.000000,29.000000 
	C71.000000,29.444445 71.000000,29.888889 70.804718,30.737965 
	C70.559418,31.271664 70.430092,31.460649 70.473991,31.518755 
	C70.614868,31.705210 70.819786,31.843269 71.000000,32.000000 
	C71.000000,33.388889 71.000000,34.777779 71.000000,36.583336 
z"
                  />
                  <path
                    fill="#000000"
                    opacity="1.000000"
                    stroke="none"
                    d="
M71.000000,23.750000 
	C70.565575,24.023064 70.131142,24.046127 69.366699,24.043240 
	C69.476387,23.707520 69.916100,23.397753 70.677902,23.043993 
	C71.000000,23.000000 71.000000,23.500000 71.000000,23.750000 
z"
                  />
                  <path
                    fill="#000000"
                    opacity="1.000000"
                    stroke="none"
                    d="
M71.000000,28.750000 
	C70.863670,28.692347 70.727348,28.384693 70.795517,28.038521 
	C71.000000,28.000000 71.000000,28.500000 71.000000,28.750000 
z"
                  />
                  <path
                    fill="#000000"
                    opacity="1.000000"
                    stroke="none"
                    d="
M71.000000,31.750000 
	C70.819786,31.843269 70.614868,31.705210 70.473991,31.518755 
	C70.430092,31.460649 70.559418,31.271664 70.804718,31.071297 
	C71.000000,31.000000 71.000000,31.500000 71.000000,31.750000 
z"
                  />
                  <path
                    fill="#000000"
                    opacity="1.000000"
                    stroke="none"
                    d="
M30.350945,51.620216 
	C29.713621,46.638432 29.447361,41.875893 29.160778,36.749809 
	C34.525520,36.749809 39.415897,36.749809 44.839302,36.749809 
	C44.839302,40.910759 44.839302,45.133915 44.839302,49.561642 
	C48.448448,49.561642 51.530876,49.561642 55.181725,49.561642 
	C55.181725,39.078388 55.181725,28.727905 55.181725,18.377422 
	C55.617081,18.370104 56.052437,18.362783 56.487793,18.355465 
	C56.487793,29.469196 56.487793,40.582928 56.487793,51.875870 
	C52.406239,51.875870 47.947449,51.875870 42.922256,51.875870 
	C42.922256,47.674294 42.922256,43.481339 42.922256,39.097095 
	C39.093727,39.097095 35.828568,39.097095 32.756863,39.097095 
	C32.060299,43.459007 31.391153,47.649231 30.350945,51.620216 
z"
                  />
                  <path
                    fill="#000000"
                    opacity="1.000000"
                    stroke="none"
                    d="
M19.681873,19.988110 
	C19.681820,28.650854 19.681820,36.811630 19.681820,44.972404 
	C19.035633,44.969261 18.389446,44.966118 17.743259,44.962975 
	C17.743259,33.884975 17.743259,22.806973 17.743259,11.317225 
	C21.952951,11.317225 26.672888,11.317225 31.835438,11.317225 
	C31.835438,15.164822 31.835438,19.235399 31.835438,23.678123 
	C35.636707,23.678123 39.010963,23.678123 43.091232,23.678123 
	C43.091232,19.441174 43.091232,15.284398 43.091232,11.127622 
	C43.540756,11.121996 43.990280,11.116370 44.439804,11.110745 
	C44.439804,16.131527 44.439804,21.152309 44.439804,26.438446 
	C39.655037,26.438446 34.744270,26.438446 29.374971,26.438446 
	C29.374971,22.174730 29.374971,18.080633 29.374971,13.643161 
	C26.062572,13.643161 23.188822,13.643161 19.681925,13.643161 
	C19.681925,15.583994 19.681925,17.535069 19.681873,19.988110 
z"
                  />
                </svg>
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
