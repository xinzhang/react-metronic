import React from 'react';
import PropTypes from 'prop-types';
import CSelect from './CSelect';

import './SelectComponent.css';

const SelectComponent = ({ title, width=150, ...props }) => {

  return (
    <div className="form-group c-select-component-container " >
      <label className="control-label c-select-title c-right" style={{ width: width }}>{ title }: </label>
      <div className="c-select-body"><CSelect { ...props } /></div>
    </div>
  );
};

SelectComponent.propTypes = {
    title: PropTypes.string,
};

export default SelectComponent;