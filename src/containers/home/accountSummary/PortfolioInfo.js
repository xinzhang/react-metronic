import React from 'react';
import InfoTag from '../../../components/ui/InfoTag';

import { getDate } from '../../../utils/DateService';
//import './PortfolioInfo.css';

const PortfolioInfo = ({ accountName, totalValue }) => {
    let title = 'Porfolio Summary';
    let name = `Account Name: ${ accountName }`;
    let today = getDate();
    let text = `As at  ${ today }, your total account value is ${ totalValue }.`;

    return (
    <div>
        <InfoTag title={ title } name={ name } text={ text } />
    </div>
    );
};

export default PortfolioInfo;