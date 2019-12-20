import React from "react";
import "../style/body.css";
import ticket from "../img/ticket.svg";
import testimony1 from "../img/testimony_1.png";
import { Row, Col, Container, Button, Card, Carousel } from "react-bootstrap";

import Image from "react-bootstrap/Image";

class Plan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Row className="justify-content-center row-plan">
          <Col
            xl={{ span: 4, order: 1 }}
            lg={{ span: 4, order: 1 }}
            md={{ span: 12, order: 3 }}
            sm={{ span: 12, order: 3 }}
            xs={{ span: 12, order: 3 }}
            className=" align-self-start "
          >
            <h1 className="title-plan">
              Vive la experiencia de nuestros servicios
            </h1>
            <Carousel className="carousel-testimony">
              <Carousel.Item>
                <div>
                  <h4>
                    "Blockquote. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Integer posuere erat a ante."
                  </h4>
                </div>

                <div className="row row-testimony">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-1 ">
                    <img className="" src={testimony1} alt="First slide" />
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-11">
                    <p>
                      Franco Abello <br></br>
                      <span>CEO de Why X</span>{" "}
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div>
                  <h4>
                    "Blockquote. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Integer posuere erat a ante."
                  </h4>
                </div>

                <div className="row row-testimony">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-1 ">
                    <img className="" src={testimony1} alt="First slide" />
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-11">
                    <p>
                      Franco Abello <br></br>
                      <span>CEO de Why X</span>{" "}
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div>
                  <h4>
                    "Blockquote. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Integer posuere erat a ante."
                  </h4>
                </div>

                <div className="row row-testimony">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-1 ">
                    <img className="" src={testimony1} alt="First slide" />
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-11">
                    <p>
                      Franco Abello <br></br>
                      <span>CEO de Why X</span>{" "}
                    </p>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col
            xl={{ span: 3, order: 2 }}
            lg={{ span: 3, order: 2 }}
            md={{ span: 12, order: 1 }}
            sm={{ span: 12, order: 1 }}
            xs={{ span: 12, order: 1 }}
          >
            <h1 className="title-plan-mobile">
              Vive la experiencia de nuestros servicios
            </h1>
            <Card style={{ width: "100%" }} className="card-plan card-smart">
              <Card.Body>
                <Card.Title>Smart Plan</Card.Title>
                <p>Donec id elit non mi porta.</p>
                <ul className="ul-plan">
                  <li className="row">
                    <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 ">
                      <Image src={ticket} className="ticket"></Image>
                    </div>
                    <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                      Donec id elit non mi porta gravida at eget metus.
                    </div>
                  </li>
                  <li className="row">
                    <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 ">
                      <Image src={ticket} className="ticket"></Image>
                    </div>
                    <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                      Donec id elit non mi porta gravida at eget metus.
                    </div>
                  </li>
                  <li className="row">
                    <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 ">
                      <Image src={ticket} className="ticket"></Image>
                    </div>
                    <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                      Donec id elit non mi porta gravida at eget metus.
                    </div>
                  </li>
                  <li className="row">
                    <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 ">
                      <Image src={ticket} className="ticket"></Image>
                    </div>
                    <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                      Donec id elit non mi porta gravida at eget metus.
                    </div>
                  </li>
                </ul>
                <Button variant="outline-primary" className="btn-plan">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col
            xl={{ span: 3, order: 3 }}
            lg={{ span: 3, order: 3 }}
            md={{ span: 12, order: 2 }}
            sm={{ span: 12, order: 2 }}
            xs={{ span: 12, order: 2 }}
          >
            <Card style={{ width: "100%" }} className="card-plan">
              <Card.Body>
                <Card.Title>Custom Plan</Card.Title>
                <p>Donec id elit non mi porta.</p>

                <ul className="ul-plan">
                  <li className="row">
                    <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 ">
                      <Image src={ticket} className="ticket"></Image>
                    </div>
                    <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                      Donec id elit non mi porta gravida at eget metus.
                    </div>
                  </li>
                  <li className="row">
                    <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 ">
                      <Image src={ticket} className="ticket"></Image>
                    </div>
                    <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                      Donec id elit non mi porta gravida at eget metus.
                    </div>
                  </li>
                  <li className="row">
                    <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 ">
                      <Image src={ticket} className="ticket"></Image>
                    </div>
                    <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                      Donec id elit non mi porta gravida at eget metus.
                    </div>
                  </li>
                  <li className="row">
                    <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 ">
                      <Image src={ticket} className="ticket"></Image>
                    </div>
                    <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                      Donec id elit non mi porta gravida at eget metus.
                    </div>
                  </li>
                </ul>

                <Button variant="primary" className="btn-plan">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xl={6} lg={5} md={2} sm={0} xs={0}></Col>
          <Col xl={6} lg={6} md={10} sm={12} xs={12} className="text-help">
            <p>
              ¿Tienes alguna duda adicional,<span>te llamaremos</span>?{" "}
            </p>
          </Col>
        </Row>
      </>
    );
  }
}
export default Plan;
