import React from "react";
import "./possibility.css";

import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="" srcset="" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access To Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </p>
        <h4>Request Early Access To Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
