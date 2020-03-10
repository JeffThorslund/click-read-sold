import React from "react";
import "./Section3.css";
import { IoIosRocket } from "react-icons/io";

function Section3() {
  return (
    <div className="section3-wrapper">
      <div id="kicker">What's the kicker? <br />

      <div className='bold'>It's Dead Easy.</div></div>

      <div className="right-wrapper" id="dot">
        <div className="flex-container">
          <div className="icon">
            <IoIosRocket size="6em" color="#ed6663" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
