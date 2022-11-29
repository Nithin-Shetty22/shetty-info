import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import Floatingdiv from "./Floatingdiv/Floatingdiv";
function Profile(props) {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
            <a href="https://www.linkedin.com/in/nithin-kumar-854338194">
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a href="mailto:nithinshetty388@gmail.com">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="https://www.instagram.com/_shetty_rocks/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://twitter.com/Shetty_Rocks_?t=QM2qOGVv_i-qqtNfuHbivw&s=09">
              <i className="fa fa-twitter"></i>
            </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Nithin Shetty</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Front-End Dev",
                    1000,
                    "Full Stack",
                    1000,
                    "Flutter Developer",
                    1000,
                    "Cross Platform",
                    1000,
                    "React",
                    1000,
                  ]}
                ></Typical>
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
            {''}
            Hire Me{""}
            </button>
            <a href="NithinResume.pdf" download='NithinResume.pdf'>
                <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
          
        </div>
        {/* <div className="n-right-profile"> */}
       
          <div className="profile-picture">
            <div className="profile-picture-background">
            </div>
          </div>
          {/* <img src = {"/glassesimoji.png"}/> */}
          {/* <div className="blur" style={{background:"rgb(238 210 255)"}}></div> */}
          {/* </div>   */}
      </div>
    </div>
  );
}

export default Profile;
