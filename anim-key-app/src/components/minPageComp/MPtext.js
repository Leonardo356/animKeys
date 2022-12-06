import React from "react";

const MainPageTxt = () => {
    return(
        <>
          <div
          className="
          w-max
          h-max
          flex
          flex-col
          gap-[1rem]
          "
          >
            <div
            className="
            w-max
            h-max
            flex
            gap-[1.5vmax]
            "
            >
               <Txt txt='#the' fontWeight='font-normal' txtColor='text-txtColor1' />
               <Txt txt='KEY' fontWeight='font-semibold' txtColor='text-txtColor2' /> 
            </div>
            <div>
                <Txt txt='to level up' fontWeight='font-normal' txtColor='text-txtColor1' />
            </div>
            <div
            className="
            w-max
            h-max
            flex
            gap-[1.5vmax]
            "
            >
               <Txt txt='your' fontWeight='font-normal' txtColor='text-txtColor1' />
               <Txt txt='FRAMES' fontWeight='font-semibold' txtColor='text-txtColor2' /> 
            </div>
          </div>
        </>
    );
};

const Txt = props => {
    return(
        <>
           <div 
           className={
            `w-max
             h-max
             text-[5vmax]
             leading-none
             ${props.fontWeight}
             ${props.txtColor}
             `
            }
           >
            <h1>{props.txt}</h1>
           </div>
        </>
    );
};

export default MainPageTxt;