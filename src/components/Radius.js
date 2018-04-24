import React from 'react';
import NumberFormat from 'react-number-format';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

const styles = {
  underlineFocusStyle: {
    borderColor: '#21BE58'
  },
  floatingLabelFocusStyle: {
    color: '#21BE58'
  }
};
const Radius = ({ changUserInputValue }) => (
  <NumberFormat
    customInput={TextField}
    thousandSeparator
    allowNegative={false}
    floatingLabelText="Radius (meter)"
    underlineFocusStyle={styles.underlineFocusStyle}
    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    onValueChange={values =>
      changUserInputValue('radius', Number(values.value))
    }
  />
);

Radius.propTypes = {
  changUserInputValue: PropTypes.func
};

export default Radius;
