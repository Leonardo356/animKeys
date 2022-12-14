import React from "react";
export function ScaleUpCenter() {
    return(
        <>
          <pre className="w-max ScaleUpCenter h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleUpCenter {
  from { transform: scale(0.2); }
  to {transform: scale(1);}
};`}
          </pre>
        </>
    );
};

export function ScaleUpTop() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleUpTop {
    from { 
        transform: scale(0.2); 
        transform-origin: 50% 0%;
    }
    to {
        transform: scale(1);
        transform-origin: 50% 0%;
    }
};`}
          </pre>
        </>
    );
};

export function ScaleUpLeft() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleUpLeft {
    from { 
        transform: scale(0.2); 
        transform-origin: 0% 50%;
    }
    to {
        transform: scale(1);
        transform-origin: 0% 50%;
    }
};`}
          </pre>
        </>
    );
};

export function ScaleUpRight() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleUpRight {
    from { 
        transform: scale(0.2); 
        transform-origin: 100% 50%;
    }
    to {
        transform: scale(1);
        transform-origin: 100% 50%;
    }
};`}
          </pre>
        </>
    );
};

export function ScaleUpBottom() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleUpBottom {
    from { 
        transform: scale(0.2); 
        transform-origin: 50% 100%;
    }
    to {
        transform: scale(1);
        transform-origin: 50% 100%;
    }
};`}
          </pre>
        </>
    );
};

export function ScaleUpTL() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleUpTL {
    from { 
        transform: scale(0.2); 
        transform-origin: 0% 0%;
    }
    to {
        transform: scale(1);
        transform-origin: 0% 0%;
    }
};`}
          </pre>
        </>
    );
};

export function ScaleUpTR() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleUpTR {
    from { 
        transform: scale(0.2); 
        transform-origin: 100% -0%;
    }
    to {
        transform: scale(1);
        transform-origin: 100% -0%;
    }
};`}
          </pre>
        </>
    );
};

export function ScaleUpBL() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleUpBL {
    from { 
        transform: scale(0.2); 
        transform-origin: -0% 100%;
    }
    to {
        transform: scale(1);
        transform-origin: -0% 100%;
    }
};`}
          </pre>
        </>
    );
};

export function ScaleUpBR() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleUpBR {
    from { 
        transform: scale(0.2); 
        transform-origin: 100% 100%;
    }
    to {
        transform: scale(1);
        transform-origin: 100% 100%;
    }
};`}
          </pre>
        </>
    );
};

export function ScaleWHUpCenter() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleWHUpCenter {
    from { 
        transform: scaleX(0.2);
        transform-origin: 50% 50%;
    }
    to {
        transform: scaleX(1);
        transform-origin: 50% 50%;
    }
};`}
          </pre>
        </>
    );
};

export function scaleWHUpTop() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleWHUpTop {
    from { 
        transform: scaleY(0.2);
        transform-origin: 50% 0%;
    }
    to {
        transform: scaleY(1);
       transform-origin: 50% 0%;
    }
};`}
          </pre>
        </>
    );
};

export function scaleWHUpRight() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleWHUpRight {
    from { 
        transform: scaleX(0.2);
        transform-origin: 100% 50%;
    }
    to {
        transform: scaleX(1);
        transform-origin: 100% 50%;
    }
};`}
          </pre>
        </>
    );
};

export function scaleWHUpLeft() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleWHUpLeft {
    from { 
        transform: scaleX(0.2);
        transform-origin: 0% 50%;
    }
    to {
        transform: scaleX(1);
        transform-origin: 0% 50%;
    }
};`}
          </pre>
        </>
    );
};

export function scaleWHUpBottom() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleWHUpBottom {
    from { 
        transform: scaleY(0.2);
        transform-origin: 50% 100%;
    }
    to {
        transform: scaleY(1);
        transform-origin: 50% 100%;
    }
};`}
          </pre>
        </>
    );
};

export function scaleDownCenter() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleDownCenter {
    from { transform: scale(1); }
    to {transform: scale(0.2);}
};`}
          </pre>
        </>
    );
};

export function scaleDownTop() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleDownTop {
    from { 
        transform: scale(1); 
        transform-origin: 50% 0%;
    }
    to {
        transform: scale(0.2);
        transform-origin: 50% 0%;
    }
};`}
          </pre>
        </>
    );
};

export function scaleDownLeft() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleDownLeft {
    from { 
        transform: scale(1); 
        transform-origin: 0% 50%;
    }
    to {
        transform: scale(0.2);
        transform-origin: 0% 50%;
    }
};`}
          </pre>
        </>
    );
};

export function scaleDownRight() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleDownRight {
    from { 
        transform: scale(1); 
        transform-origin: 100% 50%;
    }
    to {
        transform: scale(0.2);
        transform-origin: 100% 50%;
    }
};`}
          </pre>
        </>
    );
};

export function scaleDownBottom() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleDownBottom {
    from { 
        transform: scale(1); 
        transform-origin: 50% 100%;
    }
    to {
        transform: scale(0.2);
        transform-origin: 50% 100%;
    }
};`}
          </pre>
        </>
    );
};

export function scaleDownTL() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleDownTL {
    from { 
        transform: scale(1); 
        transform-origin: 0% 0%;
    }
    to {
        transform: scale(0.2);
        transform-origin: 0% 0%;
    }
};`}
          </pre>
        </>
    );
};

export function scaleDownTR() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleDownTR {
    from { 
        transform: scale(1); 
        transform-origin: 100% -0%;
    }
    to {
        transform: scale(0.2);
        transform-origin: 100% -0%;
    }
};`}
          </pre>
        </>
    );
};

export function scaleDownBL() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleDownBL {
    from { 
        transform: scale(1); 
        transform-origin: -0% 100%;
    }
    to {
        transform: scale(0.2);
        transform-origin: -0% 100%;
    }
};`}
          </pre>
        </>
    );
};

export function scaleDownBR() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleDownBR {
    from { 
        transform: scale(1); 
        transform-origin: 100% 100%;
    }
    to {
        transform: scale(0.2);
        transform-origin: 100% 100%;
    }
};`}
          </pre>
        </>
    );
};

export function scaleWHDownCenter() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleWHDownCenter {
    from { 
        transform: scaleX(1);
        transform-origin: 50% 50%;
    }
    to {
        transform: scaleX(0.2);
        transform-origin: 50% 50%;
    }
};`}
          </pre>
        </>
    );
};

export function scaleWHDownTop() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleWHDownTop {
    from { 
        transform: scaleY(1);
        transform-origin: 50% 0%;
    }
    to {
        transform: scaleY(0.2);
       transform-origin: 50% 0%;
    }
};`}
          </pre>
        </>
    );
};

export function scaleWHDownRight() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleWHDownRight {
    from { 
        transform: scaleX(1);
        transform-origin: 100% 50%;
    }
    to {
        transform: scaleX(0.2);
        transform-origin: 100% 50%;
    }
};`}
          </pre>
        </>
    );
};

export function scaleWHDownLeft() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleWHDownLeft {
    from { 
        transform: scaleX(1);
        transform-origin: 0% 50%;
    }
    to {
        transform: scaleX(0.2);
        transform-origin: 0% 50%;
    }
};`}
          </pre>
        </>
    );
};

export function scaleWHDownBottom() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleWHDownBottom {
    from { 
        transform: scaleY(1);
        transform-origin: 50% 100%;
    }
    to {
        transform: scaleY(0.2);
        transform-origin: 50% 100%;
    }
};`}
          </pre>
        </>
    );
};


export function rotateCenter() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes rotateCenter {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
};`}
          </pre>
        </>
    );
};

export function rotateTop() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes rotateTop {
    from {
        transform: rotate(0deg);
        transform-origin: 50% 0%;
    }
    to {
        transform: rotate(360deg);
        transform-origin: 50% 0%;
    }
};`}
          </pre>
        </>
    );
};

export function rotateLeft() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes rotateLeft {
    from {
        transform: rotate(0deg);
        transform-origin: 0% 50%;
    }
    to {
        transform: rotate(360deg);
        transform-origin: 0% 50%;
    }
};`}
          </pre>
        </>
    );
};

export function rotateRight() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes rotateRight {
    from {
        transform: rotate(0deg);
        transform-origin: 100% 50%;
    }
    to {
        transform: rotate(360deg);
        transform-origin: 100% 50%;
    }
};`}
          </pre>
        </>
    );
};

