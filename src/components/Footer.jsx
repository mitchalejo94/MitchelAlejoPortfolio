import React from "react";
import linkedIn from "../assets/linkedIn.png";
import gitHub from "../assets/gitHub.png";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="py-3 my-4">
        <div className="footerContainer">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a
                href="https://www.linkedin.com/in/mitchelalejo/"
                className="nav-link px-2 text-body-secondary"
              >
                <img
                  src={linkedIn}
                  alt=""
                  style={{
                    width: "40px",
                    height: "auto",
                    padding: "0",
                    margin: "0",
                  }}
                />
              </a>
            </li>

            <li className="nav-item">
              <a
                href="https://github.com/mitchalejo94"
                className="nav-link px-2 text-body-secondary"
              >
                <img
                  src={gitHub}
                  alt=""
                  style={{
                    width: "40px",
                    height: "auto",
                    padding: "0",
                    margin: "0",
                  }}
                />
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
