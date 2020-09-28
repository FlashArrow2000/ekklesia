import React from "react";
import { NSAdminPublicaciones } from "./NothingSelectedComponents/NSAdminPublicaciones";
import { SAdminPublicaciones } from "./SelectedComponents/SAdminPublicaciones";

export const AdminPublicaciones = () => {
  return (
    <div className="all___container">
      <main>
        {/* { 
    ( condition )
    ? <SAdminPublicaciones />
    : <NSAdminPublicaciones />
}  */}

        <NSAdminPublicaciones />
      </main>
    </div>
  );
};
