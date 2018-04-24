# venues
Test app using the Foursquare venues API.
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Usage
- Clone the repo
- npm i 
- Add `.env.development.local` file with the API credentials to the root folder:
``` js
REACT_APP_CLIENT_ID=<CLIENT_ID> 
REACT_APP_CLIENT_SECRET=<CLIENT_SECRET>
```
- npm start

### Known issues 
- There's no input validation
- There's no feedback if the provided location is invalid (`param_error`, `failed_geocode`)
- There isn't any feedback if something goes wrong with the API request
- The maximum supported radius is currently 100,000 meters, although the radius input field can accept higher numbers, and if the number is higher than 100000 it causes `geocode_too_big` error
- Filter buttons don't show which one is selected after focusing out

### Possible additional features
- The whole app should be map based instead of list based 
- It should use [sytled-components](https://github.com/styled-components/styled-components)
- UX has to be improved 



