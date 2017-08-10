import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';

import ClientHome from './ClientHome';
import AccountSummary from './accountSummary/AccountSummary';
import PortfolioSummary from './accountSummary/PortfolioSummary';
import TransactionHistory from './accountSummary/TransactionHistory';
import OrderPad from './orderPad/OrderPad';
import Authorisations from './orderPad/Authorisations';
import Rejections from './orderPad/Rejections';
import InProcess from './orderPad/InProcess';
import DeletedOrders from './orderPad/DeletedOrders';
import FundSummary from './pricing/FundSummary';
import UnitPrices from './pricing/UnitPrices';
import FundPerformance from './pricing/FundPerformance';
import EPDS from './epds/Epds';

const Home = ({ match }) => (
    <Router >
        <div>
            <ClientHome />
            <Switch>
                <Route exact path={ `${match.url}/` } component={ AccountSummary } />
                <Route path={ `${match.url}/account-summary` } component={ AccountSummary } />
                <Route path={ `${match.url}/portfoli-summary` } component={ PortfolioSummary } />
                <Route path={ `${match.url}/transaction-history` } component={ TransactionHistory } />
                <Route path={ `${match.url}/order-pad` } component={ OrderPad } />
                <Route path={ `${match.url}/authorisations` } component={ Authorisations } />
                <Route path={ `${match.url}/rejections` } component={ Rejections } />
                <Route path={ `${match.url}/in-process` } component={ InProcess } />
                <Route path={ `${match.url}/deleted-orders` } component={ DeletedOrders } />
                <Route path={ `${match.url}/fund-summary` } component={ FundSummary } />
                <Route path={ `${match.url}/unit-prices` } component={ UnitPrices } />
                <Route path={ `${match.url}/fund-performance` } component={ FundPerformance } />
                <Route path={ `${match.url}/epds` } component={ EPDS } />
                <Redirect to={ `${match.url}/` } />
            </Switch>
        </div>
    </Router>
);  

export default Home;

/*
const Home = ({ match }) => (
    <Router >
        <div>
            <ClientHome />
            <Switch>
                <Route exact path='/home/' component={ AccountSummary } />
                <Route path='/home/account-summary' component={ AccountSummary } />
                <Route path='/home/portfoli-summary' component={ PortfolioSummary } />
                <Route path='/home/transaction-history' component={ TransactionHistory } />
                <Route path='/home/order-pad' component={ OrderPad } />
                <Route path='/home/authorisations' component={ Authorisations } />
                <Route path='/home/rejections' component={ Rejections } />
                <Route path='/home/in-process' component={ InProcess } />
                <Route path='/home/deleted-orders' component={ DeletedOrders } />
                <Route path='/home/fund-summary' component={ FundSummary } />
                <Route path='/home/unit-prices' component={ UnitPrices } />
                <Route path='/home/fund-performance' component={ FundPerformance } />
                <Route path='/home/epds' component={ EPDS } />
            </Switch>
        </div>
    </Router>
);  
*/