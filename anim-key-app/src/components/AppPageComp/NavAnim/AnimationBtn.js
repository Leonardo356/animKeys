import React from "react";

const AnimBtn = props => {

    const changeColor = e => {
        let animBtns = document.querySelectorAll('.animBtns');
        let el = e.currentTarget;

        animBtns.forEach(btn => {
            console.log(btn === el)
            if(btn === el) {
                btn.querySelector('.bganimBtns').classList.add('w-full', 'h-full');
                btn.querySelector('.bganimBtns').classList.remove('w-0', 'h-0');
            }
            else {
                btn.querySelector('.bganimBtns').classList.remove('w-full', 'h-full')
                btn.querySelector('.bganimBtns').classList.add('w-0', 'h-0')
            }
        });
    };

    const changeColorHover = e => {
        let animBtns = document.querySelectorAll('.animBtns');
        let el = e.currentTarget;
        let evType = e.type;

        if(evType === 'mouseover') {
            animBtns.forEach(btn => {
                console.log(btn === el)
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
           onClick={changeColor}
           className="
           w-[7vmax] 
           cursor-pointer 
           h-[7vmax] 
           rounded-full
           shadow-sh1
           flex
           animBtns
           relative
           justify-center
           items-center 
           bg-txtColor2">
              <h1 className=" relative z-[200] font-medium text-[1.2rem] text-white">{props.animName}</h1>
              <div className={` ${props.size} z-[100] absolute bganimBtns duration-[300ms] rounded-full bg-[#344966]`}></div>
              <div className="z-[0] absolute bganimBtns2 w-0 h-0 duration-[500ms] rounded-full bg-[#5C5C5C]"></div>
           </div>
        </>
    );
};

export default AnimBtn;