import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AnimBtnOnLocationChange } from "../../../functions/functions";

const AnimTemplate = props => {

    let containerClass = props.containerClass;
    let titles = props.titles;
    let navigate = useNavigate();

    const location = useLocation();

    useEffect(() => {        
        let contAnimTemplate = document.querySelector(`.${containerClass}`)
        contAnimTemplate.innerHTML = '';

        let titlesToArr = titles
        .toString()
        .split(' ');

        for(let i = 0; i < titlesToArr.length; i ++) {
          let el = document.createElement('div');
          el.innerText = `${i+1}.${titlesToArr[i]}`;
          el.classList.add(
          'w-full',  
          'h-[3.5rem]', 
          'rounded-[.5rem]', 
          'text-center',
          'bg-white',
          'text-[1.1rem]', 
          'text-txtColor2',
          'flex',
          'justify-center',
          'items-center',
          'cursor-pointer',
          'opacity-[0.9]',
          'hover:opacity-[1]',
          'animationBtn',
          );

          contAnimTemplate.appendChild(el);
        }
        AnimBtnOnLocationChange();
    }, [containerClass, titles, navigate, location]);

    const navigateTo = e => {
      let animationBtn = document.querySelectorAll('.animationBtn');
      animationBtn.forEach(btn => {
        if(btn === e.target) {
          navigate(btn.innerText);
        };
     });
    }

    const displayAnimationList = e => {
       let animListContainer = document.querySelector('.animListContainerOnDOM');
       let displayAnimationList = document.querySelector('.displayAnimationList');
       let closeAnimationList = document.querySelector('.closeAnimationList');
       let isDisplayed = window.getComputedStyle(animListContainer).display;

       let settingsContainer = document.querySelector('.settingsContainer');
       let settingsSvg = document.querySelector('.settingsSvg');
       let toggleSettingsBtn = document.querySelector('.toggleSettingsBtn');

       if(isDisplayed !== 'flex') {
          animListContainer.style.display = 'flex';
          e.currentTarget.innerHTML = closeAnimationList.innerHTML;

          settingsContainer.style.display = '';
          toggleSettingsBtn.innerHTML = settingsSvg.innerHTML;
       }else {
          animListContainer.style.display = '';
          e.currentTarget.innerHTML = displayAnimationList.innerHTML;
       };
    };

    return(
        <>
           <div className="displayAnimationList hidden">
               <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-fan" viewBox="0 0 16 16">
                 <path d="M10 3c0 1.313-.304 2.508-.8 3.4a1.991 1.991 0 0 0-1.484-.38c-.28-.982-.91-2.04-1.838-2.969a8.368 8.368 0 0 0-.491-.454A5.976 5.976 0 0 1 8 2c.691 0 1.355.117 1.973.332.018.219.027.442.027.668Zm0 5c0 .073-.004.146-.012.217 1.018-.019 2.2-.353 3.331-1.006a8.39 8.39 0 0 0 .57-.361 6.004 6.004 0 0 0-2.53-3.823 9.02 9.02 0 0 1-.145.64c-.34 1.269-.944 2.346-1.656 3.079.277.343.442.78.442 1.254Zm-.137.728a2.007 2.007 0 0 1-1.07 1.109c.525.87 1.405 1.725 2.535 2.377.2.116.402.222.605.317a5.986 5.986 0 0 0 2.053-4.111c-.208.073-.421.14-.641.199-1.264.339-2.493.356-3.482.11ZM8 10c-.45 0-.866-.149-1.2-.4-.494.89-.796 2.082-.796 3.391 0 .23.01.457.027.678A5.99 5.99 0 0 0 8 14c.94 0 1.83-.216 2.623-.602a8.359 8.359 0 0 1-.497-.458c-.925-.926-1.555-1.981-1.836-2.96-.094.013-.191.02-.29.02ZM6 8c0-.08.005-.16.014-.239-1.02.017-2.205.351-3.34 1.007a8.366 8.366 0 0 0-.568.359 6.003 6.003 0 0 0 2.525 3.839 8.37 8.37 0 0 1 .148-.653c.34-1.267.94-2.342 1.65-3.075A1.988 1.988 0 0 1 6 8Zm-3.347-.632c1.267-.34 2.498-.355 3.488-.107.196-.494.583-.89 1.07-1.1-.524-.874-1.406-1.733-2.541-2.388a8.363 8.363 0 0 0-.594-.312 5.987 5.987 0 0 0-2.06 4.106c.206-.074.418-.14.637-.199ZM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
                 <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16Z"/>
               </svg>
           </div>
           <div className="closeAnimationList hidden">
                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                   <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
           </div>
           <div
           onClick={displayAnimationList}
           className="absolute toggleAnimListBtn top-[.5rem] flex laptop:hidden justify-center items-center text-white right-[.5rem] w-[3rem] rounded-full h-[3rem] bg-txtColor2">
               <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-fan" viewBox="0 0 16 16">
                 <path d="M10 3c0 1.313-.304 2.508-.8 3.4a1.991 1.991 0 0 0-1.484-.38c-.28-.982-.91-2.04-1.838-2.969a8.368 8.368 0 0 0-.491-.454A5.976 5.976 0 0 1 8 2c.691 0 1.355.117 1.973.332.018.219.027.442.027.668Zm0 5c0 .073-.004.146-.012.217 1.018-.019 2.2-.353 3.331-1.006a8.39 8.39 0 0 0 .57-.361 6.004 6.004 0 0 0-2.53-3.823 9.02 9.02 0 0 1-.145.64c-.34 1.269-.944 2.346-1.656 3.079.277.343.442.78.442 1.254Zm-.137.728a2.007 2.007 0 0 1-1.07 1.109c.525.87 1.405 1.725 2.535 2.377.2.116.402.222.605.317a5.986 5.986 0 0 0 2.053-4.111c-.208.073-.421.14-.641.199-1.264.339-2.493.356-3.482.11ZM8 10c-.45 0-.866-.149-1.2-.4-.494.89-.796 2.082-.796 3.391 0 .23.01.457.027.678A5.99 5.99 0 0 0 8 14c.94 0 1.83-.216 2.623-.602a8.359 8.359 0 0 1-.497-.458c-.925-.926-1.555-1.981-1.836-2.96-.094.013-.191.02-.29.02ZM6 8c0-.08.005-.16.014-.239-1.02.017-2.205.351-3.34 1.007a8.366 8.366 0 0 0-.568.359 6.003 6.003 0 0 0 2.525 3.839 8.37 8.37 0 0 1 .148-.653c.34-1.267.94-2.342 1.65-3.075A1.988 1.988 0 0 1 6 8Zm-3.347-.632c1.267-.34 2.498-.355 3.488-.107.196-.494.583-.89 1.07-1.1-.524-.874-1.406-1.733-2.541-2.388a8.363 8.363 0 0 0-.594-.312 5.987 5.987 0 0 0-2.06 4.106c.206-.074.418-.14.637-.199ZM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
                 <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16Z"/>
               </svg>
           </div>

          <div 
          className={`
          absolute 
          top-[50%] 
          mobile:hidden
          laptop:flex
          animListContainerOnDOM
          -translate-y-[50%]
          laptop:right-[2rem]
          mobile:w-[90%]
          mobile:right-[50%]
          mobile:translate-x-[50%]
          smScreen:w-[50%]
          laptop:w-[20%]
          h-[80%]
          laptop:-translate-x-[0%]
          overflow-y-scroll
          bg-txtColor2
          shadow-sh2
          rounded-[.5rem]
          `}>  
              <div
              onClick={navigateTo}
              className={`${props.containerClass} flex gap-[1rem] flex-col w-full h-max p-[1rem]`}>

              </div>
          </div>
        </>
    );
};

export default AnimTemplate;