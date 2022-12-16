import React, { useEffect } from "react";

import AnimBtn from "./AnimationBtn";

import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { changeBtn } from "../../functions/functions";

const NavAnimTxt = () => {

    const location = useLocation();
        
    useEffect(() => {
        changeBtn('textScale', "scaleParentText");
        changeBtn('textTracking', "trackingParentText");
        changeBtn('textBlur', "blurParentText");
        changeBtn('textShadow', "shadowParentText");
        changeBtn('textPop-up', "popUpParentText");
        changeBtn('textJello', "jelloParentText");
    }, [location]);

    let navigate = useNavigate();

    const goToTextScale = () => navigate('/appPage/text/textScale/1.scale-in-center');
    const goToTextTracking = () => navigate('/appPage/text/textTracking/1.tracking-in-expand');
    const goToTextBlur = () => navigate('/appPage/text/textBlur/1.focus-in');
    const goToTextShadow = () => navigate('/appPage/text/textShadow/1.text-shd-center');
    const goToTextPopUp = () => navigate('/appPage/text/textPop-up/1.text-pop-up-top');
    const goToTextJello = () => navigate('/appPage/text/textJello/1.text-jello-x');

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
           overflow-scroll
           "
           >
              <div onClick={goToTextScale} className="scaleParentText"><AnimBtn animName='Scale' /></div>
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