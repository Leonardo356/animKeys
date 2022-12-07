import React from "react";

import AnimBtn from "./AnimationBtn";

const NavAnimEntrances = () => {
    return(
        <>
           <div
           className="
           w-full
           h-full
           flex
           items-center
           justify-start
           px-[1rem]
           gap-[1rem]
           "
           >
              <AnimBtn size='w-full h-full' animName='Scale-in' />
              <AnimBtn animName='Rotate-in' />
              <AnimBtn animName='Swirl-in' />
              <AnimBtn animName='Flip-in' />
              <AnimBtn animName='Slide-in' />
              <AnimBtn animName='Slit-in' />
              <AnimBtn animName='Bouce-in' />
              <AnimBtn animName='Roll-in' />
              <AnimBtn animName='Tilt-in' />
              <AnimBtn animName='Swing-in' />
              <AnimBtn animName='Fade-in' />
           </div>
        </>
    );
};

export default NavAnimEntrances;