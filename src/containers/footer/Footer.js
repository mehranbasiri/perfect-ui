import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="footer-heading">
        <h1 className="gradient__text">
          Do You want to step in to the future before others
        </h1>
      </div>
      <div className="footer-btn">
        <p>Request Earle Access</p>
      </div>
      <div className="footer-links">
        <div className="footer-links-logo">
          <img src={logo} alt="footer logo" />
          <p>iran,karaj,kamalshahr bolvar shahrdari golestan 1</p>
        </div>
        <div className="footer-links-div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="footer-links-div">
          <h4>Company</h4>
          <p>Term & Conditions</p>
          <p>Privacy Policy</p>

          <p>Contact</p>
        </div>
        <div className="footer-links-div">
          <h4>Get in touch</h4>
          <p>Term & Conditions</p>
          <p>+989384029498</p>

          <p>Contact</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>copyright</p>
      </div>
    </div>
  );
};

export default Footer;
