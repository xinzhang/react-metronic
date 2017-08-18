import React from 'react';
import PropTypes from 'prop-types';
import CDate from './CDate';
import './DateComponent.css';

const DateComponent = ({ title, ...props }) => {

  return (
    <div className="form-group c-date-component-container" >
      <label className="control-label c-date-component-title c-right">{ title }:</label>
      <div className=""><CDate { ...props } /></div>
    </div>
  );
};

DateComponent.propTypes = {
    title: PropTypes.string,
};

export default DateComponent;