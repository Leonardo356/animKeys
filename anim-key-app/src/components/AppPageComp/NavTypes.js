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

    changeBtn('/appPage/', 'basicBtnOnNav');
    changeBtn('/appPage/entrances', 'entrancesBtnOnNav');
    changeBtn('/appPage/exits', 'exitsBtnOnNav');
    changeBtn('/appPage/text', 'textBtnOnNav');
    changeBtn('/appPage/attention', 'attentionBtnOnNav');
    changeBtn('/appPage/shadows', 'shadowsBtnOnNav');
    changeBtn('/appPage/bonus', 'bonusBtnOnNav');
  }, [location]);

  let navigate = useNavigate();

  const navigateToBasic = () => {navigate('/appPage/')};
  const navigateToEntrances = () => {navigate('/appPage/entrances')};
  const navigateToExits = () => {navigate('/appPage/exits')};
  const navigateToText = () => {navigate('/appPage/text')};
  const navigateToAttention = () => {navigate('/appPage/attention')};
  const navigateToShadows = () => {navigate('/appPage/shadows')};
  const navigateToBonus = () => {navigate('/appPage/bonus')};

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
              <div onClick={navigateToEntrances} ><NavBtn class='entrancesBtnOnNav' name='Entrances' /></div>
              <div onClick={navigateToExits} ><NavBtn class='exitsBtnOnNav' name='Exits' /></div>
              <div onClick={navigateToText} ><NavBtn class='textBtnOnNav' name='Text' /></div>
              <div onClick={navigateToAttention} ><NavBtn class='attentionBtnOnNav' name='Attention' /></div>
              <div onClick={navigateToShadows} ><NavBtn class='shadowsBtnOnNav' name='Shadows' /></div>
              <div onClick={navigateToBonus} ><NavBtn class='bonusBtnOnNav' name='Bonus' /></div>
          </div>
        </>
    );
};

const NavBtn = props => {

  const changeColor = e => {
    let navTopicsBtns = document.querySelectorAll('.navTopicsBtns');

    let el = e.currentTarget;

    navTopicsBtns.forEach(btn => {
      if(btn === el ) btn.classList.add('bg-[#344966]', 'shadow-sh1');
      else btn.classList.remove('bg-[#344966]', 'shadow-sh1');
    });
    
  };
    return(
      <>
         <div onClick={changeColor} 
         className={` ${props.focusClass} ${props.class} cursor-pointer navTopicsBtns duration-[300ms] rounded-[1rem] w-max h-max py-[.5rem] px-[1rem]`}>
          {props.name}
          </div>
      </>
    );
};

export default NavTypes;