import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, className, type='button', onClick, ...props }) => {
    return (
        <button 
            type={ type } 
            className={ `btn btn-primary ${ className }` }
            onClick={ onClick }
            { ...props } >
            { children }
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    onClick: PropTypes.func,
};

export default Button;
 