import React from 'react';

//import TitleBar from  '../../../components/ui/TitleBar';
import ResetButton from  '../../../components/ui/ResetButton';
import SubmitButton from  '../../../components/ui/SubmitButton';
import PrintButton from  '../../../components/ui/PrintButton';
import ResultConclusion from  '../../../components/ui/ResultConclusion';

import AssetType from  '../../../components/AssetType';
import InvestorAccount from  '../../../components/InvestorAccount';
import InvestmentDate from  '../../../components/InvestmentDate';
import ResultTitle from  '../../../components/ResultTitle';

import ResultTableToolBar from  './ResultTableToolBar';
import ResultTable from  './ResultTable';

import { AccountSummaryResultHeader, AccountSummaryResultData } from './AccountSummaryData';

import './AccountSummaryPage.css';

const AccountSummaryPage = () => {
  
  // comparer(i, j) {
    // return (i.accountnumber == j.accountnumber && (i.assettype == j.assettype||j.assettype === ""))
  // }
  //<ResultTable headers={AccountSummaryResultHeader} data={AccountSummaryResultData} filter={compare} searchObj={filterObj} />

  return (
    <div className="c-account-summary-container">
        
      <div className="c-search-toolbar portlet light bordered">
        <ResultTitle mainTitle="Investments" subTitle="" className="c-search-toolbar-title" /> 
        <br />
        <div className="row">
          <div className="col-md-6"><AssetType /></div>
        </div>
        <div className="row">
          <div className="col-md-6"><InvestorAccount /></div>
          <div className="col-md-6"><InvestmentDate /></div>
        </div>
        <div className="c-button-row">
          <div className="c-reset-button"><ResetButton><i className='fa fa-rotate-left' /> Reset</ResetButton></div>
          <SubmitButton><i className='fa fa-search' /> Search</SubmitButton>
        </div>
      </div>

      <div className="c-search-result-container portlet light bordered">
        <div className="c-search-result-titlebar">
          <div className="c-search-result-title"><ResultTitle mainTitle="Account Summary" subTitle="Select an Account Number to view the individual Accounts" /></div>
          <div className="c-search-result-buttons">
            <div className="c-search-result-toolbar"><ResultTableToolBar /></div>
            <PrintButton><i className='fa fa-print' title="Print this report" /></PrintButton>
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
 
export default AccountSummaryPage;


/*

*/