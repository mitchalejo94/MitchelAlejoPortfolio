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
          <h1>Skills</h1>

          <p>
            Yapper you are doing me a frighten he made many woofs very jealous
            pupper vvv wow such tempt, heckin lotsa pats heck. Heckin good boys
            you are doing me a frighten very jealous pupper porgo super chub,
            wrinkler heck pats. Woofer heckin good boys and girls puggo many
            pats, length boy. Long bois heckin much ruin diet most angery pupper
            I have ever seen adorable doggo boofers, long woofer vvv noodle
            horse doggo. Lotsa pats length boy smol borking doggo with a long
            snoot for pats heckin angery woofer, wow such tempt shibe.
          </p>
        </div>

        <div className="educationContainer">
          <section>
            <div className="educationText">
              <h1>Education</h1>
              <ul>
                <li>Dominican University | 08/2012 - 05/2016</li>
                <ul>Bachelor of Arts, Criminology and Sociology</ul>
                <ul>
                  Pi Gamma Mu Honor Society- International Honor Society in
                  Social Sciences.
                </ul>
                <li>
                  Fullstack Academy Web Development Bootcamp | 07/2022 - 02/2023
                </li>
                <ul>Software Engineering Certificate</ul>
              </ul>
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
