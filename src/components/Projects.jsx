import { Row, Col, Card, Carousel, Anchor } from "antd";
import resume from "../assets/Mitchel.Alejo.Resume.pdf";
import resumeImage from "../assets/pngtree-vector-resume-icon-png-image_927259.jpg";
import fvpLogo from "../assets/FVPLOGO.svg";
import React, { useEffect, useState } from "react";
import "./Projects.css";

const { Meta } = Card;

function Projects() {
  const topRef = React.useRef(null);
  const [targetOffset, setTargetOffset] = useState();
  useEffect(() => {
    setTargetOffset(topRef.current?.clientHeight);
  }, []);
  return (
    <>
      <div className="projectPageContainer">
        <div className="projectText">
          <h2>Projects:</h2>
          <p>
            Take a look at my projects blah dsafsdgasdf dsfdsfsd sdf dsf dsf aSD
            ASD SAG GFDG DFG FGAS D DSF FD GSDF
          </p>
        </div>
        <div className="cardContainer">
          <div className="individualCard">
            <Card
              onClick={() => {
                window.open(resume, "_blank");
              }}
              cover={
                <img className="cardImage" alt="example" src={resumeImage} />
              }
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
                window.open("https://foxvalleypainters.netlify.app/", "_blank");
              }}
              cover={<img className="cardImage" alt="example" src={fvpLogo} />}
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
              cover={<img className="cardImage" alt="example" />}
            >
              <Meta title="TechBuy Project" description="View Project" />
            </Card>
          </div>
          <div className="individualCard">
            <Card
              onClick={() => {
                window.open(" https://tech-buy.netlify.app", "_blank");
              }}
              cover={<img className="cardImage" alt="example" />}
            >
              <Meta title="TechBuy Project" description="View Project" />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
