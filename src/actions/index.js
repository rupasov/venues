import { CHANGE_LOCATION, CHANGE_RADIUS } from '../constants';

export const changeLocation = location => ({
  type: CHANGE_LOCATION,
  location
});

export const changeRadius = radius => ({
  type: CHANGE_RADIUS,
  radius
});
