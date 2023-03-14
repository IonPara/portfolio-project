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
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 133 138"
                  enable-background="new 0 0 133 138"
                >
                  <path
                    fill="#000000"
                    opacity="1.000000"
                    stroke="none"
                    d="
M91.000000,1.000000 
	C105.241821,1.000000 119.483643,1.000000 134.000000,1.000000 
	C134.000000,9.352222 134.000000,17.707445 133.631622,26.529480 
	C127.100502,23.865553 125.119339,25.014690 124.991440,31.811775 
	C124.960114,33.476612 124.979805,35.142448 124.979668,36.807827 
	C124.977310,65.785484 124.879021,94.763756 125.065422,123.740204 
	C125.097748,128.764755 123.425484,130.613708 118.449951,130.404999 
	C111.800110,130.126022 105.122414,130.142029 98.470802,130.398239 
	C93.643684,130.584152 92.031136,128.581345 92.118538,123.904205 
	C92.320755,113.083260 92.077408,102.254623 92.199722,91.431206 
	C92.243462,87.561523 90.657356,86.080742 86.854721,86.109497 
	C73.532524,86.210220 60.208885,86.194862 46.886326,86.123817 
	C43.316071,86.104774 41.761730,87.556961 41.814507,91.190552 
	C41.928181,99.015984 41.676163,106.848282 41.866692,114.670631 
	C42.064331,122.784805 42.607788,130.890564 43.000000,139.000000 
	C29.092077,139.000000 15.184153,139.000000 1.000000,139.000000 
	C1.000000,130.981232 1.000000,122.959290 1.382688,114.445251 
	C7.605415,115.405174 8.971272,114.389961 9.138859,108.417145 
	C9.190229,106.586304 9.161562,104.753090 9.161761,102.920959 
	C9.164903,74.106255 9.150482,45.291534 9.181602,16.476862 
	C9.188466,10.121659 9.645227,9.698211 16.037796,9.647940 
	C22.533161,9.596860 29.036852,9.832788 35.522541,9.577826 
	C40.322582,9.389130 41.988487,11.332981 41.897358,16.041634 
	C41.687920,26.863665 41.935581,37.693848 41.812176,48.518608 
	C41.768394,52.358860 43.277695,53.905369 47.116058,53.875671 
	C60.273335,53.773880 73.432701,53.759701 86.589523,53.889229 
	C90.623871,53.928947 92.256821,52.426327 92.201500,48.313072 
	C92.046982,36.822674 92.260345,25.327358 92.108894,13.836879 
	C92.052444,9.553791 91.387489,5.278724 91.000000,1.000000 
z"
                  />
                  <path
                    fill={color}
                    opacity="1.000000"
                    stroke="none"
                    d="
M43.428459,139.000000 
	C42.607788,130.890564 42.064331,122.784805 41.866692,114.670631 
	C41.676163,106.848282 41.928181,99.015984 41.814507,91.190552 
	C41.761730,87.556961 43.316071,86.104774 46.886326,86.123817 
	C60.208885,86.194862 73.532524,86.210220 86.854721,86.109497 
	C90.657356,86.080742 92.243462,87.561523 92.199722,91.431206 
	C92.077408,102.254623 92.320755,113.083260 92.118538,123.904205 
	C92.031136,128.581345 93.643684,130.584152 98.470802,130.398239 
	C105.122414,130.142029 111.800110,130.126022 118.449951,130.404999 
	C123.425484,130.613708 125.097748,128.764755 125.065422,123.740204 
	C124.879021,94.763756 124.977310,65.785484 124.979668,36.807827 
	C124.979805,35.142448 124.960114,33.476612 124.991440,31.811775 
	C125.119339,25.014690 127.100502,23.865553 133.631622,26.998146 
	C134.000000,64.232239 134.000000,101.464478 134.000000,139.000000 
	C117.647018,139.000000 101.292168,139.000000 84.568069,138.539917 
	C84.243523,125.421432 84.202538,112.761841 84.381096,100.105339 
	C84.440636,95.884789 82.890373,94.030472 78.543869,94.138504 
	C71.219131,94.320587 63.886192,94.143875 56.557133,94.188850 
	C50.237396,94.227623 49.997662,94.575066 49.865341,101.131706 
	C49.610584,113.755150 49.292072,126.377312 49.000000,139.000000 
	C47.285641,139.000000 45.571285,139.000000 43.428459,139.000000 
z"
                  />
                  <path
                    fill={color}
                    opacity="1.000000"
                    stroke="none"
                    d="
M90.583336,1.000000 
	C91.387489,5.278724 92.052444,9.553791 92.108894,13.836879 
	C92.260345,25.327358 92.046982,36.822674 92.201500,48.313072 
	C92.256821,52.426327 90.623871,53.928947 86.589523,53.889229 
	C73.432701,53.759701 60.273335,53.773880 47.116058,53.875671 
	C43.277695,53.905369 41.768394,52.358860 41.812176,48.518608 
	C41.935581,37.693848 41.687920,26.863665 41.897358,16.041634 
	C41.988487,11.332981 40.322582,9.389130 35.522541,9.577826 
	C29.036852,9.832788 22.533161,9.596860 16.037796,9.647940 
	C9.645227,9.698211 9.188466,10.121659 9.181602,16.476862 
	C9.150482,45.291534 9.164903,74.106255 9.161761,102.920959 
	C9.161562,104.753090 9.190229,106.586304 9.138859,108.417145 
	C8.971272,114.389961 7.605415,115.405174 1.382688,113.976578 
	C1.000000,76.435326 1.000000,38.870644 1.000000,1.000000 
	C17.019596,1.000000 33.041138,1.000000 49.476757,1.465976 
	C49.886723,14.754958 49.953850,27.578629 49.834316,40.400558 
	C49.799263,44.160240 51.131935,45.912064 55.047558,45.851234 
	C63.205627,45.724499 71.368500,45.728661 79.526535,45.858784 
	C83.211647,45.917557 84.544220,44.334835 84.499191,40.750816 
	C84.373665,30.760677 84.316277,20.765667 84.507362,10.777850 
	C84.569878,7.510244 85.478386,4.258822 86.000000,1.000000 
	C87.388893,1.000000 88.777779,1.000000 90.583336,1.000000 
z"
                  />
                  <path
                    fill="#000000"
                    opacity="1.000000"
                    stroke="none"
                    d="
M85.531342,1.000000 
	C85.478386,4.258822 84.569878,7.510244 84.507362,10.777850 
	C84.316277,20.765667 84.373665,30.760677 84.499191,40.750816 
	C84.544220,44.334835 83.211647,45.917557 79.526535,45.858784 
	C71.368500,45.728661 63.205627,45.724499 55.047558,45.851234 
	C51.131935,45.912064 49.799263,44.160240 49.834316,40.400558 
	C49.953850,27.578629 49.886723,14.754958 49.945415,1.465976 
	C61.687561,1.000000 73.375122,1.000000 85.531342,1.000000 
z"
                  />
                  <path
                    fill="#000101"
                    opacity="1.000000"
                    stroke="none"
                    d="
M49.468658,139.000000 
	C49.292072,126.377312 49.610584,113.755150 49.865341,101.131706 
	C49.997662,94.575066 50.237396,94.227623 56.557133,94.188850 
	C63.886192,94.143875 71.219131,94.320587 78.543869,94.138504 
	C82.890373,94.030472 84.440636,95.884789 84.381096,100.105339 
	C84.202538,112.761841 84.243523,125.421432 84.099411,138.539917 
	C72.645775,139.000000 61.291546,139.000000 49.468658,139.000000 
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
