import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import AnimBtn from "./AnimationBtn";

const NavAnim = () => {

    const location = useLocation();

    useEffect(() => {
  
      const changeBtn = (path, targetClass) => {
        let pathName = window.location.pathname;
        let target = document.querySelector(`.${targetClass}`);
  
        if(pathName === path) {
          let navTopicsBtns = document.querySelectorAll('.navTopicsBtns');
  
          navTopicsBtns.forEach(btn => {
            if(btn === target ) btn.classList.add('bg-[#344966]', 'shadow-sh1');
            else btn.classList.remove('bg-[#344966]', 'shadow-sh1');
          });
        };
      };
  
      changeBtn('/appPage/', 'basicBtnOnNav');
      changeBtn('/appPage/entrances', 'entrancesBtnOnNav');
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
              <div onClick={navigateToBasicScale} ><AnimBtn size='w-full h-full' animName='Scale' /></div>
              <div onClick={navigateToBasicRotate}><AnimBtn animName='Rotate' /></div>
              <div onClick={navigateToBasicFlip}><AnimBtn animName='Flip' /></div>
              <div onClick={navigateToBasicSwing}><AnimBtn animName='Swing' /></div>
              <div onClick={navigateToBasicSlide}><AnimBtn animName='Slide' /></div>
              <div onClick={navigateToBasicShadow}><AnimBtn animName='Shadow' /></div>
           </div>
        </>
    );
};

export default NavAnim;