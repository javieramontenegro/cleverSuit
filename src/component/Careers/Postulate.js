import React from "react";
import { Row, Col, Button, Form, Card } from "react-bootstrap";
import data from "../../data/content.json";
const { Body, Title, Text } = Card;
class Postulate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data, time: new Date() };
  }
  getCurrentDate(separator = "") {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}/${separator}${
      month < 10 ? `0${month}` : `${month}`
    }/${separator}${date}`;
  }
  render() {
    return (
      <Row className="row-urgentOffers justify-content-center visible">
        <Col xl={10} xl={10} lg={11} md={12} sm={12} xs={12}>
          <Row className="row-card-titleUrgent">
            <h1>{data.Careers.sectionPostulate.postulateTitle}</h1>
          </Row>
          {data.Careers.sectionPostulate.cards
            .slice(0, this.state.visible)
            .map((card, index) => {
              return (
                <div
                  className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 card-urgent"
                  key={index}
                >
                  <Card style={{ width: "100%" }} className={`${card.color} `}>
                    <Row className="row-card-autor">
                      <Col xl={8}>{card.autor}</Col>
                      <Col xl={4}>{this.getCurrentDate()}</Col>
                    </Row>

                    <Body className="card-body-urgent">
                      <Title>{card.text}</Title>
                      <Text>{card.description}</Text>
                      <Text className="area-text-postulate">{card.area}</Text>
                      <Row className="justify-content-end">
                        <Button className="btn-postulate-normal">
                          Postular
                        </Button>
                      </Row>
                    </Body>
                  </Card>
                </div>
              );
            })}
        </Col>
      </Row>
    );
  }
}

export default Postulate;
