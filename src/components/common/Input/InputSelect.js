import React from 'react';
import { Input, Label, Col } from 'reactstrap';

const InputSelect = ({ option, label, name, id, onChange }) => (
  <>
    <Label for="examplePassword" sm={2}>
      {label}
    </Label>
    <Col sm={10}>
      <Input type="select" name={name} id={id || name} onChange={onChange}>
        {option.map(item => (
          <option key={item.id}>{item.label}</option>
        ))}
      </Input>
    </Col>
  </>
);

export default InputSelect;
