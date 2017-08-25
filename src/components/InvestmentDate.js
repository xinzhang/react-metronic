import React from 'react';
import DateComponent from './ui/DateComponent';

const InvestmentDate = ({ value, ...props }) => {
    let title = "Investments as at";

    return (
        <div>{ value }
            <DateComponent title={ title } value={ value } { ...props } />
        </div>
    );
};
 
export default InvestmentDate;