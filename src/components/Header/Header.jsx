import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/headerLogo/LogoCamperOpt.png'
import css from './Header.module.css'
import Container from '../Container/Container';

const Header = () => {
    const navLink = ({ isActive }) =>
        isActive ? css.activeLink : css.navLink;
  return (
    <div className={css.bg}>
      <Container> 
        <div className={css.header}>
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <img src={logo} alt="Camper logo" className={css.logo}/>
            </Link>
            <nav className={css.nav}>
                <NavLink to="/"
                    className={navLink}
                >
                    Home
                </NavLink>
                <NavLink to="/catalog"
                    className={navLink}
                >
                    Catalog
                </NavLink>
            </nav>
        </div>
      </Container>
    </div>
  )
}

export default Header