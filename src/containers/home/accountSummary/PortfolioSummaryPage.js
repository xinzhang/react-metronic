import React from 'react';
import ResultTitle from  '../../../components/ResultTitle';
import PrintButton from  '../../../components/ui/PrintButton';
import ResultConclusion from  '../../../components/ui/ResultConclusion';

import PortfolioInfo from './PortfolioInfo';
import AccountSelector from './AccountSelector';
import ResultTable from  './ResultTable';

import { PortfolioFundResultHeader, PortfolioFundResultData, 
          PortfolioDepositResultHeader, PortfolioDepositResultData } from './PortfolioSummaryData';

import './PortfolioSummaryPage.css';

const PortfolioSummaryPage = () => {

  return (
    <div className="c-portfolio-container">
        <div className="portlet light bordered c-portfolio-title">
          <div className="col-md-6"><PortfolioInfo /></div>
          <div className="col-md-6"><AccountSelector /></div>
        </div>
        <div className="c-search-result-container portlet light bordered">
          <div className="c-search-result-titlebar">
            <ResultTitle mainTitle="" subTitle="Select an Investment Fund in the table below to view the individual Transaction History" />
            <PrintButton><i className='fa fa-print' title="Print this report" /></PrintButton>
          </div>
          <div className="c-search-result-body-fund">
            <div className="c-center c-result-title"><ResultTitle mainTitle="Asset Type <e.g. Managed Funds>" /></div>
            <ResultTable headers={ PortfolioFundResultHeader } data={ PortfolioFundResultData}  checkBox={ false } />
            <ResultConclusion >Total Balance ($): 2000</ResultConclusion>
          </div>
          <div className="c-search-result-body-deposit">
            <div className="c-center c-result-title"><ResultTitle mainTitle="Asset Type <i.e. Term Deposits>" /></div>
            <ResultTable headers={ PortfolioDepositResultHeader } data={ PortfolioDepositResultData}  checkBox={ false } />
            <ResultConclusion >Total Balance ($): 3000</ResultConclusion>
          </div>
        </div>
    </div>
  );
};

export default PortfolioSummaryPage;