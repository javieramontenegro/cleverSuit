import React from "react";
/* import "../../style/UX/bodyUx.css"; */
import ticket from "../../img/ticket.svg";
import testimony1 from "../../img/testimony_1.png";
import { Row, Col, Button, Card, Carousel } from "react-bootstrap";
import data from "../../data/content.json";
import Image from "react-bootstrap/Image";
import ModalForm from "./ModalFormDev";

const back = window.matchMedia("(max-width: 1199px)");

class PlanDev extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSuccesfull: false,
      show: false,
      title: "hidden",
      titleNormal: "title-plan-dev",
      data
    };
  }
  componentDidMount() {
    back.addListener(this.handleTitle);
    this.handleTitle();
  }
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
  handleTitle = () => {
    if (back.matches) {
      this.setState({
        title: "title-plan-mobile-dev",
        titleNormal: "hidden"
      });
    } else {
      this.setState({
        title: "hidden",
        titleNormal: "title-plan-dev"
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
        <Row
          className={` justify-content-center row-plan ${this.props.classAnimationPlan}`}
        >
          <Col
            xl={{ span: 3, order: 1 }}
            lg={{ span: 8, order: 3 }}
            md={{ span: 8, order: 3 }}
            sm={{ span: 8, order: 3 }}
            xs={{ span: 10, order: 3 }}
            className=" align-self-center "
          >
            <>
              <h1 className={`${this.state.titleNormal}`}>
                {data.Development.sectionPlan.planTitle}
              </h1>
              <Carousel className="carousel-testimony">
                {data.Development.sectionPlan.testimonyList.map((plan, index) => (
                  <Carousel.Item key={index}>
                    <div>
                      <h4>{plan.testimony}</h4>
                    </div>

                    <div className="row row-testimony">
                      <div className="col-2 col-sm-2 col-md-1 col-lg-1 col-xl-2 ">
                        <img className="" src={plan.img} alt="First slide" />
                      </div>
                      <div className="col-10 col-sm-6 col-md-6 col-lg-6 col-xl-10">
                        <p>
                          {plan.name} <br></br>
                          <span>{plan.ocupation}</span>
                        </p>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </>
          </Col>
          <Col
            xl={{ span: 3, order: 2 }}
            lg={{ span: 7, order: 1 }}
            md={{ span: 8, order: 1 }}
            sm={{ span: 12, order: 1 }}
            xs={{ span: 12, order: 1 }}
            className="col-card-plan-Ux"
          >
            <h1 className={`${this.state.title}`}>
              {data.Development.sectionPlan.planTitle}
            </h1>
            <Card style={{ width: "100%" }} className="card-plan-dev">
              <Card.Body className="card-body-plan-dev">
                <Card.Title className="card-title-plan-dev">
                  MVP Just Do IT!
                </Card.Title>
                <p>Trabajemos juntos, hagamos tus sueños realidad</p>
                <ul className="ul-plan-dev">
                  {data.Development.sectionPlan.planSmart.map((plan, index) => (
                    <li className="row" key={index}>
                      <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 col-ticket">
                        <Image src={ticket} className="ticket"></Image>
                      </div>
                      <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-ticket">
                        {plan.descriptionPlan}
                      </div>
                    </li>
                  ))}
                </ul>
              </Card.Body>
              <Card.Footer>
                <Button
                  variant="outline-primary"
                  className="btn-plan-outline-dev"
                  onClick={this.handleShow}
                >
                  ¡Te contactamos!
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col
            xl={{ span: 3, order: 3 }}
            lg={{ span: 7, order: 2 }}
            md={{ span: 8, order: 2 }}
            sm={{ span: 12, order: 2 }}
            xs={{ span: 12, order: 2 }}
            className="col-card-plan-Ux"
          >
            <Card
              style={{ width: "100%" }}
              className="card-plan-dev card-custom-dev  "
            >
              <Card.Body className="card-body-plan-dev">
                <Card.Title className="card-title-plan-dev ">
                  Clever App (enterprise) 
                </Card.Title>
                
                <p>Hagamos algo grande, para este caso tienes una buena definición de lo que quieres, también tienes una descripción de los requisitos detallados o los requisitos de los datos técnicos.</p>

                <ul className="ul-plan-dev">
                  {data.Development.sectionPlan.planCostume.map((plan, index) => (
                    <li className="row" key={index}>
                      <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 col-ticket ">
                        <Image src={ticket} className="ticket"></Image>
                      </div>
                      <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-ticket">
                        {plan.descriptionPlan}
                      </div>
                    </li>
                  ))}
                </ul>
              </Card.Body>
              <Card.Footer>
                <Button
                  variant="primary"
                  className="btn-plan-dev"
                  onClick={this.handleShow}
                >
                  ¡Te contactamos!
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row className={`${this.props.classAnimationPlan}`}>
          <Col xl={5} lg={3} md={3} sm={2} xs={1}></Col>
          <Col xl={6} lg={9} md={9} sm={10} xs={8} className="text-help-dev">
            <p>
              ¿Tienes algunas dudas sobre el servicio? 
              <span> ¡Te contactamos!</span>{" "}
            </p>
          </Col>
        </Row>
      </>
    );
  }
}
export default PlanDev;