export function rotateBottom() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes rotateBottom {
    from {
        transform: rotate(0deg);
        transform-origin: 50% 100%;
    }
    to {
        transform: rotate(360deg);
        transform-origin: 50% 100%;
    }
};`}
          </pre>
        </>
    );
};

export function rotateTL() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes rotateTL {
    from {
        transform: rotate(0deg);
        transform-origin: 0% 0%;
    }
    to {
        transform: rotate(360deg);
        transform-origin: 0% 0%;
    }
};`}
          </pre>
        </>
    );
};

export function rotateTR() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes rotateTR {
    from {
        transform: rotate(0deg);
        transform-origin: 100% 0%;
    }
    to {
        transform: rotate(360deg);
        transform-origin: 100% 0%;
    }
};`}
          </pre>
        </>
    );
};

export function rotateBR() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes rotateBR {
    from {
        transform: rotate(0deg);
        transform-origin: 100% 100%;
    }
    to {
        transform: rotate(360deg);
        transform-origin: 100% 100%;
    }
};`}
          </pre>
        </>
    );
};

export function rotateBL() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes rotateBL {
    from {
        transform: rotate(0deg);
        transform-origin: 0% 100%;
    }
    to {
        transform: rotate(360deg);
        transform-origin: 0% 100%;
    }
};`}
          </pre>
        </>
    );
};

export function rotateCenterUP() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes rotateCenterUP {
    from {transform: rotate(0deg) scale(0.2);}
    to {transform: rotate(360deg) scale(1);}
};`}
          </pre>
        </>
    );
};

export function rotateTopUP() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes rotateTopUP {
    from {
        transform: rotate(0deg) scale(0.2);
        transform-origin: 50% 0%;
    }
    to {
        transform: rotate(360deg) scale(1);
        transform-origin: 50% 0%;
    }
};`}
          </pre>
        </>
    );
};

export function rotateLeftUP() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes rotateLeftUP {
    from {
        transform: rotate(0deg) scale(0.2);
        transform-origin: 0% 50%;
    }
    to {
        transform: rotate(360deg) scale(1);
        transform-origin: 0% 50%;
    }
};`}
          </pre>
        </>
    );
};

export function rotateRightUP() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes rotateRightUP {
    from {
        transform: rotate(0deg) scale(0.2);
        transform-origin: 100% 50%;
    }
    to {
        transform: rotate(360deg) scale(1);
        transform-origin: 100% 50%;
    }
};`}
          </pre>
        </>
    );
};

export function rotateBottomUP() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes rotateBottomUP {
    from {
        transform: rotate(0deg) scale(0.2);
        transform-origin: 50% 100%;
    }
    to {
        transform: rotate(360deg) scale(1);
        transform-origin: 50% 100%;
    }
};`}
          </pre>
        </>
    );
};

export function rotateTLUP() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes rotateTLUP {
    from {
        transform: rotate(0deg) scale(0.2);
        transform-origin: 0% 0%;
    }
    to {
        transform: rotate(360deg) scale(1);
        transform-origin: 0% 0%;
    }
};`}
          </pre>
        </>
    );
};

export function rotateTRUP() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes rotateTRUP {
    from {
        transform: rotate(0deg) scale(0.2);
        transform-origin: 100% 0%;
    }
    to {
        transform: rotate(360deg) scale(1);
        transform-origin: 100% 0%;
    }
};`}
          </pre>
        </>
    );
};

export function rotateBRUP() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes rotateBRUP {
    from {
        transform: rotate(0deg) scale(0.2);
        transform-origin: 100% 100%;
    }
    to {
        transform: rotate(360deg) scale(1);
        transform-origin: 100% 100%;
    }
};`}
          </pre>
        </>
    );
};

export function rotateBLUP() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes rotateBLUP {
    from {
        transform: rotate(0deg) scale(0.2);
        transform-origin: 0% 100%;
    }
    to {
        transform: rotate(360deg) scale(1);
        transform-origin: 0% 100%;
    }
};`}
          </pre>
        </>
    );
};

export function rotateCenterDown() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes rotateCenterDown {
    from {transform: rotate(0deg) scale(1);}
    to {transform: rotate(360deg) scale(0.2);}
};`}
          </pre>
        </>
    );
};

export function rotateTopDown() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes rotateTopDown {
    from {
        transform: rotate(0deg) scale(1);
        transform-origin: 50% 0%;
    }
    to {
        transform: rotate(360deg) scale(0.2);
        transform-origin: 50% 0%;
    }
};`}
          </pre>
        </>
    );
};

export function rotateLeftDown() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes rotateLeftDown {
    from {
        transform: rotate(0deg) scale(1);
        transform-origin: 0% 50%;
    }
    to {
        transform: rotate(360deg) scale(0.2);
        transform-origin: 0% 50%;
    }
};`}
          </pre>
        </>
    );
};

export function rotateRightDown() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes rotateRightDown {
    from {
        transform: rotate(0deg) scale(1);
        transform-origin: 100% 50%;
    }
    to {
        transform: rotate(360deg) scale(0.2);
        transform-origin: 100% 50%;
    }
};`}
          </pre>
        </>
    );
};

export function rotateBottomDown() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes rotateBottomDown {
    from {
        transform: rotate(0deg) scale(1);
        transform-origin: 50% 100%;
    }
    to {
        transform: rotate(360deg) scale(0.2);
        transform-origin: 50% 100%;
    }
};`}
          </pre>
        </>
    );
};

export function rotateTLDown() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes rotateTLDown {
    from {
        transform: rotate(0deg) scale(1);
        transform-origin: 0% 0%;
    }
    to {
        transform: rotate(360deg) scale(0.2);
        transform-origin: 0% 0%;
    }
};`}
          </pre>
        </>
    );
};

export function rotateTRDown() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes rotateTRDown {
    from {
        transform: rotate(0deg) scale(1);
        transform-origin: 100% 0%;
    }
    to {
        transform: rotate(360deg) scale(0.2);
        transform-origin: 100% 0%;
    }
};`}
          </pre>
        </>
    );
};

export function rotateBRDown() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes rotateBRDown {
    from {
        transform: rotate(0deg) scale(1);
        transform-origin: 100% 100%;
    }
    to {
        transform: rotate(360deg) scale(0.2);
        transform-origin: 100% 100%;
    }
};`}
          </pre>
        </>
    );
};

export function rotateBLDown() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes rotateBLDown {
    from {
        transform: rotate(0deg) scale(1);
        transform-origin: 0% 100%;
    }
    to {
        transform: rotate(360deg) scale(0.2);
        transform-origin: 0% 100%;
    }
};`}
          </pre>
        </>
    );
};


export function flipHorBottom() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes flipHorBottom {
    from {
        transform: rotateX(0deg);
    }

    to {
        transform: rotateX(-180deg);
    }
};`}
          </pre>
        </>
    );
};

export function flipHorTop() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes flipHorTop {
    from {
        transform: rotateX(0deg);
    }

    to {
        transform: rotateX(180deg);
    }
};`}
          </pre>
        </>
    );
};

export function flipVerLeft() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes flipVerLeft {
    from {
        transform: rotateY(0deg);
    }

    to {
        transform: rotateY(-180deg);
    }
};`}
          </pre>
        </>
    );
};

export function flipVerRight() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes flipVerRight {
    from {
        transform: rotateY(0deg);
    }

    to {
        transform: rotateY(180deg);
    }
};`}
          </pre>
        </>
    );
};

export function flipDiagTR() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes flipDiagTR {
    0% {
      transform: rotate3d(1, 1, 0, 0deg);
    }
    100% {
      transform: rotate3d(1, 1, 0, 180deg);
    }
};`}
          </pre>
        </>
    );
};

export function flipDiagBL() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes flipDiagBL {
    0% {
      transform: rotate3d(1, 1, 0, 0deg);
    }
    100% {
      transform: rotate3d(1, 1, 0, -180deg);
    }
};`}
          </pre>
        </>
    );
};

export function flipDiagBR() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes flipDiagBR {
    0% {
      transform: rotate3d(-1, 1, 0, 0deg);
    }
    100% {
      transform: rotate3d(-1, 1, 0, 180deg);
    }
};`}
          </pre>
        </>
    );
};

