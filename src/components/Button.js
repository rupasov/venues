import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

const Button = ({ fetchVenues, location, radius, section, openNow }) => (
  <RaisedButton
    label="Search"
    primary
    onClick={e => fetchVenues(location, radius, section, openNow)}
  />
);

Button.propTypes = {};

export default Button;
