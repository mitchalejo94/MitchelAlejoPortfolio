import { Breadcrumb } from "antd";
import { Link } from "react-scroll";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <>
      <Breadcrumb
        className="topBar"
        items={[
          {
            title: (
              <>
                <div className="linkContainer">
                  <div className="indLinkContainer">
                    <Link to="aboutMePage" smooth={true} duration={700}>
                      About Me
                    </Link>
                  </div>
                  <div className="indLinkContainer">
                    <Link to="experiencePage" smooth={true} duration={700}>
                      Experience
                    </Link>
                  </div>
                  <div className="indLinkContainer">
                    <Link to="projectsPage" smooth={true} duration={700}>
                      Projects
                    </Link>
                  </div>
                </div>
              </>
            ),
          },
        ]}
      />
    </>
  );
}

export default NavigationBar;
