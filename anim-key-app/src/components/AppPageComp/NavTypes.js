import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavTypes = () => {

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

    //select nav btn on window path change
    changeBtn('/appPage/basic/basicScale/scale-up-center', 'basicBtnOnNav');
    changeBtn('/appPage/basicRotate', 'basicBtnOnNav');
    changeBtn('/appPage/basicFlip', 'basicBtnOnNav');
    changeBtn('/appPage/basicSwing', 'basicBtnOnNav');
    changeBtn('/appPage/basicSlide', 'basicBtnOnNav');
    changeBtn('/appPage/basicShadow', 'basicBtnOnNav');

    changeBtn('/appPage/text/textScale/scale-in-center', 'textBtnOnNav');
    changeBtn('/appPage/text/textTracking', 'textBtnOnNav');
    changeBtn('/appPage/text/textBlur', 'textBtnOnNav');
    changeBtn('/appPage/text/textShadow', 'textBtnOnNav');
    changeBtn('/appPage/text/textPop-up', 'textBtnOnNav');
    changeBtn('/appPage/text/textJello', 'textBtnOnNav');

    changeBtn('/appPage/attention/Vibrate/vibrate-1', 'attentionBtnOnNav');
    changeBtn('/appPage/attention/Shake', 'attentionBtnOnNav');
    changeBtn('/appPage/attention/Jello', 'attentionBtnOnNav');
    changeBtn('/appPage/attention/Wobble', 'attentionBtnOnNav');
    changeBtn('/appPage/attention/Bounce', 'attentionBtnOnNav');
    changeBtn('/appPage/attention/Pulsate', 'attentionBtnOnNav');
    changeBtn('/appPage/attention/Blink', 'attentionBtnOnNav');

    changeBtn('/appPage/shadows', 'shadowsBtnOnNav');
    changeBtn('/appPage/shadows/inset', 'shadowsBtnOnNav');
    changeBtn('/appPage/shadows/3d', 'shadowsBtnOnNav');

  }, [location]);

  let navigate = useNavigate();

  const navigateToBasic = () => {navigate('/appPage/basic/basicScale/scale-up-center')};
  const navigateToText = () => {navigate('/appPage/text/textScale/scale-in-center')};
  const navigateToAttention = () => {navigate('/appPage/attention/Vibrate/vibrate-1')};
  const navigateToShadows = () => {navigate('/appPage/shadows')};

    return(
        <>
          <div className="
            w-screen
            h-full
            flex
            justify-start
            items-center
            text-[1.2rem]
            font-bold
            px-[1rem]
            text-white
            bg-txtColor2
          ">
              <div onClick={navigateToBasic} ><NavBtn class='basicBtnOnNav' name='Basic' focusClass='bg-[#344966] shadow-sh1' /></div>
              <div onClick={navigateToText} ><NavBtn class='textBtnOnNav' name='Text' /></div>
              <div onClick={navigateToAttention} ><NavBtn class='attentionBtnOnNav' name='Attention' /></div>
              <div onClick={navigateToShadows} ><NavBtn class='shadowsBtnOnNav' name='Shadows' /></div>
          </div>
        </>
    );
};

const NavBtn = props => {
    return(
      <>
         <div
         className={` ${props.focusClass} ${props.class} cursor-pointer navTopicsBtns rounded-[1rem] w-max h-max py-[.5rem] px-[1rem]`}>
          {props.name}
          </div>
      </>
    );
};

export default NavTypes;