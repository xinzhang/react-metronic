import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.css';

const SideBar = ( props ) => {
    const { menuData } = props;

    let menuContent = menuData.map(item => {
        

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