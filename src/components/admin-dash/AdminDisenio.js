import React from "react";
import { NSAdminDisenio } from "./NothingSelectedComponents/NSAdminDisenio";
import { SAdminDisenio } from "./SelectedComponents/SAdminDisenio";

export const AdminDisenio = () => {
  return (
    <div className="all___container">
      <main>
        {/* {condition ? <SAdminDisenio /> : <NSAdminDisenio />} */}

        <NSAdminDisenio />
      </main>
    </div>
  );
};
