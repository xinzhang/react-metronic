import React from 'react';
import PropTypes from 'prop-types';

const ModalContent = ({ children, className='' }) => {

  return (
    <div className={ `${ className } p1 z4 bg-white` }>
      { children }
    </div>
  );
};

ModalContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ModalContent;