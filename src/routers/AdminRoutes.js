import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { AdminDisenio } from '../components/admin-dash/AdminDisenio'
import { AdminHistorial } from '../components/admin-dash/AdminHistorial'
import { AdminHorario } from '../components/admin-dash/AdminHorario'
import { AdminMisa } from '../components/admin-dash/AdminMisa'
import { AdminPublicaciones } from '../components/admin-dash/AdminPublicaciones'
import { AdminLeftSideNavbar } from '../components/ui/AdminLeftSideNavbar'

export const AdminRoutes = () => {
    return (
        <>
            <AdminLeftSideNavbar />

            <div>

            <Switch>
                    <Route exact path="/admin/misa" component= { AdminMisa } />
                    <Route exact path="/admin/horario" component= { AdminHorario } />
                    <Route exact path="/admin/publicaciones" component= { AdminPublicaciones } />
                    <Route exact path="/admin/diseño" component= { AdminDisenio } />
                    <Route exact path="/admin/historial" component= { AdminHistorial } />


                    <Redirect to="/admin/misa" />
            </Switch>

            </div>
        </>
    )
}
