import React, { Component } from 'react';
import { connect } from 'react-redux';

import ResetButton from  '../../../components/ui/ResetButton';
import SubmitButton from  '../../../components/ui/SubmitButton';
import SelectComponent from  '../../../components/ui/SelectComponent';
import DateComponent from  '../../../components/ui/DateComponent';
import AssetType from  '../../../components/AssetType';
import ResultTitle from  '../../../components/ResultTitle';

import { searchAccountSummary } from '../../../actions/accountSummaryAction';

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitClick: (obj) => { 
            dispatch(searchAccountSummary(obj));
        }, 
    }
};

const INITIAL_STATE = {
    search: {
        assetType: 'managed_fund',
        investorAccount: '',
        investmentDate: '',
    },
};

class AccountSummaryForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: { ...INITIAL_STATE.search },
        };

        this.handleReset = this.handleReset.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDataChange = this.handleDataChange.bind(this);
    }

    handleReset() {      
        this.setState({
            search: { ...INITIAL_STATE.search },
        });
    }

    handleSubmit() {
        this.props.onSubmitClick(this.state.search);
    }

    handleDataChange(event) {
        let field = event.target.name;  
        let search = { ...this.state.search };
        search[field] = event.target.value; 
        return this.setState({ search: search });
    }        

    render() {
        // will be rewitten, get the data from API
        const investorAccountArr =  [
            {
                text: '--- All account ---',
                value: '',
            },
            {
                text: 'account 1',
                value: 'account_1',
            },
            {
                text: 'account 2',
                value: 'account_2',
            },
            {
                text: 'account 3',
                value: 'account_3',
            },
        ];

        const { search } = this.state;

        return (
            <div className="c-search-toolbar portlet light bordered">
            <form onSubmit={ this.submit } method="post" >
                <ResultTitle mainTitle="Investments" className="c-search-toolbar-title" /> 
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <AssetType value={ search.assetType } name="assetType" onChange={ this.handleDataChange }/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <SelectComponent title="Investor Account" name="investorAccount" dataArr={ investorAccountArr } value={ search.investorAccount } onChange={ this.handleDataChange } />
                    </div>
                    <div className="col-md-6">
                        <DateComponent title="Investments as at" name="investmentDate" value={ search.investmentDate } onChange={ this.handleDataChange } />
                    </div>
                </div>
                <div className="c-button-row">
                    <div className="c-reset-button">
                        <ResetButton onClick={ this.handleReset }><i className='fa fa-rotate-left' /> Reset</ResetButton>
                    </div> 
                    <SubmitButton onClick={ this.handleSubmit }  ><i className='fa fa-search' /> Search</SubmitButton>
                </div>
            </form>
            </div>
        );
    };
};

export default connect(
    null,
    mapDispatchToProps
)(AccountSummaryForm);


/*
        <form onSubmit={ handleSubmit }>
            <ResultTitle mainTitle="Investments" subTitle="" className="c-search-toolbar-title" /> 
            <br />
            <div className="row">
                <div className="col-md-6">
                    <Field name="assetType" component={ AssetType } />
                    <Field name="favoriteColor" component="select">
                        <option />
                        <option value="ff0000">Red</option>
                        <option value="00ff00">Green</option>
                        <option value="0000ff">Blue</option>
                    </Field>
                </div>
                <Field name="firstName" component="input" type="text" placeholder="First Name" />
            </div>
            <div className="row">
                <div className="col-md-6"><InvestorAccount name="investorAccount" /></div>
                <div className="col-md-6"><InvestmentDate /></div>
            </div>
            <div className="c-button-row">
                <div className="c-reset-button">
                    <ResetButton disabled={ pristine || submitting } onClick={ reset }><i className='fa fa-rotate-left' /> Reset</ResetButton>
                </div> 
                <SubmitButton type="submit" disabled={ submitting }><i className='fa fa-search' /> Search</SubmitButton>
            </div>
        </form>

*/