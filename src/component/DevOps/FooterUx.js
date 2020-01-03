import React from "react";
/* import "../../style/UX/bodyUx.css"; */
import logoCleverit from "../../img/logo_cleverit.svg";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

import ModalForm from "./ModalForm";

class FooterUx extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showSuccesfull: false, show: false };
  }
  handleShow = () => {
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  handleCloseSuccesful = () => {
    this.setState({ showSuccesfull: false });
  };
  handleShowSuccesfull = () => {
    this.setState({ showSuccesfull: true });
  };
  render() {
    return (
      <>
        <ModalForm
          handleShow={this.handleShow}
          handleClose={this.handleClose}
          handleCloseSuccesful={this.handleCloseSuccesful}
          handleShowSuccesfull={this.handleShowSuccesfull}
          show={this.state.show}
          showSuccesfull={this.state.showSuccesfull}
        ></ModalForm>
        <Row
          className={` container-footer-Ux  ${this.props.classAnimationFooter}`}
        >
          <Row className="title-footer">
            <h1>Let's Talk</h1>
          </Row>

          <Row className="title-footer">
            <h5>cleverex@cleveritgroup.com</h5>
          </Row>
          <Row className="clerverSuit-footer ">
            <Col
              xl={2}
              lg={2}
              md={{ span: 6, order: 2 }}
              sm={{ span: 6, order: 2 }}
              xs={{ span: 6, order: 2 }}
            >
              <ul>
                <li>
                  <Link to="/devOps"> clever devOps</Link>
                </li>
                <li>
                  <a href="">Clever Development</a>
                </li>
                <li>
                  <a href="">Clever XR</a>
                </li>
              </ul>
            </Col>
            <Col
              xl={2}
              lg={2}
              md={{ span: 6, order: 2 }}
              sm={{ span: 6, order: 3 }}
              xs={{ span: 6, order: 3 }}
            >
              <ul>
                <li>
                  <a href="">Clever Agile</a>
                </li>
                <li>
                  <a href="">Clever QA</a>
                </li>
              </ul>
            </Col>
            <Col
              xl={2}
              lg={2}
              md={{ span: 6, order: 2 }}
              sm={{ span: 6, order: 4 }}
              xs={{ span: 6, order: 4 }}
            >
              <ul>
                <li>
                  <a href="">FAQ's</a>
                </li>
                <li>
                  <a href="">Terms and Conditions</a>
                </li>
                <li>
                  <a href="">About us</a>
                </li>
              </ul>
            </Col>
            <Col
              xl={2}
              lg={2}
              md={{ span: 6, order: 2 }}
              sm={{ span: 6, order: 5 }}
              xs={{ span: 6, order: 5 }}
            >
              <ul>
                <li>
                  <a href="">Join us today!</a>
                </li>
                <li>
                  <a href="">Blog & articles</a>
                </li>
                <li>
                  <a href="">Webinar</a>
                </li>
              </ul>
            </Col>
            <Col
              xl={{ span: 3, offset: 1, order: 5 }}
              lg={{ span: 4, order: 5 }}
              md={{ span: 12, order: 1 }}
              sm={{ span: 12, order: 1 }}
              xs={{ span: 12, order: 1 }}
              className=""
            >
              <Button className="btn-footer-Ux" onClick={this.handleShow}>
                I want to know more!
              </Button>
            </Col>
          </Row>
          <Row className="row-social justify-content-center">
            <Col xl={1} lg={1} md={1} sm={1} xs={2}>
              <span>
                <a
                  href=""
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Instagram"
                  role="button"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </span>
            </Col>
            <Col xl={1} lg={1} md={1} sm={1} xs={2}>
              <span>
                <a
                  href=""
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Linkedlin"
                  role="button"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </span>
            </Col>
            <Col xl={1} lg={1} md={1} sm={1} xs={2}>
              <span>
                <a
                  href=""
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Behance"
                  role="button"
                >
                  <i className="fab fa-behance"></i>
                </a>
              </span>
            </Col>
            <Col xl={1} lg={1} md={1} sm={1} xs={2}>
              <span>
                <a
                  href=""
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Dribble"
                  role="button"
                >
                  <i className="fab fa-dribbble"></i>
                </a>
              </span>
            </Col>
          </Row>
          <Row className="row-logo justify-content-center">
            <Image src={logoCleverit}></Image>
          </Row>
          <Row className="row-direction  justify-content-center">
            <p>
              © 2019 Cleverit.All rights reserved
              <span> Los Militares #6191, Las Condes, Chile </span>
            </p>
          </Row>
        </Row>
      </>
    );
  }
}
export default FooterUx;
