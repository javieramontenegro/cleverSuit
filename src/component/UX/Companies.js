import React from "react";
import "../../style/bodyUx.css";
import arauco from "../../img/arauco_logo.svg";
import adt from "../../img/adt_logo.svg";
import propins from "../../img/propins_logo.svg";
import cat from "../../img/cat_logo.svg";
import forus from "../../img/forus_logo.svg";
import falabella from "../../img/falabella_logo.svg";
import { Row, Col, Container, Button, Image } from "react-bootstrap";

class Companies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageshow: "hidden"
    };
  }
  componentDidMount() {
    this.setState({ imageshow: "delay" });
  }
  render() {
    return (
      <>
        <Row
          className={`justify-content-center company ${this.props.classAnimationCompanies} `}
        >
          <Col
            xs={6}
            sm={6}
            md={5}
            lg={3}
            xl={2}
            className="align-self-center align-items-center"
          >
            {/* CAROUSEL ONE */}
            <div id="fadeImages">
              <Image src={falabella}></Image>
              <Image src={adt}></Image>
              <Image src={cat}></Image>
              <Image src={propins}></Image>
            </div>
          </Col>
          <Col
            xs={6}
            sm={6}
            md={5}
            lg={3}
            xl={2}
            className="align-self-center align-items-center"
          >
            {/* CAROUSEL ONE */}
            <div id="fadeImages" className="fade-images ">
              <Image src={arauco}></Image>
              <Image src={cat}></Image>
              <Image src={forus}></Image>
              <Image src={adt}></Image>
            </div>
          </Col>
          <Col
            xs={6}
            sm={6}
            md={5}
            lg={3}
            xl={2}
            className="align-self-center align-items-center"
          >
            {/* CAROUSEL ONE */}
            <div id="fadeImages">
              <Image src={propins}></Image>
              <Image src={falabella}></Image>
              <Image src={adt}></Image>
              <Image src={cat}></Image>
            </div>
          </Col>
          <Col
            xs={6}
            sm={6}
            md={5}
            lg={3}
            xl={2}
            className="align-self-center align-items-center"
          >
            {/* CAROUSEL ONE */}
            <div id="fadeImages">
              <Image src={cat}></Image>
              <Image src={propins}></Image>
              <Image src={arauco}></Image>
              <Image src={arauco}></Image>
            </div>
          </Col>
        </Row>
        <Row
          className={`justify-content-center company ${this.props.classAnimationCompanies} companies-file-two `}
        >
          <Col
            xs={6}
            sm={6}
            md={5}
            lg={3}
            xl={2}
            className="align-self-center align-items-center"
          >
            {/* CAROUSEL ONE */}
            <div id="fadeImages">
              <Image src={adt}></Image>
              <Image src={forus}></Image>
              <Image src={falabella}></Image>
              <Image src={forus}></Image>
            </div>
          </Col>
          <Col
            xs={6}
            sm={6}
            md={5}
            lg={3}
            xl={2}
            className="align-self-center align-items-center"
          >
            {/* CAROUSEL ONE */}
            <div id="fadeImages">
              <Image src={forus}></Image>
              <Image
                src={arauco}
                className={` ${this.props.showImages} `}
              ></Image>
              <Image src={propins}></Image>
              <Image src={falabella}></Image>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}
export default Companies;
