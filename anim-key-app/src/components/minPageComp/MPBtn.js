import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { gsap } from "gsap";

const MpBtn = () => {

  useEffect(() => {
   let tryMeBtn = document.querySelector('.tryMeBtn');

   tryMeBtn.addEventListener('mouseover', () => {
      gsap.to('.btnTxt1', {
        top: '-150%',
      });

      gsap.to('.btnTxt2', {
        top: '50%',
      });
   });

   tryMeBtn.addEventListener('mouseleave', () => {
    gsap.to('.btnTxt1', {
      top: '50%',
    });

    gsap.to('.btnTxt2', {
      top: '150%',
    });
 });
  }, []);

  const navigate = useNavigate();
  const navigateToApp = () => {
    navigate('/appPage/basic/basicScale/scale-up-center');
  };

    return(
        <>
          <button
          onClick={navigateToApp}
          className="
          w-[12rem]
          h-[4rem]
          text-white
          text-[1.3rem]
          hover:shadow-sh1
          shadow-sh2
          backdrop-blur-2xl
          duration-[300ms]
          rounded-full
          ease
          font-bold
          bg-shapesColor
          flex
          justify-center
          tryMeBtn
          items-center
          overflow-hidden
          "
          >
            <span className="absolute btnTxt1 top-[50%] -translate-y-[50%]">Try me</span>

            <span className="absolute btnTxt2 top-[150%] -translate-y-[50%]">Try me</span>
          </button>
        </>
    );
};

export default MpBtn;