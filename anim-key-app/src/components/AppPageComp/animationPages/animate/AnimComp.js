import React from "react";

import AnimTemplate from "./animatetemplate";

export default function BasicScale() {
    return(
        <>
           <AnimTemplate
            containerClass='basicScaleCont'
            titles={`scale-up-center scale-up-top scale-up-left scale-up-right scale-up-bottom`}
           />
        </>
    );
};