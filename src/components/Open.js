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
    backgroundColor: '#F5F5F5'
  },
  trackOff: {
    backgroundColor: '#BDBDBD'
  },
  thumbSwitched: {
    backgroundColor: '#21BE58'
  },
  trackSwitched: {
    backgroundColor: '#92ecb2'
  },
  labelStyle: {
    color: 'red'
  }
};

const Open = ({ changUserInputValue, openNow }) => (
  <div style={styles.block}>
    <Toggle
      label="Open Now"
      thumbStyle={styles.thumbOff}
      trackStyle={styles.trackOff}
      thumbSwitchedStyle={styles.thumbSwitched}
      trackSwitchedStyle={styles.trackSwitched}
      onToggle={e => changUserInputValue('openNow', Number(!openNow))}
    />
  </div>
);

Open.propTypes = {
  changUserInputValue: PropTypes.func,
  openNow: PropTypes.number
};

export default Open;
