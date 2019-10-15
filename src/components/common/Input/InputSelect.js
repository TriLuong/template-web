import React from 'react';
import { Input, Label, Col } from 'reactstrap';

const InputSelect = ({ option, label, name, id, onChange, value }) => (
  <>
    <Label for="examplePassword" sm={2}>
      {label}
    </Label>
    <Col sm={10}>
      <Input type="select" name={name} id={id || name} onChange={onChange}>
        <option>--- Please select ---</option>
        {option.map(item => (
          <option
            key={item.id}
            selected={item.value === value}
            value={item.value}
          >
            {item.label}
          </option>
        ))}
      </Input>
    </Col>
  </>
);

export default InputSelect;
