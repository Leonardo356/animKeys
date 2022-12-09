import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import AnimBtn from "./AnimationBtn";

import { changeAnim } from "../../functions/functions";
import { changeBtn } from "../../functions/functions";

const NavAnim = () => {

    const location = useLocation();

    useEffect(() => {

      changeAnim('/appPage/', 'scale-up-center');
      changeAnim('/appPage/basicRotate', 'rotate-center');
      changeAnim('/appPage/basicFlip', 'flip-hor-bottom');
      changeAnim('/appPage/basicSwing', 'swing-top-fwd');
      changeAnim('/appPage/basicSlide', 'slide-top');
      changeAnim('/appPage/basicShadow', 'shadow-top');
  
      changeBtn('/appPage/', 'scaleParentBasic');
      changeBtn('/appPage/basicRotate', 'rotateParentBasic');
      changeBtn('/appPage/basicFlip', 'flipParentBasic');
      changeBtn('/appPage/basicSwing', 'swingParentBasic');
      changeBtn('/appPage/basicSlide', 'slideParentBasic');
      changeBtn('/appPage/basicShadow', 'shadowParentBasic');
    }, [location]);
  
    let navigate = useNavigate();
  
    const navigateToBasicScale = () => {navigate('/appPage/')};
    const navigateToBasicRotate = () => {navigate('/appPage/basicRotate')};
    const navigateToBasicFlip = () => {navigate('/appPage/basicFlip')};
    const navigateToBasicSwing = () => {navigate('/appPage/basicSwing')};
    const navigateToBasicSlide = () => {navigate('/appPage/basicSlide')};
    const navigateToBasicShadow = () => {navigate('/appPage/basicShadow')};

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