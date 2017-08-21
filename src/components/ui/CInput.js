import React from 'react';
import PropTypes from 'prop-types';

const CInput = ({ className, type='text', name, value="", size='21', placeholder, onChange, ...props }) => {
    return (
        <input className={ `form-control ${ className }` } type={ type } name={ name } value={ value } size={ size } placeholder={ placeholder } />
    );
};

CInput.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string,
    size: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(['text', 'password', 'email']),
    onChange: PropTypes.func,
};

export default CInput;
 