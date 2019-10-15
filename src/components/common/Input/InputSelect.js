import React from 'react';
import { Input, Label, Col } from 'reactstrap';

const InputSelect = ({ option, label, name, id, onChange, value }) => (
  <>
    {label ? (
      <Label for="examplePassword" sm={2}>
        {label}
      </Label>
    ) : null}

    <Col sm={10}>
      <Input
        type="select"
        name={name}
        id={id || name}
        onChange={onChange}
        defaultValue={value || option[0].value}
      >
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