export function flipDiagTL() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes flipDiagTL {
    0% {
      transform: rotate3d(-1, 1, 0, 0deg);
    }
    100% {
      transform: rotate3d(-1, 1, 0, -180deg);
    }
};`}
          </pre>
        </>
    );
};

export function flipTop() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes flipTop {
    0% {
        transform: translateY(0) rotateX(0);
        transform-origin: 50% 0%;
      }
      100% {
        transform: translateY(-100%) rotateX(-180deg);
        transform-origin: 50% 100%;
      }
};`}
          </pre>
        </>
    );
};

export function flipBottom() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes flipBottom {
    0% {
        transform: translateY(0) rotateX(0);
        transform-origin: 50% 100%;
      }

      100% {
        transform: translateY(100%) rotateX(180deg);
        transform-origin: 50% 0%;
      }
};`}
          </pre>
        </>
    );
};

export function flipLeft() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes flipLeft {
    0% {
        transform: translateX(0) rotateY(0);
        transform-origin: 0% 50%;
      }
      100% {
        transform: translateX(-100%) rotateY(180deg);
        transform-origin: 100% 0%;
      }
};`}
          </pre>
        </>
    );
};

export function flipRight() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes flipRight {
    0% {
      transform: translateX(0) rotateY(0);
      transform-origin: 100% 50%;
    }
    100% {
      transform: translateX(100%) rotateY(-180deg);
      transform-origin: 0% 50%;
    }
};`}
          </pre>
        </>
    );
};

export function flipHorBottomUP() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes flipHorBottomUP {
    0% {
        transform: rotateX(0deg) scale(1);
    }

    50% {
        transform: scale(1.8) rotateX(-90deg);
    }

    100% {
        transform: scale(1) rotateX(-180deg);
    }
};`}
          </pre>
        </>
    );
};

export function flipHorTopUP() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes flipHorTopUP {
    0% {
        transform: rotateX(0deg) scale(1);
    }

    50% {
        transform: rotateX(90deg) scale(1.8);
    }

    100% {
        transform: rotateX(180deg) scale(1);
    }
};`}
          </pre>
        </>
    );
};

export function flipVerLeftUP() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes flipVerLeftUP {
    0% {
        transform: rotateY(0deg) scale(1);
    }

    50% {
        transform: rotateY(-90deg) scale(1.8);
    }

    to {
        transform: rotateY(-180deg) scale(1);
    }
};`}
          </pre>
        </>
    );
};

export function flipVerRightUP() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes flipVerRightUP {
    0% {
        transform: rotateY(0deg) scale(1);
    }

    50% {
        transform: rotateY(90deg) scale(1.8);
    }

    100% {
        transform: rotateY(180deg) scale(1);
    }
};`}
          </pre>
        </>
    );
};

export function flipDiagTRUP() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes flipDiagTRUP {
    0% {
      transform: rotate3d(1, 1, 0, 0deg) scale(1);
    }

    50% {
        transform: rotate3d(1, 1, 0, 90deg) scale(1.8);  
    }

    100% {
      transform: rotate3d(1, 1, 0, 180deg) scale(1);
    }
};`}
          </pre>
        </>
    );
};

export function flipDiagBLUP() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes flipDiagBLUP {
    0% {
      transform: rotate3d(1, 1, 0, 0deg) scale(1);
    }

    50% {
        transform: rotate3d(1, 1, 0, -90deg) scale(1.8);
    }

    100% {
      transform: rotate3d(1, 1, 0, -180deg) scale(1);
    }
};`}
          </pre>
        </>
    );
};

export function flipDiagBRUP() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes flipDiagBRUP {
    0% {
      transform: rotate3d(-1, 1, 0, 0deg) scale(1);
    }

    50% {
        transform: rotate3d(-1, 1, 0, 90deg) scale(1.8);
    }

    100% {
      transform: rotate3d(-1, 1, 0, 180deg) scale(1);
    }
};`}
          </pre>
        </>
    );
};

export function flipDiagTLUP() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes flipDiagTLUP {
    0% {
      transform: rotate3d(-1, 1, 0, 0deg) scale(1);
    }

    50% {
        transform: rotate3d(-1, 1, 0, -90deg) scale(1.8);
    }

    100% {
      transform: rotate3d(-1, 1, 0, -180deg) scale(1);
    }
};`}
          </pre>
        </>
    );
};

export function flipTopUP() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes flipTopUP {
    0% {
        transform: translateY(0) translateZ(0) rotateX(0);
        transform-origin: 50% 0%;
      }
      100% {
        transform: translateY(-100%) translateZ(560px) rotateX(-180deg);
        transform-origin: 50% 100%;
      }
};`}
          </pre>
        </>
    );
};

export function flipBottomUP() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes flipBottomUP {
    0% {
        transform: translateY(0) translateZ(0) rotateX(0);
        transform-origin: 50% 100%;
      }
      100% {
        transform: translateY(100%) translateZ(560px) rotateX(180deg);
        transform-origin: 50% 0%;
      }
};`}
          </pre>
        </>
    );
};

export function flipLeftUP() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes flipLeftUP {
    0% {
        transform: translateX(0) translateZ(0) rotateY(0);
        transform-origin: 0% 50%;
      }
      100% {
        transform: translateX(-100%) translateZ(560px) rotateY(180deg);
        transform-origin: 100% 0%;
      }
};`}
          </pre>
        </>
    );
};

export function flipRightUP() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes flipRightUP {
    0% {
      transform: translateX(0) translateZ(0) rotateY(0);
      transform-origin: 100% 50%;
    }
    100% {
      transform: translateX(100%) translateZ(560px) rotateY(-180deg);
      transform-origin: 0% 50%;
    }
};`}
          </pre>
        </>
    );
};

export function flipHorBottomDown() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes flipHorBottomDown {
    0% {
        transform: rotateX(0deg) scale(1);
    }

    50% {
        transform: rotateX(-90deg) scale(0.2);
    }

    100% {
        transform: rotateX(-180deg) scale(1);
    }
};`}
          </pre>
        </>
    );
};

export function flipHorTopDown() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes flipHorTopDown {
    0% {
        transform: rotateX(0deg) scale(1);
    }

    50% {
        transform: rotateX(90deg) scale(0.2);
    }

    100% {
        transform: rotateX(180deg) scale(1);
    }
};`}
          </pre>
        </>
    );
};

export function flipVerLeftDown() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes flipVerLeftDown {
    0% {
        transform: rotateY(0deg) scale(1);
    }

    50% {
        transform: rotateY(-90deg) scale(0.2);
    }

    100% {
        transform: rotateY(-180deg) scale(1);
    }
};`}
          </pre>
        </>
    );
};

export function flipVerRightDown() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes flipVerRightDown {
    0% {
        transform: rotateY(0deg) scale(1);
    }

    50% {
        transform: rotateY(90deg) scale(0.2);
    }

    100% {
        transform: rotateY(180deg) scale(1);
    }
};`}
          </pre>
        </>
    );
};

export function flipDiagTRDown() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes flipDiagTRDown {
    0% {
      transform: rotate3d(1, 1, 0, 0deg) scale(1);
    }

    50% {
        transform: rotate3d(1, 1, 0, 90deg) scale(0.2);
    }

    100% {
      transform: rotate3d(1, 1, 0, 180deg) scale(1);
    }
};`}
          </pre>
        </>
    );
};

export function flipDiagBLDown() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes flipDiagBLDown {
    0% {
      transform: rotate3d(1, 1, 0, 0deg) scale(1);
    }

    50% {
        transform: rotate3d(1, 1, 0, -90deg) scale(0.2);
    }

    100% {
      transform: rotate3d(1, 1, 0, -180deg) scale(1);
    }
};`}
          </pre>
        </>
    );
};

export function flipDiagBRDown() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes flipDiagBRDown {
    0% {
      transform: rotate3d(-1, 1, 0, 0deg) scale(1);
    }

    50% {
        transform: rotate3d(-1, 1, 0, 90deg) scale(0.2);
    }

    100% {
      transform: rotate3d(-1, 1, 0, 180deg) scale(1);
    }
};`}
          </pre>
        </>
    );
};

