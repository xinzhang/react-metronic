import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../utils/xhr';
import './PrimaryHeader.css';
import logo from '../assets/images/logo.png'

const PrimaryHeader = ({ history }) => (
  <header className="primary-header clearfix navbar-fixed-top">
    <div className="menu-logo"><img src={ logo } className="logo" alt="NAS logo" /></div>
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
);

export default PrimaryHeader;