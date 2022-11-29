import React from "react";
import './Aboutme.css';
function Aboutme(props) {
  return (
    <div
      className="about-me-container screen-container fade-in"
      id="AboutMe"
    >
      <div className="about-me-parent">
        <div className="heading-container">
          <div className="screen-heading">
            <span>About Me</span>
          </div>
          <div className="screen-sub-heading">
            <span>Why Choose Me?</span>
          </div>
          <div className="heading-seperator">
            <div className="seperator-line"></div>
            <div className="seperator-blob">
            </div>
          </div>
        </div>
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              Full stack web and mobile developer with background knowledge of
              MERN stacks with redux, along with a knack of building
              applications with utmost efficiency. Strong professional with a
              BSC willing to be an asset for an organization.
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>Here are a Few Highlights:</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Full Stack web and mobile development</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Interactive Front End as per the design</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>React and React Native</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Redux for State Mnanagement</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Building REST API</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Managing database</span>
              </div>
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn"> Hire Me </button>
              <a href="NithinResume.pdf" download='NithinResume.pdf'>
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
