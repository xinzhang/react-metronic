import React from 'react';
import ResultTitle from  '../../../components/ResultTitle';
import CTable from  '../../../components/ui/CTable';

import { DeletedOrdersHeader, DeletedOrdersData } from './DeletedOrdersData';

import './DeletedOrdersPage.css';      

const DeletedOrdersPage = () => {
  return (
    <div className="c-deleted-orders-container portlet light bordered">
      <div className="c-deleted-orders-title"><ResultTitle mainTitle="Deleted Orders" /></div>
      <CTable headers={ DeletedOrdersHeader } data={ DeletedOrdersData}  checkBox={ false } />
    </div>
  );
};

export default DeletedOrdersPage;

