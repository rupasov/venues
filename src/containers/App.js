import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FaceIcon from 'material-ui/svg-icons/action/face';
import { white } from 'material-ui/styles/colors';
import Location from '../components/Location';
import Radius from '../components/Radius';
import Sections from '../components/Sections';
import Open from '../components/Open';
import Button from '../components/Button';
import VenueCards from '../components/VenueCards';
import { changUserInputValue, fetchVenues } from '../actions';

const styles = {
  header: {
    background: 'linear-gradient(45deg,#0abf53 0,#4ee5e5 100%)',
    height: '150px',
    padding: '20px',
    color: '#fff',
    textAlign: 'center'
  },
  headerTitle: {
    fontSize: '1.5em'
  },
  faceIcon: {
    width: 100,
    height: 100
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: '30px'
  },
  centerALign: {
    textAlign: 'center'
  },
  marginBottom30: {
    marginBottom: '30px'
  }
};

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
        <header style={styles.header}>
          <FaceIcon color={white} style={styles.faceIcon} />
          {venuesList &&
            venuesList.response.geocode && (
              <h1 style={styles.headerTitle}>
                {venuesList.response.geocode.displayString}
              </h1>
            )}
        </header>
        <section>
          <div style={styles.centerALign}>
            <div>
              <div style={styles.marginBottom30}>
                <Location changUserInputValue={changUserInputValue} />
                <Radius changUserInputValue={changUserInputValue} />
              </div>
              <div style={styles.container}>
                <Sections changUserInputValue={changUserInputValue} />
              </div>
              <div style={styles.container}>
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
          <div style={styles.centerALign}>
            {venuesList &&
              venuesList.response.groups && <VenueCards venues={venuesList} />}
          </div>
        </section>
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.string,
  radius: PropTypes.number,
  section: PropTypes.string,
  openNow: PropTypes.number,
  venuesList: PropTypes.object,
  changUserInputValue: PropTypes.func,
  fetchVenues: PropTypes.func
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
