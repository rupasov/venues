import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FaceIcon from 'material-ui/svg-icons/action/face';
import { white } from 'material-ui/styles/colors';
import './App.css';
import Location from '../components/Location';
import Radius from '../components/Radius';
import Sections from '../components/Sections';
import Open from '../components/Open';
import Button from '../components/Button';
import VenueCards from '../components/VenueCards';
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
          <FaceIcon color={white} style={{ width: 100, height: 100 }} />
          {venuesList &&
            venuesList.response.geocode && (
              <h1 className="App-title">
                {venuesList.response.geocode.displayString}
              </h1>
            )}
        </header>
        <section>
          <div style={{ textAlign: 'center' }}>
            <div>
              <div style={{ marginBottom: '40px' }}>
                <Location changUserInputValue={changUserInputValue} />
                <Radius changUserInputValue={changUserInputValue} />
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginBottom: '40px'
                }}
              >
                <Sections changUserInputValue={changUserInputValue} />
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginBottom: '30px'
                }}
              >
                <Open
                  changUserInputValue={changUserInputValue}
                  openNow={openNow}
                />
              </div>
              <Button
                fetchVenues={fetchVenues}
                location={location}
                radius={radius}
                section={section}
                openNow={openNow}
              />
            </div>
          </div>
        </section>
        <section>
          <div style={{ textAlign: 'center' }}>
            {venuesList &&
              venuesList.response.groups && <VenueCards venues={venuesList} />}
          </div>
        </section>
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
