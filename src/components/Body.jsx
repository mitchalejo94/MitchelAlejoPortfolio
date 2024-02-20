// import React from 'react'
import { Anchor, Row, Col, Carousel, Card, Avatar } from "antd";
import React, { useEffect, useState } from "react";
import "./Body.css";
import resume from "../assets/Mitchel.Alejo.Resume.pdf";
import resumeImage from "../assets/pngtree-vector-resume-icon-png-image_927259.jpg";
import fvpLogo from "../assets/FVPLOGO.svg";

const { Meta } = Card;
const contentStyle = {
  height: "10rem",
  color: "#fff",
  lineHeight: "80vh",
  textAlign: "center",
  background: "gray",
};

function Body() {
  const topRef = React.useRef(null);
  const [targetOffset, setTargetOffset] = useState();
  useEffect(() => {
    setTargetOffset(topRef.current?.clientHeight);
  }, []);

  return (
    <>
      <Row>
        <Col span={18}>
          <div
            id="part-1"
            style={{
              height: "84vh",
              background: "#546a7b",
              border: "#393d3f",
              marginTop: "1vh",
            }}
          >
            <p>
              Feel free to browse through my projects, and don't hesitate to
              reach out. I'm always eager to connect with like-minded
              individuals and explore new opportunities. Happy coding! Mitchel
              A. Alejo
            </p>
            <div className="cardContainer">
              <div className="individualCard">
                <Card
                  onClick={() => {
                    window.open(resume, "_blank");
                  }}
                  style={{
                    width: 200,
                    height: 300,
                  }}
                  cover={<img alt="example" src={resumeImage} />}
                >
                  <Meta
                    title="Mitchel Alejo Resume"
                    description="View/Download Resume"
                  />
                </Card>
              </div>
              <div className="individualCard">
                <Card
                  onClick={() => {
                    window.open(
                      "https://foxvalleypainters.netlify.app/",
                      "_blank"
                    );
                  }}
                  style={{
                    width: 200,
                    height: 300,
                  }}
                  cover={<img alt="example" src={fvpLogo} />}
                >
                  <Meta
                    title="Fox Valley Painters Project"
                    description="View Project"
                  />
                </Card>
              </div>
              <div className="individualCard">
                <Card
                  onClick={() => {
                    window.open(" https://tech-buy.netlify.app", "_blank");
                  }}
                  style={{
                    width: 200,
                    height: 300,
                  }}
                  cover={<img alt="example" />}
                >
                  <Meta title="TechBuy Project" description="View Project" />
                </Card>
              </div>
            </div>

            <Carousel effect="fade">
              <div>
                <h3 style={contentStyle}>1</h3>
              </div>
              <div>
                <h3 style={contentStyle}>2</h3>
              </div>
            </Carousel>
          </div>
        </Col>

        <Col span={6}>
          <Anchor
            targetOffset={targetOffset}
            style={{
              marginTop: "1vh",
              background: "#708d81",
              height: "84vh",
              marginLeft: "5px",
            }}
          />
        </Col>
      </Row>
    </>
  );
}

export default Body;
