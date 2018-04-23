import React from 'react';
import PropTypes from 'prop-types';
import Toggle from 'material-ui/Toggle';

const styles = {
  block: {
    maxWidth: 300
  },
  toggle: {
    marginBottom: 16
  },
  thumbOff: {
    backgroundColor: '#ffcccc'
  },
  trackOff: {
    backgroundColor: '#ff9d9d'
  },
  thumbSwitched: {
    backgroundColor: 'red'
  },
  trackSwitched: {
    backgroundColor: '#ff9d9d'
  },
  labelStyle: {
    color: 'red'
  }
};

// const Toggle = ({ changUserInputValue, openNow }) => (
//   <Chip
//     onClick={e => changUserInputValue('openNow', Number(!openNow))}
//     style={styles.chip}
//   >
//     <Avatar color="#444" icon={<SvgIconFace />} />
//     Open Now
//   </Chip>
// );

const Open = ({ changUserInputValue, openNow }) => (
  <div style={styles.block}>
    <Toggle
      label="Open Now"
      style={styles.toggle}
      onToggle={e => changUserInputValue('openNow', Number(!openNow))}
    />
  </div>
);

Open.propTypes = {
  changUserInputValue: PropTypes.func,
  openNow: PropTypes.number
};

export default Open;
