import React from "react";
import "../style/Dev/bodyDev.css";
import Navbar from "../component/navbarDev/NavbarDev";
import GlobalStyle from "../style/NavbarStyle";

import { Container } from "react-bootstrap";
import Main from "../component/Dev/MainDev";
import Services from "../component/Dev/ServicesDev";
import CardsPortfolio from "../component/Dev/PortfolioDev";
import Companies from "../component/Dev/Companies";
import Plan from "../component/Dev/PlanDev";
import Photos from "../component/Dev/Photos";
import Footer from "../component/Dev/FooterDev";

class CleverDevelopmentTheme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarOpen: false,
      classAnimationVideo: "hidden",
      classAnimationPortfolio: "hidden",
      classAnimationCompanies: "hidden",
      classAnimationPlan: "hidden",
      classAnimationPhoto: "hidden",
      classAnimationFooter: "hidden",
      showImages: "hidden"
    };
  }
  componentDidMount() {
    window.onscroll = () => this.handleAnimation();
  }
  handleAnimation = () => {
    if (document.documentElement.scrollTop > 100) {
      this.setState({
        classAnimationVideo: "visible"
      });
    }
    if (document.documentElement.scrollTop > 642) {
      this.setState({
        classAnimationCompanies: "visible",
        showImages: "delay"
      });
    }
    if (document.documentElement.scrollTop > 800) {
      this.setState({
        classAnimationPortfolio: "visible"
      });
    }
    if (document.documentElement.scrollTop > 2550) {
      this.setState({
        classAnimationPlan: "visible"
      });
    }
    if (document.documentElement.scrollTop > 3500) {
      this.setState({
        classAnimationPhoto: "visible"
      });
    }
    if (document.documentElement.scrollTop > 4000) {
      this.setState({
        classAnimationFooter: "visible"
      });
    }
  };
  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };

  render() {
    const { navbarOpen } = this.state;

    return (
      <div>
        <Navbar navbarState={navbarOpen} handleNavbar={this.handleNavbar} />

        <Container fluid>
          <section className="section-main" id="section-main">
            <Main classAnimation={this.state.classAnimation}></Main>
          </section>

          <section className="section-video" id="section-video">
            <Services
              classAnimationVideo={this.state.classAnimationVideo}
            ></Services>
          </section>
          <section className="section-companies">
            <Companies
              classAnimationCompanies={this.state.classAnimationCompanies}
            ></Companies>
          </section>
          <section className="section-portfolio" id="section-portfolio">
            <CardsPortfolio
              classAnimationPortfolio={this.state.classAnimationPortfolio}
            ></CardsPortfolio>
          </section>
          <section className="section-plan" id="section-plan">
            <Plan classAnimationPlan={this.state.classAnimationPlan}></Plan>
          </section>
          <section className="section-photos" id="section-photos">
            <Photos
              classAnimationPhoto={this.state.classAnimationPhoto}
            ></Photos>
          </section>

          <section className="section-footer" id="section-footer">
            <Footer
              classAnimationFooter={this.state.classAnimationFooter}
            ></Footer>
          </section>
        </Container>
      </div>
    );
  }
}
export default CleverDevelopmentTheme;
