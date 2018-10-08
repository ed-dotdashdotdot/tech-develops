import React, { Component } from 'react';

import { connect } from "react-redux";

import logo from './img/logo.svg';

import { bindActionCreators } from 'redux';


class Header extends Component {

  constructor(props) {
    super(props);
    this.handleMenuButtonClick = this.handleMenuButtonClick.bind(this);
  }


  handleMenuButtonClick = (event) => {
    console.log("Menu");
    console.log("event:", event);
    console.log("event.target.value:", event.target.value);
    // this.props.onUpdateUser(event.target.value !== "" ? event.target.value : this.props.user);
    // this.props.handleMenuButtonClick("on");

    console.log("HELLOOOO:", this.props);

  }

  render() {
    console.log("HERE: ", this.props)
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React!</h1>
        { this.props.user }
        <br />
        <button
          onClick={ this.handleMenuButtonClick }
          className={ this.props.menu }
        >
          MENU
        </button>
      </header>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log("SSSTATE:", state);
  console.log("PPPROPS:", props);
  return {
    user: state.user,
    menu: state.menu === "off" ? "on" : "off",
  }
};

// const matchActionsToProps = {
//     onUpdateMenu: updateMenu,
// }

export default connect(mapStateToProps)(Header);
