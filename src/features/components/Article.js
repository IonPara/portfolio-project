import React from "react";
import { useSelector } from "react-redux";

const Article = ({ article, showInfo, setShowInfo, index }) => {
  const theme = useSelector((state) => state.portfolio.theme);
  const { title, category, description, link, image_url, pubDate } = article;
  const techUpper = `${category[0][0].toUpperCase()}${category[0].slice(
    1,
    category[0].length
  )}`;

  return (
    <>
      <div
        onClick={() => {
          setShowInfo(index);
        }}
        className={"article-container table-row d-flex row-" + theme}
      >
        <div className="cell news pr-2">{title}</div>
        <div className="cell date">{pubDate.slice(0, 10)} </div>
        <div className="cell category pl-2">{techUpper}</div>
      </div>
      <div
        className={
          showInfo === index
            ? "article-details animate__animated animate__jackInTheBox"
            : "hide"
        }
      >
        <div className="article-details-inner d-flex justify-evenly mt-12">
          <div className="text-xl">
            {pubDate.slice(0, 10)}
            <span className={`text-${theme}`}>
              {pubDate.slice(10, pubDate.length)}
            </span>
          </div>
          <div className="text-xl">
            Category: <span className={`text-${theme}`}>{techUpper}</span>
          </div>
        </div>
        {image_url ? (
          <div className="article-img-container">
            <img src={image_url} alt="" />
          </div>
        ) : (
          ""
        )}
        <h3 className="mt-4 article-title">{title}</h3>
        <p>{description}</p>
        <a
          className={`complete-article text-lg text-${theme}`}
          href={link}
          target={"_blank"}
          rel="noreferrer"
        >
          Complete Article
        </a>
      </div>
    </>
  );
};

export default Article;
