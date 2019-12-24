import React from "react";
import "../style/body.css";
import arauco from "../img/arauco_logo.svg";
import adt from "../img/adt_logo.svg";
import propins from "../img/propins_logo.svg";
import cat from "../img/cat_logo.svg";
import forus from "../img/forus_logo.svg";
import falabella from "../img/falabella_logo.svg";
import { Row, Col, Container, Button, Image } from "react-bootstrap";

class Companies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageshow: "hidden"
    };
  }
  componentDidMount() {
    this.setState({ imageshow: "hola" });
  }
  render() {
    return (
      <>
        <Row
          className={`align-items-center empresa ${this.props.classAnimationCompanies} `}
        >
          <Col xs={12} sm={12} md={3} lg={3} xl={3}>
            {/* CAROUSEL ONE */}
            <div id="fadeImages">
              <Image src={arauco}></Image>
              <Image src={adt} className={` ${this.state.imageshow} `}></Image>
              <Image src={falabella}></Image>
              <Image src={propins}></Image>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={3}
            lg={3}
            xl={3}
            className="align-self-center"
          >
            {/* CAROUSEL ONE */}
            <div id="fadeImages" className="fade-images">
              <Image src={falabella}></Image>
              <Image src={cat}></Image>
              <Image src={forus}></Image>
              <Image src={adt}></Image>
            </div>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3} xl={3}>
            {/* CAROUSEL ONE */}
            <div
              id="carouselExampleFade"
              class="carousel slide carousel-fade"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active div-companies-img">
                  <img src={forus} className="img-companies" alt="..."></img>
                </div>
                <div class="carousel-item div-companies-img">
                  <img src={cat} className="img-companies" alt="..."></img>
                </div>
                <div class="carousel-item div-companies-img">
                  <img src={arauco} className="img-companies" alt="..."></img>
                </div>
                <div class="carousel-item div-companies-img">
                  <img src={propins} className="img-companies" alt="..."></img>
                </div>
                <div class="carousel-item div-companies-img">
                  <img src={adt} className="img-companies" alt="..."></img>
                </div>
                <div class="carousel-item div-companies-img">
                  <img
                    src={falabella}
                    className="img-companies"
                    alt="..."
                  ></img>
                </div>
              </div>
            </div>
            {/* CAROUSEL TWO */}
            <div
              id="carouselExampleFade"
              class="carousel slide carousel-fade"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active div-companies-img">
                  <img
                    src={falabella}
                    className="img-companies"
                    alt="..."
                  ></img>
                </div>
                <div class="carousel-item div-companies-img">
                  <img src={adt} className="img-companies" alt="..."></img>
                </div>
                <div class="carousel-item div-companies-img">
                  <img src={arauco} className="img-companies" alt="..."></img>
                </div>
                <div class="carousel-item div-companies-img">
                  <img src={propins} className="img-companies" alt="..."></img>
                </div>
                <div class="carousel-item div-companies-img">
                  <img src={cat} className="img-companies" alt="..."></img>
                </div>
                <div class="carousel-item div-companies-img">
                  <img src={forus} className="img-companies" alt="..."></img>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3} xl={3}>
            {/* CAROUSEL ONE */}
            <div
              id="carouselExampleFade"
              class="carousel slide carousel-fade"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active div-companies-img">
                  <img src={forus} className="img-companies" alt="..."></img>
                </div>
                <div class="carousel-item div-companies-img">
                  <img src={cat} className="img-companies" alt="..."></img>
                </div>
                <div class="carousel-item div-companies-img">
                  <img src={arauco} className="img-companies" alt="..."></img>
                </div>
                <div class="carousel-item div-companies-img">
                  <img src={propins} className="img-companies" alt="..."></img>
                </div>
                <div class="carousel-item div-companies-img">
                  <img src={adt} className="img-companies" alt="..."></img>
                </div>
                <div class="carousel-item div-companies-img">
                  <img
                    src={falabella}
                    className="img-companies"
                    alt="..."
                  ></img>
                </div>
              </div>
            </div>
            {/* CAROUSEL TWO */}
            <div
              id="carouselExampleFade"
              class="carousel slide carousel-fade"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active div-companies-img">
                  <img
                    src={falabella}
                    className="img-companies"
                    alt="..."
                  ></img>
                </div>
                <div class="carousel-item div-companies-img">
                  <img src={adt} className="img-companies" alt="..."></img>
                </div>
                <div class="carousel-item div-companies-img">
                  <img src={arauco} className="img-companies" alt="..."></img>
                </div>
                <div class="carousel-item div-companies-img">
                  <img src={propins} className="img-companies" alt="..."></img>
                </div>
                <div class="carousel-item div-companies-img">
                  <img src={cat} className="img-companies" alt="..."></img>
                </div>
                <div class="carousel-item div-companies-img">
                  <img src={forus} className="img-companies" alt="..."></img>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}
export default Companies;
