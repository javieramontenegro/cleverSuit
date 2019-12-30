import React, { useEffect, useState } from "react";

import "../../style/bodyUx.css";

import { Row, Col, Container, Button, Image, Modal } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage, CheckboxField } from "formik";

import Animation from "./AnimationUx";
import ModalForm from "./ModalForm";

const mainContent = [
  {
    title: "We make complex things simple",
    description:
      "As a team, our goal is to build great user experiences for every project we participate in",
    button: "Request a Quote"
  }
];
/* const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [showSuccesfull, setSuccesfull] = useState(false);
const handleCloseSuccesful = () => setSuccesfull(false);
const handleShowSuccesfull = () => setSuccesfull(true); */

class MainUx extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classAnimation: this.props.classAnimation,
      showSuccesfull: false,
      show: false
    };
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

        <Row className="row-main">
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            className={`ux-text visible`}
          >
            {mainContent.map(text => (
              <>
                <h1>{text.title}</h1>
                <br></br>
                <p>{text.description}</p>
                <Button
                  className="button-talk"
                  id="btnTalk"
                  onClick={this.handleShow}
                >
                  {text.button}
                </Button>
              </>
            ))}
          </Col>

          <Col
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            className={`align-self-center ux-image visible `}
          >
            {/*  <Image src={uxImage} className=""></Image> */}
            <Animation></Animation>
          </Col>
        </Row>
      </>
    );
  }
}
export default MainUx;
