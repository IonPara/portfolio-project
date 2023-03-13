import React from "react";
import "./Contact.css";
import "../About/About.css";
import "../Portfolio/Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationPin,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useState } from "react";
import { send } from "emailjs-com";

const Contact = () => {
  const theme = useSelector((state) => state.portfolio.theme);
  const [toSend, setToSend] = useState({
    from_name: "",
    reply_to: "",
    to_name: "Ion Para",
    message: "",
  });

  const [formResponse, setFormResponse] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_ymbbgkm", "template_iajfgo8", toSend, "WkZreCmCmN4lp-y7L")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setFormResponse("Message successfully sent!");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setFormResponse("Failed to send the message!");
      });
    setToSend({
      from_name: "",
      reply_to: "",
      to_name: "Ion Para",
      message: "",
    });
  };

  return (
    <div className="contact-container animate__animated animate__fadeInUp">
      <h1 className="contact-heading-container">
        Get in <span className={`text-${theme}`}>Touch</span>
      </h1>
      <p
        className={
          formResponse
            ? formResponse === "Message successfully sent!"
              ? "send-message bg-success animate__animated animate__fadeInRight"
              : "send-message bg-danger"
            : "hide"
        }
      >
        {formResponse}
        <FontAwesomeIcon
          onClick={() => setFormResponse("")}
          className="close-alert"
          icon={faClose}
        />
      </p>
      <div className="contact-details-container d-flex justify space-evenly">
        <ul className="contact-details-list">
          <li className="list-item d-flex items-center">
            <FontAwesomeIcon
              className={`text-${theme} mr-2`}
              icon={faLocationPin}
            />
            Downham Market, Norfolk, UK
          </li>
          <li className="list-item d-flex items-center">
            <FontAwesomeIcon className={`text-${theme} mr-2`} icon={faPhone} />
            +44 78 822 414 76
          </li>
          <li className="list-item d-flex items-center">
            <FontAwesomeIcon
              className={`text-${theme} mr-2`}
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
          <li className="list-item d-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className={`bi bi-linkedin linkedIn mr-2 text-${theme}`}
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
            <a
              className="text-white text-left"
              href="https://www.linkedin.com/in/ion-para-934261211/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.linkedin.com/in/ion-para-934261211/
            </a>
          </li>
        </ul>
        <form onSubmit={onSubmit} className="contact-details-form">
          <div className="d-flex">
            <input
              className="input mr-2"
              type={"text"}
              placeholder="Name"
              required
              value={toSend.from_name}
              onChange={(e) =>
                setToSend({ ...toSend, from_name: e.target.value })
              }
            />
            <input
              className="input"
              type={"email"}
              placeholder="Email"
              required
              value={toSend.reply_to}
              onChange={(e) =>
                setToSend({ ...toSend, reply_to: e.target.value })
              }
            />
          </div>
          <textarea
            className="textarea"
            type="text"
            placeholder="Message"
            required
            value={toSend.message}
            onChange={(e) => setToSend({ ...toSend, message: e.target.value })}
          />
          <button
            type="submit"
            className={`d-flex items-center justify-center send-message-btn bg-${theme}`}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
