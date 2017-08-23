import React from 'react';
import DateComponent from './ui/DateComponent';
import { getDate } from '../utils/DateService';


const InvestmentDate = ({ ...props }) => {
    let title = "Investments as at";
    let value = getDate();

    return (
        <div>
            <DateComponent title={ title } value={ value } { ...props } />
        </div>
    );
};
 
export default InvestmentDate;