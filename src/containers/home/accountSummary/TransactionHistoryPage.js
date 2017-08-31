import React from 'react';
import SubmitButton from  '../../../components/ui/SubmitButton';
import CPagination from  '../../../components/ui/CPagination';
import SelectComponent from  '../../../components/ui/SelectComponent';
import CTable from  '../../../components/ui/CTable';
import LastUpdatedTag from  '../../../components/LastUpdatedTag';
import ResultTitle from  '../../../components/ResultTitle';

import TransactionInfo from './TransactionInfo';
import TransactionToolBar from './TransactionToolBar';

import { TransactionFundResultHeader, TransactionFundResultData, 
          TransactionDepositResultHeader, TransactionDepositResultData } from './TransactionHistoryData';

import './TransactionHistoryPage.css'

const TransactionHistoryPage = () => {
  let lastUpdatedDate = 'Mon 21 Aus 2017';
  const FundData = [
    {
        text: 'Fund 1',
        value: 'fund_1',
    },
    {
        text: 'Fund 2',
        value: 'fund_2',
    },
    {
        text: 'Fund 3',
        value: 'fund_3',
    },
  ];

  const TermDepositData = [
    {
        text: 'TD 1',
        value: 'td_1',
    },
    {
        text: 'TD 2',
        value: 'td_2',
    },
    {
        text: 'TD 3',
        value: 'td_3',
    },
  ];

  return (
    <div className="c-transaction-history-container">
        <div className="portlet light bordered c-transaction-title">
          <div className="col-md-6"><TransactionInfo /></div>
          <div className="col-md-6 c-center"><LastUpdatedTag lastUpdatedDate={ lastUpdatedDate } /></div>
        </div>
        <div className="portlet light bordered">
          <div className="c-right">
            <SubmitButton><i className='fa fa-print' title="Print this report" /></SubmitButton>
          </div>
          <div className="c-search-result-body-fund">
            <div className="c-center c-result-title"><ResultTitle mainTitle="Asset Type <e.g. Managed Funds>" /></div>
            <div className="c-fund-selector"><SelectComponent title="Select an Investment Fund to view the individual Transaction History" width={500} dataArr={ FundData } /></div>
            <CTable headers={ TransactionFundResultHeader } data={ TransactionFundResultData}  checkBox={ false } />
            <CPagination />
          </div>
          <div className="c-search-result-body-deposit">
            <div className="c-center c-result-title"><ResultTitle mainTitle="Asset Type <i.e. Term Deposits>" /></div>
            <div className="c-fund-selector"><SelectComponent title="Select an Investment Fund to view the individual Transaction History: " width={500} dataArr={ TermDepositData } /></div>
            <CTable headers={ TransactionDepositResultHeader } data={ TransactionDepositResultData}  checkBox={ false } />
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
