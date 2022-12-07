import React from "react";

import AnimBtn from "./AnimationBtn";

const NavAnimAttention = () => {
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
              <AnimBtn size='w-full h-full' animName='Vibrate' />
              <AnimBtn animName='Shake' />
              <AnimBtn animName='Jello' />
              <AnimBtn animName='Wobble' />
              <AnimBtn animName='Bounce' />
              <AnimBtn animName='Pulsate' />
              <AnimBtn animName='Blink' />
           </div>
        </>
    );
};

export default NavAnimAttention;