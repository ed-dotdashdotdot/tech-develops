import React, { Component } from 'react';

import { connect } from "react-redux";

class Body extends Component {
  
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.user,
  }
};

export default connect(mapStateToProps)(Body);
