// import React from 'react'
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Experience from "./Experience";
import "./Body.css";

function Body() {
  return (
    <>
      <section id="aboutMePage">
        <AboutMe />
      </section>
      <section id="experiencePage">
        <Experience />
      </section>
      <section id="projectsPage">
        <Projects />
      </section>
    </>
  );
}

export default Body;
