import React from "react";
import "../style/body.css";
import flexit from "../img/flexit.jpg";
import propins from "../img/propins.png";
import whyX from "../img/whyX.png";
import forus from "../img/forus.png";
import { Row, Col, Container, Button, Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const { Body, Title, Text } = Card;

class CardsPortfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: 2,
      cards: [
        {
          img: flexit,
          text: "Flexit Contrataciones",
          description:
            "Normal paragraph. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.",
          area: "UX, UI, branding, development"
        },
        {
          img: propins,
          text: "propins",
          description:
            "Normal paragraph. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.",
          area: "UX, UI, branding, development"
        },
        {
          img: whyX,
          text: "WHYX App",
          description:
            "Normal paragraph. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.",
          area: "UX, UI, branding, development"
        },
        {
          img: forus,
          text: "Forus",
          description:
            "Normal paragraph. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.",
          area: "UX, UI, branding, development"
        }
      ]
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
        <Row className="justify-content-center text-porfolio ">
          <Col xs={12} sm={12} md={12} lg={6} xl={4}>
            <h1>Creamos productos digitales a medida.</h1>
          </Col>
          <Col xl={6} lg={2} md={0} sm={0} xs={0}></Col>
        </Row>

        <Row className=" justify-content-center ">
          {this.state.cards.slice(0, this.state.visible).map(card => {
            return (
              <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-5  card-portfolio">
                <Card style={{ width: "100%" }}>
                  <div class="inner">
                    <Card.Img variant="top" src={card.img} />
                  </div>
                  <Body>
                    <Title>{card.text}</Title>
                    <Text>{card.description}</Text>
                    <Text>{card.area}</Text>
                  </Body>
                </Card>
              </div>
            );
          })}
        </Row>
        <Row className=" justify-content-center">
          {this.state.visible < this.state.cards.length && (
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
export default CardsPortfolio;
