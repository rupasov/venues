import FlatButton from 'material-ui/FlatButton';
import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

const styles = {
  button: {
    width: '30%',
    marginBottom: '50px',
    border: '1px solid #21BE58'
  },
  label: {
    color: '#21BE58'
  }
};

const Button = ({ fetchVenues, location, radius, section, openNow }) => (
  <FlatButton
    label="Search"
    hoverColor={'#fff'}
    style={styles.button}
    labelStyle={styles.label}
    onClick={e => fetchVenues(location, radius, section, openNow)}
  />
);

Button.propTypes = {
  fetchVenues: PropTypes.func,
  location: PropTypes.string,
  radius: PropTypes.number,
  section: PropTypes.string,
  openNow: PropTypes.number
};

export default Button;
