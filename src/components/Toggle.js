import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import { blue300, indigo900 } from 'material-ui/styles/colors';
import { SECTIONS } from '../constants';

const styles = {
  chip: {
    margin: 4
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  }
};

const Toggle = ({ changUserInputValue, openNow }) => (
  <Chip
    onClick={e => changUserInputValue('openNow', Number(!openNow))}
    style={styles.chip}
  >
    <Avatar color="#444" icon={<SvgIconFace />} />
    Open Now
  </Chip>
);

Toggle.propTypes = {
  changUserInputValue: PropTypes.func,
  openNow: PropTypes.number
};

export default Toggle;
