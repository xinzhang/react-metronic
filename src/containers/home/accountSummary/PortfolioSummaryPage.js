import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';

import ResultTitle from  '../../../components/ResultTitle';
import SubmitButton from  '../../../components/ui/SubmitButton';
import ResultConclusion from  '../../../components/ui/ResultConclusion';
import SelectComponent from  '../../../components/ui/SelectComponent';
import CTable from  '../../../components/ui/CTable';
import CSpinner from  '../../../components/ui/CSpinner';

import PortfolioInfo from './PortfolioInfo';

import { searchPortfolioFundSummary, searchPortfolioDepositSummary, printPortfolioSummary,
          getAccountList } from '../../../actions/accountSummaryAction';
import { PortfolioFundResultHeader, PortfolioDepositResultHeader } from './PortfolioSummaryResultHeader';
import { FUNDFLAG, DEPOSITFLAG } from '../../../constants/appConfig';

import './PortfolioSummaryPage.css';

const mapStateToProps = (state) => {
  return {
    PortfolioFundResultHeader,
    PortfolioDepositResultHeader,
    portfolioFundResult: state.portfolioSummaryState.portfolioFundResult,
    portfolioDepositResult: state.portfolioSummaryState.portfolioDepositResult,
    accountList: state.accountState.accountList,
    isPending: state.portfolioSummaryState.isPending || state.accountState.isPending,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      searchPortfolioSummary: (obj) => {
          dispatch(searchPortfolioFundSummary(obj));
          dispatch(searchPortfolioDepositSummary(obj));
      }, 
      getAccountList: () => {
        dispatch(getAccountList());
      },
      onPrintClick: () => {
          dispatch(printPortfolioSummary());  
      },
  }
};

class PortfolioSummaryPage extends Component {
  constructor(props) {
    super(props);
    
    let selectedAccountNo = this.props.match.params.accountNo;
    // set state
    this.state = {
      selectedAccountNo: selectedAccountNo || "",
      totalCombiledBalance: 0,
      totalFundBalance: 0,
      totalDepositBalance: 0,
      currentlyFundDisplayed: [],
      currentlyDepositDisplayed: [],
    };

    this.props.searchPortfolioSummary(this.state.selectedAccountNo);
    this.props.getAccountList();
      
    // bindings
    this.onAccountChange = this.onAccountChange.bind(this);
    this.updatedStateOnPage = this.updatedStateOnPage.bind(this);
  }

  componentWillReceiveProps(nextProps) {             
    // fix the efficiency issue by the code "if (nextProps.isPending === false) { }"
    // must check whether isPending is false, 
    // can't use "!this.props.isPending" for this.props.isPending is undefined when the page is loaded at the very begininng
    if (nextProps.isPending === false) {
        let selectedAccountNo = this.state.selectedAccountNo || (nextProps.accountList[0] && nextProps.accountList[0].value);

        this.updatedStateOnPage({
            selectedAccountNo,
            accountList: nextProps.accountList,
            portfolioFundResult: nextProps.portfolioFundResult,
            portfolioDepositResult: nextProps.portfolioDepositResult,
        });
    }

  }

  onAccountChange(event) {
    let selectedAccountNo = event.target.value;

    this.updatedStateOnPage({
      selectedAccountNo,
        accountList: this.props.accountList,
        portfolioFundResult: this.props.portfolioFundResult,
        portfolioDepositResult: this.props.portfolioDepositResult,
    });
  }

  updatedStateOnPage(obj) { 
    let selectedAccount = _.findLast(obj.accountList, item => item.value === obj.selectedAccountNo);
    let selectedAccountName = selectedAccount ? selectedAccount.text : (this.state.selectedAccountName || "");
 
    let currentlyFundDisplayed = _.map(_.filter(obj.portfolioFundResult, item => item.accountNo === obj.selectedAccountNo),
                                            element => _.extend({}, element, {paramValue: `${obj.selectedAccountNo}/${FUNDFLAG}/${element.id}`}));

    let currentlyDepositDisplayed = _.map(_.filter(obj.portfolioDepositResult, item => item.accountNo === obj.selectedAccountNo),
                                            element => _.extend({}, element, {paramValue: `${obj.selectedAccountNo}/${DEPOSITFLAG}/${element.id}`}));
    // balance
    let totalFundBalance = _.sumBy(currentlyFundDisplayed, (o) => Number(o.dollarValue));
    let totalDepositBalance = _.sumBy(currentlyDepositDisplayed, (o) => Number(o.maturityValue));
    let totalCombiledBalance = totalFundBalance + totalDepositBalance;

    this.setState({
      selectedAccountNo: obj.selectedAccountNo,
      selectedAccountName,
      totalFundBalance,
      totalDepositBalance,
      totalCombiledBalance,
      currentlyFundDisplayed,
      currentlyDepositDisplayed,
    });
  }
  
  render() {
    const { PortfolioFundResultHeader, PortfolioDepositResultHeader, isPending, onPrintClick } = this.props;

    return (
      <div className="c-portfolio-container">
          <div className="portlet light bordered c-portfolio-title">
            <div className="col-md-6"><PortfolioInfo accountName={ this.state.selectedAccountName } totalValue={ this.state.totalCombiledBalance }  /></div>
            <div className="col-md-6"><SelectComponent name="accountList" title="Select an Account" dataArr={ this.props.accountList } value={ this.state.selectedAccountNo } onChange={ this.onAccountChange } /></div>
          </div>
          <div className="c-search-result-container portlet light bordered">
            <div className="c-search-result-titlebar">
              <ResultTitle mainTitle="" subTitle="Select an Investment Fund in the table below to view the individual Transaction History" />
              <SubmitButton><i className='fa fa-print' title="Print this report" /></SubmitButton>
            </div>
            <div className="c-search-result-body-fund">
              <div className="c-center c-result-title"><ResultTitle mainTitle="Asset Type <e.g. Managed Funds>" /></div>
              <CTable headers={ PortfolioFundResultHeader } data={ this.state.currentlyFundDisplayed }  checkBox={ false } />
              <ResultConclusion >Total Balance ($): { this.state.totalFundBalance }</ResultConclusion>
            </div>
            <div className="c-search-result-body-deposit">
              <div className="c-center c-result-title"><ResultTitle mainTitle="Asset Type <i.e. Term Deposits>" /></div>
              <CTable headers={ PortfolioDepositResultHeader } data={ this.state.currentlyDepositDisplayed }  checkBox={ false } />
              <ResultConclusion >Total Balance ($): { this.state.totalDepositBalance }</ResultConclusion>
            </div>
          </div>
          <CSpinner isPending={ isPending } />
      </div>
    );
  }
}

// PortfolioSummaryPage.defaultProps = {
//   cityList: [],
//   provinceList: [],
// }

PortfolioSummaryPage.propTypes = {
    PortfolioFundResultHeader: PropTypes.array,
    PortfolioDepositResultHeader: PropTypes.array,
    portfolioFundResult: PropTypes.array,
    portfolioDepositResult: PropTypes.array,
    accountList: PropTypes.array,
    isPending: PropTypes.bool,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PortfolioSummaryPage);