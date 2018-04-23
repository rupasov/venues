import { BASE_API_URL, API_VERSION_DATE } from '../constants';

export const getVenues = (location, radius, section, openNow) =>
  fetch(
    `${BASE_API_URL}?near=${location}&client_id=${
      process.env.REACT_APP_CLIENT_ID
    }&client_secret=${
      process.env.REACT_APP_CLIENT_SECRET
    }&v=${API_VERSION_DATE}&limit=20${radius && `&radius=${radius}`}${section &&
      `&section=${section}`}${openNow === 1 ? `&openNow=${openNow}` : ''}`
  )
    .then(res => res.json())
    .catch(e => console.log(`Something went wrong ${e}`));
