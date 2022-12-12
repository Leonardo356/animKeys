import React, { useEffect } from "react";

import AnimBtn from "./AnimationBtn";

import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { changeAnim } from "../../functions/functions";
import { changeBtn } from "../../functions/functions";

const NavAnimShadows = () => {

    const location = useLocation();

    useEffect(() => {

      changeAnim('/appPage/shadows', 'shadow-bs-1');
      changeAnim('/appPage/shadows/inset', 'shadow-ins-1');
      changeAnim('/appPage/shadows/3d', 'shadow-3d-1');
  
      changeBtn('/appPage/shadows', 'shadowBasic');
      changeBtn('/appPage/shadows/inset', 'shadowInset');
      changeBtn('/appPage/shadows/3d', 'shadow3D');
    }, [location]);
  
    let navigate = useNavigate();
  
    const navigateToShadowBasic = () => {navigate('/appPage/shadows')};
    const navigateToShadowInset = () => {navigate('/appPage/shadows/inset')};
    const navigateToShadow3d = () => {navigate('/appPage/shadows/3d')};

    return(
        <>
           <div
           className="
           w-full
           h-full
           flex
           items-center
           justify-start
           px-[1rem]
           gap-[1rem]
           "
           >
            <div className="shadowBasic" onClick={navigateToShadowBasic} ><AnimBtn size='w-full h-full' animName='Basic' /></div>
            <div className="shadowInset" onClick={navigateToShadowInset} ><AnimBtn animName='Inset' /></div>
            <div className="shadow3D" onClick={navigateToShadow3d} ><AnimBtn animName='3D' /></div>
           </div>
        </>
    );
};

export default NavAnimShadows;