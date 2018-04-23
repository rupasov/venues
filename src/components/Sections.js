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

const Sections = ({ changUserInputValue }) => (
  <div style={styles.wrapper}>
    {SECTIONS.map(section => (
      <Chip
        key={section}
        onClick={e => changUserInputValue('section', section)}
        style={styles.chip}
      >
        <Avatar color="#444" icon={<SvgIconFace />} />
        {section}
      </Chip>
    ))}
  </div>
);

Sections.propTypes = {
  changUserInputValue: PropTypes.func
};

export default Sections;
