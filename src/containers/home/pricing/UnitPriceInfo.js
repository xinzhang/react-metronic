import React from 'react';
import InfoTag from '../../../components/ui/InfoTag';

import { getDate } from '../../../utils/DateService';
//import './PortfolioInfo.css';

const PortfolioInfo = () => {
    let title = 'Unit Price Summary';
    let name = 'Fund Name: test';
    let today = getDate();
    let text = `Prices are effective as of: ${ today }.`;

    return (
    <div>
        <InfoTag title={ title } name={ name } text={ text } />
    </div>
    );
};

export default PortfolioInfo;