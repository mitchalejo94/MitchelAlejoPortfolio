import { Card } from "antd";
import { useInView } from "react-intersection-observer";
import resume from "../assets/Mitchel.Alejo.Resume.pdf";

import fvpLogo from "../assets/FVPLOGO.svg";
import React, { useEffect, useState } from "react";
import ResumeSVG from "../assets/ResumeSVG.svg";
import comingSoon from "../assets/comingSoon.svg";
import "./Projects.css";

function Projects() {
  const topRef = React.useRef(null);
  const [targetOffset, setTargetOffset] = useState();
  const { ref: projectRef, inView: projectIsVisible } = useInView({
    threshold: 0.2,
  });
  const animateProject = projectIsVisible ? "animateProject" : "";

  useEffect(() => {
    setTargetOffset(topRef.current?.clientHeight);
  }, []);
  return (
    <>
      <div className="projectPageContainer">
        <div className="projectTitle">
          <h2>Projects:</h2>
        </div>
        <div ref={projectRef} className="cardContainer">
          <div>
            <Card
              id="foxValleyCard"
              className={`individualCard ${animateProject} `}
              onClick={() => {
                window.open("https://foxvalleypainters.netlify.app/", "_blank");
              }}
              cover={<img className="cardImage" alt="example" src={fvpLogo} />}
            >
              <div className="projectCardTitle">Fox Valley Painters</div>
            </Card>
          </div>
          <div>
            <Card
              className={`individualCard ${animateProject} `}
              onClick={() => {
                window.open(" https://tech-buy.netlify.app", "_blank");
              }}
              cover={<img className="cardImage" alt="example" />}
            >
              <div className="projectCardTitle">Tech-Buy</div>
            </Card>
          </div>
          <div>
            <Card
              className={`individualCard ${animateProject} `}
              onClick={() => {
                window.open(resume, "_blank");
              }}
              cover={
                <img className="cardImage" alt="example" src={ResumeSVG} />
              }
            >
              <div className="projectCardTitle">My Resume</div>
            </Card>
          </div>

          <div>
            <Card
              className={`individualCard ${animateProject} `}
              cover={
                <img className="cardImage" alt="example" src={comingSoon} />
              }
            >
              <div className="projectCardTitle">
                eCom: Your E-Commerce Website{" "}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
