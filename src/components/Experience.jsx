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
        <div className="experienceTextContainer">
          <section>
            <div className="skillsContainer">
              {" "}
              <h1>Skills:</h1>
              <p>
                My skill set includes JavaScript, React, Redux, Node.js,
                Express, PostgreSQL, mySql, Sequelize, Next.js, TailwindCSS,
                HTML, CSS, and Git, I possess a solid grasp of both front-end
                and back-end technologies crucial for crafting modern,
                user-centric web applications.
              </p>
            </div>

            <div className="educationContainer">
              <h1>Education:</h1>
              <div className="educationList">
                <ul className="listItem">Dominican University</ul>
                <ul className="listItem">
                  •Bachelor of Arts, Criminology and Sociology
                </ul>

                <ul className="listItem">
                  Fullstack Academy Web Development Bootcamp
                </ul>
                <ul className="listItem">•Software Engineering Certificate</ul>
              </div>
            </div>
          </section>
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
            <div className="cardTitle">My Resume</div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Experience;
