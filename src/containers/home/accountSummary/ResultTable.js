import React from 'react';
import CTable from '../../../components/ui/CTable';

const ResultTable = ({ ...props }) => {

  return (

    //this.props.data.map( x=>this.props.comparer(x, this.props.fitlerObject));

    <div>
      <CTable { ...props } />
    </div>
  );
};

export default ResultTable;