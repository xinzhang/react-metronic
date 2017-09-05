import React from 'react';
import ResultTitle from  '../../../components/ResultTitle';
import AssetType from  '../../../components/AssetType';
import CTable from  '../../../components/ui/CTable';
import ResetButton from  '../../../components/ui/ResetButton';
import SubmitButton from  '../../../components/ui/SubmitButton';
import SelectComponent from  '../../../components/ui/SelectComponent';
import BuySellSelector from './BuySellSelector';
import InputComponent from '../../../components/ui/InputComponent';

import { OrderPadHeader, OrderPadData } from './OrderPadData';

import './OrderPadPage.css';

const OrderPadPage = () => {
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

  return (
    <div className="c-order-pad-container">
      <div className="portlet light bordered">
        <div className="c-order-pad-title"><ResultTitle mainTitle="Order Pad" /></div>
        <div className="row">
            <div className="col-md-12"><AssetType width="20%" size="80%"/></div>
            <div className="col-md-12"><InputComponent title="Portfolio" value="000001" /></div>
            <div className="col-md-12"><BuySellSelector width="20%" size="80%"/></div>
            <div className="col-md-12"><SelectComponent title="Fund Name" dataArr={ FundData } width="20%" size="80%" /></div>
            <div className="col-md-12"><InputComponent title="$ Amount" value="100" /></div>
            <div className="col-md-12"><InputComponent title="Unit Amount" value="10" /></div>
            <div className="col-md-12"><InputComponent title="Payment Details" value="paid" /></div>
        </div>
        <div className="c-button-row">
          <div className="c-reset-button"><ResetButton><i className='fa fa-rotate-left' /> Reset</ResetButton></div>
          <SubmitButton><i className='fa fa-send' /> Submit</SubmitButton>
        </div>
      </div>
        <CTable headers={ OrderPadHeader } data={ OrderPadData}  checkBox={ false } />
    </div>
  );
};

export default OrderPadPage;
