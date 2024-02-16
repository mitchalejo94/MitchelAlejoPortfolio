// import React from 'react'
import { Anchor, Row, Col } from "antd";
import React, { useEffect, useState } from "react";

function Body() {
  const topRef = React.useRef(null);
  const [targetOffset, setTargetOffset] = useState();
  useEffect(() => {
    setTargetOffset(topRef.current?.clientHeight);
  }, []);
  return (
    <>
      <Row>
        <Col span={18}>
          <div
            id="part-1"
            style={{
              height: "80vh",
              background: "#546a7b",
              border: "#393d3f",
              marginTop: "1vh",
            }}
          >
            Part 1
          </div>
          <div
            id="part-2"
            style={{
              height: "80vh",
              marginTop: "5vh",
              border: "#393d3f",
              background: "#546a7b",
            }}
          >
            Part 2
          </div>
          <div
            id="part-3"
            style={{
              height: "80vh",
              marginTop: "5vh",
              border: "#393d3f",
              background: "#546a7b",
            }}
          >
            Part 3
          </div>
        </Col>
        <Col span={6}>
          <Anchor
            targetOffset={targetOffset}
            items={[
              {
                key: "part-1",
                href: "#part-1",
                title: "Part 1",
              },
              {
                key: "part-2",
                href: "#part-2",
                title: "Part 2",
              },
              {
                key: "part-3",
                href: "#part-3",
                title: "Part 3",
              },
            ]}
          />
        </Col>
      </Row>
    </>
  );
}

export default Body;
