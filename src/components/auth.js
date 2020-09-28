import { types } from '../types/types'
import { firebase } from '../firebase/firebase-config'
import Swal from 'sweetalert2';
import { endLoading, startLoading } from './validations';


export const startLoginEmailPassword = (correoElectronico, password) => {

    return (dispatch) => {

        dispatch( startLoading() );

        firebase.auth().signInWithEmailAndPassword( correoElectronico, password )
        .then(  ({ user }) => {

           dispatch( login( user.uid, user.displayName ))
           dispatch( endLoading() );
        } )
        .catch( e => {
            if( e.code === "auth/wrong-password" ){
                e.message = "La contraseña es inválida, o el usuario no tiene una contraseña."
            }
            if( e.code === "auth/invalid-email" ){
                e.message = "No has puesto el email, o este está mal escrito."
            }
            if( e.code === "auth/user-not-found" ){
                e.message = "No hay ningún registro que corresponda con este identificador. Posiblemente, el usuario se ha eliminado."
            }
            Swal.fire('Error', e.message, 'error');
            dispatch( endLoading() );
        } )

    }

}



export const startRegisterWithEmailPasswordName = ( CorreoElectronico, Password, PrimerNombre ) => { //Esta func hace el registro de un usuario por medio de su email y password

    return ( dispatch ) => {

         firebase.auth().createUserWithEmailAndPassword( CorreoElectronico, Password )
             .then(  async ({ user }) => {

                await user.updateProfile({ displayName: PrimerNombre }); //Esto es para poder usar el displayName del user

                dispatch(
                    login( user.uid, user.displayName )
                )
             } )
             .catch( e => {
                 console.log(e);
                 Swal.fire('Error', e.message, 'error');
             } )

    }

}

export const login = ( uid, displayName ) => ({
    type: types.AdminLogin,
    payload:{
        uid,
        displayName
    }
});

export const startLogout = () => {
    return async ( dispatch ) => {

        await firebase.auth().signOut();

        dispatch(logout());

    }
}

const logout = () => ({type: types.AdminLogout})