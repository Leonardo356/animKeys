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
          'h-[3rem]', 
          'rounded-[1rem]',
          'text-[1.2rem]', 
          'font-bold', 
          'bg-white', 
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
        if(btn === e.target) navigate(btn.innerText);
     });
    }

    return(
        <>
          <div 
          className={`
          absolute 
          top-[50%] 
          -translate-y-[50%]
          right-[2rem]
          w-[20%]
          h-[80%]
          overflow-y-scroll
          bg-txtColor2
          shadow-sh2
          rounded-[.5rem]
          flex
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