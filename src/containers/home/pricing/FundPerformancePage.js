import React from 'react';
import ResultTitle from  '../../../components/ResultTitle';
import PrintButton from  '../../../components/ui/PrintButton';
import CTable from  '../../../components/ui/CTable';

import PerformanceInfo from './PerformanceInfo';
import FundSelector from './FundSelector';

import { PerformanceHeader, PerformanceData, 
          SnapshotHeader, SnapshotData } from './PerformanceData';
import growthOverviewImg from '../../../assets/images/growth-overview.png';
import './FundPerformancePage.css';

const FundPerformancePage = () => {

  return (
    <div className="c-performance-container">
      <div className="portlet light bordered c-performance-title">
        <div className="col-md-6"><PerformanceInfo /></div>
      </div>
      <div className="c-search-result-container portlet light bordered">
        <div className="c-search-result-titlebar">
          <ResultTitle mainTitle="" subTitle="Select an Fund Name to view the individual performance" />
          <div className="c-search-result-buttons">
            <div className="c-fund-selector"><FundSelector /></div>
            <PrintButton><i className='fa fa-print' title="Print this report" /></PrintButton>
          </div>
        </div>
        <div>
          <CTable headers={ PerformanceHeader } data={ PerformanceData}  checkBox={ false } />
        </div>
        <div className="c-snapshot-table">
          <ResultTitle mainTitle="Snapshot" subTitle="" />
          <CTable headers={ SnapshotHeader } data={ SnapshotData}  checkBox={ false } />
        </div>
        <div>
          <div className="c-growth-overview-title"><ResultTitle mainTitle="Overview - Growth of $10,000 Investment" subTitle="" /></div>
          <div className="c-growth-overview-body"><img className="c-growth-overview-img" src={ growthOverviewImg } alt="Growth Overview" title="Growth Overview" /></div>
        </div>
      </div>
    </div>
  );
};

export default FundPerformancePage;
