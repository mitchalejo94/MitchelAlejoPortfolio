import React from "react";
import linkedIn from "../assets/linkedIn.png";
import gitHub from "../assets/gitHub.png";
import email from "../assets/email.svg";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="py-3 my-4">
        <div className="footerContainer">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="https://www.linkedin.com/in/mitchelalejo/">
                <img className="footerIcon" src={linkedIn} alt="" />
              </a>
            </li>

            <li className="nav-item">
              <a href="https://github.com/mitchalejo94" className="footerIcon">
                <img src={gitHub} alt="" className="footerIcon" />
              </a>
            </li>
            <li className="nav-item">
              <a className="footerIcon" href="mailto:michalejo94@gmail.com">
                <img src={email} alt="" className="footerIcon" />
              </a>
            </li>
          </ul>
          <p className="text-center text-body-secondary">© Mitchel A. Alejo</p>
        </div>{" "}
      </footer>
    </>
  );
}

export default Footer;
