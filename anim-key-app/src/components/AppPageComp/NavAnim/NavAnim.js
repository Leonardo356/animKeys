import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import AnimBtn from "./AnimationBtn";

import { changeAnim } from "../../functions/functions";
import { changeBtn } from "../../functions/functions";

const NavAnim = () => {

    const location = useLocation();

    useEffect(() => {

      changeAnim('/appPage/basic/basicScale/scale-up-center', 'scale-up-center');
      changeAnim('/appPage/basic/basicRotate/rotate-center', 'rotate-center');
      changeAnim('/appPage/basic/basicFlip/flip-hor-bottom', 'flip-hor-bottom');
      changeAnim('/appPage/basic/basicSwing/swing-top-fwd', 'swing-top-fwd');
      changeAnim('/appPage/basic/basicSlide/slide-top', 'slide-top');
      changeAnim('/appPage/basic/basicShadow/shadow-top', 'shadow-top');
  
      changeBtn('/appPage/basic/basicScale/scale-up-center', 'scaleParentBasic');
      changeBtn('/appPage/basic/basicRotate/rotate-center', 'rotateParentBasic');
      changeBtn('/appPage/basic/basicFlip/flip-hor-bottom', 'flipParentBasic');
      changeBtn('/appPage/basic/basicSwing/swing-top-fwd', 'swingParentBasic');
      changeBtn('/appPage/basic/basicSlide/slide-top', 'slideParentBasic');
      changeBtn('/appPage/basic/basicShadow/shadow-top', 'shadowParentBasic');
    }, [location]);
  
    let navigate = useNavigate();
  
    const navigateToBasicScale = () => {navigate('/appPage/basic/basicScale/scale-up-center')};
    const navigateToBasicRotate = () => {navigate('/appPage/basic/basicRotate/rotate-center')};
    const navigateToBasicFlip = () => {navigate('/appPage/basic/basicFlip/flip-hor-bottom')};
    const navigateToBasicSwing = () => {navigate('/appPage/basic/basicSwing/swing-top-fwd')};
    const navigateToBasicSlide = () => {navigate('/appPage/basic/basicSlide/slide-top')};
    const navigateToBasicShadow = () => {navigate('/appPage/basic/basicShadow/shadow-top')};

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