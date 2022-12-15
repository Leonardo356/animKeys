import React from "react";
import {Routes, Route} from 'react-router-dom';

import { Blink1, Blink2, BounceBottom, BounceLeft, BounceRight, BounceTop, FlipBottom, FlipBottomDown, FlipBottomUP, FlipDiagBL, FlipDiagBLDown, FlipDiagBLUP, FlipDiagBR, FlipDiagBRDown, FlipDiagBRUP, FlipDiagTL, FlipDiagTLDown, FlipDiagTLUP, FlipDiagTR, FlipDiagTRDown, FlipDiagTRUP, FlipHorBottom, FlipHorBottomDown, FlipHorBottomUP, FlipHorTop, FlipHorTopDown, FlipHorTopUP, FlipLeft, FlipLeftDown, FlipLeftUP, FlipRight, FlipRightDown, FlipRightUP, FlipTop, FlipTopDown, FlipTopUP, FlipVerLeft, FlipVerLeftDown, FlipVerLeftUP, FlipVerRight, FlipVerRightDown, FlipVerRightUP, FocusIn, FocusInContract, FocusInContractBck, FocusInExpand, FocusInExpandFwd, Pulsate1, Pulsate2, Pulsate3, Pulsate4, RotateBL, RotateBLDown, RotateBLUP, RotateBottom, RotateBottomDown, RotateBottomUP, RotateBR, RotateBRDown, RotateBRUP, RotateCenter, RotateCenterDown, RotateCenterUP, RotateLeft, RotateLeftDown, RotateLeftUP, RotateRight, RotateRightDown, RotateRightUP, RotateTL, RotateTLDown, RotateTLUP, RotateTop, RotateTopDown, RotateTopUP, RotateTR, RotateTRDown, RotateTRUP, ScaleDownBL, ScaleDownBottom, ScaleDownBR, ScaleDownCenter, ScaleDownLeft, ScaleDownRight, ScaleDownTL, ScaleDownTop, ScaleDownTR, ScaleInCenter, ScaleInDown, ScaleInLeft, ScaleInRight, ScaleInUp, ScaleOutCenter, ScaleOutDown, ScaleOutLeft, ScaleOutRight, ScaleOutUp, ScaleUpBL, ScaleUpBottom, ScaleUpBR, ScaleUpCenter, ScaleUpLeft, ScaleUpRight, ScaleUpTL, ScaleUpTop, ScaleUpTR, ScaleWHDownBottom, ScaleWHDownCenter, ScaleWHDownLeft, ScaleWHDownRight, ScaleWHDownTop, ScaleWHUpBottom, ScaleWHUpCenter, ScaleWHUpLeft, ScaleWHUpRight, ScaleWHUpTop, Shadow1, Shadow2, Shadow3, Shadow4, ShadowBL, ShadowBLPOP, ShadowBottom, ShadowBR, ShadowBRPOP, ShadowLeft, ShadowRight, ShadowTL, ShadowTLPOP, ShadowTop, ShadowTR, ShadowTRPOP, ShakeBottom, ShakeLeft, ShakeLR, ShakeRight, ShakeTop, SlideBL, SlideBLBck, SlideBLFwd, SlideBottom, SlideBottomBck, SlideBottomFwd, SlideBottomRotate, SlideBR, SlideBRBck, SlideBRFwd, SlideLeft, SlideLeftBck, SlideLeftFwd, SlideLeftRotate, SlideRight, SlideRightBck, SlideRightFwd, SlideRightRotate, SlideTL, SlideTLBck, SlideTLFwd, SlideTop, SlideTopBck, SlideTopFwd, SlideTopRotate, SlideTR, SlideTRBck, SlideTRFwd, SwingBLBck, SwingBLFwd, SwingBottomBck, SwingBottomFwd, SwingBRBck, SwingBRFwd, SwingLeftBck, SwingLeftFwd, SwingRightBck, SwingRightFwd, SwingTLBck, SwingTLFwd, SwingTopBck, SwingTopFwd, SwingTRBck, SwingTRFwd, TextJelloDiag1, TextJelloDiag2, TextJelloX, TextJelloY, TextPopUpBL, TextPopUpBottom, TextPopUpBR, TextPopUpLeft, TextPopUpRight, TextPopUpTL, TextPopUpTop, TextPopUpTR, TextShdBL, TextShdBottom, TextShdBR, TextShdCenter, TextShdLeft, TextShdRight, TextShdTL, TextShdTop, TextShdTR, TrackingInContract, TrackingInContractBck, TrackingInContractBckBottom, TrackingInContractBckTop, TrackingInExpand, TrackingInExpandFwd, TrackingInExpandFwdBottom, TrackingInExpandFwdTop, Vibrate1, Vibrate2, Vibrate3 } from "./KeyFrames";

