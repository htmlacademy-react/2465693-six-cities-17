const BACKEND_URL = 'https://16.design.htmlacademy.pro/six-cities';

const REQUEST_TIMEOUT = 5000;

const enum RoutePath {
  Index = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '*',
}

const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const LOCATIONS = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const ONE_STAR_RATING = 100 / 5;

const CardImageSize = {
  'favorites': {
    width: 150,
    height: 110,
  },
  'cities': {
    width: 260,
    height: 200,
  },
  'near-places': {
    width: 260,
    height: 200,
  },
} as const;

const ComentsLenght = {
  MIN: 50,
  MAX: 300,
};

const NUMBER_OF_REVIEW = 10;

const NUMBER_NEARBY_OFFER = 3;

const BookmarkButtonSize = {
  'place-card': {
    width: 18,
    height: 19
  },
  'offer': {
    width: 31,
    height: 33
  },
};

const enum MapSetting {
  URL= 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Atribution= '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
}

const MarkerSetting = {
  UrlDefault: '/public/img/pin.svg',
  UrlActive: '/public/img/pin-active.svg',
  Width: 28,
  Height: 40,
  Left: 14,
  Top: 40,
};

const DEFAULT_CITY = LOCATIONS[0];

enum SortOption {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

export { BACKEND_URL, REQUEST_TIMEOUT, AuthorizationStatus, RoutePath, LOCATIONS, ONE_STAR_RATING, CardImageSize, ComentsLenght, NUMBER_OF_REVIEW, NUMBER_NEARBY_OFFER, BookmarkButtonSize, MapSetting, MarkerSetting, DEFAULT_CITY, SortOption };
