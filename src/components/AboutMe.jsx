import { Row, Col } from "antd";

import "./AboutMe.css";

function AboutMe() {
  return (
    <>
      <Row>
        <Col
          style={{
            height: "84vh",
            background: "#546a7b",
            border: "#393d3f",
            marginTop: "1vh",
          }}
        >
          <div className="aboutMeText">
            <section>
              {" "}
              <h2>About Me:</h2>
              <p>
                I am passionate about web development. Feel free to browse
                through my projects, and don't hesitate to reach out. I'm always
                eager to connect with like-minded individuals and explore new
                opportunities. Happy coding! Mitchel A. Alejo
              </p>
            </section>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default AboutMe;
