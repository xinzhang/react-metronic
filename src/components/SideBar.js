import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.css';

const SideBar = ( props ) => {
    const { menuData } = props;

    /* <li className="active"> */
    let menuContent = menuData.map(item => {
        return (
            <li>
                <NavLink key={ item.link } to={ item.link } activeClassName="active" ><i className="icon-note "></i>{ item.text }</NavLink>
            </li>
        );
    });

    return (
        <div className="page-content c-side-bar">
            { /* BEGIN BREADCRUMBS */ }
            <div className="breadcrumbs">
                { /* BEGIN Sidebar Toggle Button */ }
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".page-sidebar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="toggle-icon">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </span>
                </button>
                { /* END Sidebar Toggle Button */ }
            </div>
            { /* END BREADCRUMBS */ }
            { /* BEGIN SIDEBAR CONTENT LAYOUT */ }
            <div className="page-content-container">
                <div className="page-content-row">
                    { /*  BEGIN PAGE SIDEBAR */ }
                    <div className="page-sidebar">
                        <nav className="navbar" role="navigation">
                            { /* Brand and toggle get grouped for better mobile display */ }
                            { /* Collect the nav links, forms, and other content for toggling */ }
                            <ul className="nav navbar-nav margin-bottom-35">
                                { menuContent }
                            </ul>
                        </nav>
                    </div>
                    { /* END PAGE SIDEBAR */ }
                </div>
            </div>
        </div>
    );
};

export default SideBar;
