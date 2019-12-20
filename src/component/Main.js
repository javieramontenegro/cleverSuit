import React from "react";

import uxImage from "../img/ux.svg";
import "../style/body.css";

import { Row, Col, Container, Button, Image } from "react-bootstrap";

const mainContent = [
  {
    title: "We turn complicated things into simple ones",
    description:
      "We are a skilled creative team, our main focus is to deliver an outstanding user experiences in all the projects we are involved in.",
    button: "Request a Quote"
  }
];
class Main extends React.Component {
  render() {
    return (
      <>
        <Row className="row-main">
          <Col xs={12} sm={12} md={12} lg={6} xl={6} className="ux-text ">
            {mainContent.map(text => (
              <>
                <h1>{text.title}</h1>
                <br></br>
                <p>{text.description}</p>
                <Button className="button-talk" id="btnTalk">
                  {text.button}
                </Button>
              </>
            ))}
          </Col>

          <Col
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            className="align-self-center ux-image"
          >
            <Image src={uxImage} className=""></Image>
          </Col>
        </Row>
      </>
    );
  }
}
export default Main;
