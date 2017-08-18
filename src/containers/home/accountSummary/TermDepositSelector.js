import React from 'react';
import SelectComponent from '../../../components/ui/SelectComponent';

//import { getDate } from '../../../utils/DateService';
//import './AccountSelector.css';

const TermDepositData = [
    {
        text: 'TD 1',
        value: 'td_1',
    },
    {
        text: 'TD 2',
        value: 'td_2',
    },
    {
        text: 'TD 3',
        value: 'td_3',
    },
];

const TermDeposit = () => {
    let title = "Select an Investment Fund to view the individual Transaction History: ";
    let dataArr = TermDepositData;
    let defaultValue = dataArr[0].value;

    return (
        <SelectComponent title={ title } width={500} dataArr={ dataArr } defaultValue={ defaultValue } />
    );
};

export default TermDeposit;