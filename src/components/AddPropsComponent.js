import Component from 'react';

import { AssetTypeData } from '../constants/AssetTypeData';
import SelectComponent from './ui/SelectComponent';

const AddPropsComponent = (overrideProps) => (Component) => (props) => <Component {...props} {...overrideProps} />

const AddRefsComponent = (overrideProps) => (Component) => (props) => {
    const newProps = Object.assign({}, props, {ref: props.bind(this)})
    return (<Component {...newProps} />)
}

const AssetType = AddPropsComponent({title:'asset type', data:AssetTypeData})(SelectComponent);

