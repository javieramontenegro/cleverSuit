import React from "react";

import reel from "../../img/video_back.mp4";
import data from "../../data/content.json";
import { Row, Col, Button, Image } from "react-bootstrap";
import YoutubeVideo from "./YoutubeVideo";

import imgBackground from "../../img/bg_mobile.png";
import ModalForm from "./ModalForm";

const back = window.matchMedia("(max-width: 1080px)");
class ServicesDev extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showVideo: false,
      showSuccesfull: false,
      show: false,
      imageBackground: "hidden",
      hideVideo: "",
      data
    };
  }

  componentDidMount() {
    back.addListener(this.handleBackground);
    this.handleBackground();
  }
  showVideo = () => {
    this.setState({ showVideo: !this.state.showVideo });
    console.log(this.state.showVideo);
  };
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
  handleBackground = () => {
    if (back.matches) {
      this.setState({
        imageBackground: "image-background-show",
        hideVideo: "hidden"
      });
    } else {
      this.setState({
        imageBackground: "hidden",
        hideVideo: ""
      });
    }
  };
  render() {
    return (
      <>
        <ModalForm
          handleShow={this.handleShow}
          handleClose={this.handleClose}
          handleCloseSuccesful={this.handleCloseSuccesful}
          handleShowSuccesfull={this.handleShowSuccesfull}
          show={this.state.show}
          showSuccesfull={this.state.showSuccesfull}
        ></ModalForm>
        <Row>
          <YoutubeVideo
            show={this.state.showVideo}
            handleVideo={this.showVideo}
          ></YoutubeVideo>
          <div className={` video-container `}>
            <video
              autoPlay
              loop
              muted
              className={` fillWidth visible-lg ${this.state.hideVideo}`}
            >
              <source src={reel} type="video/mp4; " />
            </video>
            <Image
              src={imgBackground}
              className={`${this.state.imageBackground} `}
            ></Image>
          </div>
          <Row
            className={` justify-content-center content-text position-text ${this.props.classAnimationVideo}`}
          >
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className="content-text"
            >
              <h2>{data.UX.sectionServices.servicesTitle}</h2>

              {/*  <h2>Our customers support our capacity to boost your project</h2> */}
              <ul className="ul-section2">
                {data.UX.sectionServices.servicesHability.map((hab, index) => (
                  <>
                    <li key={index}>
                      <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                        <svg
                          version="1.1"
                          id="circleDev"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 2 2"
                        >
                          <g>
                            <circle cx="1" cy="1" r="0.5" />
                            <path d="M1,0C0.45,0,0,0.45,0,1s0.45,1,1,1s1-0.45,1-1S1.55,0,1,0L1,0z" />
                          </g>
                        </svg>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 div-hability">
                        {hab.hability}
                      </div>
                    </li>
                  </>
                ))}
              </ul>
              <Row
                className={` btn-watchvideo justify-content-center ${this.props.classAnimationVideo}`}
              >
                <Col xl={3} lg={4} className="col-button-video">
                  <Button
                    className="btn-outline-video-dev"
                    onClick={this.showVideo}
                  >
                    {data.UX.sectionServices.servicesButtonReel}
                  </Button>
                </Col>
                <Col xl={3} lg={4} className="col-button-video">
                  <Button className="btn-color-dev" onClick={this.handleShow}>
                    {data.UX.sectionServices.servicesButtonRequest}
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Row>
      </>
    );
  }
}
export default ServicesDev;
