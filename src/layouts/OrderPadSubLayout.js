import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { sideBarMenuData } from '../constants/SideBarMenuData';
import SideBar from '../components/SideBar';

// Sub Pages
import OrderPadPage from '../containers/home/orderPad/OrderPadPage';
import AuthorisationsPage from '../containers/home/orderPad/AuthorisationsPage';
import RejectionsPage from '../containers/home/orderPad/RejectionsPage';
import InProcessPage from '../containers/home/orderPad/InProcessPage';
import DeletedOrdersPage from '../containers/home/orderPad/DeletedOrdersPage';


const OrderPadSubLayout = ({ match }) => {    
  const currentMenu = 'OrderPad';
  const subMenuData = sideBarMenuData.filter( r => r.type === 'OrderPad' );

  return (
    <div className="c-home-sub-sub-layout">
        <aside className="c-home-sub-sub-side-bar" >
            <SideBar menuData={ subMenuData } currentMenu={ currentMenu } />
        </aside>
        <div className="c-home-sub-sub-content">
        <Switch>
            <Route path={ `${match.path}` } exact component={ OrderPadPage } />
            <Route path={ `${match.path}/order-pad` } component={ OrderPadPage } />
            <Route path={ `${match.path}/authorisations` } component={ AuthorisationsPage } />
            <Route path={ `${match.path}/rejections` } component={ RejectionsPage } />
            <Route path={ `${match.path}/in-process` } component={ InProcessPage } />
            <Route path={ `${match.path}/deleted-orders` } component={ DeletedOrdersPage } />
            <Redirect to={ `${match.url}` } />
        </Switch>
        </div>
    </div>
  );
};

export default OrderPadSubLayout;