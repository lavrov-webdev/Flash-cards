import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import wordsSlice from './wordsSlice';

const store = configureStore({
  reducer: {
    words: wordsSlice
  }
});

type SelectorCallback = (state: RootState) => any;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector = (callback: SelectorCallback) => useSelector((state: RootState) => callback(state))

export default store;