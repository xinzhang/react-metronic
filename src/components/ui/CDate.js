import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Script from 'react-load-script';

class CDate extends Component {  
    componentDidMount() {
        let dateInput = this.refs.dateInput;
        dateInput.addEventListener('dateChange', this.props.onChange);
    }
    
    render() {
        const { name, value } = this.props;

        return (
            <div>
                <Script
                    url="/assets/scripts/nas.init.js" />
                <div className="input-group date form_datetime bs-datetime date-picker">
                    <input 
                        id='dateInput'
                        ref="dateInput"
                        name={ name }
                        value={ value }
                        className="form-control " 
                        size="16" 
                        type="text" 
                        readOnly />
                    <span className="input-group-addon">
                        <button className="btn default date-set" type="button">
                            <i className="fa fa-calendar"></i>
                        </button>
                    </span>
                </div>
            </div>
        );
    }
}

CDate.propTypes = {
    value: PropTypes.string,
};

export default CDate;

/*
    <input 
        id="dateInput"
        ref="dateInput"
        className="form-control form-control-inline input-medium date-picker" 
        size="16" 
        type="text" 
        readOnly
        value={ value }
        { ...props }/>           
*/