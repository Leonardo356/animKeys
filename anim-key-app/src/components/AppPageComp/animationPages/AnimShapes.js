import React from "react";

const AnimTab = () => {
    return(
        <>
           <div
           className="
           w-full
           h-full
           flex
           justify-center
           items-center
           " 
           >
            <Square />
           </div>
        </>
    );
};

const Square = () => {
   return(
    <>
        <div className="
        w-[10vmax]
        h-[10vmax]
        bg-txtColor2
        rounded-[1rem]
        ">
    </div>
    </>
   );
};

export default AnimTab;