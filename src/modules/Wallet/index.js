/**
 * /* eslint-disable
 *
 * @format
 */

 import React, { Component } from 'react';
 import { connect } from 'react-redux';
 import ParentComponent from '../../components/ParentComponent';

 
 class Wallet extends Component {
   constructor(props) {
     super(props);
     this.state = {};
   }
 
   componentDidMount() {}
 
   componentDidUpdate(prevProps, prevState) {}
 
   componentWillUnmount() {}
 
   render() {
     return (
         <React.Fragment>
             <ParentComponent/ >
         </React.Fragment>
     );
   }
 }
 
 function mapStateToProps(state) {
   return {};
 }
 
 export default connect(mapStateToProps)(Wallet);