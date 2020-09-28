import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';

export const PublicRoute = ({
    isLoggedIn,
    component: Component,
    ...rest
}) => {
    return ( 
        <Route { ...rest }
            component={ (props) => (

                ( isLoggedIn ) 
                ? (<Redirect to="/admin/misa" />)
                : (<Component { ...props } />)

            )}
        />
    )
}

PublicRoute.propTypes ={
    isLoggedIn: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}