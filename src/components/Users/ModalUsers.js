import React, { PureComponent } from 'react';
import { Form, FormGroup, Label, Input, Col, Row, Button } from 'reactstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Modal from 'components/common/Modal';
import { InputSelect } from 'components/common/Input';

const optionRole = [
  {
    id: 1,
    value: 'admin',
    label: 'Admin',
  },
  {
    id: 2,
    value: 'driver',
    label: 'Driver',
  },
  {
    id: 3,
    value: 'truck',
    label: 'Truck',
  },
  {
    id: 4,
    value: 'rep',
    label: 'Rep',
  },
];

const optionVailable = [
  {
    id: 1,
    value: true,
    label: 'Yes',
  },
  {
    id: 2,
    value: false,
    label: 'No',
  },
];
class ModalUsers extends PureComponent {
  onSubmit = values => {
    const { onSubmit } = this.props;
    onSubmit(values);
  };

  render() {
    const { visibleModal, toggle, title, user } = this.props;
    const schema = Yup.object().shape({
      role: Yup.string().required('Required'),
      name: Yup.string().required('Required'),
      email: Yup.string().required('Required'),
      password: Yup.string().required('Required'),
      cell: Yup.number().required('Required'),
      availble: Yup.string().required('Required'),
      //   notes: Yup.string().required('Required'),
    });

    return (
      <Modal
        visibleModal={visibleModal}
        toggle={toggle}
        title={title}
        width="1000px">
        <Formik
          initialValues={user || {}}
          onSubmit={this.onSubmit}
          validationSchema={schema}>
          {({ handleSubmit, handleChange, isValid, values }) => (
            <Form onSubmit={handleSubmit}>
              <Row form>
                <Col sm={6}>
                  <FormGroup row>
                    <InputSelect
                      label="Role"
                      name="role"
                      option={optionRole}
                      onChange={handleChange}
                      value={values.role}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row form>
                <Col md={6}>
                  <FormGroup row>
                    <Label for="exampleEmail" sm={2}>
                      Name
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        onChange={handleChange}
                        value={values.name}
                      />
                    </Col>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup row>
                    <Label for="examplePassword" sm={3}>
                      Email
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={values.email}
                      />
                    </Col>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup row>
                    <Label for="exampleEmail" sm={2}>
                      Password
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="text"
                        name="password"
                        id="password"
                        placeholder="Password"
                        onChange={handleChange}
                        value={values.password}
                      />
                    </Col>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup row>
                    <Label for="examplePassword" sm={3}>
                      Cell Phone
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="number"
                        name="cell"
                        id="cell"
                        placeholder="Cell Phone"
                        onChange={handleChange}
                        value={values.cell}
                      />
                    </Col>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <FormGroup row>
                    <InputSelect
                      label="Availble"
                      name="availble"
                      option={optionVailable}
                      onChange={handleChange}
                      value={values.availble}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup row>
                <Label for="examplePassword" sm={1}>
                  Notes
                </Label>
                <Col sm={11}>
                  <Input
                    type="textarea"
                    name="notes"
                    id="notes"
                    placeholder="Notes"
                    onChange={handleChange}
                    value={values.notes}
                  />
                </Col>
              </FormGroup>

              <Button type="submit" color="primary" disabled={!isValid}>
                {title}
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

export default ModalUsers;
