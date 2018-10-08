import React, { Component } from 'react';

import { connect } from "react-redux";


class Footer extends Component {

  // constructor(props) {
  //   super(props);
  // }

  handleMenuButtonClick = () => {
    console.log("Menu")
    // console.log("event:", event);
    // console.log("event.target.value:", event.target.value);
    // this.props.onUpdateUser(event.target.value !== "" ? event.target.value : this.props.user);
  }

  render() {
    return (
      <footer>
        <h3>Footer</h3>
      </footer>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.user,
  }
};

export default connect(mapStateToProps)(Footer);
