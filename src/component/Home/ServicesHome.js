import React from "react";
import data from "../../data/content.json";
/* import "../../style/UX/bodyUx.css"; */
import devOps from "../../img/logo_devOps_withe.svg";
import dev from "../../img/logo_dev_withe.svg";
import ux from "../../img/logo_ex_withe.svg";
import agile from "../../img/logo_agile_withe.svg";
import qa from "../../img/logo_qa_withe.svg";
import xr from "../../img/logo_xr_withe.svg";
import { Row, Col, Button, Card, Image } from "react-bootstrap";

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
          <Row className="row-cards-services  justify-content-center">
            <Col xl={10} className="align-self-center">
              <Row className=" justify-content-center">
                <Col xl={3}>
                  <Card style={{ width: "100%" }} className="card-devOps">
                    <Card.Body>
                      <Row className=" justify-content-center">
                        <Image src={devOps} className="hover-arrow"></Image>
                      </Row>
                      <Row className="row-description-card">
                        <p>
                          This app was developed for quick and immediate hiring
                          of users in part-time
                        </p>
                      </Row>
                      <Row className="justify-content-center">
                        <Button size="lg" block className="btn-devOps">
                          Quiero saber mas
                        </Button>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={3}>
                  <Card style={{ width: "100%" }} className="card-development">
                    <Card.Body>
                      <Row className=" justify-content-center">
                        <Image src={dev} className="hover-arrow"></Image>
                      </Row>
                      <Row className="row-description-card">
                        <p>
                          This app was developed for quick and immediate hiring
                          of users in part-time
                        </p>
                      </Row>
                      <Row className="justify-content-center">
                        <Button size="lg" block className="btn-dev">
                          Quiero saber mas
                        </Button>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={3}>
                  <Card style={{ width: "100%" }} className="card-ux">
                    <Card.Body>
                      <Row className=" justify-content-center">
                        <Image src={ux} className="hover-arrow"></Image>
                      </Row>
                      <Row className="row-description-card">
                        <p>
                          This app was developed for quick and immediate hiring
                          of users in part-time
                        </p>
                      </Row>
                      <Row className="justify-content-center">
                        <Button size="lg" block className="btn-ux">
                          Quiero saber mas
                        </Button>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={3}>
                  <Card style={{ width: "100%" }} className="card-agile">
                    <Card.Body>
                      <Row className=" justify-content-center">
                        <Image src={agile} className="hover-arrow"></Image>
                      </Row>
                      <Row className="row-description-card">
                        <p>
                          This app was developed for quick and immediate hiring
                          of users in part-time
                        </p>
                      </Row>
                      <Row className="justify-content-center">
                        <Button size="lg" block className="btn-agile">
                          Quiero saber mas
                        </Button>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={3}>
                  <Card style={{ width: "100%" }} className="card-qa">
                    <Card.Body>
                      <Row className=" justify-content-center">
                        <Image src={qa} className="hover-arrow"></Image>
                      </Row>
                      <Row className="row-description-card">
                        <p>
                          This app was developed for quick and immediate hiring
                          of users in part-time
                        </p>
                      </Row>
                      <Row className="justify-content-center">
                        <Button size="lg" block className="btn-qa">
                          Quiero saber mas
                        </Button>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xl={3}>
                  <Card style={{ width: "100%" }} className="card-xr">
                    <Card.Body>
                      <Row className=" justify-content-center">
                        <Image src={xr} className="hover-arrow"></Image>
                      </Row>
                      <Row className="row-description-card">
                        <p>
                          This app was developed for quick and immediate hiring
                          of users in part-time
                        </p>
                      </Row>
                      <Row className="justify-content-center">
                        <Button size="lg" block className="btn-xr">
                          Quiero saber mas
                        </Button>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="row-help">
            <p>
              ¿Tienes algunas dudas sobre el servicio?
              <span> ¡Te contactamos!</span>{" "}
            </p>
          </Row>
        </Row>
      </>
    );
  }
}
export default ServicesHome;
