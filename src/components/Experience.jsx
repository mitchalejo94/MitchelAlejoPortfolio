import React from "react";
import "./Experience.css";
import { Card } from "antd";
import resume from "../assets/Mitchel.Alejo.Resume.pdf";
const { Meta } = Card;
import resumeImage from "../assets/pngtree-vector-resume-icon-png-image_927259.jpg";
function Experience() {
  return (
    <>
      <div className="experiencePageContainer">
        <div className="educationContainer">
          <section>
            <h1>Education</h1>
            <ul>
              <li>Dominican University</li>
              <li>FullStack</li>
            </ul>
          </section>
        </div>
        <div className="skillsContainer">
          <section>
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
            <div className="resumeCard">
              <Card
                onClick={() => {
                  window.open(resume, "_blank");
                }}
                cover={
                  <img
                    className="resumeImage"
                    alt="example"
                    src={resumeImage}
                  />
                }
              >
                <Meta
                  title="Mitchel Alejo Resume"
                  description="View/Download Resume"
                />
              </Card>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Experience;