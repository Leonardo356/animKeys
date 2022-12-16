import React from "react";

const AnimBtn = props => {

    const changeColorHover = e => {
        let animBtns = document.querySelectorAll('.animBtns');
        let el = e.currentTarget;
        let evType = e.type;

        if(evType === 'mouseover') {
            animBtns.forEach(btn => {
                if(btn === el) {
                    btn.querySelector('.bganimBtns2').classList.add('w-full', 'h-full');
                    btn.querySelector('.bganimBtns2').classList.remove('w-0', 'h-0');
                }
                else {
                    btn.querySelector('.bganimBtns2').classList.remove('w-full', 'h-full')
                    btn.querySelector('.bganimBtns2').classList.add('w-0', 'h-0')
                }
            });
        }

        else {
            animBtns.forEach(btn => {
                    btn.querySelector('.bganimBtns2').classList.remove('w-full', 'h-full');
                    btn.querySelector('.bganimBtns2').classList.add('w-0', 'h-0');
            });
        }
    };

    return(
        <>
           <div 
           onMouseOver={changeColorHover}
           onMouseLeave={changeColorHover}
           className="
           laptop:w-[7.5rem] 
           laptop:h-[7.5rem]
           mobile:w-[6rem]
           mobile:h-[6rem]
           cursor-pointer 
           rounded-full
           shadow-sh1
           flex
           animBtns
           relative
           justify-center
           items-center 
           bg-txtColor2">
              <h1 className=" relative z-[200] font-medium mobile:text-[1rem] laptop:text-[1.2rem] text-white">{props.animName}</h1>
              <div className={` ${props.size} z-[100] absolute bganimBtns duration-[300ms] rounded-full bg-[#344966]`}></div>
              <div className="z-[0] absolute bganimBtns2 w-0 h-0 duration-[500ms] rounded-full bg-[#5C5C5C]"></div>
           </div>
        </>
    );
};

export default AnimBtn;