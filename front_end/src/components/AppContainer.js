import React, { Component } from 'react';
import Navbar from './Navbar';
import TopContainer from './TopContainer'
import LogInForm from './LogInForm'

class AppContainer extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <TopContainer />
        <LogInForm />
      </div>
    );
  }

}

export default AppContainer;
