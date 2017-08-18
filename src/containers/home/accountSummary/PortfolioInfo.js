import React from 'react';
import InfoTag from '../../../components/ui/InfoTag';

import { getDate } from '../../../utils/DateService';
//import './PortfolioInfo.css';

const PortfolioInfo = () => {
    let title = 'Porfolio Summary';
    let name = 'Account Name: test';
    let today = getDate();
    let accountTotalValue = 1000;
    let text = `As at  ${ today }, your total account value is ${ accountTotalValue }.`;

    return (
    <div>
        <InfoTag title={ title } name={ name } text={ text } />
    </div>
    );
};

export default PortfolioInfo;