import React from "react";

import AnimBtn from "./AnimationBtn";

const NavAnimShadows = () => {
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
              <AnimBtn size='w-full h-full' animName='Basic' />
              <AnimBtn animName='Inset' />
              <AnimBtn animName='3D' />
           </div>
        </>
    );
};

export default NavAnimShadows;