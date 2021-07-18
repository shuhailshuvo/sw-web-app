import React from 'react';
import { Nav, NavLink, Bars, Picture, ProfileImage } from './NavbarElement';
import logo from '../../assets/Image/logo.png';
import userLogo from '../../assets/Image/userLogo.png';

const Navbar = () => {
    return (
        <React.Fragment>
                    <Nav>
                        <NavLink to="/">
                            <img src={logo} />

                        </NavLink>
                        <Bars />

                        <Picture>
                            <ProfileImage src={userLogo}></ProfileImage>

                        </Picture>

                    </Nav>


        </React.Fragment>
    )
}

export default Navbar;