import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';

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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

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

        <h1>123{ this.props.user }123</h1>

        <Title />

      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  // console.log("props:", props);
  return {
    products: state.products,
    user: state.user,
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
