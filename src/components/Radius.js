import React from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

const Radius = ({ onChange }) => (
  <TextField
    hintText="Radius"
    onChange={(event, newValue) => onChange(newValue)}
  />
);

Radius.propTypes = {
  changeRadius: PropTypes.func
};

export default Radius;
