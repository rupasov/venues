import { CHANGE_LOCATION, CHANGE_RADIUS, SAVE_VENUES } from '../constants';
import { getVenues } from '../utils/requests';

export const fetchVenues = location => dispatch =>
  getVenues(location)
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

export const saveVenues = venuesList => ({
  type: SAVE_VENUES,
  venuesList
});
