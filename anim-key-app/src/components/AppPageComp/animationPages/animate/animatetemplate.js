import React, { useEffect } from "react";
const AnimTemplate = props => {

    let containerClass = props.containerClass;
    let titles = props.titles;

    useEffect(() => {
        
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

        let animationBtn = document.querySelectorAll('.animationBtn');
        let squareShape = document.querySelector('.squareShape');
        let textAnimation = document.querySelector('.textAnimation');
        let pathName = window.location.pathname;
        animationBtn[0].style.background = '#D1E9F0';

        // add and remove btn class animation on click
        window.addEventListener('click', e => {
            animationBtn.forEach(btn => {
                  if(!e.target.classList.contains('animationBtn')) return;
                  if(btn === e.target) {
                    btn.style.background = '#D1E9F0';
                    if(
                      pathName === '/appPage/' ||
                      pathName === '/appPage/basicRotate' ||
                      pathName === '/appPage/basicFlip' ||
                      pathName === '/appPage/basicSwing' ||
                      pathName === '/appPage/basicSlide' ||
                      pathName === '/appPage/basicShadow' ||
                      pathName === '/appPage/attention' ||
                      pathName === '/appPage/attention/Shake' ||
                      pathName === '/appPage/attention/Bounce' ||
                      pathName === '/appPage/attention/Pulsate' ||
                      pathName === '/appPage/attention/Blink' ||
                      pathName === '/appPage/shadows' ||
                      pathName === '/appPage/shadows/inset' ||
                      pathName === '/appPage/shadows/3d'
                    ) squareShape.classList.add(`${btn.innerText}`);

                    if(
                      pathName === '/appPage/text' ||
                      pathName === '/appPage/text/textTracking' ||
                      pathName === '/appPage/text/textBlur' ||
                      pathName === '/appPage/text/textShadow' ||
                      pathName === '/appPage/text/textPop-up' ||
                      pathName === '/appPage/text/textJello'
                    ) textAnimation.classList.add(`${btn.innerText}`);
                  }
                  else {
                    btn.style.background = '';
                    if(
                      pathName === '/appPage/' ||
                      pathName === '/appPage/basicRotate' ||
                      pathName === '/appPage/basicFlip' ||
                      pathName === '/appPage/basicSwing' ||
                      pathName === '/appPage/basicSlide' ||
                      pathName === '/appPage/basicShadow' ||
                      pathName === '/appPage/attention' ||
                      pathName === '/appPage/attention/Shake' ||
                      pathName === '/appPage/attention/Bounce' ||
                      pathName === '/appPage/attention/Pulsate' ||
                      pathName === '/appPage/attention/Blink' ||
                      pathName === '/appPage/shadows' ||
                      pathName === '/appPage/shadows/inset' ||
                      pathName === '/appPage/shadows/3d'
                    ) squareShape.classList.remove(`${btn.innerText}`);

                    if(
                      pathName === '/appPage/text' ||
                      pathName === '/appPage/text/textTracking' ||
                      pathName === '/appPage/text/textBlur' ||
                      pathName === '/appPage/text/textShadow' ||
                      pathName === '/appPage/text/textPop-up' ||
                       pathName === '/appPage/text/textJello'
                    ) textAnimation.classList.remove(`${btn.innerText}`);
                  };

            });
        });

    }, [containerClass, titles]);

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
              <div className={`${props.containerClass} flex gap-[1rem] flex-col w-full h-max p-[1rem]`}>

              </div>
          </div>
        </>
    );
};

export default AnimTemplate;