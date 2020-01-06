import React from "react";
import "../../style/DevOps/bodyDevOps.css";
import "../../style/DevOps/navDevOps.css";

import {
  Button,
  Modal,
  ButtonGroup,
  ToggleButton,
  ButtonToolbar
} from "react-bootstrap";

import Image from "react-bootstrap/Image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import succes from "../../img/succes.svg";

class ModalFormDevOps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {/* MODAL FORM */}
        <Modal
          show={this.props.show}
          onHide={this.props.handleClose}
          showSucces={this.props.showSuccesfull}
          className="modal-form"
        >
          <Modal.Header
            closeButton
            className={
              this.props.showSuccesfull === true
                ? "formik-display-off"
                : "formik-display-on"
            }
          ></Modal.Header>
          <Modal.Body
            className={
              this.props.showSuccesfull === true
                ? "formik-display-off"
                : "formik-display-on"
            }
          >
            <Formik
              className={
                this.props.showSuccesfull === true
                  ? "formik-display-off"
                  : "formik-display-on"
              }
              initialValues={{ email: "", password: "" }}
              validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              <Form onSubmit={""}>
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
                  <div className="row row-check  justify-content-center">
                    <ButtonToolbar
                      aria-label="Toolbar with button groups"
                      className="mt-2 justify-content-center toggle-btn"
                    >
                      <ButtonGroup toggle className="button-check-group ">
                        <ToggleButton
                          type="radio"
                          name="radio"
                          value="1"
                          className="button-check-DevOps "
                        >
                          only me
                        </ToggleButton>
                      </ButtonGroup>
                      <ButtonGroup toggle className="button-check-group">
                        <ToggleButton
                          type="radio"
                          name="radio"
                          value="2"
                          className="button-check-DevOps"
                        >
                          0-50
                        </ToggleButton>
                      </ButtonGroup>

                      <ButtonGroup toggle className="button-check-group">
                        <ToggleButton
                          type="radio"
                          name="radio"
                          value="3"
                          className="button-check-DevOps"
                        >
                          50 - 250
                        </ToggleButton>
                      </ButtonGroup>
                      <ButtonGroup toggle className="button-check-group">
                        <ToggleButton
                          type="radio"
                          name="radio"
                          value="4"
                          className="button-check-DevOps"
                        >
                          +250
                        </ToggleButton>
                      </ButtonGroup>
                    </ButtonToolbar>
                  </div>
                  <div className="row row-btn-submit">
                    <Button
                      className="btn-nav-mobile-devOps"
                      data-toggle="modal"
                      data-target="#myModal2"
                      onClick={this.props.handleShowSuccesfull}
                    >
                      Request a Quote
                    </Button>
                  </div>
                  <div className="row btn-close">
                    <Button
                      variant="secondary"
                      onClick={this.props.handleClose}
                    >
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
              this.props.showSuccesfull === true
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
            <div className="row row-succes-btn-devOps">
              <Button
                onClick={
                  this.props.handleClose && this.props.handleCloseSuccesful
                }
              >
                Continue
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
export default ModalFormDevOps;