const ShowCode = () => {

    const displayCode = () => {
        let codeContainer = document.querySelector('.codeContainer');
        codeContainer.style.left = '0%';
    }

    const cursorOverClose = e => {
        let closeLine1 = document.querySelector('.closeLine1');
        let closeLine2 = document.querySelector('.closeLine2');
        let evType = e.type;

        if(evType === 'mouseover') {
            closeLine1.style.transform = 'rotate(90deg)';
            closeLine2.style.transform = 'rotate(-90deg)';
        } else {
            closeLine1.style.transform = '';
            closeLine2.style.transform = '';
        }
    };

    const closeCode = () => {
        let codeContainer = document.querySelector('.codeContainer');
        codeContainer.style.left = '-100%';
    };

    return(
        <>
          <div
          onClick={displayCode}
          className="
          absolute 
          bottom-[2rem] 
          left-[50%] 
          -translate-x-[50%]
          "><CodeIcon /></div>

          <div className="
          w-max
          shadow-sh1
          h-full
          absolute
          duration-[200ms]
          codeContainer
          top-0
          -left-[100%]
          z-[9000]
          px-[2rem]
          bg-[white]
          ">
            <div
             onMouseOver={cursorOverClose}
             onMouseLeave={cursorOverClose}
             onClick={closeCode}
             className="closeShowCode cursor-pointer flex justify-center items-center p-[2rem] w-max h-max absolute top-0 right-0">
                <div className="w-[.2rem] duration-[200ms] closeLine1 absolute rotate-45 h-[2rem] bg-txtColor2"></div>
                <div className="w-[.2rem] duration-[200ms] closeLine2 absolute -rotate-45 h-[2rem] bg-txtColor2"></div>
            </div>
            <CodeContainer />
          </div>
        </>
    );
};

