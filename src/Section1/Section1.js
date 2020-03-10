import React from "react";
import "./Section1.css";
import { IoMdBonfire } from "react-icons/io";

function Section1() {
  return (
    <div className="section1-wrapper">
      <div className="component-wrapper">
        <h1 id="forgotten">You’ve been forgotten about. </h1>

        <div id="solution">
          <div id="prompt"> Management tools are designed for:</div>
          <ul className="bold" id="points">
            <li id="points">Big Business </li>
            <li id="points">Huge Teams</li>
            <li id="points">Paid Employees</li>
          </ul>

          <h2 id="conclusion">That's not you. </h2>
        </div>
      </div>
      <div className="right-wrapper" id="dot">
        <div className="flex-container">
          <div className="icon">
            <IoMdBonfire size="20em" color="#ed6663" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
