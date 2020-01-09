import React from "react";
import data from "../../data/content.json";
/* import "../../style/UX/bodyUx.css"; */

import { Row, Col, Button, Card } from "react-bootstrap";

/* import ModalForm from "./ModalForm"; */

class ServicesHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data
    };
  }

  render() {
    return (
      <>
        <Row className={`  ${this.props.classAnimationVideo} row-services`}>
          <Row className="row-text">
            <h2>{data.Home.sectionServices.servicesTitle}</h2>
          </Row>
          <Row className="row-cards-services">
            <Col xl={3}>
              <Card style={{ width: "100%" }} className="card-devOps">
                <Card.Body>
                  <Card.Text>DevOps</Card.Text>

                  <div className="line-text"></div>

                  <Row className="justify-content-end">
                    <a href="" className="hover-arrow">
                      <i className="far fa-arrow-alt-circle-right"></i>
                    </a>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3}>
              <Card style={{ width: "100%" }} className="card-development">
                <Card.Body>
                  <Card.Text>Development</Card.Text>

                  <div className="line-text"></div>

                  <Row className="justify-content-end">
                    <a href="" className="hover-arrow">
                      <i className="far fa-arrow-alt-circle-right"></i>
                    </a>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3}>
              <Card style={{ width: "100%" }} className="card-ux">
                <Card.Body>
                  <Card.Text>UX</Card.Text>

                  <div className="line-text"></div>

                  <Row className="justify-content-end">
                    <a href="" className="hover-arrow">
                      <i className="far fa-arrow-alt-circle-right"></i>
                    </a>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3}>
              <Card style={{ width: "100%" }} className="card-agile">
                <Card.Body>
                  <Card.Text>Agile</Card.Text>

                  <div className="line-text"></div>

                  <Row className="justify-content-end">
                    <a href="" className="hover-arrow">
                      <i className="far fa-arrow-alt-circle-right"></i>
                    </a>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3}>
              <Card style={{ width: "100%" }} className="card-qa">
                <Card.Body>
                  <Card.Text>QA</Card.Text>

                  <div className="line-text"></div>

                  <Row className="justify-content-end">
                    <a href="" className="hover-arrow">
                      <i className="far fa-arrow-alt-circle-right"></i>
                    </a>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="row-help">
            <p>
              Do you have any additional questions? <span>We'll call you!</span>
            </p>
          </Row>
        </Row>
      </>
    );
  }
}
export default ServicesHome;
