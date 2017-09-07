import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom';
import './SideBar.css';


class SideBar extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     selectedItem: 0
        // };
    }

    render() {
        const { menuData, match, location, history } = this.props;        
        
        console.log('sidebar', location, match, menuData);

        /* <li className="active"> */
        let menuContent = menuData.map((item, index) => { 

            let liClassName = (location.pathname.indexOf(item.link) > -1) ? " active": ""; 

            return (
                <li key={ item.text } className={ liClassName } >
                    <NavLink to={ item.link } activeClassName="active" ><i className={ item.icon }></i>{ item.text }</NavLink>
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
                            { /*  <nav className="navbar" role="navigation"> */ }
                            <nav className="navbar">
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
    }
}

SideBar.propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}

export default withRouter(SideBar);
