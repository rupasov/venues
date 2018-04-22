import { CHANGE_LOCATION, CHANGE_RADIUS, SAVE_VENUES } from '../constants';

const initState = {
  selectedLocation: '',
  selectedRadius: '',
  venuesList: {}
};

const venues = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_LOCATION:
      return {
        ...state,
        selectedLocation: action.location
      };
    case CHANGE_RADIUS:
      return {
        ...state,
        selectedRadius: action.radius
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
