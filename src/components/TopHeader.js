import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../utils/xhr';
import './TopHeader.css';
import logo from '../assets/images/logo.png';

const TopHeader = ({ history }) => {
    return (
        <div className="page-header">
            { /* BEGIN HEADER */ }
            { /* <nav className="navbar mega-menu" role="navigation"> */ }
            <nav className="navbar mega-menu">
                <div className="container-fluid">
                    <div className="clearfix navbar-fixed-top">
                        { /* Brand and toggle get grouped for better mobile display */ }
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="toggle-icon">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </span>
                        </button>
                        { /* End Toggle Button */ }
                        { /* BEGIN LOGO */ }
                        <a id="index" className="page-logo" href="index.html">
                            <img src={ logo } className="c-logo-img" alt="NAB Asset Servicing" title="NAB Asset Servicing" /> </a>
                        { /* END LOGO */ }
                        { /* BEGIN SEARCH */ }
                        <form className="search" action="extra_search.html" method="GET">
                            <input type="name" className="form-control" name="query" placeholder="Search..." />
                            <a href="/" className="btn submit md-skip">
                                <i className="fa fa-search"></i>
                            </a>
                        </form>
                        { /* END SEARCH */ }
                        { /* BEGIN TOPBAR ACTIONS */ }
                        <div className="topbar-actions">
                            <div className="c-btn-group-blue btn-group margin-right-3">
                                <div className="btn btn-sm md-skip dropdown-toggle">
                                    <NavLink to="/app/home" exact> 
                                        <i className="fa fa-home" title="Home"></i>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="c-btn-group-purple btn-group margin-right-3">
                                <div className="btn btn-sm md-skip dropdown-toggle">
                                    <NavLink to="/app/support"> 
                                        <i className="fa fa-support" title="Support"></i>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="c-btn-group-green btn-group margin-right-3">
                                <div className="btn btn-sm md-skip dropdown-toggle">
                                    <NavLink to="/app/site-map"> 
                                        <i className="fa fa-sitemap" title="Site Map"></i>
                                    </NavLink>
                                </div> 
                            </div>
                            <div className="c-btn-group-red btn-group margin-right-3"> 
                                <div className="btn btn-sm md-skip dropdown-toggle">
                                    <div onClick={() => {
                                            logout().then(() => {
                                                //history.push('/') 
                                                // need to check later
                                            })
                                            }}>
                                        <i className="fa fa-sign-out" title="Logout"></i>
                                    </div>
                                </div>
                            </div>
                            { /* BEGIN USER PROFILE */ }
                            <div className="btn-group-img btn-group">
                                <button type="button" className="btn btn-sm md-skip dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                    <span>Hi, Marcus</span>
                                </button>
                                <ul className="dropdown-menu-v2" role="menu">
                                    <li>
                                        <a href="page_user_profile_1.html">
                                            <i className="icon-user"></i> My Profile
                                            <span className="badge badge-danger">1</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="page_user_login_1.html">
                                            <i className="icon-key"></i> Log Out </a>
                                    </li>
                                </ul>
                            </div>
                            { /* END USER PROFILE */ }
                            { /* BEGIN QUICK SIDEBAR TOGGLER */ }
                            <button type="button" className="quick-sidebar-toggler md-skip" data-toggle="collapse">
                                <span className="sr-only">Toggle Quick Sidebar</span>
                                <i className="icon-logout"></i>
                            </button>
                            { /* END QUICK SIDEBAR TOGGLER */ }
                        </div>            
                        { /* END TOPBAR ACTIONS */ }
                    </div>
                </div>
            </nav>
        { /* END HEADER */ }
        </div>
    );
};

export default TopHeader;

/*
  <header className="primary-header clearfix navbar-fixed-top">
    <div className="menu-logo"><img src={ logo } className="logo" alt="NAB Asset Servicing logo" /></div>
    <div className="menu-bar">
        <div>
            <nav>
                <NavLink to="/app" exact activeClassName="active" className="menu-item">Home</NavLink>
                <NavLink to="/app/support" activeClassName="active" className="menu-item">Support</NavLink>
                <NavLink to="/app/site-map" activeClassName="active" className="menu-item">Site Map</NavLink>
            </nav>
        </div>
      
        <div onClick={() => {
            logout().then(() => {
                //history.push('/') 
                // need to check later
            })
            }}>Logout
        </div>
    </div>
  </header>
*/