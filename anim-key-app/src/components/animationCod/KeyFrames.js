import React from "react";
export function ScaleUpCenter() {
    return(
        <>
          <pre className="w-max h-max  p-[1rem] rounded-[.5rem]">
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
          <pre className="w-max h-max  p-[1rem] rounded-[.5rem]">
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
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ScaleWHUpTop() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ScaleWHUpRight() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ScaleWHUpLeft() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ScaleWHUpBottom() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ScaleDownCenter() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
{`@keyframes scaleDownCenter {
    from { transform: scale(1); }
    to {transform: scale(0.2);}
};`}
          </pre>
        </>
    );
};

export function ScaleDownTop() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ScaleDownLeft() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ScaleDownRight() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ScaleDownBottom() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ScaleDownTL() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ScaleDownTR() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ScaleDownBL() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ScaleDownBR() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ScaleWHDownCenter() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ScaleWHDownTop() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ScaleWHDownRight() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ScaleWHDownLeft() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ScaleWHDownBottom() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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


export function RotateCenter() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
{`@keyframes rotateCenter {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
};`}
          </pre>
        </>
    );
};

export function RotateTop() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function RotateLeft() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function RotateRight() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function RotateBottom() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function RotateTL() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function RotateTR() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function RotateBR() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function RotateBL() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function RotateCenterUP() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
{`@keyframes rotateCenterUP {
    from {transform: rotate(0deg) scale(0.2);}
    to {transform: rotate(360deg) scale(1);}
};`}
          </pre>
        </>
    );
};

export function RotateTopUP() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function RotateLeftUP() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function RotateRightUP() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function RotateBottomUP() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function RotateTLUP() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function RotateTRUP() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function RotateBRUP() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function RotateBLUP() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function RotateCenterDown() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
{`@keyframes rotateCenterDown {
    from {transform: rotate(0deg) scale(1);}
    to {transform: rotate(360deg) scale(0.2);}
};`}
          </pre>
        </>
    );
};

export function RotateTopDown() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function RotateLeftDown() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function RotateRightDown() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function RotateBottomDown() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function RotateTLDown() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function RotateTRDown() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function RotateBRDown() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function RotateBLDown() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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


export function FlipHorBottom() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FlipHorTop() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FlipVerLeft() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FlipVerRight() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FlipDiagTR() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FlipDiagBL() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FlipDiagBR() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FlipDiagTL() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FlipTop() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FlipBottom() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FlipLeft() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FlipRight() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FlipHorBottomUP() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FlipHorTopUP() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FlipVerLeftUP() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FlipVerRightUP() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FlipDiagTRUP() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FlipDiagBLUP() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FlipDiagBRUP() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FlipDiagTLUP() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FlipTopUP() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FlipBottomUP() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FlipLeftUP() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FlipRightUP() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FlipHorBottomDown() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FlipHorTopDown() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FlipVerLeftDown() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FlipVerRightDown() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FlipDiagTRDown() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FlipDiagBLDown() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FlipDiagBRDown() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FlipDiagTLDown() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FlipTopDown() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FlipBottomDown() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FlipLeftDown() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FlipRightDown() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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


export function SwingTopFwd() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SwingTopBck() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SwingTRFwd() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SwingTRBck() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SwingRightFwd() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SwingRightBck() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SwingBRFwd() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SwingBRBck() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SwingBottomFwd() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SwingBottomBck() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SwingBLFwd() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SwingBLBck() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SwingLeftFwd() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SwingLeftBck() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SwingTLFwd() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SwingTLBck() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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


export function SlideTop() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SlideTR() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SlideRight() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SlideBR() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SlideBottom() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SlideBL() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SlideLeft() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SlideTL() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SlideTopFwd() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SlideTRFwd() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SlideRightFwd() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SlideBRFwd() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SlideBottomFwd() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
{`@keyframes slideBottomFwd {
    from {
        transform: translateY(0) translateZ(0);
    }

    to {
        transform: translateY(100%) translateZ(80px);
    }
};`}
          </pre>
        </>
    );
};

export function SlideBLFwd() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SlideLeftFwd() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SlideTLFwd() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SlideTopBck() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SlideTRBck() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SlideRightBck() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SlideBRBck() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SlideBottomBck() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SlideBLBck() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SlideLeftBck() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SlideTLBck() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SlideTopRotate() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SlideRightRotate() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SlideBottomRotate() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function SlideLeftRotate() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ShadowTop() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ShadowTR() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ShadowRight() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ShadowBR() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ShadowBottom() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ShadowBL() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ShadowLeft() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ShadowTL() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ShadowTLPOP() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ShadowTRPOP() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ShadowBRPOP() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ShadowBLPOP() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function Shadow1() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function Shadow2() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function Shadow3() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function Shadow4() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ScaleInCenter() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ScaleInUp() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ScaleInDown() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ScaleInLeft() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ScaleInRight() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ScaleOutCenter() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ScaleOutUp() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ScaleOutDown() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ScaleOutLeft() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ScaleOutRight() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function TrackingInExpand() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function TrackingInExpandFwd() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function TrackingInExpandFwdTop() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function TrackingInExpandFwdBottom() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function TrackingInContract() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function TrackingInContractBck() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function TrackingInContractBckTop() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function TrackingInContractBckBottom() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FocusIn() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FocusInExpand() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FocusInExpandFwd() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FocusInContract() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function FocusInContractBck() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function TextShdCenter() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function TextShdTop() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function TextShdTR() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function TextShdRight() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function TextShdBR() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function TextShdBottom() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function TextShdBL() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function TextShdLeft() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function TextShdTL() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function TextPopUpTop() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function TextPopUpTR() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function TextPopUpRight() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function TextPopUpBR() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function TextPopUpBottom() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function TextPopUpBL() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function TextPopUpLeft() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function TextPopUpTL() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function TextJelloX() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function TextJelloY() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function TextJelloDiag1() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function TextJelloDiag2() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function Vibrate1() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function Vibrate2() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function Vibrate3() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ShakeTop() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ShakeBottom() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ShakeLeft() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ShakeRight() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function ShakeLR() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function BounceTop() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function BounceBottom() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function BounceLeft() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function BounceRight() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function Pulsate1() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function Pulsate2() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function Pulsate3() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function Pulsate4() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function Blink1() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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

export function Blink2() {
    return(
        <>
          <pre className="w-max h-max p-[1rem] rounded-[.5rem]">
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