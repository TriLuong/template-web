import React, { PureComponent } from 'react';
import { Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import Modal from 'components/common/Modal';

class ModalCurrentLoads extends PureComponent {
  render() {
    const { visibleModal, toggle, title } = this.props;
    return (
      <Modal
        visibleModal={visibleModal}
        toggle={toggle}
        title={title}
        width="1000px"
      >
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup row>
                <Label for="exampleEmail" sm={3}>
                  Load #
                </Label>
                <Col sm={9}>
                  <Input
                    type="text"
                    name="load"
                    id="load"
                    placeholder="Load No"
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup row>
                <Label for="examplePassword" sm={3}>
                  Container #
                </Label>
                <Col sm={9}>
                  <Input
                    type="text"
                    name="container"
                    id="container"
                    placeholder="Container No"
                  />
                </Col>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup row>
                <Label for="exampleEmail" sm={3}>
                  Return Rail
                </Label>
                <Col sm={9}>
                  <Input
                    type="text"
                    name="rail"
                    id="rail"
                    placeholder="Return Rail"
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup row>
                <Label for="examplePassword" sm={3}>
                  Yard Pull
                </Label>
                <Col sm={9}>
                  <Input type="text" name="pull" id="pull" placeholder="Pull" />
                </Col>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </Modal>
    );
  }
}

export default ModalCurrentLoads;
