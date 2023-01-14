import {  configureStore,  } from '@reduxjs/toolkit'
import { rootReducer } from "./reducers/rootReducer";


export type RootState = ReturnType<typeof rootReducer>
export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
})