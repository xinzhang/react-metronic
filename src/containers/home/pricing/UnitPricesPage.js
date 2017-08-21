import React from 'react';
import ResultTitle from  '../../../components/ResultTitle';
import LastUpdatedTag from  '../../../components/LastUpdatedTag';
import PrintButton from  '../../../components/ui/PrintButton';
import CPagination from  '../../../components/ui/CPagination';
import CTable from  '../../../components/ui/CTable';

import UnitPriceInfo from './UnitPriceInfo';
import FundSelector from './FundSelector';

import { UnitPricesHeader, UnitPricesData } from './UnitPricesData';

import './UnitPricesPage.css';

const UnitPricesPage = () => {

  let lastUpdatedDate = 'Mon 21 Aus 2017';

  return (
    <div className="c-unit-prices-container">
      <div className="portlet light bordered c-unit-prices-title">
        <div className="col-md-6"><UnitPriceInfo /></div>
        <div className="col-md-6 c-center"><LastUpdatedTag lastUpdatedDate={ lastUpdatedDate } /></div>
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
          <CTable headers={ UnitPricesHeader } data={ UnitPricesData}  checkBox={ false } />
          <CPagination />
        </div>
      </div>
    </div>
  );
};

export default UnitPricesPage;
