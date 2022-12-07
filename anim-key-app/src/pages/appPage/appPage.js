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

import BasicScale from "../../components/AppPageComp/animationPages/animate/AnimComp";

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
                    <Route path="/" element={<NavAnim />} />
                    <Route path="/entrances" element={<NavAnimEntrances />} />
                    <Route path="/exits" element={<NavAnimExits />} />
                    <Route path="/text" element={<NavAnimTxt />} />
                    <Route path="/attention" element={<NavAnimAttention />} />
                    <Route path="/shadows" element={<NavAnimShadows />} />
                    <Route path="/bonus" element={<NavAnimBonus />} />
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
                  <BasicScale />
              </div>
           </div>
        </>
    );
};

export default AppPage