import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Script from 'react-load-script';

class CDate2 extends Component {    
    componentDidMount() {
         console.log('component mounted');
         let inputElement = this.refs.date2;
         console.log(inputElement);
         inputElement.addEventListener('abc', ()=>console.log('date2 changed'), false);        
    }
    componentWillUnmount(){
        //let inputElement = this.refs.date2;
        //inputElement.removeEventListener('change', this.onChange, false);  
    }
    render() {
        return (
            <div>
                <Script
                    url="/assets/scripts/nas.init.js" />
                <input 
                    id="abcdate"
                    ref="date2"
                    className="form-control form-control-inline input-medium date-picker" 
                    size="16" 
                    type="text"       
                    onChange={()=>console.log('abc')}
                    />
            </div>
        );
    }
}

CDate2.propTypes = {
    value: PropTypes.string,
};

export default CDate2;

/*
<div className="input-group date form_datetime bs-datetime date-picker">
                <Script
                    url="/assets/scripts/nas.init.js" />
                <CInput 
                    className="form-control " 
                    size="16" 
                    type="text" 
                    readOnly
                    value={ value }
                    onChange={ onChange } />
                <span className="input-group-addon">
                    <button className="btn default date-set" type="button">
                        <i className="fa fa-calendar"></i>
                    </button>
                </span>
            </div>
*/