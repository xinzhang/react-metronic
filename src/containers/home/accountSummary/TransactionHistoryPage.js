import React from 'react';
import ResultTitle from  '../../../components/ResultTitle';
import PrintButton from  '../../../components/ui/PrintButton';
import CPagination from  '../../../components/ui/CPagination';

import TransactionInfo from './TransactionInfo';
import FundSelector from './FundSelector';
import TermDepositSelector from './TermDepositSelector';
import ResultTable from  './ResultTable';
import TransactionToolBar from './TransactionToolBar';

import { TransactionFundResultHeader, TransactionFundResultData, 
          TransactionDepositResultHeader, TransactionDepositResultData } from './TransactionHistoryData';

import './TransactionHistoryPage.css'

const TransactionHistoryPage = () => {

  return (
    <div className="c-transaction-history-container">
        <div className="portlet light bordered c-transaction-title">
          <div className="col-md-6"><TransactionInfo /></div>
        </div>
        <div className="portlet light bordered">
          <div className="c-right">
            <PrintButton><i className='fa fa-print' title="Print this report" /></PrintButton>
          </div>
          <div className="c-search-result-body-fund">
            <div className="c-center c-result-title"><ResultTitle mainTitle="Asset Type <e.g. Managed Funds>" /></div>
            <div className="c-fund-selector"><FundSelector /></div>
            <ResultTable headers={ TransactionFundResultHeader } data={ TransactionFundResultData}  checkBox={ false } />
            <CPagination />
          </div>
          <div className="c-search-result-body-deposit">
            <div className="c-center c-result-title"><ResultTitle mainTitle="Asset Type <i.e. Term Deposits>" /></div>
            <div className="c-fund-selector"><TermDepositSelector /></div>
            <ResultTable headers={ TransactionDepositResultHeader } data={ TransactionDepositResultData}  checkBox={ false } />
            <CPagination />
          </div>
          <div className="c-result-transaction-toolbar">
            <TransactionToolBar />
          </div>
        </div>
    </div>
  );
};

export default TransactionHistoryPage;
