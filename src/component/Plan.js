import React from "react";
import "../style/body.css";
import ticket from "../img/ticket.svg";
import testimony1 from "../img/testimony_1.png";
import {
  Row,
  Col,
  Container,
  Button,
  Card,
  Carousel,
  Modal
} from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage, CheckboxField } from "formik";
import succes from "../img/succes.svg";

import Image from "react-bootstrap/Image";

const back = window.matchMedia("(max-width: 1100px)");
const plan = {
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
};
class Plan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSuccesfull: false,
      show: false,
      title: "hidden",
      titleNormal: "title-plan"
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
                        name="OptionOne"
                        type="radio"
                        /* checked={this.state.isGoing}
                            onChange={this.handleInputChange} */
                      />
                      Only me
                    </label>
                    <label>
                      <input
                        name="OptionTwo"
                        type="radio"
                        /* checked={this.state.isGoing}
                            onChange={this.handleInputChange} */
                      />
                      1 - 50
                    </label>
                    <label>
                      <input
                        name="OptionThree"
                        type="radio"
                        /* checked={this.state.isGoing}
                            onChange={this.handleInputChange} */
                      />
                      50 - 250
                    </label>
                    <label>
                      <input
                        name="OptionFour"
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
                We offer plans that fit your needs
              </h1>
              <Carousel className="carousel-testimony">
                {plan.testimony.map(plan => (
                  <Carousel.Item>
                    <div>
                      <h4>{plan.testimony}</h4>
                    </div>

                    <div className="row row-testimony">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-1 ">
                        <img className="" src={plan.img} alt="First slide" />
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-11">
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
              We offer plans that fit your needs
            </h1>
            <Card style={{ width: "100%" }} className="card-plan ">
              <Card.Body>
                <Card.Title className="card-title-plan">
                  Standard Plan
                </Card.Title>
                <p>Our default plan</p>
                <ul className="ul-plan">
                  {plan.planSmart.map(plan => (
                    <li className="row">
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
                  {plan.planCostume.map(plan => (
                    <li className="row">
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
          <Col xl={6} lg={2} md={2} sm={2} xs={1}></Col>
          <Col xl={6} lg={10} md={10} sm={10} xs={10} className="text-help">
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
export default Plan;
