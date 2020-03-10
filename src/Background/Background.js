import React from "react";
import "./Background.scss";
import BackgroundImg from "./Background.png";

function Background() {
  return (
    <div id="sunrise-wrapper" className="background">
      {/*<img
        src={BackgroundImg}
        alt="The Background"
        id="sunrise"
        className="background"
      />*/}
      <div className="background" id="tint"></div>

       <img src='src\Background\Vector2.svg' id='left' />
      

    </div>
  );
}

export default Background;

