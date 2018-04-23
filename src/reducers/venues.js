import {
  CHANGE_LOCATION,
  CHANGE_RADIUS,
  SAVE_VENUES,
  CHANGE_SECTION,
  CHANGE_OPEN_NOW
} from '../constants';

const initState = {
  selectedLocation: '',
  selectedRadius: '',
  selectedSection: '',
  openNowIsSelected: false,
  venuesList: null
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
    case CHANGE_SECTION:
      return {
        ...state,
        selectedSection: action.section
      };
    case CHANGE_OPEN_NOW:
      return {
        ...state,
        openNowIsSelected: !state.openNowIsSelected
      };
    default:
      return state;
  }
};

export default venues;
