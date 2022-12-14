import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AnimTemplate = props => {

    let containerClass = props.containerClass;
    let titles = props.titles;
    let navigate = useNavigate();

    useEffect(() => {

      window.onload = () => {
        console.log('we are here')
      }
        
        let contAnimTemplate = document.querySelector(`.${containerClass}`)
        contAnimTemplate.innerHTML = '';

        let titlesToArr = titles
        .toString()
        .split(' ');

        titlesToArr.forEach(element => {
            let el = document.createElement('div');
            el.innerText = element;
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
        });

        const getAnimationName = el => {
          let animName = el.getAnimations()[0].animationName;
          return animName;
        }

        let animationBtn = document.querySelectorAll('.animationBtn');
        let squareShape = document.querySelector('.squareShape');
        let textAnimation = document.querySelector('.textAnimation');
        let animationClass = document.querySelector('.animationClass');
        let animationName = document.querySelector('.animationName');

        // add and remove btn class animation on click
        window.addEventListener('click', e => {
          e.preventDefault();
            animationBtn.forEach(btn => {
                  if(!e.target.classList.contains('animationBtn')) return;
                  if(btn === e.target) {
                    navigate(btn.innerText);
                    btn.classList.add('bg-[lightblue]');

                    animationClass.innerText = '';
                    animationClass.innerText = btn.innerText;

                    if(textAnimation !== null) {
                      textAnimation.classList.add(`${btn.innerText}`);
                      animationName.innerText = '' ;
                      animationName.innerText = getAnimationName(textAnimation);
                    }

                    if(squareShape !== null) {
                      squareShape.classList.add(`${btn.innerText}`);
                      animationName.innerText = '' ;
                      animationName.innerText = getAnimationName(squareShape);
                    }
                  }
                  else {
                    btn.classList.remove('bg-[lightblue]');
                    if(textAnimation !== null) textAnimation.classList.remove(`${btn.innerText}`);
                    if(squareShape !== null) squareShape.classList.remove(`${btn.innerText}`);
                  };

            });
        });

    }, [containerClass, titles, navigate]);

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
              className={`${props.containerClass} flex gap-[1rem] flex-col w-full h-max p-[1rem]`}>

              </div>
          </div>
        </>
    );
};

export default AnimTemplate;