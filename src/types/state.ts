import { store } from '../store';

// выводим тип хранилища
export type AppState = ReturnType<typeof store.getState>;

// для получения полной информации о типах, когда мы будем использовать dispatch
export type AppDispatch = typeof store.dispatch;
