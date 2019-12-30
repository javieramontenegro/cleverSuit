import React from "react";
import "../../style/bodyUx.css";
import photo1 from "../../img/team_01.png";
import photo2 from "../../img/team_02.png";
import photo3 from "../../img/team_03.png";
import photo4 from "../../img/team_04.png";
import photo5 from "../../img/team_05.png";
import { Row, Col, Container, Button, Card, Carousel } from "react-bootstrap";

import Image from "react-bootstrap/Image";

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Row
          className={` row-photos justify-content-center ${this.props.classAnimationPhoto} `}
        >
          <Col xl={3} lg={3} md={3} sm={8} className="parent">
            <div className="child ">
              <Image src={photo1}></Image>
            </div>
          </Col>
          <Col xl={3} lg={3} md={3} sm={8} className="parent">
            <div className="child ">
              <Image src={photo2}></Image>
            </div>
          </Col>
          <Col xl={3} lg={3} md={3} sm={8} className="parent">
            <div className="child ">
              <Image src={photo3}></Image>
            </div>
          </Col>
        </Row>
        <Row
          className={` row-photos justify-content-center ${this.props.classAnimationPhoto} `}
        >
          <Col xl={3} lg={3} md={3} sm={8} className="parent">
            <div className="child ">
              <Image src={photo4}></Image>
            </div>
          </Col>
          <Col xl={6} lg={6} md={6} sm={8} className="parent">
            <div className="child ">
              <Image src={photo5}></Image>
            </div>
          </Col>
        </Row>

        {/* IN MOBILE SHOW CAROUSEL */}
        <Row className={` show-carousel ${this.props.classAnimationPhoto}`}>
          <Col sm={12} xs={12}>
            <Carousel>
              <Carousel.Item>
                <img className="" src={photo1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="" src={photo2} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="" src={photo3} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </>
    );
  }
}
export default Photos;
