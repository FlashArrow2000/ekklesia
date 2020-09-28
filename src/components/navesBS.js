import { types } from "../types/types";


export const startNumeroNaveBS = (naves) => {
    
    
    return(dispatch) => {
        
    

        dispatch(numeroNaveBS(naves))

    }

    

}

export const numeroNaveBS = (naves) => ({

    type: types.numeroNaveBS,
    payload: naves

});

export const bancasEnSelect = (alineacion) => ({

    type: types.bancasEnSelect,
    payload: alineacion

});