import { RentalOffer } from '../types/offer';

export const favorites:RentalOffer[] = [
  {
    'id': 'b8c329f9-619c-4ee9-a537-4a88d58c56d8',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'apartment',
    'price': 469,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.858610000000006,
      'longitude': 2.330499,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 2.4
  },
  {
    'id': 'eae6718c-1204-45a3-93ae-51c8841bc33e',
    'title': 'Wood and stone place',
    'type': 'house',
    'price': 534,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.335499,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 1.7
  },
];
