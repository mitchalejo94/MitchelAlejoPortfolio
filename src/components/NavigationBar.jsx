import React from "react";
import { Image, Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";

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
                <a href="/#projectsPage">Projects</a>
              </>
            ),
          },
        ]}
      />
    </div>
  );
}

export default NavigationBar;
