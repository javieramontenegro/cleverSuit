import React from "react";
import { Row, Col, Button, Form, Card } from "react-bootstrap";
import data from "../../data/content.json";
const { Body, Title, Text } = Card;
class UrgentOffers extends React.Component {
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
      <Row className={` row-urgentOffers justify-content-center visible`}>
        <Col
          xl={10}
          lg={11}
          md={12}
          sm={12}
          xs={12}
          className=" align-self-center  "
        >
          <Row className="row-card-titleUrgent  ">
            <h1>{data.Careers.sectionUrgent.urgentTitle}</h1>
          </Row>
          {data.Careers.sectionUrgent.cards
            .slice(0, this.state.visible)
            .map((card, index) => {
              return (
                <div
                  className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 card-urgent align-self-center"
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
                      <Text className="area-text-urgent">{card.area}</Text>
                      <Row className="justify-content-end">
                        <Button className="btn-postulate">Postular</Button>
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

export default UrgentOffers;
