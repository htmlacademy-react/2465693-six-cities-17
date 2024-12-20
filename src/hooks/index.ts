import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppState, AppDispatch } from '../types/state';

//обертка для хука useAppDispatch и useAppSelector для типизации, TS будет подсказывать что можем, а что не можем делать.

//useDispatch поможет чтобы не смогли диспатчнуть действие которое мы не создавали
const useAppDispatch = ()=> useDispatch<AppDispatch>();

//useAppSelector подсказка, что у нас есть в state
const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export {useAppDispatch, useAppSelector};
