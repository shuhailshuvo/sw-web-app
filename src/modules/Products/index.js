import React, { Component } from "react";
import { connect } from "react-redux";
import "../../assets/css/products.css";
//assets
import HomeIcon from "../../assets/images/home.png";
import product1 from "../../assets/images/product1.jpg";
import product2 from "../../assets/images/product2.jpg";
import product3 from "../../assets/images/product3.png";
import trolley from "../../assets/images/trolley.png";
import user from "../../assets/images/userLogo.png";
import logo from "../../assets/images/wallet.png";
import walletLogo from "../../assets/images/walletLogo.png";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {}

  // componentDidUpdate(prevProps, prevState) {}

  // componentWillUnmount() {}

  render() {
    return (
      <div className='firstContainer'>
        <div className='secondContainer'>
          <div className='horizontalBar'>
            <img src={logo} alt='Logo' />

            <img className='user' src={user} alt='User' />
          </div>
          <div className='logoAndProductContainer'>
            <div className='verticalBar'>
              <ul>
                <li>
                  <img src={HomeIcon} alt='Logo' />
                </li>
                <li>
                  <img src={walletLogo} alt='User' />
                </li>
                <li>
                  <img src={trolley} alt='User' />
                </li>
              </ul>
            </div>
            <div className='productContainer'>
              <div className='product'>
                <p className='products'>Aanlytics</p>
                <img src={product1} alt='Logo' />
              </div>
              <div className='product'>
                <p>Smart Watch with Rate Alert</p>
                <img src={product2} alt='Logo' />
              </div>
              <div className='product'>
                <p>Meta Trader App</p>
                <img src={product3} alt='Logo' />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Product);
