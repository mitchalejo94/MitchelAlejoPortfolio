// import React from 'react'
import { Anchor, Row, Col, Carousel, Card, Avatar } from "antd";
import React, { useEffect, useState } from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { Meta } = Card;
const contentStyle = {
  height: "100%",
  color: "#fff",
  lineHeight: "80vh",
  textAlign: "center",
  background: "#364d79",
};

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
              height: "84vh",
              background: "#546a7b",
              border: "#393d3f",
              marginTop: "1vh",
            }}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Praesent elementum facilisis leo vel. Ultricies mi quis hendrerit
              dolor magna eget. At erat pellentesque adipiscing commodo elit at
              imperdiet dui accumsan. Sit amet consectetur adipiscing elit
              pellentesque habitant morbi tristique. Nunc faucibus a
              pellentesque sit. Sit amet massa vitae tortor condimentum lacinia
              quis. Ipsum nunc aliquet bibendum enim facilisis gravida neque
              convallis. Velit euismod in pellentesque massa. Quam pellentesque
              nec nam aliquam. Felis donec et odio pellentesque diam volutpat.
              Sit amet porttitor eget dolor morbi non arcu risus quis. Amet
              facilisis magna etiam tempor orci eu lobortis elementum. Mattis
              enim ut tellus elementum sagittis vitae et leo duis. Molestie nunc
              non blandit massa enim nec dui nunc. Tincidunt arcu non sodales
              neque sodales ut etiam. Iaculis eu non diam phasellus vestibulum
              lorem sed. Libero enim sed faucibus turpis in eu. Blandit aliquam
              etiam erat velit scelerisque. Mi sit amet mauris commodo quis
              imperdiet. Malesuada pellentesque elit eget gravida. Volutpat
              commodo sed egestas egestas fringilla phasellus faucibus
              scelerisque. Malesuada pellentesque elit eget gravida cum sociis
              natoque. Enim sit amet venenatis urna cursus eget nunc scelerisque
              viverra. Congue nisi vitae suscipit tellus mauris a diam maecenas.
              Porta lorem mollis aliquam ut porttitor leo a diam. Ut lectus arcu
              bibendum at varius vel pharetra vel turpis. Et malesuada fames ac
              turpis egestas integer. Aenean et tortor at risus viverra
              adipiscing at in tellus. Placerat in egestas erat imperdiet sed
              euismod. Sed blandit libero volutpat sed cras ornare arcu dui.
              Enim ut tellus elementum sagittis vitae et leo. Egestas quis ipsum
              suspendisse ultrices gravida. Pellentesque eu tincidunt tortor
              aliquam nulla.
            </p>
          </div>
          <div
            id="part-2"
            style={{
              height: "84vh",
              marginTop: "2vh",
              border: "#393d3f",
              background: "#546a7b",
            }}
          >
            <Carousel effect="fade">
              <div>
                <h3 style={contentStyle}>1</h3>
              </div>
              <div>
                <h3 style={contentStyle}>2</h3>
              </div>
              <div>
                <h3 style={contentStyle}>3</h3>
              </div>
              <div>
                <h3 style={contentStyle}>4</h3>
              </div>
            </Carousel>
          </div>
          <div
            id="part-3"
            style={{
              height: "84vh",
              marginTop: "2vh",
              border: "#393d3f",
              background: "#546a7b",
            }}
          >
            <div>
              <Card
                style={{
                  width: 200,
                }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta
                  avatar={
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
                  }
                  title="Card title"
                  description="This is the description"
                />
              </Card>
            </div>
            <div>
              <Card
                style={{
                  width: 200,
                }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta
                  avatar={
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
                  }
                  title="Card title"
                  description="This is the description"
                />
              </Card>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <Anchor
            targetOffset={targetOffset}
            style={{
              marginTop: "1vh",
              background: "#708d81",
              height: "84vh",
              marginLeft: "5px",
            }}
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
