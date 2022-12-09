import React from "react";

import AnimTemplate from "./animatetemplate";

export function BasicScale() {
    return(
        <>
           <AnimTemplate
            containerClass='basicScaleCont'
            titles={`scale-up-center scale-up-top scale-up-left scale-up-right scale-up-bottom scale-up-tl scale-up-tr scale-up-bl scale-up-br scale-up-wh-center scale-up-wh-top scale-up-wh-left scale-up-wh-right scale-up-wh-bottom scale-down-center scale-down-top scale-down-left scale-down-right scale-down-bottom scale-down-tl scale-down-tr scale-down-bl scale-down-br scale-down-wh-center scale-down-wh-top scale-down-wh-left scale-down-wh-right scale-down-wh-bottom`}
           />
        </>
    );
};

export function BasicRotate() {
    return(
        <>
           <AnimTemplate
            containerClass='basicScaleCont'
            titles={`rotate-center rotate-top rotate-left rotate-right rotate-bottom rotate-tl rotate-tr rotate-br rotate-bl rotate-center-up rotate-top-up rotate-left-up rotate-right-up rotate-bottom-up rotate-tl-up rotate-tr-up rotate-br-up rotate-bl-up rotate-center-down rotate-top-down rotate-left-down rotate-right-down rotate-bottom-down rotate-tl-down rotate-tr-down rotate-br-down rotate-bl-down`}
           />
        </>
    );
};

export function BasicFlip() {
    return(
        <>
           <AnimTemplate
            containerClass='basicScaleCont'
            titles={`flip-hor-bottom flip-hor-top flip-ver-left flip-ver-right flip-diag-tr flip-diag-bl flip-diag-br flip-diag-tl flip-top flip-bottom flip-left flip-right flip-hor-bottom-up flip-hor-top-up flip-ver-left-up flip-ver-right-up flip-diag-tr-up flip-diag-bl-up flip-diag-br-up flip-diag-tl-up flip-top-up flip-bottom-up flip-left-up flip-right-up flip-hor-bottom-down flip-hor-top-down flip-ver-left-down flip-ver-right-down flip-diag-tr-down flip-diag-bl-down flip-diag-br-down flip-diag-tl-down flip-top-down flip-bottom-down flip-left-down flip-right-down`}
           />
        </>
    );
};

export function BasicSwing() {
    return(
        <>
           <AnimTemplate
            containerClass='basicScaleCont'
            titles={`swing-top-fwd swing-top-bck swing-tr-fwd swing-tr-bck swing-right-fwd swing-right-bck swing-br-fwd swing-br-bck swing-bottom-fwd swing-bottom-bck swing-bl-fwd swhing-bl-bck swing-left-fwd swing-left-bck swing-tl-fwd swing-tl-bck`}
           />
        </>
    );
};

export function BasicSlide() {
    return(
        <>
           <AnimTemplate
            containerClass='basicScaleCont'
            titles={`slide-top slide-tr slide-right slide-br slide-bottom slide-bl slide-left slide-tl slide-top-fwd slide-tr-fwd slide-right-fwd slide-br-fwd slide-bottom-fwd slide-bl-fwd slide-left-fwd slide-tl-fwd slide-top-bck slide-tr-bck slide-right-bck slide-br-bck slide-bottom-bck slide-bl-bck slide-left-bck slide-tl-bck slide-top-rotate slide-right-rotate slide-bottom-rotate slide-left-rotate`}
           />
        </>
    );
};

export function BasicShadow() {
    return(
        <>
           <AnimTemplate
            containerClass='basicScaleCont'
            titles={`shadow-top shadow-tr shadow-right shadow-br shadow-bottom shadow-bl shadow-left shadow-tl shadow-tr-pop shadow-br-pop shadow-bl-pop shadow-tl-pop shadow-1 shadow-2 shadow-3 shadow-4`}
           />
        </>
    );
};