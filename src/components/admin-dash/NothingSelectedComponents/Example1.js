import React from "react";

export const Example1 = ({ valor }) => {
  return (
    <div>
    <div>
    {console.log("state: ", valor)}
      {valor === 1 && "Horizontal"  
      //   && ( 
      //   <>
      //   <label htmlFor="alineacion" className="mt-3" >Horizontal</label>   
      //     <div className="container bg-secondary rounded-sm" id="alineacion">
      //         <div className="text-center">
      //           <label htmlFor="nave" className="mt-3 text-light" >Esta es una nave</label>
      //         </div>  
      //       <div className="row m-1" id="nave">
      //         <div className="col-12 align-self-center my-2 bg-primary text-center rounded-sm ">Banca</div>
      //         <div className="col-12 align-self-center my-2 bg-primary text-center rounded-sm ">Banca</div>
      //         <div className="col-12 align-self-center my-2 bg-primary text-center rounded-sm ">Banca</div>
      //         <div className="col-12 align-self-center my-2 mb-4 bg-primary text-center rounded-sm ">...</div>
      //       </div>
      //     </div>
      //   </>
      // )
    }

    </div>
    </div>
  );
};
