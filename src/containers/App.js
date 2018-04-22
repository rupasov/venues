import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import Location from '../components/Location';
import Radius from '../components/Radius';
import Sections from '../components/Sections';
import Button from '../components/Button';

import { changeLocation, changeRadius } from '../actions';

class App extends Component {
  render() {
    const { changeLocation, changeRadius } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Location onChange={changeLocation} />
        <Radius onChange={changeRadius} />
        <Sections />
        <Button />
      </div>
    );
  }
}

App.propTypes = {
  changeLocation: PropTypes.func
};

const mapStateToProps = ({ venues }) => ({
  selectedLocation: venues.selectedLocation,
  selectedRadius: venues.selectedRadius
});

const mapDispatchToProps = { changeLocation, changeRadius };

export default connect(mapStateToProps, mapDispatchToProps)(App);
