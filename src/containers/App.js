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
import {
  changeLocation,
  changeRadius,
  fetchVenues,
  changeSection,
  changeIsOpenNow
} from '../actions';

class App extends Component {
  render() {
    const {
      selectedLocation,
      selectedRadius,
      selectedSection,
      changeLocation,
      changeRadius,
      changeIsOpenNow,
      openNowIsSelected,
      changeSection,
      fetchVenues,
      venuesList
    } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Location onChange={changeLocation} />
        <Radius onChange={changeRadius} />
        <Sections onChange={changeSection} />
        <Toggle onChange={changeIsOpenNow} />
        <Button
          fetchVenues={fetchVenues}
          location={selectedLocation}
          radius={selectedRadius}
          section={selectedSection}
          openNow={openNowIsSelected}
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
  selectedLocation: venues.selectedLocation,
  selectedRadius: venues.selectedRadius,
  selectedSection: venues.selectedSection,
  openNowIsSelected: venues.openNowIsSelected,
  venuesList: venues.venuesList
});

const mapDispatchToProps = {
  changeLocation,
  changeRadius,
  fetchVenues,
  changeSection,
  changeIsOpenNow
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
