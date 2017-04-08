import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../libs/bootstrap/dist/css/bootstrap.min.css';
// import css from 'style-loader!css-loader!../libs/bootstrap/dist/css/bootstrap.min.css';
import Header from '../common/Header';
import Footer from '../common/Footer';
import '../css/stylesheet.css';

class App extends Component {
  render() {
    return (
      <div className={(window.innerWidth > 1300) && "container"}>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
