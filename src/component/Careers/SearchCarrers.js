import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
class SearchCareers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Row className={` row-search justify-content-center visible`}>
        <Col
          xl={10}
          lg={12}
          md={10}
          sm={10}
          xs={12}
          className="align-self-center"
        >
          <Form>
            <Form.Row>
              <Form.Group
                as={Col}
                xl={4}
                lg={3}
                md={6}
                sm={6}
                xs={10}
                controlId="formGridEmail"
              >
                <Form.Label>Empieza tu búsqueda aquí:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="empieza tu busqueda..."
                />
              </Form.Group>
              <Form.Group
                as={Col}
                xl={2}
                lg={3}
                md={3}
                sm={3}
                xs={6}
                controlId="formGridState"
              >
                <Form.Label>Tipo</Form.Label>
                <Form.Control as="select">
                  <option>Areas de interés</option>
                  <option>DevOps</option>
                  <option>Development</option>
                  <option>Recursos Humanos</option>
                  <option>Administracion</option>
                </Form.Control>
              </Form.Group>
              <Form.Group
                as={Col}
                xl={2}
                lg={3}
                md={3}
                sm={3}
                xs={6}
                controlId="formGridState"
              >
                <Form.Label>Experiencia</Form.Label>
                <Form.Control as="select">
                  <option>Areas de interés</option>
                  <option>DevOps</option>
                  <option>Development</option>
                  <option>Recursos Humanos</option>
                  <option>Administracion</option>
                </Form.Control>
              </Form.Group>
              <Form.Group
                as={Col}
                controlId="formGridState"
                className="align-self-end"
                xl={2}
                lg={3}
                md={4}
                sm={6}
                xs={6}
              >
                <Button className="align-self-end btn-search">
                  Muestrame resultados
                </Button>
              </Form.Group>
              <Form.Group
                as={Col}
                xl={2}
                lg={2}
                md={3}
                sm={5}
                xs={5}
                controlId="formGridState"
                className="align-self-end"
              >
                <Button className=" btn-search-clean">Limpiar filtros</Button>
              </Form.Group>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default SearchCareers;
