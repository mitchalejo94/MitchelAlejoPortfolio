import "./Header.css";

import React, { useState, useEffect } from "react";
import { Image, Breadcrumb } from "antd";

import Photo from "../assets/Photo.jpeg";

function Header() {
  const [text, setText] = useState("Mitchel A. Alejo");

  useEffect(() => {
    const changeText = () => {
      setText((prevText) =>
        prevText === "Mitchel A. Alejo"
          ? "a Software Developer"
          : "Mitchel A. Alejo"
      );
    };

    const timer = setInterval(changeText, 2000);

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div>
        <div className="textChangeContainer">
          <div className="text1">
            <h1>Hello, I am</h1>
          </div>
          <div className="textChange">
            <h1>{text}</h1>
          </div>
          <div className="introText">
            <h3>Welcome to my portfolio </h3>
          </div>
          <div className="myPhoto">
            <Image width={200} src={Photo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
