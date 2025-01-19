import { createAction } from '@reduxjs/toolkit';
import { RoutePath } from '../const';

const redirectToRoute = createAction<RoutePath>('common/redirectToRoute');

export {redirectToRoute};
