import React from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

const styles = {
  field: {
    marginRight: '40px'
  },
  underlineFocusStyle: {
    borderColor: '#21BE58'
  },
  floatingLabelFocusStyle: {
    color: '#21BE58'
  }
};

const Location = ({ changUserInputValue }) => (
  <TextField
    floatingLabelText="Location"
    style={styles.field}
    underlineFocusStyle={styles.underlineFocusStyle}
    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    onChange={(event, newValue) => changUserInputValue('location', newValue)}
  />
);

Location.propTypes = {
  changUserInputValue: PropTypes.func
};

export default Location;
