import React from 'react';
import SelectComponent from './ui/SelectComponent';
import { AssetTypeData } from '../constants/AssetTypeData';

const AssetType = ({ ...props }) => {
    let title = "Asset Type";
    let dataArr = AssetTypeData;
    let defaultValue = dataArr[0].value;

    console.log(JSON.stringify(props.onChange));
    return (
        <SelectComponent title={ title } dataArr={ dataArr } defaultValue={ defaultValue } { ...props } />
    );
};
 
export default AssetType;