import { Card } from "antd";
import { useInView } from "react-intersection-observer";
import resume from "../assets/Mitchel.Alejo.Resume.pdf";
import resumeImage from "../assets/pngtree-vector-resume-icon-png-image_927259.jpg";
import fvpLogo from "../assets/FVPLOGO.svg";
import React, { useEffect, useState } from "react";
import "./Projects.css";

const { Meta } = Card;

function Projects() {
  const topRef = React.useRef(null);
  const [targetOffset, setTargetOffset] = useState();
  const { ref: projectRef, inView: projectIsVisible } = useInView();
  const animateProject = projectIsVisible ? "animateProject" : "";

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
          <div>
            <Card
              ref={projectRef}
              className={`individualCard ${animateProject} `}
              onClick={() => {
                window.open(resume, "_blank");
              }}
              cover={
                <img className="cardImage" alt="example" src={resumeImage} />
              }
            >
              <div className="projectCardTitle">My Resume</div>
            </Card>
          </div>
          <div>
            <Card
              ref={projectRef}
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
              ref={projectRef}
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
              ref={projectRef}
              className={`individualCard ${animateProject} `}
              onClick={() => {
                window.open(" https://tech-buy.netlify.app", "_blank");
              }}
              cover={<img className="cardImage" alt="example" />}
            >
              <div className="projectCardTitle">Tech-Buy</div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
