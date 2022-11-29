import React, { useState } from "react";
import "./Navbar.css";

function Navbar(props) {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div>
      <div className="n-wrapper">
        <div className="n-left">
          <div className="n-name">Nithin Shetty</div>
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none" }}>
              <li>Home</li>
              <li>Services</li>
              <li>Experience</li>
              <li>Portfolio</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <button className="button">Contact</button>
          {/* hamburger menu start */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <i class="fa fa-bars"></i>
            </a>
          </div>
        </div>
      </div>
      <div className={showMediaIcons ? "mobile-n-list" : "temp"}>
        <ul style={{ listStyleType: "none" }}>
          <li>Home</li>
          <li>Services</li>
          <li>Experience</li>
          <li>Portfolio</li>
          <li>Testimonials</li>
        </ul>{" "}
      </div>
    </div>
  );
}

export default Navbar;
