import React from 'react';
import ResultTitle from  '../../../components/ResultTitle';
import SubmitButton from  '../../../components/ui/SubmitButton';
import ResultConclusion from  '../../../components/ui/ResultConclusion';
import SelectComponent from  '../../../components/ui/SelectComponent';
import CTable from  '../../../components/ui/CTable';

import PortfolioInfo from './PortfolioInfo';

import { PortfolioFundResultHeader, PortfolioFundResultData, 
          PortfolioDepositResultHeader, PortfolioDepositResultData } from './PortfolioSummaryData';

import './PortfolioSummaryPage.css';

const PortfolioSummaryPage = ({ match }) => {
  const AccountData = [
    {
        text: 'Account 1',
        value: 'account_1',
    },
    {
        text: 'Account 2',
        value: 'account_2',
    },
    {
        text: 'Account 3',
        value: 'account_3',
    },
  ];
  
  // get the accountNo from params
  //console.log(match.params.accountNo);

  return (
    <div className="c-portfolio-container">
        <div className="portlet light bordered c-portfolio-title">
          <div className="col-md-6"><PortfolioInfo /></div>
          <div className="col-md-6"><SelectComponent title="Select an Account" dataArr={ AccountData } /></div>
        </div>
        <div className="c-search-result-container portlet light bordered">
          <div className="c-search-result-titlebar">
            <ResultTitle mainTitle="" subTitle="Select an Investment Fund in the table below to view the individual Transaction History" />
            <SubmitButton><i className='fa fa-print' title="Print this report" /></SubmitButton>
          </div>
          <div className="c-search-result-body-fund">
            <div className="c-center c-result-title"><ResultTitle mainTitle="Asset Type <e.g. Managed Funds>" /></div>
            <CTable headers={ PortfolioFundResultHeader } data={ PortfolioFundResultData}  checkBox={ false } />
            <ResultConclusion >Total Balance ($): 2000</ResultConclusion>
          </div>
          <div className="c-search-result-body-deposit">
            <div className="c-center c-result-title"><ResultTitle mainTitle="Asset Type <i.e. Term Deposits>" /></div>
            <CTable headers={ PortfolioDepositResultHeader } data={ PortfolioDepositResultData}  checkBox={ false } />
            <ResultConclusion >Total Balance ($): 3000</ResultConclusion>
          </div>
        </div>
    </div>
  );
};

export default PortfolioSummaryPage;