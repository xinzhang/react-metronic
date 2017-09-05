import React from 'react';
import InfoTag from '../../../components/ui/InfoTag';

import { getDate } from '../../../utils/DateService';
//import './PortfolioInfo.css';

const TransactionInfo = ({ accountName, fundName, fundValue, depositName, depositValue }) => {
    let title = 'Transaction History';
    let today = getDate();
    let text = `As at  ${ today }, the value your Managed Fund "${ fundName }" is ${ fundValue }, and the value of your Term Deposit "${ depositName }" is ${ depositValue }.`;

    return (
    <div>
        <InfoTag title={ title } name={ accountName } text={ text } />
    </div>
    );
};

export default TransactionInfo;