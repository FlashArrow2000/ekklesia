import { types } from "../types/types";

const initialState = {
    loading: false,
    msgError: null
}

export const validationsReducer = ( state = initialState, action ) => {

    switch (action.type) {
        case types.validationsSetErrorAdminRegister:
             return {
                 ...state,
                 msgError: action.payload
             }    
        case types.validationsRemoveErrorAdminRegister:
             return {
                 ...state,
                 msgError: null
             }    
        case types.validationStartAdminLoading:
             return {
                 ...state,
                 loading: true
             }
        case types.validationEndAdminLoading:
             return {
                 ...state,
                 loading: false
             }
    
        default:
            return state;
    }

} 