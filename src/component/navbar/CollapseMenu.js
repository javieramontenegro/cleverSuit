import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";

const CollapseMenu = props => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

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
            <Button className="btn-nav-mobile">Request a Quote</Button>
          </div>
        </NavLinks>
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
