import React, { Component } from 'react';

import { connect } from "react-redux";

class Title extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <div className="Title">
        <h1
          className={ this.props.user }
        >{ this.props.user }</h1>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.user,
  }
};

export default connect(mapStateToProps)(Title);
