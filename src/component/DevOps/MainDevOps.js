import React from "react";
import data from "../../data/content.json";
/* import "../../style/UX/bodyUx.css"; */

import { Row, Col, Button } from "react-bootstrap";

import Animation from "./AnimationDevOps";
import ModalForm from "./ModalFormDevOps";

/* const mainContent = [
  {
    title: "We make complex things simple",
    description:
      "As a team, our goal is to build great user experiences for every project we participate in",
    button: "Request a Quote"
  }
]; */
/* const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [showSuccesfull, setSuccesfull] = useState(false);
const handleCloseSuccesful = () => setSuccesfull(false);
const handleShowSuccesfull = () => setSuccesfull(true); */

class MainDevOps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classAnimation: this.props.classAnimation,
      showSuccesfull: false,
      show: false,
      data
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
            {data.DevOps.sectionMain.map((text, index) => (
              <React.Fragment key={index}>
                <h1>{text.mainTitle}</h1>
                <br></br>
                <p>{text.mainText}</p>
                <Button
                  className="button-talk-DevOps"
                  id="btnTalk"
                  onClick={this.handleShow}
                >
                  {text.button}
                </Button>
              </React.Fragment>
            ))}
          </Col>

          <Col
            xs={10}
            sm={10}
            md={10}
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
export default MainDevOps;
