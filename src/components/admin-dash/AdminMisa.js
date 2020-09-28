import React from 'react'
import { NSAdminMisa } from './NothingSelectedComponents/NSAdminMisa'
import { SAdminMisa } from './SelectedComponents/SAdminMisa'

export const AdminMisa = () => {
    return (
        <div className="all___container">
           <main>

               {/* { 
                ( condition )
                 ? <SAdminMisa />
                 : <NSAdminMisa />
               }  */}

               <NSAdminMisa />

           </main>
        </div>
    )
}
    