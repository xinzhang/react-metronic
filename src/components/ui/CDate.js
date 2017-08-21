import React from 'react';
import PropTypes from 'prop-types';
import CInput from './CInput';

const CDate = ({ value, ...props }) => {
    return (
        <div className="input-group date form_datetime form_datetime bs-datetime date-picker">
            <CInput type="text" size="16" value={ value } className="date-picker" />
            <span className="input-group-addon">
                <button className="btn default date-set" type="button">
                    <i className="fa fa-calendar"></i>
                </button>
            </span>
        </div>
    );
};

CDate.propTypes = {
    value: PropTypes.string,
};

export default CDate;
 