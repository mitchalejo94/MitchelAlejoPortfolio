import { useInView } from "react-intersection-observer";
import "./Experience.css";
import { Card } from "antd";
import resume from "../assets/Mitchel.Alejo.Resume.pdf";
import resumeImage from "../assets/pngtree-vector-resume-icon-png-image_927259.jpg";

function Experience() {
  const { ref: cardRef, inView: cardIsVisible } = useInView();

  const animateCard = cardIsVisible ? "animateCard" : "";

  return (
    <>
      <div className="experiencePageContainer">
        <div className="educationContainer">
          <section>
            <div className="educationText">
              <h1>Education</h1>
              <ul>
                <li>Dominican University</li>
                <li>FullStack</li>
              </ul>
            </div>
          </section>
          <section>
            <Card
              ref={cardRef}
              className={`resumeCard ${animateCard} `}
              onClick={() => {
                window.open(resume, "_blank");
              }}
              cover={
                <img className="resumeImage" alt="example" src={resumeImage} />
              }
            >
              <div className="cardTitle">My Resume</div>
            </Card>
          </section>
        </div>
        <div className="skillsContainer">
          <div className="skillsText">
            <h1>Skills</h1>

            <p>
              Yapper you are doing me a frighten he made many woofs very jealous
              pupper vvv wow such tempt, heckin lotsa pats heck. Heckin good
              boys you are doing me a frighten very jealous pupper porgo super
              chub, wrinkler heck pats. Woofer heckin good boys and girls puggo
              many pats, length boy. Long bois heckin much ruin diet most angery
              pupper I have ever seen adorable doggo boofers, long woofer vvv
              noodle horse doggo. Lotsa pats length boy smol borking doggo with
              a long snoot for pats heckin angery woofer, wow such tempt shibe.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
