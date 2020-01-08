import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import { Button } from "react-bootstrap";
import Brand from "./BrandCloud";
import BurgerMenu from "./BurgerMenuCloud";
import CollapseMenu from "./CollapseMenuCloud";
import "../../style/Cloud/navCloud.css";

import ModalForm from "../Cloud/ModalFormCloud";

const NavbarCloud = props => {
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

  return (
    <>
      <ModalForm
        handleShow={handleShow}
        handleClose={handleClose}
        handleCloseSuccesful={handleCloseSuccesful}
        handleShowSuccesfull={handleShowSuccesfull}
        show={show}
        showSuccesfull={showSuccesfull}
      ></ModalForm>

      <NavBar style={barAnimation}>
        <FlexContainer>
          <Brand />
          <NavLinks style={linkAnimation}>
            <a href="#section-video">Services</a>
            <a href="#section-plan">Pricing</a>
            <a href="#section-photos">Team</a>
            <a href="#section-footer">Let's talk</a>

            <Button className="btn-nav-cloud" onClick={handleShow}>
              Request a Quote
            </Button>

            <div class="dropdown drop-lang-nav">
              <button
                class="btn btn-light dropdown-toggle change"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-globe icon-drop-nav"></i>
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

export default NavbarCloud;

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
    margin-right: 1.2rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #faa03a;
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
