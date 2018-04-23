import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import Location from '../components/Location';
import Radius from '../components/Radius';
import Sections from '../components/Sections';
import Toggle from '../components/Toggle';
import Button from '../components/Button';
import CardExampleWithAvatar from '../components/VenueCards';
import { changUserInputValue, fetchVenues } from '../actions';

class App extends Component {
  render() {
    const {
      location,
      radius,
      section,
      openNow,
      venuesList,
      changUserInputValue,
      fetchVenues
    } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Location changUserInputValue={changUserInputValue} />
        <Radius changUserInputValue={changUserInputValue} />
        <Sections changUserInputValue={changUserInputValue} />
        <Toggle changUserInputValue={changUserInputValue} openNow={openNow} />
        <Button
          fetchVenues={fetchVenues}
          location={location}
          radius={radius}
          section={section}
          openNow={openNow}
        />
        {venuesList &&
          venuesList.response.groups && (
            <CardExampleWithAvatar venues={venuesList} />
          )}
      </div>
    );
  }
}

App.propTypes = {
  changeLocation: PropTypes.func
};

const mapStateToProps = ({ venues }) => ({
  location: venues.location,
  radius: venues.radius,
  section: venues.section,
  openNow: venues.openNow,
  venuesList: venues.venuesList
});

const mapDispatchToProps = {
  changUserInputValue,
  fetchVenues
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
