import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import {
  Button,
  Modal,
  ButtonToolbar,
  Image,
  ModalBody
} from "react-bootstrap";
import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";
import "../../style/nav.css";
import { Formik, Form, Field, ErrorMessage, CheckboxField } from "formik";
import succes from "../../img/succes.svg";

const linkNav = ["Services", "Princing", "Team", "Let's talk"];

const Navbar = props => {
  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)"
  });

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 800,
    config: config.wobbly
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showSuccesfull, setSuccesfull] = useState(false);
  const handleCloseSuccesful = () => setSuccesfull(false);
  const handleShowSuccesfull = () => setSuccesfull(true);
  const [lang, onLangChange] = useState("en");

  return (
    <>
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
            showSuccesfull === true ? "formik-display-off" : "formik-display-on"
          }
        ></Modal.Header>
        <Modal.Body
          className={
            showSuccesfull === true ? "formik-display-off" : "formik-display-on"
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
            <Button className="" onClick={handleClose && handleCloseSuccesful}>
              Continue
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      <NavBar style={barAnimation}>
        <FlexContainer>
          <Brand />
          <NavLinks style={linkAnimation}>
            <a href="#section-video">Services</a>
            <a href="#section-plan">Pricing</a>
            <a href="#section-photos">Team</a>
            <a href="#section-footer">Let's talk</a>

            <Button className="btn-nav" onClick={handleShow}>
              Request a Quote
            </Button>

            <select
              /* value={this.state.lang} onChange={this.onLangChange} */ className="selectpicker select-web"
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
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
    </>
  );
};

export default Navbar;

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #ffffff;
  z-index: 100;
  font-size: 1.2rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 5rem;
  justify-content: space-between;
  height: 5rem;
  @media (max-width: 1100px) {
    padding: 0 1rem;
  }
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #55595c;

    border-bottom: 1px solid transparent;
    margin: 0 1.2rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #7e0cf5;
      /* border-bottom: 1px solid #fdcb6e; */
    }

    @media (max-width: 868px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 869px) {
    display: none;
  }
`;
