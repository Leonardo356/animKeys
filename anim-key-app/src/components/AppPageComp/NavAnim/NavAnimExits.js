import React from "react";

import AnimBtn from "./AnimationBtn";

const NavAnimExits = () => {
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
              <AnimBtn size='w-full h-full' animName='Scale-out' />
              <AnimBtn animName='Rotate-out' />
              <AnimBtn animName='Swirl-out' />
              <AnimBtn animName='Flip-out' />
              <AnimBtn animName='Slide-out' />
              <AnimBtn animName='Slit-out' />
              <AnimBtn animName='Bouce-out' />
              <AnimBtn animName='Roll-out' />
              <AnimBtn animName='Tilt-out' />
              <AnimBtn animName='Swing-out' />
              <AnimBtn animName='Fade-out' />
           </div>
        </>
    );
};

export default NavAnimExits;