import React from 'react';
import SelectComponent from './SelectComponent';
import { AssetTypeData } from '../../constants/AssetTypeData';

const AssetType = () => {
    let title = "Asset Type";
    let dataArr = AssetTypeData;
    let defaultValue = dataArr[0].value;

    return (
        <div>
            <SelectComponent title={ title } dataArr={ dataArr } defaultValue={ defaultValue } />
        </div>
    );
};
 
export default AssetType;