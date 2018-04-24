import FlatButton from 'material-ui/FlatButton';
import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

const Button = ({ fetchVenues, location, radius, section, openNow }) => (
  <FlatButton
    label="Search"
    className="vmi"
    hoverColor={'#fff'}
    style={{
      width: '30%',
      marginBottom: '50px',
      border: '1px solid #21BE58'
    }}
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
