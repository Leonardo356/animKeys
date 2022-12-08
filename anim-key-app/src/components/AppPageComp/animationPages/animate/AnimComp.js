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
            titles={`rotate-center rotate-top rotate-left rotate-right rotate-bottom`}
           />
        </>
    );
};

export function BasicFlip() {
    return(
        <>
           <AnimTemplate
            containerClass='basicScaleCont'
            titles={`flip`}
           />
        </>
    );
};

export function BasicSwing() {
    return(
        <>
           <AnimTemplate
            containerClass='basicScaleCont'
            titles={`swing`}
           />
        </>
    );
};

export function BasicSlide() {
    return(
        <>
           <AnimTemplate
            containerClass='basicScaleCont'
            titles={`slide`}
           />
        </>
    );
};

export function BasicShadow() {
    return(
        <>
           <AnimTemplate
            containerClass='basicScaleCont'
            titles={`shadow`}
           />
        </>
    );
};