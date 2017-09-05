import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';
import SubmitButton from  '../../../components/ui/SubmitButton';
import SelectComponent from  '../../../components/ui/SelectComponent';
import CSpinner from  '../../../components/ui/CSpinner';
import TableWithPagination from  '../../../components/ui/TableWithPagination';
import LastUpdatedTag from  '../../../components/LastUpdatedTag';
import ResultTitle from  '../../../components/ResultTitle';

import TransactionInfo from './TransactionInfo';
import TransactionToolBar from './TransactionToolBar';

import { searchFundTransactionHistory, searchDepositTransactionHistory, printTransactionHistory,
          getAccountList, getFundList, getDepositList } from '../../../actions/accountSummaryAction';
import { TransactionFundResultHeader, TransactionDepositResultHeader } from './TransactionHistoryResultHeader';
import { FUNDFLAG } from '../../../constants/appConfig';

import './TransactionHistoryPage.css'

let lastUpdatedDate = 'Mon 21 Aus 2017';

const mapStateToProps = (state) => {
  return {
      TransactionFundResultHeader,
      TransactionDepositResultHeader,
      fundTransactionHistory: state.transactionHistoryState.fundTransactionHistory,
      depositTransactionHistory: state.transactionHistoryState.depositTransactionHistory,
      accountList: state.accountState.accountList,
      fundList: state.fundState.fundList,
      depositList: state.depositState.depositList,
      isPending: state.transactionHistoryState.isPending || 
                  state.accountState.isPending || 
                  state.fundState.isPending || 
                  state.depositState.isPending,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
        searchTransactionHistory: (obj) => {
            dispatch(searchFundTransactionHistory(obj));
            dispatch(searchDepositTransactionHistory(obj));
        }, 
        getAccountList: () => {
            dispatch(getAccountList());
        },
        getFundList: (obj) => {
            dispatch(getFundList(obj));
        },
        getDepositList: (obj) => {
            dispatch(getDepositList(obj));
        },
        onPrintClick: () => {
            dispatch(printTransactionHistory());  
        },
  }
};

