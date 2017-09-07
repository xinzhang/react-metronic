import React from 'react';
import { Field, reduxForm } from 'redux-form';
import ResultTitle from  '../../../components/ResultTitle';
import AssetType from  '../../../components/AssetType';
import ResetButton from  '../../../components/ui/ResetButton';
import SubmitButton from  '../../../components/ui/SubmitButton';
import SelectComponent from  '../../../components/ui/SelectComponent';
import BuySellSelector from './BuySellSelector';
import InputComponent from '../../../components/ui/InputComponent';

const validate = values => {
    const errors = {}
    if (!values.username) {
        errors.username = 'Required'
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.age) {
        errors.age = 'Required'
    } else if (isNaN(Number(values.age))) {
        errors.age = 'Must be a number'
    } else if (Number(values.age) < 18) {
        errors.age = 'Sorry, you must be at least 18 years old'
    }
    return errors
};

const warn = values => {
    const warnings = {}
    if (values.age < 19) {
        warnings.age = 'Hmm, you seem a bit young...'
    }
    return warnings
};

const renderTextField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label style={{ fontWeight:'bold' }}>{label}</label>
        <div>
            <input {...input} className="form-control" placeholder={label} type={type}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
);

const renderSelectField = ({ input, label, data, valueField, textField, onChange, meta: { touched, error, warning } }) => (
  <div>
    <label style={{ fontWeight:'bold' }}>{label} </label>
    <div>
      <select {...input} className="form-control" onChange={ onChange } >
        {
            data.map((item) => {
                return (<option value={item[valueField]} key={ item[valueField] }>{item[textField]}</option>)
            })
        }
      </select>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const OrderPadForm = (props) => { console.log("props in OrderPadForm: " + JSON.stringify(props));
    const { handleSubmit, pristine, reset, submitting,
            assetTypeList, accountList, buySellList,
            fundList, paymentDetailsList, onAccountChange } = props;

    return (
        <form onSubmit={ handleSubmit }>
            <div className="portlet light bordered">
                <div className="c-order-pad-title"><ResultTitle mainTitle="Order Pad" /></div>
                <div className="row">
                    <div className="col-md-12">
                        <Field 
                            name="assetType" 
                            component={renderSelectField} 
                            label="Asset Type" 
                            data={ assetTypeList }
                            valueField="value"
                            textField="text"
                            onChange={ onAccountChange } />
                    </div>
                    <div className="col-md-12">
                        <Field 
                            name="portfolio" 
                            component={renderSelectField} 
                            label="Portfolio" 
                            data={ accountList }
                            valueField="value"
                            textField="text" /></div>
                    <div className="col-md-12">                    
                        <Field 
                            name="buySell" 
                            component={renderSelectField} 
                            label="Buy Sell" 
                            data={ buySellList }
                            valueField="value"
                            textField="text" />
                    </div>
                    <div className="col-md-12">              
                        <Field 
                            name="fundName" 
                            component={renderSelectField} 
                            label="Fund Name" 
                            data={ fundList }
                            valueField="value"
                            textField="text" />
                    </div>
                    <div className="col-md-12">
                        <Field
                            name="amount"
                            component={ renderTextField }
                            label="$ Amount"
                            />
                    </div>
                    <div className="col-md-12">
                        <Field
                            name="unitAmount"
                            component={ renderTextField }
                            label="Unit Amount"
                            />
                    </div>
                    <div className="col-md-12">
                        <Field 
                            name="paymentDetails" 
                            component={renderSelectField} 
                            label="Payment Details" 
                            data={ paymentDetailsList }
                            valueField="value"
                            textField="text" />
                    </div>
                </div>
                {/* <div>
                    <button type="submit" disabled={submitting}>Submit</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                </div> */}
                
                <div className="c-button-row">
                    <div className="c-reset-button">
                        <ResetButton disabled={pristine || submitting} onClick={reset}><i className='fa fa-rotate-left' /> Reset</ResetButton>
                    </div>
                    <SubmitButton type="submit" disabled={submitting}><i className='fa fa-send' /> Submit</SubmitButton>
                </div>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'OrderPadForm',  // a unique identifier for this form
    validate,                // <--- validation function given to redux-form
    warn,                     // <--- warning function given to redux-form
})(OrderPadForm)


/*

            <div className="row">
                <div className="col-md-12">
                    <AssetType />
                </div>
                <div className="col-md-12"><InputComponent title="Portfolio" value="000001" /></div>
                <div className="col-md-12"><BuySellSelector /></div>
                <div className="col-md-12"><SelectComponent title="Fund Name" dataArr={ FundData } /></div>
                <div className="col-md-12"><InputComponent title="$ Amount" value="100" /></div>
                <div className="col-md-12"><InputComponent title="Unit Amount" value="10" /></div>
                <div className="col-md-12"><InputComponent title="Payment Details" value="paid" /></div>
            </div>
*/