import React from "react";

import flexit from "../../img/flexit.jpg";
import propins from "../../img/propins.png";
import whyX from "../../img/whyX.png";
import forus from "../../img/forus.png";
import { Row, Col, Button, Card } from "react-bootstrap";
import data from "../../data/content.json";

const { Body, Title, Text } = Card;

class PortfolioHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: 4,
      data
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
              {data.Home.sectionPortfolio.portfolioTitle}
            </h1>
          </Col>
          {/*  <Col xl={6} lg={2} md={0} sm={0} xs={0}></Col> */}
        </Row>

        <Row
          className={` justify-content-center ${this.props.classAnimationPortfolio} `}
        >
          {data.Home.sectionPortfolio.cards
            .slice(0, this.state.visible)
            .map((card, index) => {
              return (
                <div
                  className="col-12 col-sm-10 col-md-8 col-lg-8 col-xl-5  card-portfolio"
                  key={index}
                >
                  <Card style={{ width: "100%" }}>
                    <div className="inner">
                      <Card.Img variant="top" src={card.img} />
                    </div>
                    <Body className="card-body-portfolio">
                      <Title>{card.text}</Title>
                      <Text>{card.description}</Text>
                      <Text className="area-text-home">{card.area}</Text>
                    </Body>
                  </Card>
                </div>
              );
            })}
        </Row>
        <Row
          className={`  justify-content-center ${this.props.classAnimationPortfolio} `}
        >
          {this.state.visible < data.Home.sectionPortfolio.cards.length && (
            <Button
              onClick={() => this.loadMore()}
              className="btn-loadMore-home"
            >
              {" "}
              Cargar más
            </Button>
          )}
        </Row>
      </>
    );
  }
}
export default PortfolioHome;
