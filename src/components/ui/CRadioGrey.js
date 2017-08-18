import React from 'react';
import PropTypes from 'prop-types';

const CRadioGrey = ({ className, value, name, text="", onClick, ...props }) => {
    return (
        <label className={ `mt-radio ${ className }` } > { text }
            <input type="radio" value={ value } name={ name } />
            <span></span>
        </label>
    );
};

CRadioGrey.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
};

export default CRadioGrey;