class TransactionHistoryPage extends Component {
  constructor(props) {
    super(props);
    
    let selectedAccountNo = this.props.match.params.accountNo;
    let fundDepositFlag = this.props.match.params.fundDepositFlag;
    let fundDepositId = this.props.match.params.fundDepositId;
    let selectedFundId = (Number(fundDepositFlag) === FUNDFLAG) ? fundDepositId : 0;
    let selectedDepositId = (Number(fundDepositFlag) === FUNDFLAG) ? 0 : fundDepositId;
    // set state
    this.state = {
        selectedAccountNo: selectedAccountNo || "",
        selectedFundId: selectedFundId || "",
        selectedDepositId: selectedDepositId || "",
        currentlyFundDisplayed: [],
        currentlyDepositDisplayed: [],
        transactionNumShown: 10,
    };
      
    //
    this.props.getAccountList();
    this.updateAccountOnPage({ accountNo: this.state.selectedAccountNo });
      
    // bindings
    this.onAccountChange = this.onAccountChange.bind(this);
    this.onFundChange = this.onFundChange.bind(this);
    this.onDepositChange = this.onDepositChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

    componentWillReceiveProps(nextProps) {             
        // fix the efficiency issue by the code "if (nextProps.isPending === false) { }"
        // must check whether isPending is false, 
        // can't use "!this.props.isPending" for this.props.isPending is undefined when the page is loaded at the very begininng
        if (nextProps.isPending === false) { 
            let selectedFundId = this.state.selectedFundId || (nextProps.fundList && nextProps.fundList[0] && nextProps.fundList[0].value);
            let selectedDepositId = this.state.selectedDepositId || (nextProps.depositList && nextProps.depositList[0] && nextProps.depositList[0].value);

            let selectedAccount = _.findLast(this.props.accountList, item => item.value === this.state.selectedAccountNo);
            this.setState({ selectedAccountName: selectedAccount ? selectedAccount.text : "" });

            this.updatedFundStateOnPage({
                selectedFundId,
                fundTransactionHistory: nextProps.fundTransactionHistory,
            });

            this.props.fundTransactionHistory
            
            this.updatedDepositStateOnPage({
                selectedDepositId,
                depositTransactionHistory: nextProps.depositTransactionHistory,
            });
            
        }
    }

    onAccountChange(event) {
        let selectedAccountNo = event.target.value;

        // when account changed, reset the selectedFundId and selectedDepositId
        this.setState({
            selectedAccountNo: selectedAccountNo || "",
            selectedAccountName: (_.findLast(this.props.accountList, item => item.value === selectedAccountNo)).text,
            selectedFundId: "",  
            selectedDepositId: "",  
        });

        this.updateAccountOnPage({
            accountNo: selectedAccountNo,
        });
    }

    updateAccountOnPage(obj) {    
        this.props.getFundList(obj);
        this.props.getDepositList(obj);
        this.props.searchTransactionHistory(obj);
    }

    onFundChange(event) {
        let selectedFundId = event.target.value;

        this.updatedFundStateOnPage({
            selectedFundId,
            fundTransactionHistory: this.props.fundTransactionHistory,
        });
    }
  
    onDepositChange(event) {
        let selectedDepositId = event.target.value;

        this.updatedDepositStateOnPage({
            selectedDepositId,
            depositTransactionHistory: this.props.depositTransactionHistory,
        });
    }

    updatedFundStateOnPage(obj) { 
        let currentlyFundDisplayed = _.filter(obj.fundTransactionHistory, item => item.fundId === obj.selectedFundId);
        // display only limited transaction according to the value of "this.state.transactionNumShown"
        if (this.state.transactionNumShown !== 0) {
            currentlyFundDisplayed = currentlyFundDisplayed.slice(Math.max(currentlyFundDisplayed.length - this.state.transactionNumShown, 0)); 
        }

        let selectedFund = _.findLast(this.props.fundList, item => item.value === obj.selectedFundId);
        this.setState({
            selectedFundId: obj.selectedFundId,
            selectedFundName: selectedFund.text,
            selectedFundTotalValue: selectedFund.dollarValue,
            currentlyFundDisplayed,
        });
    }

    updatedDepositStateOnPage(obj) { 
        let currentlyDepositDisplayed = _.filter(obj.depositTransactionHistory, item => item.depositId === obj.selectedDepositId);
        // display only limited transaction according to the value of "this.state.transactionNumShown"
        if (this.state.transactionNumShown !== 0) {
            currentlyDepositDisplayed = currentlyDepositDisplayed.slice(Math.max(currentlyDepositDisplayed.length - this.state.transactionNumShown, 0)); 
        }
        let selectedDeposit = _.findLast(this.props.depositList, item => item.value === obj.selectedDepositId);   
        this.setState({
            selectedDepositId: obj.selectedDepositId,
            selectedDepositName: selectedDeposit.text,
            selectedDepositTotalValue: selectedDeposit.dollarValue,
            currentlyDepositDisplayed,
        }); 
    }

    handleRadioChange(e) {
        let value = Number(e.target.value);
        console.log("the value of handleChange: " + value);
        // refresh the state on the page
        this.setState({ transactionNumShown: value }, () => {            
            this.updatedFundStateOnPage({
                selectedFundId: this.state.selectedFundId,
                fundTransactionHistory: this.props.fundTransactionHistory,
            });
            this.updatedDepositStateOnPage({
                selectedDepositId: this.state.selectedDepositId,
                depositTransactionHistory: this.props.depositTransactionHistory,
            });
        });
    } 

    render() {
        const { TransactionFundResultHeader, TransactionDepositResultHeader, isPending, onPrintClick  } = this.props;

        return (
            <div className="c-transaction-history-container">
                <div className="portlet light bordered c-transaction-title">
                <div className="col-md-6">
                    <TransactionInfo 
                        accountName={ this.state.selectedAccountName } 
                        fundName={ this.state.selectedFundName } 
                        fundValue={ this.state.selectedFundTotalValue }
                        depositName={ this.state.selectedDepositName } 
                        depositValue={ this.state.selectedDepositTotalValue } />
                    </div>
                <div className="col-md-6 c-center">
                    <LastUpdatedTag lastUpdatedDate={ lastUpdatedDate } /> <br />
                    <SelectComponent name="accountList" title="Select an Account" dataArr={ this.props.accountList } value={ this.state.selectedAccountNo } onChange={ this.onAccountChange } />
                </div>
                </div>
                <div className="portlet light bordered">
                <div className="c-right">
                    <SubmitButton><i className='fa fa-print' title="Print this report" /></SubmitButton>
                </div>
                <div className="c-search-result-body-fund">
                    <div className="c-center c-result-title"><ResultTitle mainTitle="Asset Type <e.g. Managed Funds>" /></div>
                    <div className="c-fund-selector">
                    <SelectComponent title="Select an Investment Fund to view the individual Transaction History" width={500} dataArr={ this.props.fundList } value={ this.state.selectedFundId } onChange={ this.onFundChange } />
                    </div>
                    <TableWithPagination headers={ TransactionFundResultHeader } data={ this.state.currentlyFundDisplayed } checkBox={ false } />
                    {/* <CTable headers={ TransactionFundResultHeader } data={ this.state.currentlyFundDisplayed }  checkBox={ false } />
                    <CPagination /> */}
                </div>
                <div className="c-search-result-body-deposit">
                    <div className="c-center c-result-title"><ResultTitle mainTitle="Asset Type <i.e. Term Deposits>" /></div>
                    <div className="c-fund-selector">
                    <SelectComponent title="Select an Investment Fund to view the individual Transaction History: " width={500} dataArr={ this.props.depositList } value={ this.state.selectedDepositId } onChange={ this.onDepositChange } />
                    </div>
                     <TableWithPagination headers={ TransactionDepositResultHeader } data={ this.state.currentlyDepositDisplayed } checkBox={ false } />
                    {/* <CTable headers={ TransactionDepositResultHeader } data={ this.state.currentlyDepositDisplayed } checkBox={ false } />
                    <CPagination />  */}
                </div>
                <div className="c-result-transaction-toolbar">
                    <TransactionToolBar value={ this.state.transactionNumShown } onClick={ this.handleRadioChange } />
                </div>
                </div>
                <CSpinner isPending={ isPending } />
            </div>
        );
    }
}

// TransactionHistoryPage.defaultProps = {
//     accountList: [],
//     fundList: [],
//     depositList: [],
// }

TransactionHistoryPage.propTypes = {
    TransactionFundResultHeader: PropTypes.array,
    TransactionDepositResultHeader: PropTypes.array,
    fundTransactionHistory: PropTypes.array,
    depositTransactionHistory: PropTypes.array,
    accountList: PropTypes.array,
    fundList: PropTypes.array,
    depositList: PropTypes.array,
    isPending: PropTypes.bool,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TransactionHistoryPage);
