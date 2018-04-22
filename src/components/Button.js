import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

const Button = ({ fetchVenues, location }) => (
  <RaisedButton label="Search" primary onClick={() => fetchVenues(location)} />
);

Button.propTypes = {};

export default Button;
