import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";

import ModalForm from "../Cloud/ModalFormCloud";

const CollapseMenuCloud = props => {
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
        <ModalForm
          handleShow={handleShow}
          handleClose={handleClose}
          handleCloseSuccesful={handleCloseSuccesful}
          handleShowSuccesfull={handleShowSuccesfull}
          show={show}
          showSuccesfull={showSuccesfull}
        ></ModalForm>
        <NavLinks>
          <li>
            <a href="#section-main" onClick={props.handleNavbar}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#section-video" onClick={props.handleNavbar}>
              Servicios
            </a>
          </li>
          <li>
            <a href="#section-portfolio" onClick={props.handleNavbar}>
              Portafolio
            </a>
          </li>

          <li>
            <a href="#section-plan" onClick={props.handleNavbar}>
              Planes
            </a>
          </li>
          <li>
            <a href="#section-photo" onClick={props.handleNavbar}>
              Team
            </a>
          </li>
          <li>
            <a href="#section-footer" onClick={props.handleNavbar}>
              ¡Te contactamos!
            </a>
          </li>

          <li>
            <div class="dropdown drop-lang">
              <button
                class="btn btn-light dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-globe icon-drop"></i>
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                  <i class="fas fa-globe"></i> Es
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-globe"></i> Eng
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-globe"></i> Por
                </a>
              </div>
            </div>
          </li>
          <div className="aling-content">
            <Button className="btn-nav-mobile-cloud" onClick={handleShow}>
              Request a Quote
            </Button>
          </div>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenuCloud;

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
