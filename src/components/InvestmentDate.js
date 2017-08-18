import React from 'react';
import DateComponent from './ui/DateComponent';
import { getDate } from '../utils/DateService';


const InvestmentDate = () => {
    let title = "Investments as at";
    let value = getDate();

    return (
        <div>
            <DateComponent title={ title } value={ value } />
        </div>
    );
};
 
export default InvestmentDate;