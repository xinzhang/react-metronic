import React from 'react';
import PropTypes from 'prop-types';

const CCheckBoxGrey = ({ className, value, name, id="", text="", onClick, ...props }) => {
    return (
        <label className={ `mt-checkbox ${ className }` } > 
            <input type="checkbox" value={ value } name={ name } id={ id } /> { text }
            <span></span>
        </label>
    );
};

CCheckBoxGrey.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
};

export default CCheckBoxGrey;
