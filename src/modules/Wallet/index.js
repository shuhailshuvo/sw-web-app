import React, { Component } from "react";
import { connect } from "react-redux";

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
      </>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Wallet);
