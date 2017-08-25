import React from 'react';
import SelectComponent from './ui/SelectComponent';
import { AssetTypeData } from '../constants/AssetTypeData';

const AssetType = ({ ...props }) => {
    let title = "Asset Type";
    let dataArr = AssetTypeData;
    
    return (
        <SelectComponent title={ title } dataArr={ dataArr } { ...props } />
    );
};
 
export default AssetType;