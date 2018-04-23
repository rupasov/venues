import { SAVE_VENUES, CHANGE_USER_INPUT_VALUE } from '../constants';
import { getVenues } from '../utils/requests';

export const fetchVenues = (location, radius, section, openNow) => dispatch =>
  getVenues(location, radius, section, openNow)
    .then(venuesList => dispatch(saveVenues(venuesList)))
    .catch(e => console.log(`Something went wrong: ${e}`));

export const changUserInputValue = (inputType, value) => ({
  type: CHANGE_USER_INPUT_VALUE,
  inputType,
  value
});

export const saveVenues = venuesList => ({
  type: SAVE_VENUES,
  venuesList
});
