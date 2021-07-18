import React from 'react';
import { ParentDiv, Div, ContainerNav } from './ParenComponentElement';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Wallet from '../Wallet';

const ParentComponent = () => {
    return (
        <React.Fragment>
            <ParentDiv>
                <Div>
                    <Navbar/ >
                    <ContainerNav>
                        <Sidebar/ >
                        <Wallet/ >
                    </ContainerNav>

                </Div>

            </ParentDiv>


        </React.Fragment>
    )
}

export default ParentComponent;