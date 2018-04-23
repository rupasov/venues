import { BASE_API_URL, API_VERSION_DATE } from '../constants';

export const getVenues = (location, radius, section, openNow) => {
  console.log('*******', openNow);
  let URL = `${BASE_API_URL}?near=${location}&client_id=${
    process.env.REACT_APP_CLIENT_ID
  }&client_secret=${
    process.env.REACT_APP_CLIENT_SECRET
  }&v=${API_VERSION_DATE}&limit=20`;
  if (radius) {
    URL += `&radius=${radius}`;
  }
  if (section) {
    URL += `&section=${section}`;
  }
  if (openNow) {
    URL += '&openNow=1';
  }
  return fetch(URL)
    .then(res => res.json())
    .catch(e => console.log(`Something went wrong ${e}`));
};
