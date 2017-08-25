import React from 'react';
import ResultTitle from  '../../../components/ResultTitle';
import AssetType from  '../../../components/AssetType';
import CTable from  '../../../components/ui/CTable';
import SubmitButton from  '../../../components/ui/SubmitButton';
import SelectComponent from  '../../../components/ui/SelectComponent';

import { FundSummaryHeader, FundSummaryData } from './FundSummaryData';

import './FundSummaryPage.css';

const FundSummaryPage = () => {
  const searchByArr = [
    {
        text: 'Name',
        value: 'name',
    },
    {
        text: 'ISIN',
        value: 'isin',
    },
    {
        text: 'APIR',
        value: 'apir',
    },
  ];
  return (
    <div className="c-fund-summary-container">
      <div className="portlet light bordered">
        <div className="c-fund-summary-title"><ResultTitle mainTitle="Search Fund" /></div>
        <div className="row">
          <div className="col-md-6"><AssetType /></div>
          <div className="col-md-6"><SelectComponent title="Search By" dataArr={ searchByArr } /></div>
        </div>
      </div>
      <div className=" portlet light bordered">
      <div className="c-search-result-titlebar">
        <ResultTitle mainTitle="Fund Summary" subTitle="" />
        <SubmitButton><i className='fa fa-download' title="Download table csv" /></SubmitButton>
      </div>
      <div>
        <CTable headers={ FundSummaryHeader } data={ FundSummaryData}  checkBox={ false } />
      </div>
      </div>
    </div>
  );
};

export default FundSummaryPage;


