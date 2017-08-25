import React, { Component } from 'react';
import { connect } from 'react-redux';

//import TitleBar from  '../../../components/ui/TitleBar';
import AccountSummaryForm from './AccountSummaryForm';
import AccountSummaryResult from './AccountSummaryResult';

import './AccountSummaryPage.css';

class AccountSummaryPage extends Component {  
  // comparer(i, j) {
    // return (i.accountnumber == j.accountnumber && (i.assettype == j.assettype||j.assettype === ""))
  // }
  //<ResultTable headers={AccountSummaryResultHeader} data={AccountSummaryResultData} filter={compare} searchObj={filterObj} />
 
  render() { 
    return (
      <div className="c-account-summary-container">     
        <AccountSummaryForm />
        <AccountSummaryResult />
      </div>
    );
  };
};
 
export default connect(
  null,
  null
)(AccountSummaryPage);