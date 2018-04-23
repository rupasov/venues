import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

const Button = ({ fetchVenues, location, radius, section, openNow }) => (
  <RaisedButton
    label="Search"
    style={{ width: '30%' }}
    labelStyle={{ color: '#21BE58' }}
    onClick={e => fetchVenues(location, radius, section, openNow)}
  />
);

Button.propTypes = {
  fetchVenues: PropTypes.func,
  location: PropTypes.string,
  radius: PropTypes.string,
  section: PropTypes.string,
  openNow: PropTypes.number
};

export default Button;
