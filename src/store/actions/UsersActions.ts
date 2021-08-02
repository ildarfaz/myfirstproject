import {GET_USERS, USERS_ERROR} from '../../types/types'
import axios from 'axios'

export const getUsers = () => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    try{
        const res = await axios.get(`http://jsonplaceholder.typicode.com/users`)
        dispatch( {
            type: GET_USERS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }
}
