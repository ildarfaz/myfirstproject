import { actions } from "../../types/actions";
import axios from "axios";
export const getUsers =
  () => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    try {
      const result = (
        await axios.get(`http://jsonplaceholder.typicode.com/users`)
      ).data;
      dispatch({
        type: actions.GET_USERS,
        payload: result,
      });
    } catch (e) {
      dispatch({
        type: actions.USERS_ERROR,
        payload: console.log(e),
      });
    }
  };
