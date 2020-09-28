import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import PropTypes from 'prop-types';

///El operador rest obtiene el resto de componentes o argumentos
export const PrivateAdminRoute = ({
    isLoggedIn,
    component: Component,
    ...rest
}) => {


    return (
        <Route { ...rest }
            component={ (props) => (

                ( isLoggedIn ) 
                ? (<Component { ...props } />)
                : (<Redirect to="/auth/admin" />)

            )}
        />
    )
}

PrivateAdminRoute.propTypes ={
    isLoggedIn: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}