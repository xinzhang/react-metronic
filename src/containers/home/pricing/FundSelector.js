import React from 'react';
import SelectComponent from '../../../components/ui/SelectComponent';

//import { getDate } from '../../../utils/DateService';
//import './AccountSelector.css';

const selectorData = [
    {
        text: 'Fund 1',
        value: 'fund_1',
    },
    {
        text: 'Fund 2',
        value: 'fund_1',
    },
    {
        text: 'Fund 3',
        value: 'fund_1',
    },
];

const FundSelector = () => {
    let title = "Select an Fund";
    let dataArr = selectorData;
    let defaultValue = dataArr[0].value;

    return (
        <SelectComponent title={ title } dataArr={ dataArr } defaultValue={ defaultValue } />
    );
};

export default FundSelector;