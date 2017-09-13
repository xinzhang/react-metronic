import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import ResultTitle from  '../../../components/ResultTitle';
import AssetType from  '../../../components/AssetType';
import ResetButton from  '../../../components/ui/ResetButton';
import SubmitButton from  '../../../components/ui/SubmitButton';
import SelectComponent from  '../../../components/ui/SelectComponent';
import BuySellSelector from './BuySellSelector';
import InputComponent from '../../../components/ui/InputComponent';
import FundAutoSuggestion from '../../../components/FundAutoSuggestion';

import './OrderPadForm.css'

const validate = (values) => {
    const errors = {}
    if (!values.assetType) {
        errors.assetType = 'Required'
    }
    if (!values.portfolio) {
        errors.portfolio = 'Required'
    }

    if (!values.buySell) {
        errors.buySell = 'Required'
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
};

const getAccountListByAssetType = (accountList, assetType) => {
  return accountList.filter(x=> x.type === assetType);
}

const renderTextField = ({ input, label, type, disabled, meta: { touched, error, warning } }) => (
    <div className="form-group c-render-text-container">
        <label className="control-label c-render-title" style={{ fontWeight:'bold' }}>{label}</label>
        <div className="c-render-control">
            <input {...input} className="form-control" disabled={disabled} placeholder={label} type={type}/>
            {touched && ((error && <span className="c-render-error">{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
);

const renderSelectField = ({ input, label, data, valueField, textField, disabled, assetType, meta: { touched, error, warning } }) => (
  <div className="form-group c-render-text-container">
    <label className="control-label c-render-title" style={{ fontWeight:'bold' }}>{label} </label>
    <div className="c-render-control">
      <select {...input} className="form-control" disabled={disabled}>
        {[
            console.log('input', assetType||"") ,
            data.map((item) => {
                return (<option value={item[valueField]} key={ item[valueField] }>{item[textField]}</option>)
            })

        ]}
      </select>
      {touched && ((error && <span className="c-render-error">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const renderFundAutoSuggestion = ({ input, label, data, disabled, meta: { touched, error, warning } }) => (
  <div className="c-render-text-container">
    <label className="c-render-title" style={{ fontWeight:'bold' }}>{label} </label>
    <div className="c-render-control">
      <FundAutoSuggestion {...input} className="form-control" disabled={disabled} data={data} />
      {touched && ((error && <span className="c-render-error">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

let OrderPadForm = (props) => { console.log("props in OrderPadForm: " + JSON.stringify(props));
    const { handleSubmit, pristine, reset, submitting,
            assetTypeList, accountList, buySellList,
            orderFundList, paymentDetailsList, onAccountChange } = props;

    const assetTypeOptions = assetTypeList.map( (item) => {
      return (<option value={item.value} key={item.value}>{item.text}</option>)
    });

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
                            />
                    </div>
                    {props.order.assetType}
                    <div className="col-md-12">
                        <Field
                            name="portfolio"
                            component={renderSelectField}
                            label="Portfolio"
                            disabled={props.order.assetType == undefined}
                            data={ getAccountListByAssetType(accountList, props.order.assetType) }
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
                            component={renderFundAutoSuggestion}
                            disabled={props.order.assetType == undefined || props.order.portfolio == undefined}
                            label="Fund Name"
                            data={ orderFundList }
                            />
                    </div>

                    <div className="col-md-12">
                        <Field
                            name="amount"
                            type="number"
                            disabled={props.order.buySell === 'SU'}
                            component={ renderTextField }
                            label="$ Amount"
                            />
                    </div>

                    <div className="col-md-12">
                        <Field
                            name="unitAmount"
                            type="number"
                            disabled={props.order.buySell === 'BD' || props.order.buySell === 'SD'}
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

OrderPadForm =  reduxForm({
    form: 'OrderPadForm',  // a unique identifier for this form
    validate,                // <--- validation function given to redux-form
    warn,                     // <--- warning function given to redux-form
})(OrderPadForm)

// Decorate with connect to read form values
const selector = formValueSelector('OrderPadForm'); // <-- same as form name
OrderPadForm = connect(state => {
  // can select values individually
  let order = {
    assetType: selector(state, 'assetType'),
    portfolio: selector(state, 'portfolio'),
    buySell: selector(state, 'buySell'),
    fundname: selector(state, 'fundname'),
    amount: selector(state, 'amount'),
    unitAmount: selector(state, 'unitAmount')
  };
  return {order};
})(OrderPadForm);

export default OrderPadForm;

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
