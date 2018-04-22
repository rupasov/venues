import { CHANGE_LOCATION, CHANGE_RADIUS } from '../constants';

const initState = {
  selectedLocation: '',
  selectedRadius: ''
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
    default:
      return state;
  }
};

export default venues;
