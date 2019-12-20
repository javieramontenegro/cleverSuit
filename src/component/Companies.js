import React from "react";
import "../style/body.css";
import arauco from "../img/arauco_logo.svg";
import adt from "../img/adt_logo.svg";
import { Row, Col, Container, Button } from "react-bootstrap";

class Companies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Row className="align-items-center empresa">
          <Col xs={12} sm={12} md={3} lg={3} xl={3}>
            {/* CAROUSEL ONE */}
            <div
              id="carouselExampleFade"
              class="carousel slide carousel-fade"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active div-companies-img">
                  <img src={arauco} className="img-companies" alt="..."></img>
                </div>
                <div class="carousel-item div-companies-img">
                  <img src={adt} className="img-companies" alt="..."></img>
                </div>
                <div class="carousel-item div-companies-img">
                  <img src={arauco} className="img-companies" alt="..."></img>
                </div>
              </div>
            </div>
            <br></br>
            {/*   CAROUSEL TWO */}
            <div
              id="carouselExampleFade"
              class="carousel slide carousel-fade"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active div-companies-img">
                  <img src={arauco} className="img-companies" alt="..."></img>
                </div>
                <div class="carousel-item div-companies-img">
                  <img src={adt} className="img-companies" alt="..."></img>
                </div>
                <div class="carousel-item div-companies-img">
                  <img src={arauco} className="img-companies" alt="..."></img>
                </div>
              </div>
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
            <h3>empresa</h3>
            <h3>empresa</h3>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3} xl={3}>
            <h3>empresa</h3>
            <h3>empresa</h3>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3} xl={3}>
            <h3>empresa</h3>
            <h3>empresa</h3>
          </Col>
        </Row>
      </>
    );
  }
}
export default Companies;
