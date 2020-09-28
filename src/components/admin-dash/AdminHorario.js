import React from "react";
import { NSAdminHorario } from "./NothingSelectedComponents/NSAdminHorario";
import { SAdminHorario } from "./SelectedComponents/SAdminHorario";

export const AdminHorario = () => {
  return (
    <div className="all___container">
      <main>

        {/* { 
            ( condition )
            ? <SAdminHorario />
            : <NSAdminHorario />
        }  */}

        <NSAdminHorario />
      </main>
    </div>
  );
};
