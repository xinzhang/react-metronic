import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.css';

const SideBar = ( props ) => {
    //const { menuData, currentMenu } = props;
    const { menuData } = props;

    let menuContent = menuData.map(item => {
        
        /*
        let menuItemClass = "un-selected-item";

        if ( currentMenu === item.name ) {
            menuItemClass = "selected-item";
        }
        */

        return (
            <NavLink key={ item.link } to={ item.link } activeClassName="active" >{ item.text }</NavLink>
        );
    });

    return (
        <nav className="side-bar">
            { menuContent }
        </nav>
    );
};

export default SideBar;