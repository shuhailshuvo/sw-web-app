import React from 'react';
import userIcon from '../../assets/images/userLogo.png';
import { Bars, Nav, NavLink, Picture, ProfileImage } from './NavbarElement';

const Navbar = () => {
    return (
        <React.Fragment>
            <Nav>
                <NavLink to="/">
                    <img alt="logo" src="/logo.png" />
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