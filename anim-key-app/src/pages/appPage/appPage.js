import React from "react";
import NavTypes from "../../components/AppPageComp/NavTypes";
import {Routes, Route} from 'react-router-dom';
import NavAnim from "../../components/AppPageComp/NavAnim/NavAnim";

import NavAnimTxt from "../../components/AppPageComp/NavAnim/NavAnimTxt";
import NavAnimAttention from "../../components/AppPageComp/NavAnim/NavAnimAttention";
import NavAnimShadows from "../../components/AppPageComp/NavAnim/NavAnimShadow";

import AnimShapes from "../../components/AppPageComp/animationPages/AnimShapes";

import AnimSettings from "../../components/AppPageComp/animationPages/animSettings/animSettings";

import { BasicScale } from "../../components/AppPageComp/animationPages/animate/AnimComp";
import { BasicRotate } from "../../components/AppPageComp/animationPages/animate/AnimComp";
import { BasicFlip } from "../../components/AppPageComp/animationPages/animate/AnimComp";
import { BasicSwing } from "../../components/AppPageComp/animationPages/animate/AnimComp";
import { BasicSlide } from "../../components/AppPageComp/animationPages/animate/AnimComp";
import { BasicShadow } from "../../components/AppPageComp/animationPages/animate/AnimComp";

import { TextScale } from "../../components/AppPageComp/animationPages/animate/AnimComp";
import { TextTracking } from "../../components/AppPageComp/animationPages/animate/AnimComp";
import { TextBlur } from "../../components/AppPageComp/animationPages/animate/AnimComp";
import { TextShadow } from "../../components/AppPageComp/animationPages/animate/AnimComp";
import { TextPopUp } from "../../components/AppPageComp/animationPages/animate/AnimComp";
import { TextJello } from "../../components/AppPageComp/animationPages/animate/AnimComp";

import { AttentionVibrate } from "../../components/AppPageComp/animationPages/animate/AnimComp";
import { AttentionShake } from "../../components/AppPageComp/animationPages/animate/AnimComp";
import { AttentionBounce } from "../../components/AppPageComp/animationPages/animate/AnimComp";
import { AttentionPulsate } from "../../components/AppPageComp/animationPages/animate/AnimComp";
import { AttentionBlink } from "../../components/AppPageComp/animationPages/animate/AnimComp";

import { ShadowBasic } from "../../components/AppPageComp/animationPages/animate/AnimComp";
import { ShadowInset } from "../../components/AppPageComp/animationPages/animate/AnimComp";
import { Shadow3D } from "../../components/AppPageComp/animationPages/animate/AnimComp";

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
                    <Route path="/text/*" element={<NavAnimTxt />} />
                    <Route path="/attention/*" element={<NavAnimAttention />} />
                    <Route path="/shadows/*" element={<NavAnimShadows />} />
                  </Routes>
              </div>

              <div className="
              w-full
              h-full
              row-start-3
              row-end-4
              col-start-1
              col-end-2
              bg-[lightgray]
              relative
              overflow-hidden
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
                    <Route path="/text" element={<TextScale />} />
                    <Route path="/text/textTracking" element={<TextTracking />} />
                    <Route path="/text/textBlur" element={<TextBlur />} />
                    <Route path="/text/textShadow" element={<TextShadow />} />
                    <Route path="/text/textPop-up" element={<TextPopUp />} />
                    <Route path="/text/textJello" element={<TextJello />} />
                    <Route path="/attention" element={<AttentionVibrate />} />
                    <Route path="/attention/Shake" element={<AttentionShake />} />
                    <Route path="/attention/Bounce" element={<AttentionBounce />} />
                    <Route path="/attention/Pulsate" element={<AttentionPulsate />} />
                    <Route path="/attention/Blink" element={<AttentionBlink />} />
                    <Route path="/shadows" element={<ShadowBasic />} />
                    <Route path="/shadows/inset" element={<ShadowInset />} />
                    <Route path="/shadows/3d" element={<Shadow3D />} />
                  </Routes>
              </div>
           </div>
        </>
    );
};

export default AppPage