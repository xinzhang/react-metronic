import React from 'react';
import ResultTitle from  '../../../components/ResultTitle';
import CTable from  '../../../components/ui/CTable';

import { AuthorisationsHeader, AuthorisationsData } from './AuthorisationsData';

import './AuthorisationsPage.css';

const AuthorisationsPage = () => {
  return (
    <div className="c-authorisations-container portlet light bordered">
      <div className="c-authorisations-title"><ResultTitle mainTitle="Orders Awaiting Authorisation" /></div>
      <CTable headers={ AuthorisationsHeader } data={ AuthorisationsData}  checkBox={ false } action={ true } />
    </div>
  );
};

export default AuthorisationsPage;
