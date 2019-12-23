import React from "react";
import "../style/body.css";
import logoCleverit from "../img/logo_cleverit.svg";
import {
  Row,
  Col,
  Container,
  Button,
  Card,
  Carousel,
  Modal
} from "react-bootstrap";

import Image from "react-bootstrap/Image";
import { Formik, Form, Field, ErrorMessage, CheckboxField } from "formik";
import succes from "../img/succes.svg";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSuccesfull: false,
      show: false
    };
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
        {/* MODAL FORM */}
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          showSucces={this.showSuccesfull}
          className="modal-form"
        >
          <Modal.Header
            closeButton
            className={
              this.state.showSuccesfull === true
                ? "formik-display-off"
                : "formik-display-on"
            }
          ></Modal.Header>
          <Modal.Body
            className={
              this.state.showSuccesfull === true
                ? "formik-display-off"
                : "formik-display-on"
            }
          >
            <Formik
              className={
                this.state.showSuccesfull === true
                  ? "formik-display-off"
                  : "formik-display-on"
              }
            >
              <Form>
                <div className="row container-modal">
                  <div className="row-title">
                    <h3> Enter your info, to offer you a good deal</h3>
                    <br></br>
                    <p>Type your name</p>
                  </div>
                  <div className="row row-name">
                    <Field name="name" type="text" className="input" />
                    <ErrorMessage name="name">
                      {message => <div className="error">{message}</div>}
                    </ErrorMessage>
                    <p>We will never share this information with anyone.</p>
                  </div>
                  <div className="row row-company">
                    <p>What's the name of your company?</p>
                    <Field name="company" type="text" className="input" />
                    <ErrorMessage name="company">
                      {message => <div className="error">{message}</div>}
                    </ErrorMessage>
                  </div>
                  <div className="row row-industry align-items-center">
                    <p>industry</p>

                    <select>
                      <option>01</option>
                      <option>01</option>
                    </select>
                  </div>
                  <div className="row row-options">
                    <p>How big is the company you work for?</p>
                  </div>
                  <div className="row row-check">
                    <label>
                      <input
                        name="OptionOne"
                        type="radio"
                        /* checked={this.state.isGoing}
                            onChange={this.handleInputChange} */
                      />
                      Only me
                    </label>
                    <label>
                      <input
                        name="OptionTwo"
                        type="radio"
                        /* checked={this.state.isGoing}
                            onChange={this.handleInputChange} */
                      />
                      1 - 50
                    </label>
                    <label>
                      <input
                        name="OptionThree"
                        type="radio"
                        /* checked={this.state.isGoing}
                            onChange={this.handleInputChange} */
                      />
                      50 - 250
                    </label>
                    <label>
                      <input
                        name="OptionFour"
                        type="radio"
                        /* checked={this.state.isGoing}
                            onChange={this.handleInputChange} */
                      />
                      250+
                    </label>
                  </div>
                  <div className="row row-btn-submit">
                    <Button
                      className="btn-nav-mobile"
                      data-toggle="modal"
                      data-target="#myModal2"
                      onClick={this.handleShowSuccesfull}
                    >
                      Request a Quote
                    </Button>
                  </div>
                  <div className="row btn-close">
                    <Button variant="secondary" onClick={this.handleClose}>
                      Close
                    </Button>
                  </div>
                </div>
              </Form>
            </Formik>
          </Modal.Body>
          {/* MODAL SUCCESFULLY  */}

          <Modal.Body
            className={
              this.state.showSuccesfull === true
                ? "succesfull-display-on"
                : "succesfull-display-off"
            }
          >
            <div className="row row-img-sucess">
              <Image src={succes}></Image>
            </div>
            <div className="row row-sucess-text">
              <h3>Your application has been successfully submitted!</h3>
            </div>
            <div className="row row-succes-btn">
              <Button
                className=""
                onClick={this.handleClose && this.handleCloseSuccesful}
              >
                Continue
              </Button>
            </div>
          </Modal.Body>
        </Modal>
        <Row
          className={` container-footer  ${this.props.classAnimationFooter}`}
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
              xs={{ span: 12, order: 2 }}
            >
              <ul>
                <li>
                  <a href="">Clever DeveOps</a>
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
              xs={{ span: 12, order: 3 }}
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
              xs={{ span: 12, order: 4 }}
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
              xs={{ span: 12, order: 5 }}
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
              <Button className="btn-footer" onClick={this.handleShow}>
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
                  <i class="fab fa-instagram"></i>
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
                  <i class="fab fa-linkedin-in"></i>
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
                  <i class="fab fa-behance"></i>
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
                  <i class="fab fa-dribbble"></i>
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
export default Footer;
