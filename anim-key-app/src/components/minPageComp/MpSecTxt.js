import React from "react";

const MainPageSecTxt = () => {
    return(
        <>
            <div
            className="
            w-max
            h-max
            "
            >
                <Txt txt='your easy to use css online library!' />
            </div>
        </>
    );
};

const Txt = props => {
    return(
        <>
          <div
          className="
          text-txtColor1
          text-[2vmax]
          leading-none
          "
          >
             <p>{props.txt}</p>
          </div>
        </>
    );
};

export default MainPageSecTxt;