import React from "react";
import "./Section2.css";
import { GoListOrdered, GoPerson, GoHeart } from "react-icons/go";

function Section2() {
  return (
    <div className="section2-wrapper">
      <div id="subtitle">
        Stop wasting time holding the team together. <br /> We cover 3
        essentials so you can focus on what matters.
      </div>

      <div className="card-deck">
        <div id="card-one" className="card">
          <div className="header-flex">
            <GoListOrdered size="2em" />
            <h1 className="title">Simplify Tasking</h1>
          </div>
          <div className="desc">
            Assign tasks with deadlines to team members. No more miscommunication.
          </div>
        </div>

        <div id="card-two" className="card">
          <div className="header-flex">
            <GoPerson size="2em" />
            <h1 className="title">Centralize Leaders</h1>
          </div>
          <div className="desc">
            Everyones information in one place, never scramble for a cell number
            again.
          </div>
        </div>

        <div id="card-three" className="card">
          <div className="header-flex">
            <GoHeart size='2em' />

            <h1 className="title">Visualize Goals</h1>
          </div>
          <div className="desc">
            Gameify your tasks with tool that shows your progress in an
            addicting visual interface.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
