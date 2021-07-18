import React from 'react';
import { SideDiv, SideMenu, SideNav, Picture, ProfileImage } from './SidebarElement';
import home from '../../assets/Image/home.png';
import walletLogo from '../../assets/Image/walletLogo.png';
import trolley from '../../assets/Image/trolley.png';
import './sidebar.style.css';

const Sidebar = () => {
    return (
        <React.Fragment>
                <SideDiv className="sideBar">

                    <ul>
                        <li>
                            <img src={home} alt='logo' />
                        </li>
                        <li>
                            <img src={walletLogo} alt='logo' />
                        </li>
                        <li>
                            <img src={trolley} alt='logo' />
                        </li>
                    </ul>

                </SideDiv>


        </React.Fragment>
    )
}

export default Sidebar;