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

const URL_MARKER_DEFAULT =
  '../markup/img/pin.svg';

const URL_MARKER_CURRENT =
  '../markup/img/pin-active.svg';

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

export { AuthorizationStatus, RoutePath, LOCATIONS, ONE_STAR_RATING, CardImageSize, ComentsLenght, URL_MARKER_DEFAULT, URL_MARKER_CURRENT, NUMBER_OF_REVIEW, NUMBER_NEARBY_OFFER, BookmarkButtonSize, MapSetting};
