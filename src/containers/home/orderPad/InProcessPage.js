import React from 'react';
import ResultTitle from  '../../../components/ResultTitle';
import CTable from  '../../../components/ui/CTable';

import { InProcessHeader, InProcessData } from './InProcessData';

import './InProcessPage.css';

const InProcessPage = () => {
  return (
    <div className="c-in-process-container portlet light bordered">
      <div className="c-in-process-title"><ResultTitle mainTitle="In Process Orders" /></div>
      <CTable headers={ InProcessHeader } data={ InProcessData}  checkBox={ false } />
    </div>
  );
};

export default InProcessPage;
