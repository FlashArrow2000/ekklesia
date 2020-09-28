import { combineReducers } from "redux";
import { adminReducer } from "./adminReducer";
import { validationsReducer } from "./validationsReducer";
import { navesBSReducer } from './navesBSReducer'


export const rootReducer = combineReducers({
    admin: adminReducer,
    validations: validationsReducer,
    navesBurbujaSocial: navesBSReducer,
});