const CodeContainer = props => {

    return(
        <>
           <div className="
           w-full
           h-full
           bg-white
           flex
           flex-col
           justify-center
           items-start
           ">
              <div className=" text-[1.3rem] text-txtColor2 mb-[.5rem]">Class:</div>
              <ClassAnim />
              <div className="mt-[2rem] text-[1.3rem] text-txtColor2 mb-[.5rem]">KeyFrames:</div>
              <div className="w-[30vmax] h-max bg-[#E0E0E0] shadow-sh1 rounded-[0.5rem] max-h-[10vmax] overflow-scroll">
               <Routes >
                  <Route path="/basic/basicScale/1.scale-up-center" element={<ScaleUpCenter />} />
                  <Route path="/basic/basicScale/2.scale-up-top" element={<ScaleUpTop />} />
                  <Route path="/basic/basicScale/3.scale-up-left" element={<ScaleUpLeft />} />
                  <Route path="/basic/basicScale/4.scale-up-right" element={<ScaleUpRight />} />
                  <Route path="/basic/basicScale/5.scale-up-bottom" element={<ScaleUpBottom />} />
                  <Route path="/basic/basicScale/6.scale-up-tl" element={<ScaleUpTL />} />
                  <Route path="/basic/basicScale/7.scale-up-tr" element={<ScaleUpTR />} />
                  <Route path="/basic/basicScale/8.scale-up-bl" element={<ScaleUpBL />} />
                  <Route path="/basic/basicScale/9.scale-up-br" element={<ScaleUpBR />} />
                  <Route path="/basic/basicScale/10.scale-up-wh-center" element={<ScaleWHUpCenter />} />
                  <Route path="/basic/basicScale/11.scale-up-wh-top" element={<ScaleWHUpTop />} />
                  <Route path="/basic/basicScale/12.scale-up-wh-left" element={<ScaleWHUpLeft />} />
                  <Route path="/basic/basicScale/13.scale-up-wh-right" element={<ScaleWHUpRight />} />
                  <Route path="/basic/basicScale/14.scale-up-wh-bottom" element={<ScaleWHUpBottom />} />
                  <Route path="/basic/basicScale/15.scale-down-center" element={<ScaleDownCenter />} />
                  <Route path="/basic/basicScale/16.scale-down-top" element={<ScaleDownTop />} />
                  <Route path="/basic/basicScale/17.scale-down-left" element={<ScaleDownLeft />} />
                  <Route path="/basic/basicScale/18.scale-down-right" element={<ScaleDownRight />} />
                  <Route path="/basic/basicScale/19.scale-down-bottom" element={<ScaleDownBottom />} />
                  <Route path="/basic/basicScale/20.scale-down-tl" element={<ScaleDownTL />} />
                  <Route path="/basic/basicScale/21.scale-down-tr" element={<ScaleDownTR />} />
                  <Route path="/basic/basicScale/22.scale-down-bl" element={<ScaleDownBL />} />
                  <Route path="/basic/basicScale/23.scale-down-br" element={<ScaleDownBR />} />
                  <Route path="/basic/basicScale/24.scale-down-wh-center" element={<ScaleWHDownCenter />} />
                  <Route path="/basic/basicScale/25.scale-down-wh-top" element={<ScaleWHDownTop />} />
                  <Route path="/basic/basicScale/26.scale-down-wh-left" element={<ScaleWHDownLeft />} />
                  <Route path="/basic/basicScale/27.scale-down-wh-right" element={<ScaleWHDownRight />} />
                  <Route path="/basic/basicScale/28.scale-down-wh-bottom" element={<ScaleWHDownBottom />} />

                  <Route path="/basic/basicRotate/1.rotate-center" element={<RotateCenter />} />
                  <Route path="/basic/basicRotate/2.rotate-top" element={<RotateTop />} />
                  <Route path="/basic/basicRotate/3.rotate-left" element={<RotateLeft />} />
                  <Route path="/basic/basicRotate/4.rotate-right" element={<RotateRight />} />
                  <Route path="/basic/basicRotate/5.rotate-bottom" element={<RotateBottom />} />
                  <Route path="/basic/basicRotate/6.rotate-tl" element={<RotateTL />} />
                  <Route path="/basic/basicRotate/7.rotate-tr" element={<RotateTR />} />
                  <Route path="/basic/basicRotate/8.rotate-br" element={<RotateBR />} />
                  <Route path="/basic/basicRotate/9.rotate-bl" element={<RotateBL />} />
                  <Route path="/basic/basicRotate/10.rotate-center-up" element={<RotateCenterUP />} />
                  <Route path="/basic/basicRotate/11.rotate-top-up" element={<RotateTopUP />} />
                  <Route path="/basic/basicRotate/12.rotate-left-up" element={<RotateLeftUP />} />
                  <Route path="/basic/basicRotate/13.rotate-right-up" element={<RotateRightUP />} />
                  <Route path="/basic/basicRotate/14.rotate-bottom-up" element={<RotateBottomUP />} />
                  <Route path="/basic/basicRotate/15.rotate-tl-up" element={<RotateTLUP />} />
                  <Route path="/basic/basicRotate/16.rotate-tr-up" element={<RotateTRUP />} />
                  <Route path="/basic/basicRotate/17.rotate-br-up" element={<RotateBRUP />} />
                  <Route path="/basic/basicRotate/18.rotate-bl-up" element={<RotateBLUP />} />
                  <Route path="/basic/basicRotate/19.rotate-center-down" element={<RotateCenterDown />} />
                  <Route path="/basic/basicRotate/20.rotate-top-down" element={<RotateTopDown />} />
                  <Route path="/basic/basicRotate/21.rotate-left-down" element={<RotateLeftDown />} />
                  <Route path="/basic/basicRotate/22.rotate-right-down" element={<RotateRightDown />} />
                  <Route path="/basic/basicRotate/23.rotate-bottom-down" element={<RotateBottomDown />} />
                  <Route path="/basic/basicRotate/24.rotate-tl-down" element={<RotateTLDown />} />
                  <Route path="/basic/basicRotate/25.rotate-tr-down" element={<RotateTRDown />} />
                  <Route path="/basic/basicRotate/26.rotate-br-down" element={<RotateBRDown />} />
                  <Route path="/basic/basicRotate/27.rotate-bl-down" element={<RotateBLDown />} />

                  <Route path="/basic/basicFlip/1.flip-hor-bottom" element={<FlipHorBottom />} />
                  <Route path="/basic/basicFlip/2.flip-hor-top" element={<FlipHorTop />} />
                  <Route path="/basic/basicFlip/3.flip-ver-left" element={<FlipVerLeft />} />
                  <Route path="/basic/basicFlip/4.flip-ver-right" element={<FlipVerRight />} />
                  <Route path="/basic/basicFlip/5.flip-diag-tr" element={<FlipDiagTR />} />
                  <Route path="/basic/basicFlip/6.flip-diag-bl" element={<FlipDiagBL />} />
                  <Route path="/basic/basicFlip/7.flip-diag-br" element={<FlipDiagBR />} />
                  <Route path="/basic/basicFlip/8.flip-diag-tl" element={<FlipDiagTL />} />
                  <Route path="/basic/basicFlip/9.flip-top" element={<FlipTop />} />
                  <Route path="/basic/basicFlip/10.flip-bottom" element={<FlipBottom />} />
                  <Route path="/basic/basicFlip/11.flip-left" element={<FlipLeft />} />
                  <Route path="/basic/basicFlip/12.flip-right" element={<FlipRight />} />
                  <Route path="/basic/basicFlip/13.flip-hor-bottom-up" element={<FlipHorBottomUP />} />
                  <Route path="/basic/basicFlip/14.flip-hor-top-up" element={<FlipHorTopUP />} />
                  <Route path="/basic/basicFlip/15.flip-ver-left-up" element={<FlipVerLeftUP />} />
                  <Route path="/basic/basicFlip/16.flip-ver-right-up" element={<FlipVerRightUP />} />
                  <Route path="/basic/basicFlip/17.flip-diag-tr-up" element={<FlipDiagTRUP />} />
                  <Route path="/basic/basicFlip/18.flip-diag-bl-up" element={<FlipDiagBLUP />} />
                  <Route path="/basic/basicFlip/19.flip-diag-br-up" element={<FlipDiagBRUP />} />
                  <Route path="/basic/basicFlip/20.flip-diag-tl-up" element={<FlipDiagTLUP />} />
                  <Route path="/basic/basicFlip/21.flip-top-up" element={<FlipTopUP />} />
                  <Route path="/basic/basicFlip/22.flip-bottom-up" element={<FlipBottomUP />} />
                  <Route path="/basic/basicFlip/23.flip-left-up" element={<FlipLeftUP />} />
                  <Route path="/basic/basicFlip/24.flip-right-up" element={<FlipRightUP />} />
                  <Route path="/basic/basicFlip/25.flip-hor-bottom-down" element={<FlipHorBottomDown />} />
                  <Route path="/basic/basicFlip/26.flip-hor-top-down" element={<FlipHorTopDown />} />
                  <Route path="/basic/basicFlip/27.flip-ver-left-down" element={<FlipVerLeftDown />} />
                  <Route path="/basic/basicFlip/28.flip-ver-right-down" element={<FlipVerRightDown />} />
                  <Route path="/basic/basicFlip/29.flip-diag-tr-down" element={<FlipDiagTRDown />} />
                  <Route path="/basic/basicFlip/30.flip-diag-bl-down" element={<FlipDiagBLDown />} />
                  <Route path="/basic/basicFlip/31.flip-diag-br-down" element={<FlipDiagBRDown />} />
                  <Route path="/basic/basicFlip/32.flip-diag-tl-down" element={<FlipDiagTLDown />} />
                  <Route path="/basic/basicFlip/33.flip-top-down" element={<FlipTopDown />} />
                  <Route path="/basic/basicFlip/34.flip-bottom-down" element={<FlipBottomDown />} />
                  <Route path="/basic/basicFlip/35.flip-left-down" element={<FlipLeftDown />} />
                  <Route path="/basic/basicFlip/36.flip-right-down" element={<FlipRightDown />} />

                  <Route path="/basic/basicSwing/1.swing-top-fwd" element={<SwingTopFwd />} />
                  <Route path="/basic/basicSwing/2.swing-top-bck" element={<SwingTopBck />} />
                  <Route path="/basic/basicSwing/3.swing-tr-fwd" element={<SwingTRFwd />} />
                  <Route path="/basic/basicSwing/4.swing-tr-bck" element={<SwingTRBck />} />
                  <Route path="/basic/basicSwing/5.swing-right-fwd" element={<SwingRightFwd />} />
                  <Route path="/basic/basicSwing/6.swing-right-bck" element={<SwingRightBck />} />
                  <Route path="/basic/basicSwing/7.swing-br-fwd" element={<SwingBRFwd />} />
                  <Route path="/basic/basicSwing/8.swing-br-bck" element={<SwingBRBck />} />
                  <Route path="/basic/basicSwing/9.swing-bottom-fwd" element={<SwingBottomFwd />} />
                  <Route path="/basic/basicSwing/10.swing-bottom-bck" element={<SwingBottomBck />} />
                  <Route path="/basic/basicSwing/11.swing-bl-fwd" element={<SwingBLFwd />} />
                  <Route path="/basic/basicSwing/12.swing-bl-bck" element={<SwingBLBck />} />
                  <Route path="/basic/basicSwing/13.swing-left-fwd" element={<SwingLeftFwd />} />
                  <Route path="/basic/basicSwing/14.swing-left-bck" element={<SwingLeftBck />} />
                  <Route path="/basic/basicSwing/15.swing-tl-fwd" element={<SwingTLFwd />} />
                  <Route path="/basic/basicSwing/16.swing-tl-bck" element={<SwingTLBck />} />

                  <Route path="/basic/basicSlide/1.slide-top" element={<SlideTop />} />
                  <Route path="/basic/basicSlide/2.slide-tr" element={<SlideTR />} />
                  <Route path="/basic/basicSlide/3.slide-right" element={<SlideRight />} />
                  <Route path="/basic/basicSlide/4.slide-br" element={<SlideBR />} />
                  <Route path="/basic/basicSlide/5.slide-bottom" element={<SlideBottom />} />
                  <Route path="/basic/basicSlide/6.slide-bl" element={<SlideBL />} />
                  <Route path="/basic/basicSlide/7.slide-left" element={<SlideLeft />} />
                  <Route path="/basic/basicSlide/8.slide-tl" element={<SlideTL />} />
                  <Route path="/basic/basicSlide/9.slide-top-fwd" element={<SlideTopFwd />} />
                  <Route path="/basic/basicSlide/10.slide-tr-fwd" element={<SlideTRFwd />} />
                  <Route path="/basic/basicSlide/11.slide-right-fwd" element={<SlideRightFwd />} />
                  <Route path="/basic/basicSlide/12.slide-br-fwd" element={<SlideBRFwd />} />
                  <Route path="/basic/basicSlide/13.slide-bottom-fwd" element={<SlideBottomFwd />} />
                  <Route path="/basic/basicSlide/14.slide-bl-fwd" element={<SlideBLFwd />} />
                  <Route path="/basic/basicSlide/15.slide-left-fwd" element={<SlideLeftFwd />} />
                  <Route path="/basic/basicSlide/16.slide-tl-fwd" element={<SlideTLFwd />} />
                  <Route path="/basic/basicSlide/17.slide-top-bck" element={<SlideTopBck />} />
                  <Route path="/basic/basicSlide/18.slide-tr-bck" element={<SlideTRBck />} />
                  <Route path="/basic/basicSlide/19.slide-right-bck" element={<SlideRightBck />} />
                  <Route path="/basic/basicSlide/20.slide-br-bck" element={<SlideBRBck />} />
                  <Route path="/basic/basicSlide/21.slide-bottom-bck" element={<SlideBottomBck />} />
                  <Route path="/basic/basicSlide/22.slide-bl-bck" element={<SlideBLBck />} />
                  <Route path="/basic/basicSlide/23.slide-left-bck" element={<SlideLeftBck />} />
                  <Route path="/basic/basicSlide/24.slide-tl-bck" element={<SlideTLBck />} />
                  <Route path="/basic/basicSlide/25.slide-top-rotate" element={<SlideTopRotate />} />
                  <Route path="/basic/basicSlide/26.slide-right-rotate" element={<SlideRightRotate />} />
                  <Route path="/basic/basicSlide/27.slide-bottom-rotate" element={<SlideBottomRotate />} />
                  <Route path="/basic/basicSlide/28.slide-left-rotate" element={<SlideLeftRotate />} />

                  <Route path="/basic/basicShadow/1.shadow-top" element={<ShadowTop />} />
                  <Route path="/basic/basicShadow/2.shadow-tr" element={<ShadowTR />} />
                  <Route path="/basic/basicShadow/3.shadow-right" element={<ShadowRight />} />
                  <Route path="/basic/basicShadow/4.shadow-br" element={<ShadowBR />} />
                  <Route path="/basic/basicShadow/5.shadow-bottom" element={<ShadowBottom />} />
                  <Route path="/basic/basicShadow/6.shadow-bl" element={<ShadowBL />} />
                  <Route path="/basic/basicShadow/7.shadow-left" element={<ShadowLeft />} />
                  <Route path="/basic/basicShadow/8.shadow-tl" element={<ShadowTL />} />
                  <Route path="/basic/basicShadow/9.shadow-tr-pop" element={<ShadowTRPOP />} />
                  <Route path="/basic/basicShadow/10.shadow-br-pop" element={<ShadowBRPOP />} />
                  <Route path="/basic/basicShadow/11.shadow-bl-pop" element={<ShadowBLPOP />} />
                  <Route path="/basic/basicShadow/12.shadow-tl-pop" element={<ShadowTLPOP />} />
                  <Route path="/basic/basicShadow/13.shadow-a" element={<Shadow1 />} />
                  <Route path="/basic/basicShadow/14.shadow-b" element={<Shadow2 />} />
                  <Route path="/basic/basicShadow/15.shadow-c" element={<Shadow3 />} />
                  <Route path="/basic/basicShadow/16.shadow-d" element={<Shadow4 />} />

                  <Route path="/text/textScale/1.scale-in-center" element={<ScaleInCenter />} />
                  <Route path="/text/textScale/2.scale-in-up" element={<ScaleInUp />} />
                  <Route path="/text/textScale/3.scale-in-down" element={<ScaleInDown />} />
                  <Route path="/text/textScale/4.scale-in-left" element={<ScaleInLeft />} />
                  <Route path="/text/textScale/5.scale-in-right" element={<ScaleInRight />} />
                  <Route path="/text/textScale/6.scale-out-center" element={<ScaleOutCenter />} />
                  <Route path="/text/textScale/7.scale-out-up" element={<ScaleOutUp />} />
                  <Route path="/text/textScale/8.scale-out-down" element={<ScaleOutDown />} />
                  <Route path="/text/textScale/9.scale-out-left" element={<ScaleOutLeft />} />
                  <Route path="/text/textScale/10.scale-out-right" element={<ScaleOutRight />} />

                  <Route path="/text/textTracking/1.tracking-in-expand" element={<TrackingInExpand />} />
                  <Route path="/text/textTracking/2.tracking-in-expand-fwd" element={<TrackingInExpandFwd />} />
                  <Route path="/text/textTracking/3.tracking-in-expand-fwd-top" element={<TrackingInExpandFwdTop />} />
                  <Route path="/text/textTracking/4.tracking-in-expand-fwd-bottom" element={<TrackingInExpandFwdBottom />} />
                  <Route path="/text/textTracking/5.tracking-in-contract" element={<TrackingInContract />} />
                  <Route path="/text/textTracking/6.tracking-in-contract-bck" element={<TrackingInContractBck />} />
                  <Route path="/text/textTracking/7.tracking-in-contract-bck-top" element={<TrackingInContractBckTop />} />
                  <Route path="/text/textTracking/8.tracking-in-contract-bck-bottom" element={<TrackingInContractBckBottom />} />

                  <Route path="/text/textBlur/1.focus-in" element={<FocusIn />} />
                  <Route path="/text/textBlur/2.focus-in-expand" element={<FocusInExpand />} />
                  <Route path="/text/textBlur/3.focus-in-expand-fwd" element={<FocusInExpandFwd />} />
                  <Route path="/text/textBlur/4.focus-in-contract" element={<FocusInContract />} />
                  <Route path="/text/textBlur/5.focus-in-contract-bck" element={<FocusInContractBck />} />

                  <Route path="/text/textShadow/1.text-shd-center" element={<TextShdCenter />} />
                  <Route path="/text/textShadow/2.text-shd-top" element={<TextShdTop />} />
                  <Route path="/text/textShadow/3.text-shd-tr" element={<TextShdTR />} />
                  <Route path="/text/textShadow/4.text-shd-right" element={<TextShdRight />} />
                  <Route path="/text/textShadow/5.text-shd-br" element={<TextShdBR />} />
                  <Route path="/text/textShadow/6.text-shd-bottom" element={<TextShdBottom />} />
                  <Route path="/text/textShadow/7.text-shd-bl" element={<TextShdBL />} />
                  <Route path="/text/textShadow/8.text-shd-left" element={<TextShdLeft />} />
                  <Route path="/text/textShadow/9.text-shd-tl" element={<TextShdTL />} />

                  <Route path="/text/textPop-up/1.text-pop-up-top" element={<TextPopUpTop />} />
                  <Route path="/text/textPop-up/2.text-pop-up-tr" element={<TextPopUpTR />} />
                  <Route path="/text/textPop-up/3.text-pop-up-right" element={<TextPopUpRight />} />
                  <Route path="/text/textPop-up/4.text-pop-up-br" element={<TextPopUpBR />} />
                  <Route path="/text/textPop-up/5.text-pop-up-bottom" element={<TextPopUpBottom />} />
                  <Route path="/text/textPop-up/6.text-pop-up-bl" element={<TextPopUpBL />} />
                  <Route path="/text/textPop-up/7.text-pop-up-left" element={<TextPopUpLeft />} />
                  <Route path="/text/textPop-up/8.text-pop-up-tl" element={<TextPopUpTL />} />

                  <Route path="/text/textJello/1.text-jello-x" element={<TextJelloX />} />
                  <Route path="/text/textJello/2.text-jello-y" element={<TextJelloY />} />
                  <Route path="/text/textJello/3.text-jello-diag-a" element={<TextJelloDiag1 />} />
                  <Route path="/text/textJello/4.text-jello-diag-b" element={<TextJelloDiag2 />} />

                  <Route path="/attention/Vibrate/1.vibrate-a" element={<Vibrate1 />} />
                  <Route path="/attention/Vibrate/2.vibrate-b" element={<Vibrate2 />} />
                  <Route path="/attention/Vibrate/3.vibrate-c" element={<Vibrate3 />} />

                  <Route path="/attention/Shake/1.shake-top" element={<ShakeTop />} />
                  <Route path="/attention/Shake/2.shake-bottom" element={<ShakeBottom />} />
                  <Route path="/attention/Shake/3.shake-left" element={<ShakeLeft />} />
                  <Route path="/attention/Shake/4.shake-right" element={<ShakeRight />} />
                  <Route path="/attention/Shake/5.shake-lr" element={<ShakeLR />} />

                  <Route path="/attention/Bounce/1.bounce-top" element={<BounceTop />} />
                  <Route path="/attention/Bounce/2.bounce-bottom" element={<BounceBottom />} />
                  <Route path="/attention/Bounce/3.bounce-left" element={<BounceLeft />} />
                  <Route path="/attention/Bounce/4.bounce-right" element={<BounceRight />} />

                  <Route path="/attention/Pulsate/1.pulsate-a" element={<Pulsate1 />} />
                  <Route path="/attention/Pulsate/2.pulsate-b" element={<Pulsate2 />} />
                  <Route path="/attention/Pulsate/3.pulsate-c" element={<Pulsate3 />} />
                  <Route path="/attention/Pulsate/4.pulsate-d" element={<Pulsate4 />} />

                  <Route path="/attention/Blink/1.blink-a" element={<Blink1 />} />
                  <Route path="/attention/Blink/2.blink-b" element={<Blink2 />} />
               </Routes>
               </div>
           </div>
        </>
    );
};

