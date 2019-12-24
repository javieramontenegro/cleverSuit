import React from "react";
import "../style/body.css";
import reel from "../img/reel_final.mp4";
import circle from "../img/circle.svg";
import { Row, Col, Container, Button, Modal, Image } from "react-bootstrap";
import YoutubeVideo from "./YoutubeVideo";
import { Formik, Form, Field, ErrorMessage, CheckboxField } from "formik";
import succes from "../img/succes.svg";
import imgBackground from "../img/bg_mobile.png";
const habilityContent = [
  { hability: "UI / UX Audit" },
  { hability: "Research" },
  { hability: "Brand Identity" },
  { hability: "Prototyping and Testing" },
  { hability: "Software Development" },
  { hability: "Animation" },
  { hability: "2D / 3D Motion Graphics" },
  { hability: "Web design and mobile apps" }
];
const back = window.matchMedia("(max-width: 720px)");
class VideoPrueba extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showVideo: false,
      showSuccesfull: false,
      show: false,
      imageBackground: "hidden",
      hideVideo: ""
    };
  }
  componentDidMount() {
    back.addListener(this.handleBackground);
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
      if (!back.matches) {
        this.setState({
          imageBackground: "hidden",
          hideVideo: ""
        });
      }
    }
  };
  render() {
    return (
      <>
        {/* MODAL FORM */}
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          showSucces={this.showSuccesfull}
          className="modal-form"
        >
          <Modal.Header
            closeButton
            className={
              this.state.showSuccesfull === true
                ? "formik-display-off"
                : "formik-display-on"
            }
          ></Modal.Header>
          <Modal.Body
            className={
              this.state.showSuccesfull === true
                ? "formik-display-off"
                : "formik-display-on"
            }
          >
            <Formik
              className={
                this.state.showSuccesfull === true
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
                        name="optionOne"
                        type="radio"
                        /* checked={this.state.isGoing}
                            onChange={this.handleInputChange} */
                      />
                      Only me
                    </label>
                    <label>
                      <input
                        name="optionTwo"
                        type="radio"
                        /* checked={this.state.isGoing}
                            onChange={this.handleInputChange} */
                      />
                      1 - 50
                    </label>
                    <label>
                      <input
                        name="optionThree"
                        type="radio"
                        /* checked={this.state.isGoing}
                            onChange={this.handleInputChange} */
                      />
                      50 - 250
                    </label>
                    <label>
                      <input
                        name="optionFour"
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
                      onClick={this.handleShowSuccesfull}
                    >
                      Request a Quote
                    </Button>
                  </div>
                  <div className="row btn-close">
                    <Button variant="secondary" onClick={this.handleClose}>
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
              this.state.showSuccesfull === true
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
                onClick={this.handleClose && this.handleCloseSuccesful}
              >
                Continue
              </Button>
            </div>
          </Modal.Body>
        </Modal>
        <Row>
          <YoutubeVideo
            show={this.state.showVideo}
            handleVideo={this.showVideo}
          ></YoutubeVideo>
          <div class={` video-container `}>
            <video
              autoPlay
              loop
              muted
              class={` fillWidth visible-lg ${this.state.hideVideo}`}
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
              <h2>Our customers support our capacity to boost your project</h2>
              <ul className="ul-section2">
                {habilityContent.map(hab => {
                  return (
                    <li>
                      <svg
                        version="1.1"
                        id="circle"
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

                      {hab.hability}
                    </li>
                  );
                })}
              </ul>
              <Row
                className={` btn-watchvideo justify-content-center ${this.props.classAnimationVideo}`}
              >
                <Col xl={3} lg={4} className="col-button-video">
                  <Button
                    className="btn-outline-video"
                    onClick={this.showVideo}
                  >
                    Watch our reel
                  </Button>
                </Col>
                <Col xl={3} lg={4} className="col-button-video">
                  <Button className="btn-color" onClick={this.handleShow}>
                    Request a Quote
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
export default VideoPrueba;
