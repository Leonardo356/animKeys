import React, { useEffect } from "react";

import AnimBtn from "./AnimationBtn";
import { changeBtn } from "../../functions/functions";

import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavAnimAttention = () => {

    const location = useLocation();

    useEffect(() => {
        changeBtn('Vibrate', "atParentVibrate");
        changeBtn('Shake', "atParentShake");
        changeBtn('Bounce', "atParentBounce");
        changeBtn('Pulsate', "atParentPulsate");
        changeBtn('Blink', "atParentBlink");
    }, [location]);

    let navigate = useNavigate();

    const goToAtVibrate = () => navigate('/appPage/attention/Vibrate/1.vibrate-a');
    const goToAtShake = () => navigate('/appPage/attention/Shake/1.shake-top');
    const goToAtBounce = () => navigate('/appPage/attention/Bounce/1.bounce-top');
    const goToAtPulsate = () => navigate('/appPage/attention/Pulsate/1.pulsate-a');
    const goToAtBlink = () => navigate('/appPage/attention/Blink/1.blink-a');

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
              <div className="atParentVibrate" onClick={goToAtVibrate} ><AnimBtn size='w-full h-full' animName='Vibrate' /></div>
              <div className="atParentShake" onClick={goToAtShake} ><AnimBtn animName='Shake' /></div>
              <div className="atParentBounce" onClick={goToAtBounce} ><AnimBtn animName='Bounce' /></div>
              <div className="atParentPulsate" onClick={goToAtPulsate} ><AnimBtn animName='Pulsate' /></div>
              <div className="atParentBlink" onClick={goToAtBlink} ><AnimBtn animName='Blink' /></div>
           </div>
        </>
    );
};

export default NavAnimAttention;