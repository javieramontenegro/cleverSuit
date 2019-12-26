import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Modal, Image } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { Formik, Form, Field, ErrorMessage, CheckboxField } from "formik";
import succes from "../../img/succes.svg";

const CollapseMenu = props => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showSuccesfull, setSuccesfull] = useState(false);
  const handleCloseSuccesful = () => setSuccesfull(false);
  const handleShowSuccesfull = () => setSuccesfull(true);
  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200]
            })
            .interpolate(openValue => `translate3d(0, ${openValue}px, 0`)
        }}
      >
        <NavLinks>
          <li>
            <a href="#section-main" onClick={props.handleNavbar}>
              Home
            </a>
          </li>
          <li>
            <a href="#section-video" onClick={props.handleNavbar}>
              Services
            </a>
          </li>
          <li>
            <a href="#section-portfolio" onClick={props.handleNavbar}>
              Portfolio
            </a>
          </li>

          <li>
            <a href="#section-plan" onClick={props.handleNavbar}>
              Pricing
            </a>
          </li>
          <li>
            <a href="#section-photo" onClick={props.handleNavbar}>
              Team
            </a>
          </li>
          <li>
            <a href="#section-footer" onClick={props.handleNavbar}>
              Let's talk
            </a>
          </li>

          <div className="aling-content">
            <select
              /* value={this.state.lang} onChange={this.onLangChange} */ className=""
              data-width="fit"
            >
              <option value="es" data-content="<i class='fa fa-globe'></i>  Es">
                Es
              </option>
              <option value="en" data-content="<i class='fa fa-globe'></i>  En">
                Eng
              </option>
              <option
                value="por"
                data-content="<i class='fa fa-globe'></i>  Por"
              >
                Por
              </option>
            </select>
          </div>
          <div className="aling-content">
            <Button className="btn-nav-mobile" onClick={handleShow}>
              Request a Quote
            </Button>
          </div>
        </NavLinks>
        {/* MODAL FORM */}
        <Modal
          show={show}
          onHide={handleClose}
          showSucces={showSuccesfull}
          className="modal-form"
        >
          <Modal.Header
            closeButton
            className={
              showSuccesfull === true
                ? "formik-display-off"
                : "formik-display-on"
            }
          ></Modal.Header>
          <Modal.Body
            className={
              showSuccesfull === true
                ? "formik-display-off"
                : "formik-display-on"
            }
          >
            <Formik
              className={
                showSuccesfull === true
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
                        name="isGoing"
                        type="radio"
                        /* checked={this.state.isGoing}
                            onChange={this.handleInputChange} */
                      />
                      Only me
                    </label>
                    <label>
                      <input
                        name="isGoing"
                        type="radio"
                        /* checked={this.state.isGoing}
                            onChange={this.handleInputChange} */
                      />
                      1 - 50
                    </label>
                    <label>
                      <input
                        name="isGoing"
                        type="radio"
                        /* checked={this.state.isGoing}
                            onChange={this.handleInputChange} */
                      />
                      50 - 250
                    </label>
                    <label>
                      <input
                        name="isGoing"
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
                      onClick={handleShowSuccesfull}
                    >
                      Request a Quote
                    </Button>
                  </div>
                  <div className="row btn-close">
                    <Button variant="secondary" onClick={handleClose}>
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
              showSuccesfull === true
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
                onClick={handleClose && handleCloseSuccesful}
              >
                Continue
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: white;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  z-index: 100;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 50rem 2rem;

  & li {
    transition: all 300ms linear 0s;
    z-index: 1;
    justify-content: center;
    text-align: center;
    padding-top: 1rem;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: black;

    text-decoration: none;
    cursor: pointer;
    z-index: 1;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;
