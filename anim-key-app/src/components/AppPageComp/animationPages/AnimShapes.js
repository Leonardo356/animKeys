import React from "react";
import './animation.css'

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
        scale-up-center
        bg-txtColor2
        rounded-[1rem]
        squareShape
        text-white
        flex
        justify-center
        items-center
        font-bold
        text-[10vmax]
        ">
          <h1>A</h1>
    </div>
    </>
   );
};

export default AnimTab;