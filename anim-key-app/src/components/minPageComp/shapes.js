import React, { useEffect } from "react";
import Shape1 from "./img/shape1.webp";
import Shape2 from "./img/shape2.webp";
import Shape3 from "./img/shape3.webp";

import { gsap } from "gsap";

const ShapesCont = () => {
    return(
        <>
         <div
         className="
         w-max
         h-max
         relative
         "
         >
            <Oval />
            <div className="absolute top-[0%] -left-[6rem]"> <ShapesImg width='200' height='200' src={Shape1}/> </div>
            <div className="absolute top-[30%] -right-[5rem]"> <ShapesImg width='200' height='200' src={Shape2} /> </div>
            <div className="absolute top-[70%] -left-[5rem]"> <ShapesImg width='220' height='220' src={Shape3} /> </div>
         </div>
        </>
    );
};

const Oval = () => {

    useEffect(() => {
        window.addEventListener('mousemove', e => {
            let x = e.pageX - window.scrollX;
            let y = e.pageY - window.scrollY;

            gsap.to('.shape', {
                x: -x/100,
                y: -y/50,
                duration: 3,
            })
        });
    }, []);

    return(
        <>
           <div
           className="
           w-[15vmax]
           h-[30vmax]
           rounded-full
           bg-shapesColor
           shadow-insetShadow
           relative
           shape
           flex
           justify-center
           items-center
           "
           >
             <div
             className="
             absolute
             w-[17vmax]
             h-[32vmax]
             rounded-full
             border-[2px]
             border-txtColor1
             "
             ></div>
           </div>
        </>
    );
};

const ShapesImg = props => {

    useEffect(() => {
        window.addEventListener('mousemove', e => {
            let x = e.pageX - window.scrollX;
            let y = e.pageY - window.scrollY;

            gsap.to('.img', {
                x: x/100,
                y: y/50,
                duration: 3,
            })
        });
    }, []);

   return(
    <>
       <img 
       className={`img relative `}
       src={props.src}
       alt='shapes images here'
       draggable='false'
       width={props.width} 
       height={props.height} />
    </>
   );
};

export default ShapesCont;