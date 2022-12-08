import React,{useRef} from "react";
import emailjs from 'emailjs-com';
import './Contactme.css';
function Contactme(props) {
  const form = useRef();
  const sendEmail=(e)=>{
    console.log("inside sendEmail function");
    e.preventDefault();

    emailjs.sendForm('service_knauplq', 'template_oabuc8s', form.current, 'pJm_AridQ6nRCImQ5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
  }
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
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img
              src="./mailz.jpeg"
              alt="image not found"
            />
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <p></p>
            <label for="name">Name</label>
            <input type="text" name="name"/>
            <label for="email">Email</label>
            <input type="email" name="email"/>
            <label for="message">Message</label>
            <textarea type="text" name="message"></textarea>
            <div className="send-btn">
            <input type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
      <div className="scroll-container"><button className="btn-scroll"> <i className="fa fa-arrow-up"></i></button></div>
    </div>
  );
}

export default Contactme;
