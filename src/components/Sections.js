import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import TopPickIcon from 'material-ui/svg-icons/action/grade';
import SightsIcon from 'material-ui/svg-icons/action/room';
import ArtIcon from 'material-ui/svg-icons/action/account-balance';
import TrandingIcon from 'material-ui/svg-icons/action/trending-up';
import CafeIcon from 'material-ui/svg-icons/maps/local-cafe';
import BarIcon from 'material-ui/svg-icons/maps/local-bar';
import RestaurantIcon from 'material-ui/svg-icons/maps/restaurant';
import OutdoorIcon from 'material-ui/svg-icons/maps/terrain';
import ShopIcon from 'material-ui/svg-icons/maps/store-mall-directory';
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

const ICONS = {
  RestaurantIcon,
  BarIcon,
  CafeIcon,
  ShopIcon,
  ArtIcon,
  OutdoorIcon,
  SightsIcon,
  TrandingIcon,
  TopPickIcon
};

const Sections = ({ changUserInputValue }) => (
  <div style={styles.wrapper}>
    {SECTIONS.map(section => {
      const Icon = ICONS[section.icon];
      return (
        <Chip
          key={section.name}
          onClick={e => changUserInputValue('section', section.APIParam)}
          style={styles.chip}
        >
          <Avatar color="#444" icon={<Icon />} />
          {section.name}
        </Chip>
      );
    })}
  </div>
);

Sections.propTypes = {
  changUserInputValue: PropTypes.func
};

export default Sections;
