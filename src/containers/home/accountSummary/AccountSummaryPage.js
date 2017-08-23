import React, { Component } from 'react';
import { connect } from 'react-redux';

//import TitleBar from  '../../../components/ui/TitleBar';
import ResetButton from  '../../../components/ui/ResetButton';
import SubmitButton from  '../../../components/ui/SubmitButton';
import ResultConclusion from  '../../../components/ui/ResultConclusion';

import AssetType from  '../../../components/AssetType';
import InvestorAccount from  '../../../components/InvestorAccount';
import InvestmentDate from  '../../../components/InvestmentDate';
import ResultTitle from  '../../../components/ResultTitle';

import ResultTableToolBar from  './ResultTableToolBar';
import ResultTable from  './ResultTable';

import { AccountSummaryResultHeader, AccountSummaryResultData } from './AccountSummaryData';

import './AccountSummaryPage.css';

const searchAccountSummary = () => {

};

const mapStateToProps = (state) => {
  return {
    accountSummaryResult: searchAccountSummary()
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitClick: () => {
      dispatch(searchAccountSummary())
    }
  }
};

class AccountSummaryPage extends Component {
  
  // comparer(i, j) {
    // return (i.accountnumber == j.accountnumber && (i.assettype == j.assettype||j.assettype === ""))
  // }
  //<ResultTable headers={AccountSummaryResultHeader} data={AccountSummaryResultData} filter={compare} searchObj={filterObj} />
  
  //<Values form="accountSummaryForm" />
  
  constructor(props, context) {
    super(props, context);

    this.state = {
      search: {}
    }

    this.submit = this.submit.bind(this);
    this.reset = this.reset.bind(this);
    this.updateSearchState = this.updateSearchState.bind(this);
  }
  
  submit = (data) => {
    let o = Object.assign({}, this.state.search, data);
    this.props.submit(o);
  };

  reset = () => {
    this.setState({
      search: {}
    });
  };


  updateSearchState = (event) => {
    const field = event.target.name; console.log(field);
    const search = this.state.search;
    search[field] = event.target.value;
    return this.setState({search: search});
  };

  render() {
    return (
      <div className="c-account-summary-container">        
        <div className="c-search-toolbar portlet light bordered">
          <form onSubmit={ this.submit } method="post" >
            <ResultTitle mainTitle="Investments" className="c-search-toolbar-title" /> 
            <br />
            <div className="row">
                <div className="col-md-6">
                    <AssetType onChange={ this.updateSearchState.bind(this) }/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6"><InvestorAccount name="investorAccount" onChange={ this.updateSearchState } /></div>
                <div className="col-md-6"><InvestmentDate onChange={ this.updateSearchState } /></div>
            </div>
            <div className="c-button-row">
                <div className="c-reset-button">
                    <ResetButton onClick={ this.reset }><i className='fa fa-rotate-left' /> Reset</ResetButton>
                </div> 
                <SubmitButton onClick={ this.handleSearch }  ><i className='fa fa-search' /> Search</SubmitButton>
            </div>
          </form>
        </div>

        <div className="c-search-result-container portlet light bordered">
          <div className="c-search-result-titlebar">
            <div className="c-search-result-title"><ResultTitle mainTitle="Account Summary" subTitle="Select an Account Number to view the individual Accounts" /></div>
            <div className="c-search-result-buttons">
              <div className="c-search-result-toolbar"><ResultTableToolBar /></div>
              <SubmitButton><i className='fa fa-print' title="Print this report" /></SubmitButton>
            </div>
          </div>
          <div className="c-search-result-body portlet-body">
            <ResultTable headers={AccountSummaryResultHeader} data={AccountSummaryResultData} checkBox={ false } />
            <div className="c-search-result-footer">
              <ResultConclusion >Total Balance ($): 1000</ResultConclusion>
            </div>
          </div>
        </div>
      </div>
    );
  };
};
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountSummaryPage);