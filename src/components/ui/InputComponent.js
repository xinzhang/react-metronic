import React from 'react';
import PropTypes from 'prop-types';
import CInput from './CInput';

import './SelectComponent.css';

const InputComponent = ({ title, value, width=150, ...props }) => {
  console.log("value: " + value); 
  return (
    <div className="form-group c-select-component-container " >
      <label className="control-label c-select-title c-right" style={{ width: width }}>{ title }: </label>
      <CInput value={ value } { ...props } />
    </div>
  );
};

InputComponent.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    width: PropTypes.number,
};

export default InputComponent;