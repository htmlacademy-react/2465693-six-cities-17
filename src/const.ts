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

export { AuthorizationStatus, RoutePath, LOCATIONS, ONE_STAR_RATING };
