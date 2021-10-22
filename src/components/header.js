import React from "react";
import Typed from "react-typed";

const header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Web development and Web Design</h1>
        <Typed
          className="typed-text"
          strings={["Web Design", "Web Development", "UI/UX Design"]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
        <a href="#" className="btn-main-offer">
          Contact me
        </a>
      </div>
    </div>
  );
};

export default header;
