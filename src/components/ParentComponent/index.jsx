import React from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Wallet from '../Wallet';
import { ContainerNav, ParentDiv } from './ParenComponentElement';

const ParentComponent = () => {
    return (
        <React.Fragment>
            <ParentDiv>
                <div>
                    <Navbar/>
                    <ContainerNav>
                        <Sidebar/>
                        <Wallet/>
                    </ContainerNav>
                </div>
            </ParentDiv>
        </React.Fragment>
    )
}

export default ParentComponent;