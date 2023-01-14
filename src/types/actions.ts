import { store } from "../store/Store";

export enum actions {
  GET_USERS = "GET_USERS",
  USERS_ERROR = "USERS_ERROR",
}
export type AppDispatch = typeof store.dispatch
