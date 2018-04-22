import React from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

const Location = ({ onChange }) => (
  <TextField
    hintText="Location"
    onChange={(event, newValue) => onChange(newValue)}
  />
);

Location.propTypes = {
  changeLocation: PropTypes.func
};

export default Location;
