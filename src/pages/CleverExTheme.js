import React from "react";
import Nav from "../component/Nav";
import uxImage from "../img/ux.svg";
import "../style/body.css";
import Navbar from "../component/navbar/Navbar";
import GlobalStyle from "../style/NavbarStyle";

import { Row, Col, Container, Button, Modal } from "react-bootstrap";
import Main from "../component/Main";
import VideoPrueba from "../component/VideoPrueba";
import CardsPortfolio from "../component/CardsPortfolio";
import Companies from "../component/Companies";
import Plan from "../component/Plan";
import Photos from "../component/Photos";
import Footer from "../component/Footer";

class CleverExTheme extends React.Component {
  state = {
    navbarOpen: false
  };

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };

  render() {
    const { navbarOpen } = this.state;

    return (
      <div>
        <Navbar navbarState={navbarOpen} handleNavbar={this.handleNavbar} />
        <GlobalStyle />
        <Container fluid>
          <section className="section-main" id="section-main">
            <Main></Main>
          </section>

          <section className="section-video" id="section-video">
            <VideoPrueba></VideoPrueba>
          </section>
          <section>
            <Companies></Companies>
          </section>
          <section className="section-portfolio" id="section-portfolio">
            <CardsPortfolio></CardsPortfolio>
          </section>
          <section className="section-plan" id="section-plan">
            <Plan></Plan>
          </section>
          <section className="section-photos" id="section-photos">
            <Photos></Photos>
          </section>

          <section className="section-footer" id="section-footer">
            <Footer></Footer>
          </section>
        </Container>
      </div>
    );
  }
}
export default CleverExTheme;
