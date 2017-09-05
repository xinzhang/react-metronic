import React from 'react';
import AccountSummaryForm from './AccountSummaryForm';
import AccountSummaryResult from './AccountSummaryResult';
import './AccountSummaryPage.css';

const AccountSummaryPage = () => {  
  // comparer(i, j) {
    // return (i.accountnumber == j.accountnumber && (i.assettype == j.assettype||j.assettype === ""))
  // }
  //<ResultTable headers={AccountSummaryResultHeader} data={AccountSummaryResultData} filter={compare} searchObj={filterObj} />
 
    return (
      <div className="c-account-summary-container">     
        <AccountSummaryForm />
        <AccountSummaryResult />
      </div>
    );
};
 
export default AccountSummaryPage;