export function flipDiagTLDown() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes flipDiagTLDown {
    0% {
      transform: rotate3d(-1, 1, 0, 0deg) scale(1);
    }

    50% {
        transform: rotate3d(-1, 1, 0, -90deg) scale(0.2);
    }

    100% {
      transform: rotate3d(-1, 1, 0, -180deg) scale(1);
    }
};`}
          </pre>
        </>
    );
};

export function flipTopDown() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes flipTopDown {
    0% {
        transform: translateY(0) translateZ(0) rotateX(0);
        transform-origin: 50% 0%;
      }
      100% {
        transform: translateY(-100%) translateZ(-560px) rotateX(180deg);
        transform-origin: 50% 100%;
      }
};`}
          </pre>
        </>
    );
};

export function flipBottomDown() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes flipBottomDown {
    0% {
        transform: translateY(0) translateZ(0) rotateX(0);
        transform-origin: 50% 100%;
      }
      100% {
        transform: translateY(100%) translateZ(-560px) rotateX(-180deg);
        transform-origin: 50% 0%;
      }
};`}
          </pre>
        </>
    );
};

export function flipLeftDown() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes flipLeftDown {
    0% {
        transform: translateX(0) translateZ(0) rotateY(0);
        transform-origin: 0% 50%;
      }
      100% {
        transform: translateX(-100%) translateZ(-560px) rotateY(-180deg);
        transform-origin: 100% 0%;
      }
};`}
          </pre>
        </>
    );
};

export function flipRightDown() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes flipRightDown {
    0% {
      transform: translateX(0) translateZ(0) rotateY(0);
      transform-origin: 100% 50%;
    }
    100% {
      transform: translateX(100%) translateZ(-560px) rotateY(180deg);
      transform-origin: 0% 50%;
    }
};`}
          </pre>
        </>
    );
};


export function swingTopFwd() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes swingTopFwd {
    from {
        transform: rotateX(0deg);
        transform-origin: 100% 0%;
    }

    to {
        transform: rotateX(180deg);
        transform-origin: 100% 0%;
    }
};`}
          </pre>
        </>
    );
};

export function swingTopBck() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes swingTopBck {
    from {
        transform: rotateX(0deg);
        transform-origin: 100% 0%;
    }

    to {
        transform: rotateX(-180deg);
        transform-origin: 100% 0%;
    }
};`}
          </pre>
        </>
    );
};

export function swingTRFwd() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes swingTRFwd {
    0% {
        transform: rotate3d(1, 1, 0, 0deg);
        transform-origin: 100% 0%;
    }

    100% {
        transform: rotate3d(1, 1, 0, 180deg);
        transform-origin: 100% 0%;
    }
};`}
          </pre>
        </>
    );
};

export function swingTRBck() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes swingTRBck {
    0% {
        transform: rotate3d(1, 1, 0, 0deg);
        transform-origin: 100% 0%;
    }
    
    100% {
        transform: rotate3d(1, 1, 0, -180deg);
        transform-origin: 100% 0%;
    }
};`}
          </pre>
        </>
    );
};

export function swingRightFwd() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes swingRightFwd {
    0% {
        transform: rotateY(0deg);
        transform-origin: 100% 0%;
    }
    
    100% {
        transform: rotateY(180deg);
        transform-origin: 100% 0%;
    }
};`}
          </pre>
        </>
    );
};

export function swingRightBck() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes swingRightBck {
    0% {
        transform: rotateY(0deg);
        transform-origin: 100% 0%;
    }
    
    100% {
        transform: rotateY(-180deg);
        transform-origin: 100% 0%;
    }
};`}
          </pre>
        </>
    );
};

export function swingBRFwd() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes swingBRFwd {
    0% {
      transform: rotate3d(-1, 1, 0, 0deg);
      transform-origin: 100% 100%;
    }
    100% {
      transform: rotate3d(-1, 1, 0, 180deg);
      transform-origin: 100% 100%;
    }
};`}
          </pre>
        </>
    );
};

export function swingBRBck() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes swingBRBck {
    0% {
      transform: rotate3d(-1, 1, 0, 0deg);
      transform-origin: 100% 100%;
    }
    100% {
      transform: rotate3d(-1, 1, 0, -180deg);
      transform-origin: 100% 100%;
    }
};`}
          </pre>
        </>
    );
};

export function swingBottomFwd() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes swingBottomFwd {
    from {
        transform: rotateX(0deg);
        transform-origin: 100% 100%;
    }

    to {
        transform: rotateX(-180deg);
        transform-origin: 100% 100%;
    }
};`}
          </pre>
        </>
    );
};

export function swingBottomBck() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes swingBottomBck {
    from {
        transform: rotateX(0deg);
        transform-origin: 100% 100%;
    }

    to {
        transform: rotateX(180deg);
        transform-origin: 100% 100%;
    }
};`}
          </pre>
        </>
    );
};

export function swingBLFwd() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes swingBLFwd {
    0% {
      transform: rotate3d(1, 1, 0, 0deg);
      transform-origin: 0% 100%;
    }
    100% {
      transform: rotate3d(1, 1, 0, -180deg);
      transform-origin: 0% 100%;
    }
};`}
          </pre>
        </>
    );
};

export function swingBLBck() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes swingBLBck {
    0% {
      transform: rotate3d(1, 1, 0, 0deg);
      transform-origin: 0% 100%;
    }
    100% {
      transform: rotate3d(1, 1, 0, 180deg);
      transform-origin: 0% 100%;
    }
};`}
          </pre>
        </>
    );
};

export function swingLeftFwd() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes swingLeftFwd {
    from {
        transform: rotateY(0deg);
        transform-origin: 0% 0%;
    }

    to {
        transform: rotateY(-180deg);
        transform-origin: 0% 0%;
    }
};`}
          </pre>
        </>
    );
};

export function swingLeftBck() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes swingLeftBck {
    from {
        transform: rotateY(0deg);
        transform-origin: 0% 0%;
    }

    to {
        transform: rotateY(180deg);
        transform-origin: 0% 0%;
    }
};`}
          </pre>
        </>
    );
};

export function swingTLFwd() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes swingTLFwd {
    0% {
      transform: rotate3d(-1, 1, 0, 0deg);
      transform-origin: 0% 0%;
    }
    100% {
      transform: rotate3d(-1, 1, 0, -180deg);
      transform-origin: 0% 0%;
    }
};`}
          </pre>
        </>
    );
};

export function swingTLBck() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes swingTLBck {
    0% {
      transform: rotate3d(-1, 1, 0, 0deg);
      transform-origin: 0% 0%;
    }
    100% {
      transform: rotate3d(-1, 1, 0, 180deg);
      transform-origin: 0% 0%;
    }
};`}
          </pre>
        </>
    );
};


export function slideTop() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes slideTop {
    from {
        transform: translateY(0px);
    }

    to {
        transform: translateY(-100%);
    }
};`}
          </pre>
        </>
    );
};

export function slideTR() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes slideTR {
    from {
        transform: translateY(0) translateX(0);
    }

    to {
        transform: translateY(-100%) translateX(100%);
    }
};`}
          </pre>
        </>
    );
};

export function slideRight() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes slideRight {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(100%);
    }
};`}
          </pre>
        </>
    );
};

export function slideBR() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes slideBR {
    from {
        transform: translateY(0) translateX(0);
    }

    to {
        transform: translateY(100%) translateX(100%);
    }
};`}
          </pre>
        </>
    );
};

export function slideBottom() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes slideBottom {
    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(100%);
    }
};`}
          </pre>
        </>
    );
};

export function slideBL() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes slideBL {
    from {
        transform: translateY(0) translateX(0);
    }

    to {
        transform: translateY(100%) translateX(-100%);
    }
};`}
          </pre>
        </>
    );
};

export function slideLeft() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes slideLeft {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-100%);
    }
};`}
          </pre>
        </>
    );
};

export function slideTL() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes slideTL {
    from {
        transform: translateY(0) translateX(0);
    }

    to {
        transform: translateY(-100%) translateX(-100%);
    }
};`}
          </pre>
        </>
    );
};

export function slideTopFwd() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes slideTopFwd {
    from {
        transform: translateY(0px) translateZ(0);
    }

    to {
        transform: translateY(-100%) translateZ(80px);
    }
};`}
          </pre>
        </>
    );
};

