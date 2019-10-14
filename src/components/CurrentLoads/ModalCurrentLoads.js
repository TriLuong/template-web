import React, { PureComponent } from 'react';
import { Form, FormGroup, Label, Input, Col, Row, Button } from 'reactstrap';
import { Formik } from 'formik';
import Modal from 'components/common/Modal';

class ModalCurrentLoads extends PureComponent {
  onSubmit = values => {
    console.log('Submit', values);
  };

  render() {
    const { visibleModal, toggle, title } = this.props;
    return (
      <Modal
        visibleModal={visibleModal}
        toggle={toggle}
        title={title}
        width="1000px">
        <Formik onSubmit={this.onSubmit}>
          {({ handleSubmit, handleChange }) => (
            <Form onSubmit={handleSubmit}>
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                      <Input
                        type="text"
                        name="pull"
                        id="pull"
                        placeholder="Pull"
                        onChange={handleChange}
                      />
                    </Col>
                  </FormGroup>
                </Col>
              </Row>
              <Button type="submit" color="primary">
                Do Something
              </Button>
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </Form>
          )}
        </Formik>
      </Modal>
    );
  }
}

export default ModalCurrentLoads;
