import {
  CHANGE_LOCATION,
  CHANGE_RADIUS,
  SAVE_VENUES,
  CHANGE_SECTION,
  CHANGE_OPEN_NOW
} from '../constants';
import { getVenues } from '../utils/requests';

export const fetchVenues = (location, radius, section, openNow) => dispatch =>
  getVenues(location, radius, section, openNow)
    .then(venuesList => dispatch(saveVenues(venuesList)))
    .catch(e => console.log(`Something went wrong: ${e}`));

export const changeLocation = location => ({
  type: CHANGE_LOCATION,
  location
});

export const changeRadius = radius => ({
  type: CHANGE_RADIUS,
  radius
});

export const changeSection = section => ({
  type: CHANGE_SECTION,
  section
});

export const changeIsOpenNow = () => ({
  type: CHANGE_OPEN_NOW
});

export const saveVenues = venuesList => ({
  type: SAVE_VENUES,
  venuesList
});
