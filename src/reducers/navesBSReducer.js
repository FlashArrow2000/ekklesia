import { types } from "../types/types";

const initialState = {
    naves: [{
        numero: null,
        cantidadBancas: null,
        alineacion: null
    }]
}

export const navesBSReducer = ( state = initialState, action ) => {

    switch (action.type) {
        case types.numeroNaveBS:
             return { 
                ...state,               
                naves:[{ 
                    numero: action.payload,
                    cantidadBancas: null,
                    alineacion: null
                    }]
                 }      
        case types.bancasEnSelect:
            return{
                ...state,
                alineacion: [...action.payload]
            }  
        default:
            return state;
    }

} 