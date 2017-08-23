import React from 'react';
import InfoTag from '../../../components/ui/InfoTag';

import { getDate } from '../../../utils/DateService';
//import './PortfolioInfo.css';

const TransactionInfo = () => {
    let title = 'Transaction History';
    let name = 'Account Name: test';
    let today = getDate();
    let fundName = 'Fund Name 1'
    let accountTotalValue = 1000;
    let text = `As at  ${ today }, your "${ fundName }" value is ${ accountTotalValue }.`;

    return (
    <div>
        <InfoTag title={ title } name={ name } text={ text } />
    </div>
    );
};

export default TransactionInfo;