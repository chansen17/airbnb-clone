import React from 'react'
import { NavLink } from 'react-router-dom';
import NavStyles from '../styles/navbar.module.css';

const Navbar = () => {
    return (
        <nav className={NavStyles.navbar}>
            {/* secton 1 */}
            <div className={NavStyles.navbarItem}>
                <NavLink className={NavStyles.navbarLogo} to="/"><i className="fab fa-airbnb"></i> airbnb</NavLink>
            </div>
            {/* secton 2 */}
            <div className={NavStyles.navbarItem}>
                <NavLink className={NavStyles.navbarLink} to="/">Places to stay</NavLink>
                <NavLink className={NavStyles.navbarLink} to="/experiences">Experiences</NavLink>
                <NavLink className={NavStyles.navbarLink} to="/online-experiences">Online experiences</NavLink>
            </div>a
            {/* secton 3 */}
            <div className={NavStyles.navbarItem}>
                <NavLink className={NavStyles.navbarLink} to="/become-a-host">Become a host</NavLink>
                <NavLink className={NavStyles.navbarLink} to="/languages"><i className="fas fa-globe"></i></NavLink>
                <NavLink className={`${NavStyles.navbarLink} ${NavStyles.navbarLogin}`} to="/login"><i class={`fas fa-bars ${NavStyles.bars}`}></i><i className={`fas fa-user ${NavStyles.loginIcon}`}></i></NavLink>
            </div>
        </nav>
    )
}

export default Navbar
