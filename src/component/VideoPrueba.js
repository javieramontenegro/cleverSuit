import React from "react";
import "../style/body.css";
import reel from "../img/reel_final.mp4";
import circle from "../img/circle.svg";
import { Row, Col, Container, Button } from "react-bootstrap";
import YoutubeVideo from "./YoutubeVideo";

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

class VideoPrueba extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showVideo: false
    };
  }
  showVideo = () => {
    this.setState({ showVideo: !this.state.showVideo });
    console.log(this.state.showVideo);
  };
  render() {
    return (
      <>
        <Row>
          <YoutubeVideo
            show={this.state.showVideo}
            handleVideo={this.showVideo}
          ></YoutubeVideo>
          <div class="video-container">
            <video autoPlay loop muted class="fillWidth visible-lg">
              <source src={reel} type="video/mp4; " />
            </video>
          </div>

          <Row className=" justify-content-center content-text position-text">
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className="content-text"
            >
              <h2>
                Our customers support our capacity <br></br>to boost your
                project
              </h2>
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
              <Row className="btn-watchvideo justify-content-center">
                <Col xl={3} lg={4} className="col-button-video">
                  <Button
                    className="btn-outline-video"
                    onClick={this.showVideo}
                  >
                    Ver video
                  </Button>
                </Col>
                <Col xl={3} lg={4} className="col-button-video">
                  <Button className="btn-color">Cotizar</Button>
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
