import React from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

const Radius = ({ changUserInputValue }) => (
  <TextField
    floatingLabelText="Radius"
    onChange={(event, newValue) => changUserInputValue('radius', newValue)}
  />
);

Radius.propTypes = {
  changUserInputValue: PropTypes.func
};

export default Radius;
