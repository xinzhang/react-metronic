import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
                type = 'text',
                placeholder = '',
                fieldDefinition = {},
                id,
                }) => {
    const {
        value,
        onBlur,
        onChange,
        onFocus,
    } = fieldDefinition;

    return (
        <input
            id={ id }
            className="block col-12 mb1 input"
            type={ type }
            placeholder={ placeholder }
            value={ value }
            onBlur={ onBlur }
            onChange={ onChange }
            onFocus={ onFocus } />
    );
}

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    fieldDefinition: PropTypes.object,
    id: PropTypes.string,
};

export default Input;