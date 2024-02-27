import { useInView } from "react-intersection-observer";
import "./Experience.css";
import { Card } from "antd";
import resume from "../assets/Mitchel.Alejo.Resume.pdf";

import ResumeSVG from "../assets/ResumeSVG.svg";
function Experience() {
  const { ref: cardRef, inView: cardIsVisible } = useInView();

  const animateCard = cardIsVisible ? "animateCard" : "";

  return (
    <>
      <div className="experiencePageContainer">
        <div className="skillsContainer">
          <section>
            {" "}
            <h2>Skills:</h2>
            <p>
              My skill set includes JavaScript, React, Redux, Node.js, Express,
              PostgreSQL, mySql, Sequelize, Next.js, TailwindCSS, HTML, CSS, and
              Git, I possess a solid grasp of both front-end and back-end
              technologies crucial for crafting modern, user-centric web
              applications.
            </p>
          </section>
        </div>
        <div className="educationContainer">
          <h2>Education:</h2>
          <div className="educationList">
            <h3 className="listItem EduTitle">Dominican University</h3>
            <h3 className="listItem EduDescrip">
              B.A- Criminology and Sociology
            </h3>

            <h3 className="listItem EduTitle">Fullstack Academy Bootcamp</h3>
            <h3 className="listItem EduDescrip">
              Certificate in Web Development
            </h3>
          </div>
        </div>

        <div className="resumeCardContainer">
          <Card
            ref={cardRef}
            className={`resumeCard ${animateCard} `}
            onClick={() => {
              window.open(resume, "_blank");
            }}
            cover={
              <img className="resumeImage" alt="example" src={ResumeSVG} />
            }
          >
            <div className="cardTitle">Resume</div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Experience;
