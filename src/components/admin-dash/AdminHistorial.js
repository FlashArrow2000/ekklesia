import React from "react";
import { NSAdminHistorial } from "./NothingSelectedComponents/NSAdminHistorial";
import { SAdminHistorial } from "./SelectedComponents/SAdminHistorial";

export const AdminHistorial = () => {
  return (
    <div className="all___container">
      <main>
        { 
    // ( condition )
    // ? <SAdminHistorial />
    // : <NSAdminHistorial />
} 

        <NSAdminHistorial />
      </main>
    </div>
  );
};
