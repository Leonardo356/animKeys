import React, { useEffect } from "react";

import AnimBtn from "./AnimationBtn";

import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { changeBtn } from "../../functions/functions";
// eslint-disable-next-line
import { changeAnim } from "../../functions/functions";

const NavAnimAttention = () => {

    const location = useLocation();

    useEffect(() => {
        changeBtn('/appPage/attention', "atParentVibrate");
        changeBtn('/appPage/attention/Shake', "atParentShake");
        changeBtn('/appPage/attention/Bounce', "atParentBounce");
        changeBtn('/appPage/attention/Pulsate', "atParentPulsate");
        changeBtn('/appPage/attention/Blink', "atParentBlink");

        changeAnim('/appPage/attention', 'vibrate-1');
        changeAnim('/appPage/attention/Shake', 'shake-top');
        changeAnim('/appPage/attention/Bounce', 'bounce-top');
        changeAnim('/appPage/attention/Pulsate', 'pulsate-1');
        changeAnim('/appPage/attention/Blink', 'blink-1');
    }, [location]);

    let navigate = useNavigate();

    const goToAtVibrate = () => navigate('/appPage/attention');
    const goToAtShake = () => navigate('/appPage/attention/Shake');
    const goToAtBounce = () => navigate('/appPage/attention/Bounce');
    const goToAtPulsate = () => navigate('/appPage/attention/Pulsate');
    const goToAtBlink = () => navigate('/appPage/attention/Blink');

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