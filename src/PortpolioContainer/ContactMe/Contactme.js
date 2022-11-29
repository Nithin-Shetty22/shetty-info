import React from "react";
import './Contactme.css';
function Contactme(props) {
  return (
    <div
      className="main-container fade-in"
      id="ContactMe">
      <div className="heading-container">
        <div className="screen-heading">
          <span>Contact Me</span>
        </div>
        <div className="screen-sub-heading">
          <span>Lets Keep In Touch</span>
        </div>
        <div className="heading-seperator">
          <div className="seperator-line"></div>
          <div className="seperator-blob">
            <div></div>
          </div>
        </div>
      </div>
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <p className="styles_typicalWrapper__1_Uvh">Get In Touch 📧</p>
          </h2>{" "}
          <a href="https://web.facebook.com/?_rdc=1&amp;_rdr">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="#">
            <i className="fa fa-google-plus-square"></i>
          </a>
          <a href="https://www.instagram.com/instructor_ehizeex/">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCSSr5ZDFbilpZ592_ycoAwA">
            <i className="fa fa-youtube-square"></i>
          </a>
          <a href="https://twitter.com/Ehiedu_baba">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img
              src="./mailz.jpeg"
              alt="image not found"
            />
          </div>
          <form>
            <p></p>
            <label for="name">Name</label>
            <input type="text" value="" />
            <label for="email">Email</label>
            <input type="email" value="" />
            <label for="message">Message</label>
            <textarea type="text"></textarea>
            <div className="send-btn">
              <button type="submit">
                send<i className="fa fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="scroll-container"><button className="btn-scroll"> <i className="fa fa-arrow-up"></i></button></div>
    </div>
  );
}

export default Contactme;
