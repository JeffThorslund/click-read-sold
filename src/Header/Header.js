import React, { Component } from "react";
import "./Header.css";
import Logo from "./Logo.png";
import VectorLeft from "./VectorLeft.png"
import VectorRight from "./VectorRight.png"

import OnboardForm from "./OnboardForm";

export default class Header extends Component {
  render() {
    return (
      <div className="wrapper">
        
{/**/}
        

          <div className="grid-parent">
            <div id="logo" className="grid-child">
              <img src={Logo} alt="back" id='img'/>
            </div>

            <div id="header-phrase" className="grid-child">
              An organizational tool for unpaid teams.
            </div>

            <div id="explain" className="grid-child">
              Your team is driven by making a <div className='bold'>difference</div>, not by a salary.{" "}
              
            </div>

            <div id="form" className="grid-child">
              <OnboardForm />
            </div>

            <div id="problem" className="grid-child">
              <div id="slogan-wrapper">
                <div className="left">
                  We know your <br />
                  We have your
                </div>

                <div className="right">
                  problems <br />
                  solutions
                </div>
              </div>
            
          </div>
        </div>
        <img src={VectorRight} alt='corner' className='corner' id='right'/>
        {/*<img src={VectorLeft} alt='corner' className='corner' id='left'/>
        
        <div className="background" id="tint-fringe"></div>*/}
      </div>
    );
  }
}
