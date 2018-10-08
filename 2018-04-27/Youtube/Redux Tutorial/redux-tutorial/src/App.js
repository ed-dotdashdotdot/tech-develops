import React, { Component } from 'react';

import './css/App.css';
import Title from './Title';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { updateUser, apiRequest } from "./actions/user-actions";

class App extends Component {

  constructor(props) {
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  componentDidMount() {
    this.props.onApiRequest();
  }

  onUpdateUser(event) {
    console.log("event:", event);
    console.log("event.target.value:", event.target.value);
    this.props.onUpdateUser(event.target.value !== "" ? event.target.value : this.props.user);
  }

  render() {

    // console.log("this.props:", this.props)

    return (
      <div className="App">
        <Header />
        <Body />

        <input
          onChange={ this.onUpdateUser }
          value={ this.props.user }
        >
        </input>

        <button
          onClick={ this.onUpdateUser }
        >
          { this.props.user }
        </button>

        <Title />
        <Footer />

      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  // console.log("props:", props);
  return {
    products: state.products,
    user: state.user,
    menu: state.menu,
    userPlusProps: `${state.user} ${props.randomProps}`
  }
};

// const matchActionsToProps = (dispatch, props) => {
const matchActionsToProps = {
    onUpdateUser: updateUser,
    onApiRequest: apiRequest
}

// const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
//   // console.log(propsFromState, propsFromDispatch, ownProps)
//   console.log("----");
//   console.log("propsFromState:", propsFromState);
//   console.log("propsFromDispatch:", propsFromDispatch);
//   console.log("ownProps:", ownProps);
//   console.log("----");
//   return { };
// }

export default connect(mapStateToProps, matchActionsToProps)(App);
