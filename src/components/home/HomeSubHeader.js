import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { homeMenuData } from '../../constants/HomeMenuData.js';
import './HomeSubHeader.css';

class HomeSubHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: 0
        };
    }

    menuClick(index) {
        this.setState({ selectedItem: index });
    }

    render() {
        const menuContent = homeMenuData.map((item, index) => {
            let isSelected = this.state.selectedItem === index;
            let liClassName = "dropdown dropdown-fw dropdown-fw-disabled";
            if (isSelected) {
                liClassName += " open";
            }

            return (
                <li className={ liClassName } key={ item.text } onClick={ this.menuClick.bind(this, index) } >
                    <NavLink to={ item.link } exact activeClassName="active" className="text-uppercase">
                        <i className={ item.icon } ></i> { item.text } </NavLink>
                </li>
            );
        });

        return (
            <div className="page-header c-home-sub-header">
                { /* <nav className="navbar mega-menu " role="navigation"> */ }
                <nav className="navbar mega-menu">
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
 
export default withRouter(HomeSubHeader);

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