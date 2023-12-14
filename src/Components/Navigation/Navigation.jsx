import React from "react";
import './Navigation.scss';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul className='navigation__links'>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'navigation__link navigation__link--active' : 'navigation__link')}>Transactions</NavLink>
                <NavLink to="/users" className={({ isActive }) => (isActive ? 'navigation__link navigation__link--active' : 'navigation__link')}>Users</NavLink>
            </ul>
        </nav>
    )
}

export default Navigation;