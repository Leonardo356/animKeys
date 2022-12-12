import React, { useEffect } from "react";

import AnimBtn from "./AnimationBtn";

import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { changeBtn } from "../../functions/functions";
import { changeAnim } from "../../functions/functions";

const NavAnimTxt = () => {

    const location = useLocation();

    useEffect(() => {
        changeBtn('/appPage/text', "scaleParentText");
        changeBtn('/appPage/text/textTracking', "trackingParentText");
        changeBtn('/appPage/text/textBlur', "blurParentText");
        changeBtn('/appPage/text/textShadow', "shadowParentText");
        changeBtn('/appPage/text/textPop-up', "popUpParentText");
        changeBtn('/appPage/text/textJello', "jelloParentText");

        changeAnim('/appPage/text', 'scale-in-center');
        changeAnim('/appPage/text/textTracking', 'tracking-in-expand');
        changeAnim('/appPage/text/textBlur', 'focus-in');
        changeAnim('/appPage/text/textShadow', 'text-shd-center');
        changeAnim('/appPage/text/textPop-up', 'text-pop-up-top');
        changeAnim('/appPage/text/textJello', 'text-jello-x');
    }, [location]);

    let navigate = useNavigate();

    const goToTextScale = () => navigate('/appPage/text');
    const goToTextTracking = () => navigate('/appPage/text/textTracking');
    const goToTextBlur = () => navigate('/appPage/text/textBlur');
    const goToTextShadow = () => navigate('/appPage/text/textShadow');
    const goToTextPopUp = () => navigate('/appPage/text/textPop-up');
    const goToTextJello = () => navigate('/appPage/text/textJello');

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
              <div onClick={goToTextScale} className="scaleParentText"><AnimBtn size='w-full h-full' animName='Scale' /></div>
              <div onClick={goToTextTracking} className="trackingParentText"><AnimBtn animName='Tracking' /></div>
              <div onClick={goToTextBlur} className="blurParentText"><AnimBtn animName='Blur' /></div>
              <div onClick={goToTextShadow} className="shadowParentText"><AnimBtn animName='Shadow' /></div>
              <div onClick={goToTextPopUp} className="popUpParentText"><AnimBtn animName='Pop-up' /></div>
              <div onClick={goToTextJello} className="jelloParentText"><AnimBtn animName='Jello' /></div>
           </div>
        </>
    );
};

export default NavAnimTxt;