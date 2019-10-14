import React, { PureComponent } from 'react';
import { Form, FormGroup, Label, Input, Col, Row, Button } from 'reactstrap';
import { Formik } from 'formik';
import Modal from 'components/common/Modal';
import InputSelect from 'components/common/Input/InputSelect';

const optionDriver = [
  {
    id: 1,
    label: 'Tony',
  },
  {
    id: 2,
    label: 'Hulk',
  },
  {
    id: 3,
    label: 'Larson',
  },
  {
    id: 4,
    label: 'Brian',
  },
  {
    id: 5,
    label: 'Scarlet',
  },
];

const optionRep = [
  {
    id: 1,
    label: 'Mark',
  },
  {
    id: 2,
    label: 'Bill',
  },
  {
    id: 3,
    label: 'Elon',
  },
  {
    id: 4,
    label: 'Warrent',
  },
  {
    id: 5,
    label: 'Bezos',
  },
];
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
                        name="returnRail"
                        id="returnRail"
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
              <FormGroup row>
                <Label for="examplePassword" sm={2}>
                  Loaded Rail
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="loadedRail"
                    id="loadedRail"
                    placeholder="Loaded Rail"
                    onChange={handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <InputSelect
                  label="Driver"
                  name="driver"
                  option={optionDriver}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup row>
                <InputSelect
                  label="Rep"
                  name="rep"
                  option={optionRep}
                  onChange={handleChange}
                />
              </FormGroup>
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
