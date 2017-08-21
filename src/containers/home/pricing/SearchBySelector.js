import React from 'react';
import SelectComponent from '../../../components/ui/SelectComponent';

//import { getDate } from '../../../utils/DateService';
//import './AccountSelector.css';

const SelectorData = [
    {
        text: 'Name',
        value: 'name',
    },
    {
        text: 'ISIN',
        value: 'isin',
    },
    {
        text: 'APIR',
        value: 'apir',
    },
];

const SearchBySelector = () => {
    let title = "Search By";
    let dataArr = SelectorData;
    let defaultValue = dataArr[0].value;

    return (
        <SelectComponent title={ title } dataArr={ dataArr } defaultValue={ defaultValue } />
    );
};

export default SearchBySelector;