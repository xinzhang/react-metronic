
import React from 'react';
import CRadio from '../../../components/ui/CRadio';
import ResultTitle from '../../../components/ResultTitle';

const TransactionToolBar = ({ ...props }) => {

  return (
    <div >
        <div style={{ marginBottom:'10px' }}><ResultTitle mainTitle="Search Transaction:" /></div>
        <div><CRadio name="transaction-display-method" value="10" text="Last 10 Transactions" /></div>
        <div><CRadio name="transaction-display-method" value="50" text="Last 50 Transactions" /></div>
        <div><CRadio name="transaction-display-method" value="0" text="All Transactions" /></div>
    </div>
  );
};

TransactionToolBar.propTypes = {
};

export default TransactionToolBar;
