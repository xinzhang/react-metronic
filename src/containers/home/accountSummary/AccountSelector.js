import React from 'react';
import SelectComponent from '../../../components/ui/SelectComponent';

//import { getDate } from '../../../utils/DateService';
//import './AccountSelector.css';

const AccountData = [
    {
        text: 'Account 1',
        value: 'account_1',
    },
    {
        text: 'Account 2',
        value: 'account_2',
    },
    {
        text: 'Account 3',
        value: 'account_3',
    },
];

const AccountSelector = () => {
    let title = "Select an Account";
    let dataArr = AccountData;
    let defaultValue = dataArr[0].value;

    return (
        <SelectComponent title={ title } dataArr={ dataArr } defaultValue={ defaultValue } />
    );
};

export default AccountSelector;