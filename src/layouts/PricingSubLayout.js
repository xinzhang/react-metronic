import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MenuData } from '../constants/MenuData';
import SideBar from '../components/SideBar';

// Sub Pages
import FundSummaryPage from '../containers/home/pricing/FundSummaryPage';
import UnitPricesPage from '../containers/home/pricing/UnitPricesPage';
import FundPerformancePage from '../containers/home/pricing/FundPerformancePage';

const PricingSubLayout = ({ match }) => {    
  const currentMenu = 'Pricing';
  const subMenuData = MenuData.filter( r => r.type === 'Pricing' );

  return (
    <div className="c-home-sub-sub-layout">
        <aside className="c-home-sub-sub-side-bar" >
            <SideBar menuData={ subMenuData } currentMenu={ currentMenu } />
        </aside>
        <div className="c-home-sub-sub-content">
        <Switch>
            <Route path={ `${match.path}` } exact component={ FundSummaryPage } />
            <Route path={ `${match.path}/fund-summary` } component={ FundSummaryPage } />
            <Route path={ `${match.path}/unit-prices` } component={ UnitPricesPage } />
            <Route path={ `${match.path}/fund-performance` } component={ FundPerformancePage } />
            <Redirect to={ `${match.url}` } />
        </Switch>
        </div>
    </div>
  );
};

export default PricingSubLayout;