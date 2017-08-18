import React from 'react';
import SelectComponent from './SelectComponent';

const getAccountData = () => {
    return [
        {
            text: 'account 1',
            value: 'account_1',
        },
        {
            text: 'account 2',
            value: 'account_2',
        },
        {
            text: 'account 3',
            value: 'account_3',
        },
    ]
};

const InvestorAccount = () => {
    let title = "Investor Account";
    let dataArr = getAccountData();
    let defaultValue = dataArr[0].value;

    return (
        <div>
            <SelectComponent title={ title } dataArr={ dataArr } defaultValue={ defaultValue } />
        </div>
    );
};
 
export default InvestorAccount;