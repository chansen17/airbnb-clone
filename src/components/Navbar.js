import React from 'react'
import { NavLink } from 'react-router-dom';
import NavStyles from '../styles/navbar.module.css';

const Navbar = () => {
    return (
        <nav className={NavStyles.navbar}>
            <div className={NavStyles.navbarItem}>
                <NavLink className={NavStyles.navbarLogo} to="/"><i className="fab fa-airbnb"></i> airbnb</NavLink>
            </div>
            <div className={NavStyles.navbarItem}>
                <NavLink className={NavStyles.navbarLink} to="/">Places to stay</NavLink>
                <NavLink className={NavStyles.navbarLink} to="/experiences">Experiences</NavLink>
                <NavLink className={NavStyles.navbarLink} to="/online-experiences">Online experiences</NavLink>
            </div>
            <div className={NavStyles.navbarItem}>
                <NavLink className={NavStyles.navbarLink} to="/become-a-host">Become a host</NavLink>
                <NavLink className={NavStyles.navbarLink} to="/languages"><i className="fas fa-globe"></i></NavLink>
                <NavLink className={NavStyles.navbarLink} to="/login"><i className="fas fa-user"></i></NavLink>
            </div>
        </nav>
    )
}

export default Navbar
