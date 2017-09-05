
import React from 'react';
import CRadio from '../../../components/ui/CRadio';
import ResultTitle from '../../../components/ResultTitle';

const TransactionToolBar = ({ value, ...props }) => {
    return (
        <div >
            <div style={{ marginBottom:'10px' }}><ResultTitle mainTitle="Search Transaction:" /></div>
            <div><CRadio name="transaction-number-shown" value="10" text="Last 10 Transactions" checked={value === 10} { ...props }/></div>
            <div><CRadio name="transaction-number-shown" value="50" text="Last 50 Transactions" checked={value === 50} { ...props } /></div>
            <div><CRadio name="transaction-number-shown" value="0" text="All Transactions" checked={value === 0} { ...props } /></div>
        </div>
    );
};

TransactionToolBar.propTypes = {
};

export default TransactionToolBar;
