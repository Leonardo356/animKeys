import React from "react";

import AnimBtn from "./AnimationBtn";

const NavAnim = () => {
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
              <AnimBtn size='w-full h-full' animName='Scale' />
              <AnimBtn animName='Rotate' />
              <AnimBtn animName='Flip' />
              <AnimBtn animName='Swing' />
              <AnimBtn animName='Slide' />
              <AnimBtn animName='Shadow' />
           </div>
        </>
    );
};

export default NavAnim;