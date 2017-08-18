import React from 'react';
import PropTypes from 'prop-types';
import './ResultConclusion.css'

const ResultConclusion = ({ children }) => {

  return (
    <div className="c-result-conclusion-container">
      <span className="">{ children } </span>
    </div>
  );
};

ResultConclusion.propTypes = {
    children: PropTypes.node,
};

export default ResultConclusion;