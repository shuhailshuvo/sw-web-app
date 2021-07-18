import React from 'react';
import logo from '../../assets/images/logo.png';
import userIcon from '../../assets/images/userLogo.png';
import { Bars, Nav, NavLink, Picture, ProfileImage } from './NavbarElement';

const Navbar = () => {
    return (
        <React.Fragment>
            <Nav>
                <NavLink to="/">
                    <img src={logo} />
                </NavLink>
                <Bars />
                <Picture>
                    <ProfileImage src={userIcon}></ProfileImage>
                </Picture>
            </Nav>
        </React.Fragment>
    )
}

export default Navbar;