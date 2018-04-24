import React from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

const Location = ({ changUserInputValue }) => (
  <TextField
    floatingLabelText="Location"
    underlineFocusStyle={{ borderColor: '#21BE58' }}
    floatingLabelFocusStyle={{ color: '#21BE58' }}
    onChange={(event, newValue) => changUserInputValue('location', newValue)}
    style={{ marginRight: '40px' }}
  />
);

Location.propTypes = {
  changUserInputValue: PropTypes.func
};

export default Location;