export function slideTRFwd() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes slideTRFwd {
    from {
        transform: translateY(0) translateX(0) translateZ(0);
    }

    to {
        transform: translateY(-100%) translateX(100%) translateZ(80px);
    }
};`}
          </pre>
        </>
    );
};

export function slideRightFwd() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes slideRightFwd {
    from {
        transform: translateX(0) translateZ(0);
    }

    to {
        transform: translateX(100%) translateZ(80px);
    }
};`}
          </pre>
        </>
    );
};

export function slideBRFwd() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes slideBRFwd {
    from {
        transform: translateY(0) translateX(0) translateZ(0);
    }

    to {
        transform: translateY(100%) translateX(100%) translateZ(80px);
    }
};`}
          </pre>
        </>
    );
};

export function slideBLFwd() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes slideBLFwd {
    from {
        transform: translateY(0) translateX(0) translateZ(0);
    }

    to {
        transform: translateY(100%) translateX(-100%) translateZ(80px);
    }
};`}
          </pre>
        </>
    );
};

export function slideLeftFwd() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes slideLeftFwd {
    from {
        transform: translateX(0) translateZ(0);
    }

    to {
        transform: translateX(-100%) translateZ(80px);
    }
};`}
          </pre>
        </>
    );
};

export function slideTLFwd() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes slideTLFwd {
    from {
        transform: translateY(0) translateX(0) translateZ(0);
    }

    to {
        transform: translateY(-100%) translateX(-100%) translateZ(80px);
    }
};`}
          </pre>
        </>
    );
};

export function slideTopBck() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes slideTopBck {
    from {
        transform: translateY(0px) translateZ(0);
    }

    to {
        transform: translateY(-100%) translateZ(-80px);
    }
};`}
          </pre>
        </>
    );
};

export function slideTRBck() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes slideTRBck {
    from {
        transform: translateY(0) translateX(0) translateZ(0);
    }

    to {
        transform: translateY(-100%) translateX(100%) translateZ(-80px);
    }
};`}
          </pre>
        </>
    );
};

export function slideRightBck() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes slideRightBck {
    from {
        transform: translateX(0) translateZ(0);
    }

    to {
        transform: translateX(100%) translateZ(-80px);
    }
};`}
          </pre>
        </>
    );
};

export function slideBRBck() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes slideBRBck {
    from {
        transform: translateY(0) translateX(0) translateZ(0);
    }

    to {
        transform: translateY(100%) translateX(100%) translateZ(-80px);
    }
};`}
          </pre>
        </>
    );
};

export function slideBottomBck() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes slideBottomBck {
    from {
        transform: translateY(0) translateZ(0);
    }

    to {
        transform: translateY(100%) translateZ(-80px);
    }
};`}
          </pre>
        </>
    );
};

export function slideBLBck() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes slideBLBck {
    from {
        transform: translateY(0) translateX(0) translateZ(0);
    }

    to {
        transform: translateY(100%) translateX(-100%) translateZ(-80px);
    }
};`}
          </pre>
        </>
    );
};

export function slideLeftBck() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes slideLeftBck {
    from {
        transform: translateX(0) translateZ(0);
    }

    to {
        transform: translateX(-100%) translateZ(-80px);
    }
};`}
          </pre>
        </>
    );
};

export function slideTLBck() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes slideTLBck {
    from {
        transform: translateY(0) translateX(0) translateZ(0);
    }

    to {
        transform: translateY(-100%) translateX(-100%) translateZ(-80px);
    }
};`}
          </pre>
        </>
    );
};

export function slideTopRotate() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes slideTopRotate {
    from {
        transform: translateY(0px) rotateX(0deg);
    }

    to {
        transform: translateY(-100%) rotateX(-90deg);
    }
};`}
          </pre>
        </>
    );
};

export function slideRightRotate() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes slideRightRotate {
    from {
        transform: translateX(0) rotateY(0deg);
    }

    to {
        transform: translateX(100%) rotateY(-90deg);
    }
};`}
          </pre>
        </>
    );
};

export function slideBottomRotate() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes slideBottomRotate {
    from {
        transform: translateY(0) rotateX(0deg);
    }

    to {
        transform: translateY(100%) rotateX(90deg);
    }
};`}
          </pre>
        </>
    );
};

export function slideLeftRotate() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes slideLeftRotate {
    from {
        transform: translateX(0) rotateY(0deg);
    }

    to {
        transform: translateX(-100%) rotateY(90deg);
    }
};`}
          </pre>
        </>
    );
};

export function shadowTop() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes shadowTop {
    0% {
        box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.51);
        transform: translateZ(-80px);
    }

    100% {
        box-shadow: 0px -13px 12px -3px rgba(0,0,0,0.51);
        transform: translateZ(0px);
    }
};`}
          </pre>
        </>
    );
};

export function shadowTR() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes shadowTR {
    0% {
        box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.51);
        transform: translateZ(-80px);
    }

    100% {
        box-shadow: 13px -13px 12px -3px rgba(0,0,0,0.51);
        transform: translateZ(0px);
    }
};`}
          </pre>
        </>
    );
};

export function shadowRight() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes shadowRight {
    0% {
        box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.51);
        transform: translateZ(-80px);
    }

    100% {
        box-shadow: 13px 0px 12px -3px rgba(0,0,0,0.51);
        transform: translateZ(0px);
    }
};`}
          </pre>
        </>
    );
};

export function shadowBR() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes shadowBR {
    0% {
        box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.51);
        transform: translateZ(-80px);
    }

    100% {
        box-shadow: 13px 13px 12px -3px rgba(0,0,0,0.51);
        transform: translateZ(0px);
    }
};`}
          </pre>
        </>
    );
};

export function shadowBottom() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes shadowBottom {
    0% {
        box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.51);
        transform: translateZ(-80px);
    }

    100% {
        box-shadow: 0px 13px 12px -3px rgba(0,0,0,0.51);
        transform: translateZ(0px);
    }
};`}
          </pre>
        </>
    );
};

export function shadowBL() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes shadowBL {
    0% {
        box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.51);
        transform: translateZ(-80px);
    }

    100% {
        box-shadow: -13px 13px 12px -3px rgba(0,0,0,0.51);
        transform: translateZ(0px);
    }
};`}
          </pre>
        </>
    );
};

export function shadowLeft() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes shadowLeft {
    0% {
        box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.51);
        transform: translateZ(-80px);
    }

    100% {
        box-shadow: -13px 0px 12px -3px rgba(0,0,0,0.51);
        transform: translateZ(0px);
    }
};`}
          </pre>
        </>
    );
};

export function shadowTL() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes shadowTL {
    0% {
        box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.51);
        transform: translateZ(-80px);
    }

    100% {
        box-shadow: -13px -13px 12px -3px rgba(0,0,0,0.51);
        transform: translateZ(0px);
    }
};`}
          </pre>
        </>
    );
};

export function shadowTLPOP() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes shadowTLPOP {
    0% {
      box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
      transform: translateX(0) translateY(0);
    }
    100% {
      box-shadow: -1px -1px #3e3e3e, -2px -2px #3e3e3e, -3px -3px #3e3e3e, -4px -4px #3e3e3e, -5px -5px #3e3e3e, -6px -6px #3e3e3e, -7px -7px #3e3e3e, -8px -8px #3e3e3e;
      transform: translateX(8px) translateY(8px);
    }
};`}
          </pre>
        </>
    );
};

export function shadowTRPOP() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes shadowTRPOP {
    0% {
      box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
      transform: translateX(0) translateY(0);
    }
    100% {
      box-shadow: 1px -1px #3e3e3e, 2px -2px #3e3e3e, 3px -3px #3e3e3e, 4px -4px #3e3e3e, 5px -5px #3e3e3e, 6px -6px #3e3e3e, 7px -7px #3e3e3e, 8px -8px #3e3e3e;
      transform: translateX(-8px) translateY(8px);
    }
};`}
          </pre>
        </>
    );
};

