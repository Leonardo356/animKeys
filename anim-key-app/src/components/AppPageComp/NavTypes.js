import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavTypes = () => {

  const location = useLocation();

  useEffect(() => {
    const btnOnFocus = (keyWord, className) => {
      let pathName = window.location.pathname;
      let target = document.querySelector(`.${className}`);
      if(pathName.search(keyWord) !== -1) {
        target.style.background = '#344966';
        target.style.boxShadow = 'rgba(0, 0, 0, 0.24) 0px 3px 8px';
      }
      else {
        target.style.background = '';
        target.style.boxShadow = '';
      }
    };

    btnOnFocus('basic', 'basicBtnOnNav');
    btnOnFocus('text', 'textBtnOnNav');
    btnOnFocus('attention', 'attentionBtnOnNav');
  }, [location]);

  let navigate = useNavigate();

  const navigateToBasic = () => {navigate('/appPage/basic/basicScale/1.scale-up-center')};
  const navigateToText = () => {navigate('/appPage/text/textScale/1.scale-in-center')};
  const navigateToAttention = () => {navigate('/appPage/attention/Vibrate/1.vibrate-a')};

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
              <div onClick={navigateToBasic} ><NavBtn class='basicBtnOnNav' name='Basic' /></div>
              <div onClick={navigateToText} ><NavBtn class='textBtnOnNav' name='Text' /></div>
              <div onClick={navigateToAttention} ><NavBtn class='attentionBtnOnNav' name='Attention' /></div>
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