const ClassAnim = () => {

    return(
        <>
          <pre className="
          flex
          flex-col
          w-[30vmax]
          h-max
          p-[1rem]
          bg-[#E0E0E0]
          overflow-scroll
          rounded-[.5rem]
          shadow-sh1
          ">
            <p>.<span className="animationClass">scale-up-center</span>&nbsp;{'{'}</p>
            <div className="flex">
                <p className="pl-[1rem]">animation:&nbsp;
                <span className="animationName">animName</span>&nbsp;
                <span className="animationDuration">0.6s</span>&nbsp;
                <span className="animationTransition">ease</span>&nbsp;
                <span className="animationDirection">normal</span>&nbsp;
                <span className="animationDelay">0s</span>&nbsp;
                <span className="animationType">forwards</span>&nbsp;
                <span className="isInfinite"></span>
                ;
                </p>
            </div>
            <p>{'}'}</p>
          </pre>
        </>
    );
};

const CodeIcon = () => {
    return(
        <>
          <div className="
          w-[5vmax]
          h-[2vmax]
          shadow-sh1
          rounded-full
          flex
          justify-center
          items-center
          relative
          z-[900]
          bg-white
          text-txtColor2
          font-semibold
          text-[1.2vmax]
          cursor-pointer
          ">
            <p>{'</>'}</p>
          </div>
        </>
    );
};

export default ShowCode;