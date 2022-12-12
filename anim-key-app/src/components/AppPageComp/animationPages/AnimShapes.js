import React from "react";
import './animation.css'

import {Routes, Route} from 'react-router-dom';

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
            <Routes >
                <Route path="/*" element={<Square />} />
                <Route path="/text/*" element={<Text />} />
            </Routes>
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
    </div>
    </>
   );
};

const Text = () => {
    return(
        <>
           <div className="w-max h-max textAnimation flex font-bold text-white text-[5vmax]">
               <div>A</div>
               <div>N</div>
               <div>I</div>
               <div>M</div>
               <div>A</div>
               <div>T</div>
               <div>E</div>
           </div>
        </>
    );
};

export default AnimTab;