import React from 'react';
import home from '../../assets/images/home.png';
import trolley from '../../assets/images/trolley.png';
import walletLogo from '../../assets/images/walletLogo.png';
import './sidebar.style.css';
import { SideDiv } from './SidebarElement';

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