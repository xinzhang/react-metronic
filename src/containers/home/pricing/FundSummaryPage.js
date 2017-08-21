import React from 'react';
import ResultTitle from  '../../../components/ResultTitle';
import AssetType from  '../../../components/AssetType';
import CTable from  '../../../components/ui/CTable';
import PrintButton from  '../../../components/ui/PrintButton';
import SearchBySelector from './SearchBySelector';

import { FundSummaryHeader, FundSummaryData } from './FundSummaryData';

import './FundSummaryPage.css';

const FundSummaryPage = () => {

  return (
    <div className="c-fund-summary-container">
      <div className="portlet light bordered">
        <div className="c-fund-summary-title"><ResultTitle mainTitle="Search Fund" /></div>
        <div className="row">
          <div className="col-md-6"><AssetType /></div>
          <div className="col-md-6"><SearchBySelector /></div>
        </div>
      </div>
      <div className=" portlet light bordered">
      <div className="c-search-result-titlebar">
        <ResultTitle mainTitle="Fund Summary" subTitle="" />
        <PrintButton><i className='fa fa-download' title="Download table csv" /></PrintButton>
      </div>
      <div>
        <CTable headers={ FundSummaryHeader } data={ FundSummaryData}  checkBox={ false } />
      </div>
      </div>
    </div>
  );
};

export default FundSummaryPage;


