import React from 'react';
import ResultTitle from  '../../../components/ResultTitle';
import LastUpdatedTag from  '../../../components/LastUpdatedTag';
import SubmitButton from  '../../../components/ui/SubmitButton';
import CPagination from  '../../../components/ui/CPagination';
import CTable from  '../../../components/ui/CTable';
import SelectComponent from  '../../../components/ui/SelectComponent';

import UnitPriceInfo from './UnitPriceInfo';

import { UnitPricesHeader, UnitPricesData } from './UnitPricesData';

import './UnitPricesPage.css';

const UnitPricesPage = () => {

  let lastUpdatedDate = 'Mon 21 Aus 2017';
  const fundArr = [
    {
        text: 'Fund 1',
        value: 'fund_1',
    },
    {
        text: 'Fund 2',
        value: 'fund_1',
    },
    {
        text: 'Fund 3',
        value: 'fund_1',
    },
  ];

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
            <div className="c-fund-selector"><SelectComponent title="Select an Fund" dataArr={ fundArr } /></div>
            <SubmitButton><i className='fa fa-print' title="Print this report" /></SubmitButton>
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
