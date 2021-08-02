import {GET_USERS,USERS_ERROR} from '../../types/types'

const initialState = {
    users: [],
    loading:true
}
export const usersReducer = (state = initialState, action: { type: any; payload: any })=> {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                users:action.payload,
                loading: false
            }
            case USERS_ERROR:
                return{
                    loading: false, 
                    error: action.payload 
                }
    

            default: return state;         
    }
} 