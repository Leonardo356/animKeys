import React from "react";

const ShowCode = () => {

    const displayCode = () => {
        let codeContainer = document.querySelector('.codeContainer');
        codeContainer.style.left = '0%';
    }

    const cursorOverClose = e => {
        let closeLine1 = document.querySelector('.closeLine1');
        let closeLine2 = document.querySelector('.closeLine2');
        let evType = e.type;

        if(evType === 'mouseover') {
            closeLine1.style.transform = 'rotate(90deg)';
            closeLine2.style.transform = 'rotate(-90deg)';
        } else {
            closeLine1.style.transform = '';
            closeLine2.style.transform = '';
        }
    };

    const closeCode = () => {
        let codeContainer = document.querySelector('.codeContainer');
        codeContainer.style.left = '-100%';
    };

    return(
        <>
          <div
          onClick={displayCode}
          className="
          absolute 
          bottom-[2rem] 
          left-[50%] 
          -translate-x-[50%]
          "><CodeIcon /></div>

          <div className="
          w-full
          h-full
          absolute
          duration-[200ms]
          codeContainer
          top-0
          -left-[100%]
          z-[9000]
          bg-[white]
          ">
            <div
             onMouseOver={cursorOverClose}
             onMouseLeave={cursorOverClose}
             onClick={closeCode}
             className="closeShowCode cursor-pointer flex justify-center items-center p-[2rem] w-max h-max absolute top-0 right-0">
                <div className="w-[.2rem] duration-[200ms] closeLine1 absolute rotate-45 h-[2rem] bg-txtColor2"></div>
                <div className="w-[.2rem] duration-[200ms] closeLine2 absolute -rotate-45 h-[2rem] bg-txtColor2"></div>
            </div>
            <CodeContainer />
          </div>
        </>
    );
};

const CodeContainer = props => {

    return(
        <>
           <div className="
           w-full
           h-full
           bg-white
           flex
           flex-col
           justify-center
           gap-[2rem]
           items-start
           pl-[1rem]
           ">
               <ClassAnim />
           </div>
        </>
    );
};

const ClassAnim = () => {

    return(
        <>
          <div className="
          flex
          flex-col
          w-max
          h-max
          p-[1rem]
          bg-[#E0E0E0]
          rounded-[.5rem]
          shadow-sh1
          ">
            <p>.<span className="animationClass">scale-up-center</span>&nbsp;{'{'}</p>
            <div className="flex">
                <p className="pl-[1rem]">animation:&nbsp;
                <span className="animationName">animName</span>&nbsp;
                <span className="animationDuration">0.6s</span>&nbsp;
                <span className="animationTransition">ease</span>&nbsp;
                <span className="animationDirection">normal</span>&nbsp;
                <span className="animationDelay">0s</span>&nbsp;
                <span className="animationType">forwards</span>&nbsp;
                <span className="isInfinite"></span>
                ;
                </p>
            </div>
            <p>{'}'}</p>
          </div>
        </>
    );
};

const CodeIcon = () => {
    return(
        <>
          <div className="
          w-[5vmax]
          h-[2vmax]
          shadow-sh1
          rounded-full
          flex
          justify-center
          items-center
          relative
          z-[900]
          bg-white
          text-txtColor2
          font-semibold
          text-[1.2vmax]
          cursor-pointer
          ">
            <p>{'</>'}</p>
          </div>
        </>
    );
};

export default ShowCode;