import React from 'react';
import SelectComponent from '../../../components/ui/SelectComponent';

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

const BuySellSelector = ({ ...props }) => {
    let title = "Buy or Sell";
    let dataArr = SelectorData;
    let defaultValue = dataArr[0].value;

    return (
        <SelectComponent title={ title } dataArr={ dataArr } defaultValue={ defaultValue } { ...props } />
    );
};

export default BuySellSelector;