export function shadowBRPOP() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes shadowBRPOP {
    0% {
      box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
      transform: translateX(0) translateY(0);
    }
    100% {
      box-shadow: 1px 1px #3e3e3e, 2px 2px #3e3e3e, 3px 3px #3e3e3e, 4px 4px #3e3e3e, 5px 5px #3e3e3e, 6px 6px #3e3e3e, 7px 7px #3e3e3e, 8px 8px #3e3e3e;
      transform: translateX(-8px) translateY(-8px);
    }
};`}
          </pre>
        </>
    );
};

export function shadowBLPOP() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes shadowBLPOP {
    0% {
      box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
      transform: translateX(0) translateY(0);
    }
    100% {
      box-shadow: -1px 1px #3e3e3e, -2px 2px #3e3e3e, -3px 3px #3e3e3e, -4px 4px #3e3e3e, -5px 5px #3e3e3e, -6px 6px #3e3e3e, -7px 7px #3e3e3e, -8px 8px #3e3e3e;
      transform: translateX(8px) translateY(-8px);
    }
};`}
          </pre>
        </>
    );
};

export function shadow1() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes shadow1 {
    from {
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
        transform: translateZ(-80px);
    }

    to {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
        transform: translateZ(0px);
    }
};`}
          </pre>
        </>
    );
};

export function shadow2() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes shadow2 {
    from {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
        transform: translateZ(80px);
    }

    to {
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        transform: translateZ(0px);
    }
};`}
          </pre>
        </>
    );
};

export function shadow3() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes shadow3 {
    from {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0px;
        transform: translateY(0);
    }

    to {
        box-shadow: rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px;
        transform: translateY(-20px);
    }
};`}
          </pre>
        </>
    );
};

export function shadow4() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes shadow4 {
    from {
        box-shadow: inset rgba(0, 0, 0, 0.2) 0px 0px 0px 0px;
        transform: translateZ(0);
    }

    to {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 15px 30px -6px inset, rgba(0, 0, 0, 0.3) 0px 9px 18px -9px inset;
        transform: translateZ(-10px);
    }
};`}
          </pre>
        </>
    );
};

export function scaleInCenter() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleInCenter {
    0% {
        opacity: 0;
        transform: scale(0);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
};`}
          </pre>
        </>
    );
};

export function scaleInUp() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleInUp {
    0% {
        opacity: 0;
        transform: scale(0) translateY(-30vmax);
    }

    100% {
        opacity: 1;
        transform: scale(1) translateY(0%);
    }
};`}
          </pre>
        </>
    );
};

export function scaleInDown() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleInDown {
    0% {
        opacity: 0;
        transform: scale(0) translateY(30vmax);
    }

    100% {
        opacity: 1;
        transform: scale(1) translateY(0%);
    }
};`}
          </pre>
        </>
    );
};

export function scaleInLeft() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleInLeft {
    0% {
        opacity: 0;
        transform: scale(0) translateX(-30vmax);
    }

    100% {
        opacity: 1;
        transform: scale(1) translateX(0%);
    }
};`}
          </pre>
        </>
    );
};

export function scaleInRight() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleInRight {
    0% {
        opacity: 0;
        transform: scale(0) translateX(30vmax);
    }

    100% {
        opacity: 1;
        transform: scale(1) translateX(0%);
    }
};`}
          </pre>
        </>
    );
};

export function scaleOutCenter() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleOutCenter {
    0% {
        opacity: 1;
        transform: scale(1);
    }

    100% {
        opacity: 0;
        transform: scale(0);
    }
};`}
          </pre>
        </>
    );
};

export function scaleOutUp() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleOutUp {
    0% {
        opacity: 1;
        transform: scale(1) translateY(0);
    }

    100% {
        opacity: 0;
        transform: scale(0) translateY(-30vmax);
    }
};`}
          </pre>
        </>
    );
};

export function scaleOutDown() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleOutDown {
    0% {
        opacity: 1;
        transform: scale(1) translateY(0);
    }

    100% {
        opacity: 0;
        transform: scale(0) translateY(30vmax);
    }
};`}
          </pre>
        </>
    );
};

export function scaleOutLeft() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleOutLeft {
    0% {
        opacity: 1;
        transform: scale(1) translateX(0%);
    }

    100% {
        opacity: 0;
        transform: scale(0) translateX(-30vmax);
    }
};`}
          </pre>
        </>
    );
};

export function scaleOutRight() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes scaleOutRight {
    0% {
        opacity: 1;
        transform: scale(1) translateX(0%) ;
    }

    100% {
        opacity: 0;
        transform: scale(0) translateX(30vmax);
    }
};`}
          </pre>
        </>
    );
};

export function trackingInExpand() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes trackingInExpand {
    0% {
        letter-spacing: -0.5em;
        opacity: 0;
    }
    100% {
        opacity: 1;
        letter-spacing: normal;
    }
};`}
          </pre>
        </>
    );
};

export function trackingInExpandFwd() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes trackingInExpandFwd {
    0% {
        letter-spacing: -0.5em;
        opacity: 0;
        transform: scale(0);
    }
    100% {
        opacity: 1;
        letter-spacing: normal;
        transform: scale(1);
    }
};`}
          </pre>
        </>
    );
};

export function trackingInExpandFwdTop() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes trackingInExpandFwdTop {
    0% {
        letter-spacing: -0.5em;
        opacity: 0;
        transform: scale(0) translateY(-30vmax);
    }
    100% {
        opacity: 1;
        letter-spacing: normal;
        transform: scale(1) translateY(0vmax);
    }
};`}
          </pre>
        </>
    );
};

export function trackingInExpandFwdBottom() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes trackingInExpandFwdBottom {
    0% {
        letter-spacing: -0.5em;
        opacity: 0;
        transform: scale(0) translateY(30vmax);
    }
    100% {
        opacity: 1;
        letter-spacing: normal;
        transform: scale(1) translateY(0vmax);
    }
};`}
          </pre>
        </>
    );
};

export function trackingInContract() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes trackingInContract {
    0% {
        letter-spacing: 1em;
        opacity: 0;
    }
    100% {
        opacity: 1;
        letter-spacing: normal;
    }
};`}
          </pre>
        </>
    );
};

export function trackingInContractBck() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes trackingInContractBck {
    0% {
        letter-spacing: 1em;
        opacity: 0;
        transform: scale(3);
    }
    100% {
        opacity: 1;
        letter-spacing: normal;
        transform: scale(1);
    }
};`}
          </pre>
        </>
    );
};

export function trackingInContractBckTop() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes trackingInContractBckTop {
    0% {
        letter-spacing: 1em;
        opacity: 0;
        transform: scale(2) translateY(-30vmax);
    }
    100% {
        opacity: 1;
        letter-spacing: normal;
        transform: scale(1) translateY(0vmax);
    }
};`}
          </pre>
        </>
    );
};

export function trackingInContractBckBottom() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes trackingInContractBckBottom {
    0% {
        letter-spacing: 1em;
        opacity: 0;
        transform: scale(2) translateY(30vmax);
    }
    100% {
        opacity: 1;
        letter-spacing: normal;
        transform: scale(1) translateY(0vmax);
    }
};`}
          </pre>
        </>
    );
};

export function focusIn() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes focusIn {
    0% {
        filter: blur(100px);
        opacity: 0;
    }

    100% {
        filter: blur(0px);
        opacity: 1;
    }
};`}
          </pre>
        </>
    );
};

export function focusInExpand() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes focusInExpand {
    0% {
        letter-spacing: -1em;
        filter: blur(50px);
        opacity: 0;
    }

    100% {
        letter-spacing: normal;
        filter: blur(0px);
        opacity: 1;
    }
};`}
          </pre>
        </>
    );
};

export function focusInExpandFwd() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes focusInExpandFwd {
    0% {
        transform: scale(0);
        letter-spacing: -1em;
        filter: blur(50px);
        opacity: 0;
    }

    40% {
        transform: scale(.5);
    }

    100% {
        transform: scale(1);
        letter-spacing: normal;
        filter: blur(0px);
        opacity: 1;
    }
};`}
          </pre>
        </>
    );
};

export function focusInContract() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes focusInContract {
    0% {
        letter-spacing: 1em;
        filter: blur(50px);
        opacity: 0;
    }

    100% {
        letter-spacing: normal;
        filter: blur(0px);
        opacity: 1;
    }
};`}
          </pre>
        </>
    );
};

