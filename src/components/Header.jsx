import "./Header.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  const topRef = React.useRef(null);
  return (
    <>
      {/* <h1>test header</h1> */}
      <div>
        <div
          style={{
            height: "10vh",
            background: "#393d3f",
            // position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            // color: "",
          }}
          ref={topRef}
        >
          {/* <div>Fixed Top Block</div> */}
          <div className="navigationBar">
            <Navbar className="navbar navbar-dark bg-dark" expand="lg">
              <Container>
                <Link to="/" className="navbar-brand" id="navBarTitle">
                  Mitchel A. Alejo
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
              </Container>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
