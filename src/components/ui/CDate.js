import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DateTimeField from 'react-bootstrap-datetimepicker';
//import CInput from './CInput';

class CDate extends Component {
    
    constructor(props) {
        super(props); 
        this.state = {
            date: this.props.value,
            format: "DD/MM/YYYY",
            inputFormat: "DD/MM/YYYY",
            mode: "date",
            inputProps: {'readOnly':true},
        };
    }

    handleChange = (newDate) => {
        return this.setState({ date: newDate });
    }

    render() {
        const { date, format, mode, inputFormat, inputProps } = this.state;

        return ( 
            <DateTimeField
                dateTime={ date }
                format={ format }
                viewMode={ mode }
                inputFormat={ inputFormat }
                onChange={ this.handleChange }
                inputProps={ inputProps }
                />
        );
    }
}

/*

class CDate extends Component {
    
    componentDidMount() {      
        console.log('inside component');
        console.log($('.date-picker'));
     
        // $('.date-picker').datepicker({
            // rtl: App.isRTL(),
            // orientation: "left",
            // autoclose: true
        // });
    }
        
    render() {
        const { value, ...props } = this.props;

        return (
            <div>
                <input className="form-control form-control-inline input-medium date-picker" size="16" type="text" value="" />
            </div>
        );
    }
}
*/

/*
<div className="input-group date form_datetime form_datetime bs-datetime date-picker">
                <CInput type="text" size="16" value={ value } className="date-picker" />
                <span className="input-group-addon">
                    <button className="btn default date-set" type="button">
                        <i className="fa fa-calendar"></i>
                    </button>
                </span>
            </div>
*/

/*
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
*/

CDate.propTypes = {
    value: PropTypes.string,
};

export default CDate;
 