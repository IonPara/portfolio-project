import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Article from "../../features/components/Article";
import "../News/News.css";
import "../About/About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const News = ({ news }) => {
  const [showInfo, setShowInfo] = useState("");

  const theme = useSelector((state) => state.portfolio.theme);

  return (
    <div className="contact-container animate__animated animate__fadeInUp">
      <h1 className="contact-heading-container news-heading-container">
        Tech <span className={`text-${theme}`}>News</span>
      </h1>
      <FontAwesomeIcon
        onClick={() => {
          setShowInfo("");
        }}
        className={
          showInfo || showInfo === 0
            ? "close-icon article-close-icon animate__animated animate__jackInTheBox"
            : "hide"
        }
        icon={faClose}
      />
      <div className="tech-news-table">
        <div className="">
          <div className="text-2xl d-flex justify-evenly th">
            <div className={`news mb-2  text-${theme}`}>News</div>
            <div className={`date mb-2  text-${theme}`}>Date</div>
            <div className={`category mb-2 pl-2  text-${theme}`}>Category</div>
          </div>
        </div>
        <div>
          {news.map((article, index) => (
            <Article
              showInfo={showInfo}
              setShowInfo={setShowInfo}
              article={article}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
