import React, { PureComponent } from 'react';
import { Form, FormGroup, Label, Input, Col, Row, Button } from 'reactstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Modal from 'components/common/Modal';
import { InputSelect } from 'components/common/Input';

const optionRole = [
  {
    id: 1,
    label: 'Admin',
  },
  {
    id: 2,
    label: 'Driver',
  },
  {
    id: 3,
    label: 'Truck',
  },
  {
    id: 4,
    label: 'Rep',
  },
];

const optionVailable = [
  {
    id: 1,
    label: 'Yes',
  },
  {
    id: 2,
    label: 'No',
  },
];
class ModalUsers extends PureComponent {
  onSubmit = values => {
    const { onSubmit } = this.props;
    onSubmit(values);
  };

  render() {
    const { visibleModal, toggle, title } = this.props;
    const schema = Yup.object().shape({
      role: Yup.string().required('Required'),
      name: Yup.string().required('Required'),
      email: Yup.string().required('Required'),
      password: Yup.string().required('Required'),
      cell: Yup.number().required('Required'),
      availble: Yup.string().required('Required'),
      notes: Yup.string().required('Required'),
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
                <Col sm={6}>
                  <FormGroup row>
                    <InputSelect
                      label="Role"
                      name="role"
                      option={optionRole}
                      onChange={handleChange}
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
                  />
                </Col>
              </FormGroup>

              <Button type="submit" color="primary" disabled={!isValid}>
                Add User
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
