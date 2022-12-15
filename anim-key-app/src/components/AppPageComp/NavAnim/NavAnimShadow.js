import React, { useEffect } from "react";

import AnimBtn from "./AnimationBtn";

import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


const NavAnimShadows = () => {

    const location = useLocation();

    useEffect(() => {
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