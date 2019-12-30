import React from "react";
import "../../style/bodyUx.css";
import flexit from "../../img/flexit.jpg";
import propins from "../../img/propins.png";
import whyX from "../../img/whyX.png";
import forus from "../../img/forus.png";
import { Row, Col, Button, Card } from "react-bootstrap";

const { Body, Title, Text } = Card;
const cards = [
  {
    img: flexit,
    text: "Flexit Contrataciones",
    description:
      "This app was developed for quick and immediate hiring of users in part-time contexts or special events that require more staff.",
    area: "UX, UI, branding, development"
  },
  {
    img: propins,
    text: "propins",
    description:
      "This is a platform that allows virtual tours to properties and projects for sales by using the best technology for this market.",
    area: "UX, UI, branding, development"
  },
  {
    img: whyX,
    text: "WHYX App",
    description:
      "Based on a circular economy, the main concept is 'lease instead of buy'. The aim is to have experiences without getting needless products.",
    area: "UX, UI, branding, development"
  },
  {
    img: forus,
    text: "Forus",
    description:
      "Our solution for product inventory in stores of a retail chain, optimize processes and allow greater service efficiency.",
    area: "UX, UI, branding, development"
  }
];
class PortfolioUx extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: 4
    };
  }

  loadMore = () => {
    this.setState(old => {
      return { visible: old.visible + 2 };
    });
  };

  render() {
    return (
      <>
        <Row
          className={` justify-content-center text-porfolio ${this.props.classAnimationPortfolio} `}
        >
          <Col
            xs={12}
            sm={12}
            md={10}
            lg={10}
            xl={12}
            className={`${this.props.classAnimationPortfolio} `}
          >
            <h1 className="portfolio-title">
              We build your tailored digital products
            </h1>
          </Col>
          {/*  <Col xl={6} lg={2} md={0} sm={0} xs={0}></Col> */}
        </Row>

        <Row
          className={` justify-content-center ${this.props.classAnimationPortfolio} `}
        >
          {cards.slice(0, this.state.visible).map((card, index) => {
            return (
              <div
                className="col-10 col-sm-10 col-md-8 col-lg-8 col-xl-5  card-portfolio"
                key={index}
              >
                <Card style={{ width: "100%" }}>
                  <div className="inner">
                    <Card.Img variant="top" src={card.img} />
                  </div>
                  <Body>
                    <Title>{card.text}</Title>
                    <Text>{card.description}</Text>
                    <Text className="area-text">{card.area}</Text>
                  </Body>
                </Card>
              </div>
            );
          })}
        </Row>
        <Row
          className={`  justify-content-center ${this.props.classAnimationPortfolio} `}
        >
          {this.state.visible < cards.length && (
            <Button onClick={() => this.loadMore()} className="btn-loadMore">
              {" "}
              Cargar mas
            </Button>
          )}
        </Row>
      </>
    );
  }
}
export default PortfolioUx;
