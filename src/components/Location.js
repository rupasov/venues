import React from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

const Location = ({ changUserInputValue }) => (
  <TextField
    floatingLabelText="Location"
    onChange={(event, newValue) => changUserInputValue('location', newValue)}
  />
);

Location.propTypes = {
  changUserInputValue: PropTypes.func
};

export default Location;
