import React from "react";

import AnimBtn from "./AnimationBtn";

const NavAnimTxt = () => {
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
              <AnimBtn animName='Tracking' />
              <AnimBtn animName='Blur' />
              <AnimBtn animName='Shadow' />
              <AnimBtn animName='Pop-up' />
              <AnimBtn animName='Jello' />
           </div>
        </>
    );
};

export default NavAnimTxt;