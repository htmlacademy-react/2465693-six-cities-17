import { createAction } from '@reduxjs/toolkit';

const changeCity = createAction('main/changeCity');

const loadOffers = createAction('data/loadOffers');

export {changeCity, loadOffers};
