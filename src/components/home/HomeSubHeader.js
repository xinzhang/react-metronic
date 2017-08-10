import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './HomeSubHead.css';

const PrimaryHeader = ({ match }) => (
  <header className="home-sub-header nav-collapse collapse navbar-collapse navbar-responsive-collapse">
    <div className="client-name">Client Name</div>
    <nav className="menu-bar nav navbar-nav"> 
      <NavLink to='/app/home/' exact activeClassName="active" className="menu-item dropdown dropdown-fw dropdown-fw-disabled  active selected open">Account Summary</NavLink>
      <NavLink to='/app/home/order-pad' activeClassName="active" className="menu-item dropdown dropdown-fw dropdown-fw-disabled  active selected open">Order Pad</NavLink>
      <NavLink to='/app/home/pricing' activeClassName="active" className="menu-item dropdown dropdown-fw dropdown-fw-disabled  active selected open">Pricing</NavLink>
      <NavLink to='/app/home/epds' activeClassName="active" className="menu-item dropdown dropdown-fw dropdown-fw-disabled  active selected open">EDPS</NavLink>
    </nav>    
  </header>
); 
 
export default withRouter(PrimaryHeader);

/*
// need to analyze how to use ${match.path} ?
<NavLink to={`${match.path}`} exact activeClassName="active" className="menu-item">Account Summary</NavLink>
<NavLink to={`${match.path}/order-pad`} activeClassName="active" className="menu-item">Order Pad</NavLink>
<NavLink to={`${match.path}/pricing`} activeClassName="active" className="menu-item">Pricing</NavLink>
<NavLink to={`${match.path}/edps`} activeClassName="active" className="menu-item">EDPS</NavLink>
*/