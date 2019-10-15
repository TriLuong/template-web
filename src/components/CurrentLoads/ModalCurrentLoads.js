import React, { PureComponent } from 'react';
import { Form, FormGroup, Label, Input, Col, Row, Button } from 'reactstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Modal from 'components/common/Modal';
import { InputSelect } from 'components/common/Input';

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
    const { onSubmit } = this.props;
    onSubmit(values);
  };

  render() {
    const { visibleModal, toggle, title } = this.props;
    const schema = Yup.object().shape({
      load: Yup.number().required('Required'),
      container: Yup.number().required('Required'),
      returnRail: Yup.number().required('Required'),
      pull: Yup.number().required('Required'),
      loadedRail: Yup.number().required('Required'),
      driver: Yup.string().required('Required'),
      rep: Yup.string().required('Required'),
    });
    return (
      <Modal
        visibleModal={visibleModal}
        toggle={toggle}
        title={title}
        width="1000px">
        <Formik onSubmit={this.onSubmit} validationSchema={schema}>
          {({ handleSubmit, handleChange, isValid }) => (
            <Form onSubmit={handleSubmit}>
              <Row form>
                <Col md={6}>
                  <FormGroup row>
                    <Label for="exampleEmail" sm={3}>
                      Load #
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="number"
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
                        type="number"
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
                        type="number"
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
                        type="number"
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
                    type="number"
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
              <Button type="submit" color="primary" disabled={!isValid}>
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
