// import Swal from "sweetalert2";
import { db } from "../firebase/firebase-config";
import { types } from "../types/types";

export const addAdminToState = (PrimerNombre, SegundoNombre, PrimerApellido, SegundoApellido, Cedula, NumeroTelefonico, CorreoElectronico, IglesiaAdministra, Puesto) => ({

    type: types.AdminAddToState,
    payload: {
        PrimerNombre,
        SegundoNombre,
        PrimerApellido,
        SegundoApellido,
        Cedula,
        NumeroTelefonico,
        CorreoElectronico,
        IglesiaAdministra,
        Puesto
    }

})


export const startAddAdmin = (  ) => {

    return async (dispatch, getState) => {

        const { uid } = getState().admin.authAdmin; //Esta funcion hace que el Thunk agarre el state. Es como usar un selector, pero mas facil. Asi no hago tantos procedimientos 
        const { PrimerNombre, SegundoNombre, PrimerApellido, SegundoApellido, Cedula, NumeroTelefonico, CorreoElectronico, IglesiaAdministra, Puesto } = getState().admin.adminToState; 
        
        const newAdmin = {
            uid,
            PrimerNombre,
            SegundoNombre,
            PrimerApellido,
            SegundoApellido,
            Cedula,
            NumeroTelefonico,
            CorreoElectronico,
            IglesiaAdministra,
            Puesto
       }

        /*const doc = */ await db.collection(`administradores`).add( newAdmin );

        // console.log(doc);

        // dispatch( activeNote( docRef.id, NewNote ) );
        dispatch( addNewNote( /*doc.id,*/ newAdmin ) );

    }

}

export const addNewNote = ( /*id,*/ admin ) =>( {
    type: types.AdminAddNew,
    payload: {
        ...admin
    }
})

