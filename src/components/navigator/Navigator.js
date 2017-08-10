import React from 'react';
import PropTypes from 'prop-types';

const Navigator = ({ children, ...props })=> {
  return (
    <nav data-testid={ props.testid } className="flex items-center p1 bg-white border-bottom">
      { children }
    </nav>
  );
}

Navigator.propTypes = {
  children: PropTypes.node,
  testid: PropTypes.string,
};

export default Navigator;