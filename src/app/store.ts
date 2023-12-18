import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import UserSlice from "../features/auth/AuthSlice.ts";

import {configureStore} from "@reduxjs/toolkit";

// Store
const store = configureStore({
  reducer: {
    user : UserSlice,
  }
});

// Hooks
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

export default store;
