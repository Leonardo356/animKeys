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
            );

            contAnimTemplate.appendChild(el);
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