export function focusInContractBck() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes focusInContractBck {
    0% {
        letter-spacing: 1em;
        transform: scale(3);
        filter: blur(50px);
        opacity: 0;
    }

    100% {
        letter-spacing: normal;
        transform: scale(1);
        filter: blur(0px);
        opacity: 1;
    }
};`}
          </pre>
        </>
    );
};

export function textShdCenter() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes textShdCenter {
    0% {
        text-shadow: 0 0 0 rgba(0, 0, 0, 0);
    }
      100% {
        text-shadow: 0 0 12px rgba(0, 0, 0, 0.35);
    }
};`}
          </pre>
        </>
    );
};

export function textShdTop() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes textShdTop {
    0% {
        text-shadow: 0 0 0 rgba(0, 0, 0, 0);
    }
      100% {
        text-shadow: 0 -10px 12px rgba(0, 0, 0, 0.35);
    }
};`}
          </pre>
        </>
    );
};

export function textShdTR() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes textShdTR {
    0% {
        text-shadow: 0 0 0 rgba(0, 0, 0, 0);
    }
      100% {
        text-shadow: 10px -10px 12px rgba(0, 0, 0, 0.35);
    }
};`}
          </pre>
        </>
    );
};

export function textShdRight() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes textShdRight {
    0% {
        text-shadow: 0 0 0 rgba(0, 0, 0, 0);
    }
      100% {
        text-shadow: 10px 0px 12px rgba(0, 0, 0, 0.35);
    }
};`}
          </pre>
        </>
    );
};

export function textShdBR() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes textShdBR {
    0% {
        text-shadow: 0 0 0 rgba(0, 0, 0, 0);
    }
      100% {
        text-shadow: 10px 10px 12px rgba(0, 0, 0, 0.35);
    }
};`}
          </pre>
        </>
    );
};

export function textShdBottom() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes textShdBottom {
    0% {
        text-shadow: 0 0 0 rgba(0, 0, 0, 0);
    }
      100% {
        text-shadow: 0px 10px 12px rgba(0, 0, 0, 0.35);
    }
};`}
          </pre>
        </>
    );
};

export function textShdBL() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes textShdBL {
    0% {
        text-shadow: 0 0 0 rgba(0, 0, 0, 0);
    }
      100% {
        text-shadow: -10px 10px 12px rgba(0, 0, 0, 0.35);
    }
};`}
          </pre>
        </>
    );
};

export function textShdLeft() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes textShdLeft {
    0% {
        text-shadow: 0 0 0 rgba(0, 0, 0, 0);
    }
      100% {
        text-shadow: -10px 0px 12px rgba(0, 0, 0, 0.35);
    }
};`}
          </pre>
        </>
    );
};

export function textShdTL() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes textShdTL {
    0% {
        text-shadow: 0 0 0 rgba(0, 0, 0, 0);
    }
      100% {
        text-shadow: -10px -10px 12px rgba(0, 0, 0, 0.35);
    }
};`}
          </pre>
        </>
    );
};

export function textPopUpTop() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes textPopUpTop {
    0% {
        transform: translateY(0);
        transform-origin: 50% 50%;
        text-shadow: none;
      }
      100% {
        transform: translateY(-50px);
        transform-origin: 50% 50%;
        text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 15px rgba(0, 0, 0, 0.3);
      }
};`}
          </pre>
        </>
    );
};

export function textPopUpTR() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes textPopUpTR {
    0% {
        transform: translateY(0) translateX(0);
        transform-origin: 50% 50%;
        text-shadow: none;
      }
      100% {
        transform: translateY(-50px) translateX(50px);
        transform-origin: 50% 50%;
        text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 15px rgba(0, 0, 0, 0.3);
      }
};`}
          </pre>
        </>
    );
};

export function textPopUpRight() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes textPopUpRight {
    0% {
        transform: translateX(0);
        transform-origin: 50% 50%;
        text-shadow: none;
      }
      100% {
        transform: translateX(50px);
        transform-origin: 50% 50%;
        text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 15px rgba(0, 0, 0, 0.3);
      }
};`}
          </pre>
        </>
    );
};

export function textPopUpBR() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes textPopUpBR {
    0% {
        transform: translateY(0) translateX(0);
        transform-origin: 50% 50%;
        text-shadow: none;
      }
      100% {
        transform: translateY(50px) translateX(50px);
        transform-origin: 50% 50%;
        text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 15px rgba(0, 0, 0, 0.3);
      }
};`}
          </pre>
        </>
    );
};

export function textPopUpBottom() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes textPopUpBottom {
    0% {
        transform: translateY(0);
        transform-origin: 50% 50%;
        text-shadow: none;
      }
      100% {
        transform: translateY(50px);
        transform-origin: 50% 50%;
        text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 15px rgba(0, 0, 0, 0.3);
      }
};`}
          </pre>
        </>
    );
};

export function textPopUpBL() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes textPopUpBL {
    0% {
        transform: translateY(0) translateX(0);
        transform-origin: 50% 50%;
        text-shadow: none;
      }
      100% {
        transform: translateY(50px) translateX(-50px);
        transform-origin: 50% 50%;
        text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 15px rgba(0, 0, 0, 0.3);
      }
};`}
          </pre>
        </>
    );
};

export function textPopUpLeft() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes textPopUpLeft {
    0% {
        transform: translateX(0);
        transform-origin: 50% 50%;
        text-shadow: none;
      }
      100% {
        transform: translateX(-50px);
        transform-origin: 50% 50%;
        text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 15px rgba(0, 0, 0, 0.3);
      }
};`}
          </pre>
        </>
    );
};

export function textPopUpTL() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes textPopUpTL {
    0% {
        transform: translateY(0) translateX(0);
        transform-origin: 50% 50%;
        text-shadow: none;
      }
      100% {
        transform: translateY(-50px) translateX(-50px);
        transform-origin: 50% 50%;
        text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 15px rgba(0, 0, 0, 0.3);
      }
};`}
          </pre>
        </>
    );
};

export function textJelloX() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes textJelloX {
      0% {
        transform: scale3d(1, 1, 1);
      }
      30% {
        transform: scale3d(1.25, 0.75, 1);
      }
      40% {
        transform: scale3d(0.75, 1.25, 1);
      }
      50% {
        transform: scale3d(1.15, 0.85, 1);
      }
      65% {
        transform: scale3d(0.95, 1.05, 1);
      }
      75% {
        transform: scale3d(1.05, 0.95, 1);
      }
      100% {
        transform: scale3d(1, 1, 1);
      }
};`}
          </pre>
        </>
    );
};

export function textJelloY() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes textJelloY {
    0% {
        transform: scale3d(1, 1, 1);
      }
      30% {
        transform: scale3d(0.75, 1.25, 1);
      }
      40% {
        transform: scale3d(1.25, 0.75, 1);
      }
      50% {
        transform: scale3d(0.85, 1.15, 1);
      }
      65% {
        transform: scale3d(1.05, 0.95, 1);
      }
      75% {
        transform: scale3d(0.95, 1.05, 1);
      }
      100% {
        transform: scale3d(1, 1, 1);
      }
};`}
          </pre>
        </>
    );
};

export function textJelloDiag1() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes textJelloDiag1 {
    0% {
        transform: skew(0deg 0deg);
      }
      30% {
        transform: skew(25deg 25deg);
      }
      40% {
        transform: skew(-15deg, -15deg);
      }
      50% {
        transform: skew(15deg, 15deg);
      }
      65% {
        transform: skew(-5deg, -5deg);
      }
      75% {
        transform: skew(5deg, 5deg);
      }
      100% {
        transform: skew(0deg 0deg);
      }
};`}
          </pre>
        </>
    );
};

export function textJelloDiag2() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes textJelloDiag2 {
    0% {
        transform: skew(0deg 0deg);
      }
      30% {
        transform: skew(-25deg -25deg);
      }
      40% {
        transform: skew(15deg, 15deg);
      }
      50% {
        transform: skew(-15deg, -15deg);
      }
      65% {
        transform: skew(5deg, 5deg);
      }
      75% {
        transform: skew(-5deg, -5deg);
      }
      100% {
        transform: skew(0deg 0deg);
      }
};`}
          </pre>
        </>
    );
};

