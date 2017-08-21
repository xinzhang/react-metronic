import React from 'react';
import ResultTitle from  '../../../components/ResultTitle';
import AssetType from  '../../../components/AssetType';
import CTable from  '../../../components/ui/CTable';
import ResetButton from  '../../../components/ui/ResetButton';
import SubmitButton from  '../../../components/ui/SubmitButton';
import BuySellSelector from './BuySellSelector';
import FundNameSelector from './FundNameSelector';
import InputComponent from '../../../components/ui/InputComponent';

import { OrderPadHeader, OrderPadData } from './OrderPadData';

import './OrderPadPage.css';

const OrderPadPage = () => {
  return (
    <div className="c-order-pad-container">
      <div className="portlet light bordered">
        <div className="c-order-pad-title"><ResultTitle mainTitle="Order Pad" /></div>
        <div className="row">
        <div className="col-md-6"><AssetType /></div>
        <div className="col-md-6"><InputComponent title="Portfolio" value="000001" /></div>
        </div>
        <div className="row">
        <div className="col-md-6"><BuySellSelector /></div>
        <div className="col-md-6"><FundNameSelector /></div>
        </div>
        <div className="row">
        <div className="col-md-6"><InputComponent title="$ Amount" value="100" /></div>
        <div className="col-md-6"><InputComponent title="Unit Amount" value="10" /></div>
        </div>
        <div className="row">
        <div className="col-md-6"><InputComponent title="Payment Details" value="paid" /></div>
        </div>
        <div className="c-button-row">
          <div className="c-reset-button"><ResetButton><i className='fa fa-rotate-left' /> Reset</ResetButton></div>
          <SubmitButton><i className='fa fa-send' /> Submit</SubmitButton>
        </div>
      </div>
      <div className=" portlet light bordered">
        <CTable headers={ OrderPadHeader } data={ OrderPadData}  checkBox={ false } />
      </div>
    </div>
  );
};

export default OrderPadPage;
