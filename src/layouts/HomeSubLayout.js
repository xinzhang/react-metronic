import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomeSubHeader from '../components/home/HomeSubHeader';

// Sub Sub Layouts
import AccountSummarySubLayout from './AccountSummarySubLayout';
import OrderPadSubLayout from './OrderPadSubLayout';
import PricingSubLayout from './PricingSubLayout';
import EpdsSubLayout from './EpdsSubLayout';

import './HomeSubLayout.css';

const HomeSubLayout = ({ match, location }) => {
  return (
    <div className="c-home-sub-layout">
      <HomeSubHeader />
      <div>
        <Switch location={location}>
          <Route path={ `${match.path}` } exact component={ AccountSummarySubLayout } />
          <Route path={ `${match.path}/account-summary` } component={ AccountSummarySubLayout } />
          <Route path={ `${match.path}/order-pad` } component={ OrderPadSubLayout } />
          <Route path={ `${match.path}/pricing` } component={ PricingSubLayout } />
          <Route path={ `${match.path}/epds` } component={ EpdsSubLayout } />
          <Redirect to={ `${match.url}` } />
        </Switch>
      </div>
    </div>
  );
};

export default HomeSubLayout;

/*
// need to change later

      <Switch>
        <Route path={ `${match.path}` } exact component={ AccountSummarySubLayout } />
        <Route path={ `${match.path}/account-summary` } component={ AccountSummarySubLayout } />
        <Route path={ `${match.path}/order-pad` } component={ OrderPadSubLayout } />
        <Route path={ `${match.path}/pricing` } component={ PricingSubLayout } />
        <Route path={ `${match.path}/epds` } component={ EpdsSubLayout } />
        <Redirect to={ `${match.url}` } />
      </Switch>
*/

/*

const HomeSubLayout = ({ match, location }) => {
  const currentKey = location.pathname.split('/')[1] || '/';
  const timeout = { appear: 500, enter: 500, exit: 500 };

  return (
    <div className="c-home-sub-layout">
      <HomeSubHeader />
      <div>
          <TransitionGroup>
            <CSSTransition key={ currentKey } timeout={ timeout } classNames="c-fadeTranslate1" appear>
              <section>
        <Switch location={location}>
          <Route path={ `${match.path}` } exact component={ AccountSummarySubLayout } />
          <Route path={ `${match.path}/account-summary` } component={ AccountSummarySubLayout } />
          <Route path={ `${match.path}/order-pad` } component={ OrderPadSubLayout } />
          <Route path={ `${match.path}/pricing` } component={ PricingSubLayout } />
          <Route path={ `${match.path}/epds` } component={ EpdsSubLayout } />
          <Redirect to={ `${match.url}` } />
        </Switch>
              </section>
            </CSSTransition>
          </TransitionGroup>
      </div>
    </div>
  );
};

export default HomeSubLayout;
*/

