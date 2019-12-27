import React, { useEffect, useState } from "react";

import uxImage from "../img/ux.svg";
import "../style/body.css";

import { Row, Col, Container, Button, Image, Modal } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage, CheckboxField } from "formik";
import succes from "../img/succes.svg";
import Animation from "../component/AnimationUx";

const mainContent = [
  {
    title: "We turn complicated things into simple ones",
    description:
      "We are a skilled creative team, our main focus is to deliver an outstanding user experiences in all the projects we are involved in.",
    button: "Request a Quote"
  }
];
/* const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [showSuccesfull, setSuccesfull] = useState(false);
const handleCloseSuccesful = () => setSuccesfull(false);
const handleShowSuccesfull = () => setSuccesfull(true); */

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classAnimation: this.props.classAnimation,
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
                        name="optionOne"
                        type="radio"
                        /* checked={this.state.isGoing}
                            onChange={this.handleInputChange} */
                      />
                      Only me
                    </label>
                    <label>
                      <input
                        name="optionTwo"
                        type="radio"
                        /* checked={this.state.isGoing}
                            onChange={this.handleInputChange} */
                      />
                      1 - 50
                    </label>
                    <label>
                      <input
                        name="optionThree"
                        type="radio"
                        /* checked={this.state.isGoing}
                            onChange={this.handleInputChange} */
                      />
                      50 - 250
                    </label>
                    <label>
                      <input
                        name="optionFour"
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

        <Row className="row-main">
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            className={`ux-text visible`}
          >
            {mainContent.map(text => (
              <>
                <h1>{text.title}</h1>
                <br></br>
                <p>{text.description}</p>
                <Button
                  className="button-talk"
                  id="btnTalk"
                  onClick={this.handleShow}
                >
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
            className={`align-self-center ux-image visible `}
          >
            {/*  <Image src={uxImage} className=""></Image> */}
            <Animation></Animation>
          </Col>
        </Row>
      </>
    );
  }
}
export default Main;
