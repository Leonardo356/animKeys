import React from "react";
import MainPageTxt from "../../components/minPageComp/MPtext";
import MainPageSecTxt from "../../components/minPageComp/MpSecTxt";
import MpBtn from "../../components/minPageComp/MPBtn";
import ShapesCont from "../../components/minPageComp/shapes";

const MainPage = () => {
    return(
        <>
          <div
          className="
          w-screen
          h-screen
          bg-gradient-to-tl
          from-lightBlue
          via-lightPink
          via-lightPurple
          to-lightBlue
          flex
          "
          >
            <div className="
            w-full
            h-full
            flex
            flex-col
            py-[3rem]
            laptop:pl-[4rem]
            mobile:pl-[1rem]
            ">
                <div className="mb-auto"><MainPageTxt /></div>
                <MpBtn />
                <div className="mt-auto"><MainPageSecTxt /></div>
            </div>
            <div
            className="
            w-full
            h-full
            flex
            justify-center
            items-center
            "
            >
                <div className="mobile:hidden laptop:flex"><ShapesCont /></div>
            </div>
          </div>
        </>
    );
}

export default MainPage;