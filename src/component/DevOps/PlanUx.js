import React from "react";
import "../../style/bodyUx.css";
import ticket from "../../img/ticket.svg";
import testimony1 from "../../img/testimony_1.png";
import { Row, Col, Button, Card, Carousel } from "react-bootstrap";
import data from "../../data/content.json";
import Image from "react-bootstrap/Image";
import ModalForm from "./ModalForm";

const back = window.matchMedia("(max-width: 1199px)");
/* const plan = {
  title: [{ title: "We offer plans that fit your needs" }],

  testimony: [
    {
      testimony:
        "Excellent team, the whole process was clear, fast and efficient. I would certainly work with them again",
      name: "Franco Abello",
      ocupation: "CEO de Why X",
      img: testimony1
    },
    {
      testimony:
        "Excellent team, the whole process was clear, fast and efficient. I would certainly work with them again",
      name: "Franco Abello",
      ocupation: "CEO de Why X",
      img: testimony1
    },
    {
      testimony:
        "Excellent team, the whole process was clear, fast and efficient. I would certainly work with them again",
      name: "Franco Abello",
      ocupation: "CEO de Why X",
      img: testimony1
    }
  ],
  planSmart: [
    {
      descriptionPlan: "Donec id elit non mi porta gravida at eget metus."
    },
    {
      descriptionPlan: "Donec id elit non mi porta gravida at eget metus."
    },
    {
      descriptionPlan: "Donec id elit non mi porta gravida at eget metus."
    },
    {
      descriptionPlan: "Donec id elit non mi porta gravida at eget metus."
    }
  ],
  planCostume: [
    {
      descriptionPlan: "Donec id elit non mi porta gravida at eget metus."
    },
    {
      descriptionPlan: "Donec id elit non mi porta gravida at eget metus."
    },
    {
      descriptionPlan: "Donec id elit non mi porta gravida at eget metus."
    },
    {
      descriptionPlan: "Donec id elit non mi porta gravida at eget metus."
    },
    {
      descriptionPlan: "Donec id elit non mi porta gravida at eget metus."
    }
  ]
}; */

class PlanUx extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSuccesfull: false,
      show: false,
      title: "hidden",
      titleNormal: "title-plan",
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
        title: "title-plan-mobile",
        titleNormal: "hidden"
      });
    } else {
      this.setState({
        title: "hidden",
        titleNormal: "title-plan"
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
                {data.UX.sectionPlan.planTitle}
              </h1>
              <Carousel className="carousel-testimony">
                {data.UX.sectionPlan.testimonyList.map((plan, index) => (
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
            lg={{ span: 8, order: 1 }}
            md={{ span: 8, order: 1 }}
            sm={{ span: 10, order: 1 }}
            xs={{ span: 10, order: 1 }}
          >
            <h1 className={`${this.state.title}`}>
              {data.UX.sectionPlan.planTitle}
            </h1>
            <Card style={{ width: "100%" }} className="card-plan ">
              <Card.Body>
                <Card.Title className="card-title-plan">
                  Standard Plan
                </Card.Title>
                <p>Our default plan</p>
                <ul className="ul-plan">
                  {data.UX.sectionPlan.planSmart.map((plan, index) => (
                    <li className="row" key={index}>
                      <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 ">
                        <Image src={ticket} className="ticket"></Image>
                      </div>
                      <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                        {plan.descriptionPlan}
                      </div>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline-primary"
                  className="btn-plan-outline"
                  onClick={this.handleShow}
                >
                  We' ll Contact You!
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col
            xl={{ span: 3, order: 3 }}
            lg={{ span: 8, order: 2 }}
            md={{ span: 8, order: 2 }}
            sm={{ span: 10, order: 2 }}
            xs={{ span: 10, order: 2 }}
          >
            <Card style={{ width: "100%" }} className="card-plan card-custom">
              <Card.Body>
                <Card.Title className="card-title-plan">
                  Custom-made plan
                </Card.Title>
                <p>Exclusive tailor-made service</p>

                <ul className="ul-plan">
                  {data.UX.sectionPlan.planCostume.map((plan, index) => (
                    <li className="row" key={index}>
                      <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 ">
                        <Image src={ticket} className="ticket"></Image>
                      </div>
                      <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                        {plan.descriptionPlan}
                      </div>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="primary"
                  className="btn-plan"
                  onClick={this.handleShow}
                >
                  We' ll Contact You!
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className={`${this.props.classAnimationPlan}`}>
          <Col xl={6} lg={3} md={3} sm={2} xs={1}></Col>
          <Col xl={6} lg={9} md={9} sm={10} xs={10} className="text-help">
            <p>
              Do you have any additional questions? ,
              <span>We'll call you!</span>?{" "}
            </p>
          </Col>
        </Row>
      </>
    );
  }
}
export default PlanUx;
