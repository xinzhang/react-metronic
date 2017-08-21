import React from 'react';
import ResultTitle from  '../../../components/ResultTitle';
import CTable from  '../../../components/ui/CTable';

import { RejectionsHeader, RejectionsData } from './RejectionsData';

import './RejectionsPage.css';

const RejectionsPage = () => {
  return (
    <div className="c-rejections-container portlet light bordered">
      <div className="c-rejections-title"><ResultTitle mainTitle="Rejected Orders" /></div>
      <CTable headers={ RejectionsHeader } data={ RejectionsData}  checkBox={ false } action={ true } />
    </div>
  );
};

export default RejectionsPage;