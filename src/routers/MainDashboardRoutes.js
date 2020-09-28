import React from 'react'
import { MainDashboardNavbar } from '../components/ui/MainDashboardNavbar'
import { Switch, Route, Redirect } from 'react-router-dom'
import { MainDashboard } from '../components/main-dash/MainDashboard'
import { InfoRegistrarIglesias } from '../components/main-dash/InfoRegistrarIglesias'
import { AdminAuthLogin } from '../components/auth/authAdmin/AdminAuthLogin'
import { ClientAuthLogin } from '../components/auth/authClient/ClientAuthLogin'
import { AdminAuthRegister } from '../components/auth/authAdmin/AdminAuthRegister'
import { ClientAuthRegister } from '../components/auth/authClient/ClientAuthRegister'

export const MainDashboardRoutes = () => {
    return (
        <>
            <MainDashboardNavbar />

            <div>

            <Switch>
                    <Route exact path="/" component= { MainDashboard } />
                    <Route exact path="/info" component= { InfoRegistrarIglesias } />
                    <Route exact path="/auth/admin" component= { AdminAuthLogin } />
                    <Route exact path="/auth/admin/register" component= { AdminAuthRegister } />
                    <Route exact path="/auth/client" component= { ClientAuthLogin } />
                    <Route exact path="/auth/client/register" component= { ClientAuthRegister} />


                    <Redirect to="/" />
            </Switch>

            </div>
        </>
    )
}
