import React, { useEffect } from "react";

import AnimBtn from "./AnimationBtn";

import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { changeBtn } from "../../functions/functions";
import { changeAnim } from "../../functions/functions";

const NavAnimTxt = () => {

    const location = useLocation();

    useEffect(() => {
        changeBtn('/appPage/text/textScale/scale-in-center', "scaleParentText");
        changeBtn('/appPage/text/textTracking/tracking-in-expand', "trackingParentText");
        changeBtn('/appPage/text/textBlur/focus-in', "blurParentText");
        changeBtn('/appPage/text/textShadow/text-shd-center', "shadowParentText");
        changeBtn('/appPage/text/textPop-up/text-pop-up-top', "popUpParentText");
        changeBtn('/appPage/text/textJello/text-jello-x', "jelloParentText");

        changeAnim('/appPage/text/textScale/scale-in-center', 'scale-in-center');
        changeAnim('/appPage/text/textTracking/tracking-in-expand', 'tracking-in-expand');
        changeAnim('/appPage/text/textBlur/focus-in', 'focus-in');
        changeAnim('/appPage/text/textShadow/text-shd-center', 'text-shd-center');
        changeAnim('/appPage/text/textPop-up/text-pop-up-top', 'text-pop-up-top');
        changeAnim('/appPage/text/textJello/text-jello-x', 'text-jello-x');
    }, [location]);

    let navigate = useNavigate();

    const goToTextScale = () => navigate('/appPage/text/textScale/scale-in-center');
    const goToTextTracking = () => navigate('/appPage/text/textTracking/tracking-in-expand');
    const goToTextBlur = () => navigate('/appPage/text/textBlur/focus-in');
    const goToTextShadow = () => navigate('/appPage/text/textShadow/text-shd-center');
    const goToTextPopUp = () => navigate('/appPage/text/textPop-up/text-pop-up-top');
    const goToTextJello = () => navigate('/appPage/text/textJello/text-jello-x');

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