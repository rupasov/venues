import { CHANGE_USER_INPUT_VALUE, SAVE_VENUES } from '../constants';

const initState = {
  location: '',
  radius: null,
  section: '',
  openNow: 0,
  venuesList: null
};

const venues = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_USER_INPUT_VALUE:
      return {
        ...state,
        [action.inputType]: action.value
      };
    case SAVE_VENUES:
      return {
        ...state,
        venuesList: action.venuesList
      };
    default:
      return state;
  }
};

export default venues;
