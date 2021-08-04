import { actions } from "../../types/actions";

const initialState = {
  users: [],
  loading: true,
};
export const usersReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case actions.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case actions.USERS_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
