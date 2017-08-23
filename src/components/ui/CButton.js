import React from 'react';
import PropTypes from 'prop-types';

const CButton = ({ children, className, type='button', onClick, ...props }) => {
    return (
        <button type={ type } className={ `btn ${ className }` } { ...props } >{ children }</button>
    );
};

CButton.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    onClick: PropTypes.func,
};

export default CButton;
 