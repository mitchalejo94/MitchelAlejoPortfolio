import "./Header.css";
import React from "react";

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
          <div>Fixed Top Block</div>
        </div>
      </div>
    </>
  );
}

export default Header;
