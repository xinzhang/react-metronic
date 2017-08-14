import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { homeMenuData } from '../../constants/HomeMenuData.js';
import './HomeSubHeader.css';

class PrimaryHeader extends Component {
    constructor(props) {
        super(props);
        this.homeMenuClick = this.homeMenuClick.bind(this);
    }

    homeMenuClick(e) {
        console.log(e.target.className);

        // do it later
    }

    render() {
        const menuContent = homeMenuData.map(item => {
            return (
                <li className="dropdown dropdown-fw dropdown-fw-disabled" key={ item.menuText } onClick={ this.homeMenuClick } >
                    <NavLink to={ item.link } exact activeClassName="active" className="text-uppercase">
                        <i className={ item.iconClass } ></i> { item.menuText } </NavLink>
                </li>
            );
        });

        return (
            <div className="page-header c-home-sub-header">
                <nav className="navbar mega-menu " role="navigation">
                    <div>
                        <div className="nav-collapse collapse navbar-collapse navbar-responsive-collapse c-navbar-collapse-margin">
                            <ul className="nav navbar-nav">
                                { menuContent }
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
 
export default withRouter(PrimaryHeader);

/*

  <header className="home-sub-header nav-collapse collapse navbar-collapse navbar-responsive-collapse">
    <div className="client-name">Client Name</div>
    <nav className="menu-bar nav navbar-nav"> 
      <NavLink to='/app/home/' exact activeClassName="active">Account Summary</NavLink>
      <NavLink to='/app/home/order-pad' activeClassName="active">Order Pad</NavLink>
      <NavLink to='/app/home/pricing' activeClassName="active">Pricing</NavLink>
      <NavLink to='/app/home/epds' activeClassName="active">EDPS</NavLink>
    </nav>    
  </header>

// need to analyze how to use ${match.path} ?
<NavLink to={`${match.path}`} exact activeClassName="active" className="menu-item">Account Summary</NavLink>
<NavLink to={`${match.path}/order-pad`} activeClassName="active" className="menu-item">Order Pad</NavLink>
<NavLink to={`${match.path}/pricing`} activeClassName="active" className="menu-item">Pricing</NavLink>
<NavLink to={`${match.path}/edps`} activeClassName="active" className="menu-item">EDPS</NavLink>
*/