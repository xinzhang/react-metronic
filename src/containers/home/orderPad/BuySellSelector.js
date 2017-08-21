import React from 'react';
import SelectComponent from '../../../components/ui/SelectComponent';

//import { getDate } from '../../../utils/DateService';
//import './AccountSelector.css';

const SelectorData = [
    {
        text: 'Buy',
        value: 'buy',
    },
    {
        text: 'Sell',
        value: 'sell',
    },
];

const BuySellSelector = () => {
    let title = "Buy or Sell";
    let dataArr = SelectorData;
    let defaultValue = dataArr[0].value;

    return (
        <SelectComponent title={ title } dataArr={ dataArr } defaultValue={ defaultValue } />
    );
};

export default BuySellSelector;