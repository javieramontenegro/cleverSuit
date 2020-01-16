import React from "react";
import "../style/Careers/bodyCareers.css";
import Navbar from "../component/navbarHome/NavbarHome";

import { Container } from "react-bootstrap";

import Search from "../component/Careers/SearchCarrers";

import UrgentOffers from "../component/Careers/UrgentOffers";
import Postulate from "../component/Careers/Postulate";

import Footer from "../component/Home/FooterHome";

class CleverCareersTheme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarOpen: false,

      classAnimationUrgent: "hidden",
      classAnimationPostulate: "hidden",
      classAnimationPlan: "hidden",
      classAnimationSearch: "hidden",
      classAnimationFooter: "hidden",
      showImages: "hidden"
    };
  }
  componentDidMount() {
    window.onscroll = () => this.handleAnimation();
  }
  handleAnimation = () => {
    if (document.documentElement.scrollTop > 0) {
      this.setState({
        classAnimationSearch: "visible"
      });
    }
    if (document.documentElement.scrollTop > 0) {
      this.setState({
        classAnimationUrgent: "visible"
      });
    }
    if (document.documentElement.scrollTop > 0) {
      this.setState({
        classAnimationPostulate: "visible"
      });
    }

    if (document.documentElement.scrollTop > 400) {
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
          <section className="section-search" id="section-search">
            <Search
              classAnimationSearch={this.state.classAnimationSearch}
            ></Search>
          </section>
          <section className="section-urgentOffers" id="section-urgentOffers">
            <UrgentOffers
              classAnimationUrgent={this.state.classAnimationUrgent}
            ></UrgentOffers>
          </section>
          <section className="section-postulate" id="section-postulate">
            <Postulate
              classAnimationPostulate={this.state.classAnimationPostulate}
            ></Postulate>
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
export default CleverCareersTheme;