export function vibrate1() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes vibrate1 {
      0% {
        transform: translate(0);
      }
      20% {
        transform: translate(6px, 6px);
      }
      40% {
        transform: translate(-5px, -5px);
      }
      60% {
        transform: translate(4px, 4px);
      }
      80% {
        transform: translate(-3px, -3px);
      }
      90% {
        transform: translate(-2px, -2px);
      }
      100% {
        transform: translate(0);
      }
};`}
          </pre>
        </>
    );
};

export function vibrate2() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes vibrate2 {
    0% {
      transform: translateX(0);
    }
    20% {
      transform: translateX(-6px);
    }
    40% {
      transform: translateX(5px);
    }
    60% {
      transform: translateX(-4px);
    }
    80% {
      transform: translateX(3px);
    }
    90% {
        transform: translateX(-2px);
    }
    100% {
      transform: translateX(0);
    }
};`}
          </pre>
        </>
    );
};

export function vibrate3() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes vibrate3 {
    0% {
        transform: translateY(0);
      }
      20% {
        transform: translateY(-6px);
      }
      40% {
        transform: translateY(5px);
      }
      60% {
        transform: translateY(-4px);
      }
      80% {
        transform: translateY(3px);
      }
      90% {
        transform: translateY(-2px);
      }
      100% {
        transform: translateY(0);
      }
};`}
          </pre>
        </>
    );
};

export function shakeTop() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes shakeTop {
    0%,
    100% {
        transform-origin: 50% 0%;
    }

    10% {transform: rotateZ(-8deg);}
    20% {transform: rotateZ(7deg);}
    30% {transform: rotateZ(-6deg);}
    40% {transform: rotateZ(5deg);}
    50% {transform: rotateZ(-4deg);}
    60% {transform: rotateZ(3deg);}
    70% {transform: rotateZ(-2deg);}
    80% {transform: rotateZ(1deg);}
    90% {transform: rotateZ(1deg);}
};`}
          </pre>
        </>
    );
};

export function shakeBottom() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes shakeBottom {
    0%,
    100% {
        transform-origin: 50% 100%;
    }

    10% {transform: rotateZ(-8deg);}
    20% {transform: rotateZ(7deg);}
    30% {transform: rotateZ(-6deg);}
    40% {transform: rotateZ(5deg);}
    50% {transform: rotateZ(-4deg);}
    60% {transform: rotateZ(3deg);}
    70% {transform: rotateZ(-2deg);}
    80% {transform: rotateZ(1deg);}
    90% {transform: rotateZ(1deg);}
};`}
          </pre>
        </>
    );
};

export function shakeLeft() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes shakeLeft {
    0%,
    100% {
        transform-origin: 0% 50%;
    }

    10% {transform: rotateZ(-8deg);}
    20% {transform: rotateZ(7deg);}
    30% {transform: rotateZ(-6deg);}
    40% {transform: rotateZ(5deg);}
    50% {transform: rotateZ(-4deg);}
    60% {transform: rotateZ(3deg);}
    70% {transform: rotateZ(-2deg);}
    80% {transform: rotateZ(1deg);}
    90% {transform: rotateZ(1deg);}
};`}
          </pre>
        </>
    );
};

export function shakeRight() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes shakeRight {
    0%,
    100% {
        transform-origin: 100% 50%;
    }

    10% {transform: rotateZ(-8deg);}
    20% {transform: rotateZ(7deg);}
    30% {transform: rotateZ(-6deg);}
    40% {transform: rotateZ(5deg);}
    50% {transform: rotateZ(-4deg);}
    60% {transform: rotateZ(3deg);}
    70% {transform: rotateZ(-2deg);}
    80% {transform: rotateZ(1deg);}
    90% {transform: rotateZ(1deg);}
};`}
          </pre>
        </>
    );
};

export function shakeLR() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes shakeLR {
    0%,
    100% {
        transform-origin: 50% 50%;
    }

    10% {transform: rotateZ(-8deg);}
    20% {transform: rotateZ(7deg);}
    30% {transform: rotateZ(-6deg);}
    40% {transform: rotateZ(5deg);}
    50% {transform: rotateZ(-4deg);}
    60% {transform: rotateZ(3deg);}
    70% {transform: rotateZ(-2deg);}
    80% {transform: rotateZ(1deg);}
    90% {transform: rotateZ(1deg);}
};`}
          </pre>
        </>
    );
};

export function bounceTop() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes bounceTop {
    0% {
	   transform: translateY(0%);
	}
	20% {
	   transform: translateY(100%);
	}
	30% {
	   transform: translateY(0%);
	}
	40% {
	   transform: translateY(55%);
	}
	50% {
	   transform: translateY(0%);
	}
	60% {
	   transform: translateY(22%);
	}
	70% {
	   transform: translateY(0%);
	}
	80% {
	   transform: translateY(10%);
	}
	100% {
	   transform: translateY(0%);
	}
};`}
          </pre>
        </>
    );
};

export function bounceBottom() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes bounceBottom {
    0% {
        transform: translateY(0%);
     }
     20% {
        transform: translateY(-100%);
     }
     30% {
        transform: translateY(0%);
     }
     40% {
        transform: translateY(-55%);
     }
     50% {
        transform: translateY(0%);
     }
     60% {
        transform: translateY(-22%);
     }
     70% {
        transform: translateY(0%);
     }
     80% {
        transform: translateY(-10%);
     }
     100% {
        transform: translateY(0%);
     }
};`}
          </pre>
        </>
    );
};

export function bounceLeft() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes bounceLeft {
    0% {
        transform: translateX(0%);
     }
     20% {
        transform: translateX(100%);
     }
     30% {
        transform: translateX(0%);
     }
     40% {
        transform: translateX(55%);
     }
     50% {
        transform: translateX(0%);
     }
     60% {
        transform: translateX(22%);
     }
     70% {
        transform: translateX(0%);
     }
     80% {
        transform: translateX(10%);
     }
     100% {
        transform: translateX(0%);
     }
};`}
          </pre>
        </>
    );
};

export function bounceRight() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes bounceRight {
    0% {
        transform: translateX(0%);
     }
     20% {
        transform: translateX(-100%);
     }
     30% {
        transform: translateX(0%);
     }
     40% {
        transform: translateX(-55%);
     }
     50% {
        transform: translateX(0%);
     }
     60% {
        transform: translateX(-22%);
     }
     70% {
        transform: translateX(0%);
     }
     80% {
        transform: translateX(-10%);
     }
     100% {
        transform: translateX(0%);
     }
};`}
          </pre>
        </>
    );
};

export function pulsate1() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes pulsate1 {
    0%,20%,30% {transform: scale(1);}
    40% {transform: scale(1.5);}
    50% {transform: scale(1);}
    60% {transform: scale(1.5);}
    70%,80%,9%,100% {transform: scale(1);}
};`}
          </pre>
        </>
    );
};

export function pulsate2() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes pulsate2 {
    0% {transform: scale(1);}
    25% {transform: scale(1.2);}
    50% {transform: scale(0.6);}
    75% {transform: scale(1.2);}
    100% {transform: scale(1);}
};`}
          </pre>
        </>
    );
};

export function pulsate3() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes pulsate3 {
    0% {transform: scale(1);}
    25% {transform: scale(1.2);}
    50% {transform: scale(1);}
    75% {transform: scale(1.2);}
    100% {transform: scale(1);}
};`}
          </pre>
        </>
    );
};

export function pulsate4() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes pulsate4 {
    0% {
        transform: scale(0.2);
        opacity: 0.8;
      }
      80% {
        transform: scale(1.2);
        opacity: 0;
      }
      100% {
        transform: scale(2.2);
        opacity: 0;
      }
};`}
          </pre>
        </>
    );
};

export function blink1() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes blink1 {
  0%,
  50%,
  100% {
    opacity: 1;
  }
  25%,
  75% {
    opacity: 0;
  }
};`}
          </pre>
        </>
    );
};

export function blink2() {
    return(
        <>
          <pre className="w-max h-max bg-[#E0E0E0] shadow-sh1 p-[1rem] rounded-[.5rem]">
{`@keyframes blink2 {
    0% {
        opacity: 1;
    }
      50% {
        opacity: 0.2;
    }
      100% {
        opacity: 1;
    }
};`}
          </pre>
        </>
    );
};