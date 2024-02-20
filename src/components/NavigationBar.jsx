import React from "react";
import { Image, Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { Link } from "react-scroll";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <div className="topBar">
      <Breadcrumb
        items={[
          {
            href: "",
            title: <HomeOutlined />,
          },
          {
            href: "",
            title: (
              <>
                <div className="linkContainer">
                  <div className="indLinkContainer">
                    <Link to="aboutMePage" smooth={true} duration={700}>
                      About Me
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
    </div>
  );
}

export default NavigationBar;
