import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { sideBarMenuData } from '../constants/SideBarMenuData';
import SideBar from '../components/SideBar';

// Sub Pages
import AccountSummaryPage from '../containers/home/accountSummary/AccountSummaryPage';
import PortfolioSummaryPage from '../containers/home/accountSummary/PortfolioSummaryPage';
import TransactionHistoryPage from '../containers/home/accountSummary/TransactionHistoryPage';

import './AccountSummarySubLayout.css';
 
const AccountSummarySubLayout = ({ match }) => {    
  const currentMenu = 'AccountSummary';
  const subMenuData = sideBarMenuData.filter( r => r.type === 'AccountSummary' );

  return (
    <div className="c-home-sub-sub-layout">
        <aside className="c-home-sub-sub-side-bar">
            <SideBar menuData={ subMenuData } currentMenu={ currentMenu } />
        </aside>
        <div className="c-home-sub-sub-content"> 
            <Switch> 
                <Route path={ `${match.path}` } exact component={ AccountSummaryPage } />
                <Route path={ `${match.path}/account-summary` } exact component={ AccountSummaryPage } />
                <Route path={ `${match.path}/portfolio-summary` } exact component={ PortfolioSummaryPage } />
                <Route path={ `${match.path}/portfolio-summary/:accountNo` } component={ PortfolioSummaryPage } />
                <Route path={ `${match.path}/transaction-history` } exact component={ TransactionHistoryPage } />
                <Route path={ `${match.path}/transaction-history/:accountNo?/:fundDepositFlag?/:fundDepositId?` } component={ TransactionHistoryPage } />
                <Redirect to={ `${match.url}` } />
            </Switch>
        </div>
    </div>
  );
};

export default AccountSummarySubLayout;