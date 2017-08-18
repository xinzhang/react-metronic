import React from 'react';
import SelectComponent from './ui/SelectComponent';
import { AssetTypeData } from '../constants/AssetTypeData';

const AssetType = () => {
    let title = "Asset Type";
    let dataArr = AssetTypeData;
    let defaultValue = dataArr[0].value;

    return (
        <SelectComponent title={ title } dataArr={ dataArr } defaultValue={ defaultValue } />
    );
};
 
export default AssetType;