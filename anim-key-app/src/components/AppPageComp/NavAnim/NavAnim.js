import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import AnimBtn from "./AnimationBtn";
import { changeBtn } from "../../functions/functions";

const NavAnim = () => {

    const location = useLocation();

    useEffect(() => {
        changeBtn('basicScale', "scaleParentBasic");
        changeBtn('basicRotate', "rotateParentBasic");
        changeBtn('basicFlip', "flipParentBasic");
        changeBtn('basicSwing', "swingParentBasic");
        changeBtn('basicSlide', "slideParentBasic");
        changeBtn('basicShadow', "shadowParentBasic");
    }, [location]);
  
    let navigate = useNavigate();
  
    const navigateToBasicScale = () => {navigate('/appPage/basic/basicScale/1.scale-up-center')};
    const navigateToBasicRotate = () => {navigate('/appPage/basic/basicRotate/1.rotate-center')};
    const navigateToBasicFlip = () => {navigate('/appPage/basic/basicFlip/1.flip-hor-bottom')};
    const navigateToBasicSwing = () => {navigate('/appPage/basic/basicSwing/1.swing-top-fwd')};
    const navigateToBasicSlide = () => {navigate('/appPage/basic/basicSlide/1.slide-top')};
    const navigateToBasicShadow = () => {navigate('/appPage/basic/basicShadow/1.shadow-top')};

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
              <div className="scaleParentBasic" onClick={navigateToBasicScale} ><AnimBtn size='w-full h-full' animName='Scale' /></div>
              <div className="rotateParentBasic" onClick={navigateToBasicRotate}><AnimBtn animName='Rotate' /></div>
              <div className="flipParentBasic" onClick={navigateToBasicFlip}><AnimBtn animName='Flip' /></div>
              <div className="swingParentBasic" onClick={navigateToBasicSwing}><AnimBtn animName='Swing' /></div>
              <div className="slideParentBasic" onClick={navigateToBasicSlide}><AnimBtn animName='Slide' /></div>
              <div className="shadowParentBasic" onClick={navigateToBasicShadow}><AnimBtn animName='Shadow' /></div>
           </div>
        </>
    );
};

export default NavAnim;