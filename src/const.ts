const Setting = {
  OfferCards: 5,
} as const;

const enum RoutePath {
  INDEX = '/',
  LOGIN = '/login',
  FAVORITES = '/favorites',
  OFFER = '/offer/:id',
  NOT_FOUND = '*'
}

export { Setting, RoutePath };
