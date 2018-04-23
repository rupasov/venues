export const CHANGE_LOCATION = 'CHANGE_LOCATION';
export const CHANGE_RADIUS = 'CHANGE_RADIUS';
export const SAVE_VENUES = 'SAVE_VENUES';
export const CHANGE_SECTION = 'CHANGE_SECTION';
export const CHANGE_OPEN_NOW = 'CHANGE_OPEN_NOW';
export const CHANGE_USER_INPUT_VALUE = 'CHANGE_USER_INPUT_VALUE';

export const BASE_API_URL = 'https://api.foursquare.com/v2/venues/explore';
export const BASE_GOOGLE_MAP_URL = 'http://www.google.com/maps/place/';
export const API_VERSION_DATE = '20180422';

export const SECTIONS = [
  { APIParam: 'food', name: 'Food', icon: 'RestaurantIcon' },
  { APIParam: 'drinks', name: 'Drink', icon: 'BarIcon' },
  { APIParam: 'coffee', name: 'Coffee', icon: 'CafeIcon' },
  { APIParam: 'shops', name: 'Shops', icon: 'ShopIcon' },
  { APIParam: 'arts', name: 'Arts', icon: 'ArtIcon' },
  { APIParam: 'outdoors', name: 'Outdoors', icon: 'OutdoorIcon' },
  { APIParam: 'sights', name: 'Sights', icon: 'SightsIcon' },
  { APIParam: 'trending', name: 'Trending', icon: 'TrandingIcon' },
  { APIParam: 'topPick', name: 'Top Pick', icon: 'TopPickIcon' }
];
