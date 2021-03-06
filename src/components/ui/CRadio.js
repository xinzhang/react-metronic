import React from 'react';
import PropTypes from 'prop-types';

const CRadio = ({ className, value, name, text="", checked, onClick, ...props }) => {
    return (
        <label className={ `mt-radio mt-radio-outline ${ className }` } > { text }
            <input type="radio" value={ value } name={ name } checked={ checked } onClick={ onClick } />
            <span></span>
        </label>
    );
};

CRadio.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
};

export default CRadio;
