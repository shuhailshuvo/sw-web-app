import React, { Component } from "react";
import { connect } from "react-redux";
import { ParentDiv, WalletDiv, Div, ContainerNav } from "./WalletElement";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import './wallet.style.css';

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {}

  // componentDidUpdate(prevProps) {}

  // componentWillUnmount() {}

  render() {
    return (
      <>
        <ParentDiv>
          <Div>
            <Navbar />

            <ContainerNav>
              <Sidebar />
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

            </ContainerNav>


          </Div>
        </ParentDiv>



      </>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Wallet);
