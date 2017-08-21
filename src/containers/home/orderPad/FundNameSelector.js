import React from 'react';
import SelectComponent from '../../../components/ui/SelectComponent';

//import { getDate } from '../../../utils/DateService';
//import './AccountSelector.css';

const FundData = [
    {
        text: 'Fund 1',
        value: 'fund_1',
    },
    {
        text: 'Fund 2',
        value: 'fund_2',
    },
    {
        text: 'Fund 3',
        value: 'fund_3',
    },
];

const FundNameSelector = () => {
    let title = "Fund name";
    let dataArr = FundData;
    let defaultValue = dataArr[0].value;

    return (
        <SelectComponent title={ title } dataArr={ dataArr } defaultValue={ defaultValue } />
    );
};

export default FundNameSelector;