import React from 'react';
import InputComponent from  '../../../components/ui/InputComponent';

import ResetButton from  '../../../components/ui/ResetButton';
import SubmitButton from  '../../../components/ui/SubmitButton';
import AssetType from  '../../../components/AssetType';
import InvestorAccount from  '../../../components/InvestorAccount';
import InvestmentDate from  '../../../components/InvestmentDate';
import ResultTitle from  '../../../components/ResultTitle';

const AccountSummaryForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;

    const updateSearchState = (event) => {
        const field = event.target.name;
        const prod = this.state.product;
        prod[field] = event.target.value;
        return this.setState({product: prod});
    };

    return (
        <form>
            <ResultTitle mainTitle="Investments" className="c-search-toolbar-title" /> 
            <br />
            <div className="row">
                <div className="col-md-6">
                    <AssetType onChange={ this.updateSearchState }/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6"><InvestorAccount name="investorAccount" onChange={ this.updateSearchState } /></div>
                <div className="col-md-6"><InvestmentDate onChange={ this.updateProductState } /></div>
            </div>
            <div className="c-button-row">
                <div className="c-reset-button">
                    <ResetButton onClick={ reset }><i className='fa fa-rotate-left' /> Reset</ResetButton>
                </div> 
                <SubmitButton onClick={ this.handleSearch } disabled={!this.state.canSubmit} ><i className='fa fa-search' /> Search</SubmitButton>
            </div>
        </form>
    );
};

export default AccountSummaryForm;


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