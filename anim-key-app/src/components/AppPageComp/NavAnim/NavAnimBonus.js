import React from "react";

import AnimBtn from "./AnimationBtn";

const NavAnimBonus = () => {
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
              <AnimBtn size='w-full h-full' animName='3D Hover' />
              <AnimBtn animName='Translate' />
              <AnimBtn animName='Buttons' />
           </div>
        </>
    );
};

export default NavAnimBonus;