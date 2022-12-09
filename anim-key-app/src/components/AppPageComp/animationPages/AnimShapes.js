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
           animShapesContainer
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
        rounded-[1rem]
        squareShape
        text-txtColor2
        font-bold
        text-[10vmax]
        flex
        justify-center
        items-center
        bg-white
        ">
          <h1>A</h1>
    </div>
    </>
   );
};

export default AnimTab;