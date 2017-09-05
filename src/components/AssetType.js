// import React from 'react';
// import SelectComponent from './ui/SelectComponent';
// import { AssetTypeData } from '../constants/AssetTypeData';

// const AssetType = ({ ...props }) => {
//     let title = "Asset Type";
//     let dataArr = AssetTypeData;
    
//     return (
//         <SelectComponent title={ title } dataArr={ dataArr } { ...props } />
//     );
// };

import React, {Component} from 'react';

import { AssetTypeData } from '../constants/AssetTypeData';
import SelectComponent from './ui/SelectComponent';

const AddPropsComponent = (overrideProps) => (Component) => (props) => <Component {...props} {...overrideProps} />

const AssetType = AddPropsComponent({title:'asset type', dataArr:AssetTypeData})(SelectComponent);

export default AssetType;

