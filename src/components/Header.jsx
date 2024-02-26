import "./Header.css";
import React, { useState, useEffect } from "react";
import { Image } from "antd";
import Photo from "../assets/Photo.jpeg";

function Header() {
  const [text, setText] = useState("Mitchel A. Alejo");

  useEffect(() => {
    const changeText = () => {
      setText((prevText) =>
        prevText === "Mitchel A. Alejo 👨🏻‍💻"
          ? "a Software Developer"
          : "Mitchel A. Alejo 👨🏻‍💻"
      );
    };

    const timer = setInterval(changeText, 2000);

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div>
        <div className="textChangeContainer">
          <div className="text1">Hello, I am</div>
          <div className="textChange">{text}</div>
          <div className="introText">Welcome to my portfolio.</div>
          <div className="myPhoto">
            <Image width={240} src={Photo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
