import { types } from "../types/types";


export const startNumeroNaveBS = (bancas) => {
    
    console.log(bancas);

}

export const numeroNaveBS = (bancas) => ({

    type: types.numeroNaveBS,
    payload: bancas

});

export const bancasEnSelect = (alineacion) => ({

    type: types.bancasEnSelect,
    payload: alineacion

});