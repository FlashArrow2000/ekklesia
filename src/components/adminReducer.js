import { types } from "../types/types";

const initialState = {
    authAdmin:{
        uid: null,
        displayName: null, 
    },
    adminToState:{
        PrimerNombre: null,
        SegundoNombre: null,
        PrimerApellido: null,
        SegundoApellido: null,
        Cedula: null,
        NumeroTelefonico: null,
        CorreoElectronico: null,
        IglesiaAdministra: null,
        Puesto: null,
    },
    admin:{
        uid: null,
        PrimerNombre: null,
        SegundoNombre: null,
        PrimerApellido: null,
        SegundoApellido: null,
        Cedula: null,
        NumeroTelefonico: null,
        CorreoElectronico: null,
        IglesiaAdministra: null,
        Puesto: null,
    }
}

export const adminReducer = ( state = initialState, action ) => {

    switch (action.type) {
        case types.AdminLogin:
            return {
                ...state,
                authAdmin:{
                    uid: action.payload.uid,
                    displayName: action.payload.displayName,
                }
                
            }
        case types.AdminAddToState:
            return {
                ...state,
                adminToState:{
                    PrimerNombre: action.payload.PrimerNombre,
                    SegundoNombre: action.payload.SegundoNombre,
                    PrimerApellido: action.payload.PrimerApellido,
                    SegundoApellido: action.payload.SegundoApellido,
                    Cedula: action.payload.Cedula,
                    NumeroTelefonico: action.payload.NumeroTelefonico,
                    CorreoElectronico: action.payload.CorreoElectronico,
                    IglesiaAdministra: action.payload.IglesiaAdministra,
                    Puesto: action.payload.Puesto,
                }
            }
        case types.AdminAddNew:
            return {
                ...state,
                admin:{
                    uid: action.payload.uid,
                    PrimerNombre: action.payload.PrimerNombre,
                    SegundoNombre: action.payload.SegundoNombre,
                    PrimerApellido: action.payload.PrimerApellido,
                    SegundoApellido: action.payload.SegundoApellido,
                    Cedula: action.payload.Cedula,
                    NumeroTelefonico: action.payload.NumeroTelefonico,
                    CorreoElectronico: action.payload.CorreoElectronico,
                    IglesiaAdministra: action.payload.IglesiaAdministra,
                    Puesto: action.payload.Puesto,
                }
                
            }
        case types.AdminLogout:
            return {
                authAdmin:{
                    uid: null,
                    displayName: null, 
                },
                adminToState:{
                    PrimerNombre: null,
                    SegundoNombre: null,
                    PrimerApellido: null,
                    SegundoApellido: null,
                    Cedula: null,
                    NumeroTelefonico: null,
                    CorreoElectronico: null,
                    IglesiaAdministra: null,
                    Puesto: null,
                },
                admin:{
                    uid: null,
                    PrimerNombre: null,
                    SegundoNombre: null,
                    PrimerApellido: null,
                    SegundoApellido: null,
                    Cedula: null,
                    NumeroTelefonico: null,
                    CorreoElectronico: null,
                    IglesiaAdministra: null,
                    Puesto: null,
                }
            }
    
        default:
            return state;
    }

}