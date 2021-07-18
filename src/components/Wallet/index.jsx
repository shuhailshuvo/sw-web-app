import React from 'react';
import './wallet.style.css';
import { WalletDiv } from './WalletElement';

const Wallet = () => {
    return (
        <React.Fragment>
                <WalletDiv>
                    <table>
                        <tr className="backcolor">
                            <td >
                            
                            </td>
                        </tr>
                        <tr className="border">
                            <th>
                                <h3 className="textheading">USD</h3>
                                <h4>11,970.35</h4>

                            </th>
                        </tr>
                        <tr>
                            <td>1359 8674 3200 3659</td>
                        </tr>
                    </table>

                    <table>
                        <tr className="backcolor">
                            <td>
                            
                            </td>
                        </tr>
                        <tr className="border">
                            <th >
                                <h3 className="textheading">BDT</h3>
                                <h4>6,86,58,155.00</h4>

                            </th>
                        </tr>
                        <tr>
                            <td>1359 8674 3200 3660</td>
                        </tr>
                    </table>

                </WalletDiv>


        </React.Fragment>
    )
}

export default Wallet;