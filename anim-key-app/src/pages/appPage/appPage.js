import React from "react";
import NavTypes from "../../components/AppPageComp/NavTypes";
import {Routes, Route} from 'react-router-dom';
import NavAnim from "../../components/AppPageComp/NavAnim/NavAnim";

import NavAnimEntrances from "../../components/AppPageComp/NavAnim/NavAnimEntrances";
import NavAnimExits from "../../components/AppPageComp/NavAnim/NavAnimExits";
import NavAnimTxt from "../../components/AppPageComp/NavAnim/NavAnimTxt";
import NavAnimAttention from "../../components/AppPageComp/NavAnim/NavAnimAttention";
import NavAnimShadows from "../../components/AppPageComp/NavAnim/NavAnimShadow";
import NavAnimBonus from "../../components/AppPageComp/NavAnim/NavAnimBonus";

import AnimShapes from "../../components/AppPageComp/animationPages/AnimShapes";

import AnimSettings from "../../components/AppPageComp/animationPages/animSettings/animSettings";

import { BasicScale } from "../../components/AppPageComp/animationPages/animate/AnimComp";
import { BasicRotate } from "../../components/AppPageComp/animationPages/animate/AnimComp";
import { BasicFlip } from "../../components/AppPageComp/animationPages/animate/AnimComp";
import { BasicSwing } from "../../components/AppPageComp/animationPages/animate/AnimComp";
import { BasicSlide } from "../../components/AppPageComp/animationPages/animate/AnimComp";
import { BasicShadow } from "../../components/AppPageComp/animationPages/animate/AnimComp";

const AppPage = () => {

    return(
        <>
           <div
           className="
           w-screen
           h-screen
           grid
           grid-cols-1
           grid-rows-127
           "
           >
              <div className="
              w-full
              h-full
              row-start-1
              row-end-2
              col-start-1
              col-end-2
              shadow-sh1
              ">
                <NavTypes />
              </div>

              <div className="
              w-full
              h-full
              row-start-2
              row-end-3
              col-start-1
              col-end-2
              border-b-[1px]
              shadow-sh2
              ">
                <Routes >
                    <Route path="/*" element={<NavAnim />} />
                    <Route path="/entrances/*" element={<NavAnimEntrances />} />
                    <Route path="/exits/*" element={<NavAnimExits />} />
                    <Route path="/text/*" element={<NavAnimTxt />} />
                    <Route path="/attention/*" element={<NavAnimAttention />} />
                    <Route path="/shadows/*" element={<NavAnimShadows />} />
                    <Route path="/bonus/*" element={<NavAnimBonus />} />
                  </Routes>
              </div>

              <div className="
              w-full
              h-full
              row-start-3
              row-end-4
              col-start-1
              col-end-2
              relative
              ">
                  <AnimShapes />
                  <AnimSettings />
                  <Routes >
                    <Route path="/" element={<BasicScale />} />
                    <Route path="/basicRotate" element={<BasicRotate />} />
                    <Route path="/basicFlip" element={<BasicFlip />} />
                    <Route path="/basicSwing" element={<BasicSwing />} />
                    <Route path="/basicSlide" element={<BasicSlide />} />
                    <Route path="/basicShadow" element={<BasicShadow />} />
                  </Routes>
              </div>
           </div>
        </>
    );
};

export default AppPage