import React from 'react';
import PropTypes from 'prop-types';

const CCheckBox = ({ className, value, name, text="", onClick, ...props }) => {
    return (
        <label className={ `mt-checkbox mt-checkbox-single mt-checkbox-outline ${ className }` } > { text }
           <input type="checkbox" value={ value } name={ name } />
            <span></span>
        </label> 
    );
};

CCheckBox.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
};

export default CCheckBox;
