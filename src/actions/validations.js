import { types } from "../types/types";



export const setError = (err) => ({

    type: types.validationsSetErrorAdminRegister,
    payload: err
});

export const removeError = () => ({ type: types.validationsRemoveErrorAdminRegister });

export const startLoading = () => ({ type: types.validationStartAdminLoading })

export const endLoading = () => ({ type: types.validationEndAdminLoading })
