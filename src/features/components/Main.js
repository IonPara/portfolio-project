import React from "react";
import bgVid from "../../assets/video/bg-vid.mp4";

const Main = () => {
  return (
    <main className="main">
      <div className="background-cover"></div>
      <video src={bgVid} autoPlay muted loop />
    </main>
  );
};

export default Main;
