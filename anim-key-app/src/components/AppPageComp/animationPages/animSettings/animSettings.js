import React from "react";

const AnimSettings = () => {

    const displaySettingsOnMobile = e => {
        let settingsContainer = document.querySelector('.settingsContainer');
        let closeSettingsSvg = document.querySelector('.closeSettingsSvg');
        let settingsSvg = document.querySelector('.settingsSvg');
        let isDisplayed = window.getComputedStyle(settingsContainer).display;

        let toggleAnimListBtn = document.querySelector('.toggleAnimListBtn');
        let displayAnimationList = document.querySelector('.displayAnimationList');
        let animListContainer = document.querySelector('.animListContainerOnDOM');

        if(isDisplayed !== 'flex') {
            settingsContainer.style.display = 'flex';
            e.currentTarget.innerHTML = closeSettingsSvg.innerHTML;

            animListContainer.style.display = '';
            toggleAnimListBtn.innerHTML = displayAnimationList.innerHTML;
        } else {
            settingsContainer.style.display = '';
            e.currentTarget.innerHTML = settingsSvg.innerHTML;
        }
    };

    return(
        <>    
           <div className="settingsSvg hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-sliders" viewBox="0 0 16 16">
                   <path d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>
               </svg>
           </div>
           <div className="closeSettingsSvg hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                   <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
           </div>
           <div
           onClick={displaySettingsOnMobile} 
           className="absolute top-[.5rem] toggleSettingsBtn mobile:flex justify-center laptop:hidden items-center text-white left-[.5rem] w-[3rem] rounded-full h-[3rem] bg-txtColor2">
               <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-sliders" viewBox="0 0 16 16">
                  <path d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>
               </svg>
           </div>
           <div className=" settingsContainer laptop:flex mobile:hidden"><Settings /></div>
        </>
    );
};

const Settings = () => {
    
        const resetAnimation = (className) => {
            let el = document.querySelector(`.${className}`); 
            if(el !== null) {
                el.style.animation = 'none';
                void  el.offsetHeight;
                el.style.animation = '';
            };
        };
    
        const changeVar = (varName, value) => {
            let root = document.querySelector(':root');
            root.style.setProperty(`${varName}`, `${value}`);
        };
    
        const changeDuration = e => {
            let animationDuration = document.querySelector('.animationDuration');
            let value = document.querySelector('.durationInp').value;
            animationDuration.innerText = '';
    
            value === '' ? changeVar('--duration-anim', '0.6s') : changeVar('--duration-anim', `${value}s`);
            value === '' ? animationDuration.innerText = '0.6s' : animationDuration.innerText = `${value}s`;
            resetAnimation('squareShape');
            resetAnimation('textAnimation');
        };
    
        const changeTimmingFunction = e => {
            let animationTransition = document.querySelector('.animationTransition');
            let value = document.querySelector('.timmingFunctionInp').value;
            animationTransition.innerText = '';
    
            changeVar('--transition-type', `${value}`);
            animationTransition.innerText = `${value}`;
            resetAnimation('squareShape');
            resetAnimation('textAnimation');
        };
    
        const changeDelay = e => {
            let animationDelay = document.querySelector('.animationDelay');
            let value = document.querySelector('.delayInp').value;
            animationDelay.innerText = '';
    
            value === '' ? changeVar('--anim-delay', `0s`) : changeVar('--anim-delay', `${value}s`);
            value === '' ? animationDelay.innerText = '0s' : animationDelay.innerText = `${value}s`;
            resetAnimation('squareShape');
            resetAnimation('textAnimation');
        };
    
        const changeDirection = e => {
            let animationDirection = document.querySelector('.animationDirection');
            let value = document.querySelector('.directionInp').value;
            animationDirection.innerText = '';
    
            changeVar('--anim-direction', `${value}`);
            animationDirection.innerText = `${value}`;
            resetAnimation('squareShape');
            resetAnimation('textAnimation');
        };
    
        const changeFillMode = e => {
            let animationType = document.querySelector('.animationType');
            let value = document.querySelector('.fillModeInp').value;
            animationType.innerText = '';
    
            changeVar('--anim-type', `${value}`);
            animationType.innerText = `${value}`;
            resetAnimation('squareShape');
            resetAnimation('textAnimation');
        };
    
        const changeInfinite = e => {
            let isInfinite = document.querySelector('.isInfinite');
            let value = document.querySelector('.infiniteInp').checked;
            isInfinite.innerText = '';
    
            value ? changeVar('--is-infinite', 'infinite') : changeVar('--is-infinite', '');
            if(isInfinite !== null) value ? isInfinite.innerText = 'infinite' : isInfinite.innerText = '';
        };

   return(
    <>
       <div
       className="
       absolute
       top-[50%]
       -translate-y-[50%]
       laptop:left-[2rem]
       mobile:w-[90%]
       mobile:left-[50%]
       mobile:-translate-x-[50%]
       smScreen:w-[50%]
       laptop:w-[20%]
       h-[80%]
       laptop:-translate-x-[0%]
       bg-txtColor2
       rounded-[.6rem]
       flex
       flex-col
       gap-[1rem]
       p-[1rem]
       text-txtColor2
       font-normal
       text-[1.1rem]
       "
       >
          <div className="w-full h-[3.5rem] px-[1rem] items-center flex bg-[white] rounded-[.5rem]">
              <input
              onChange={changeDuration}
              className="w-full h-full durationInp rounded-[1rem] pr-[.5rem]"
              type='number'
              placeholder="Duration"
              />
              <div className="ml-auto">/sec</div>
          </div>

          <div className="w-full h-[3.5rem] px-[1rem] items-center flex bg-[white] rounded-[.5rem]">
            <select
            onChange={changeTimmingFunction}
            defaultValue={'DEFAULT'}
            className="w-full h-full timmingFunctionInp rounded-[1rem]">
                <option value="DEFAULT" disabled>Timming-function</option>
                <option value='ease'>Ease</option>
                <option value='ease-in'>Ease-in</option>
                <option value='ease-out'>Ease-out</option>
                <option value='linear'>Linear</option>
            </select>
          </div>

          <div className="w-full h-[3.5rem] px-[1rem] items-center flex bg-[white] rounded-[.5rem]">
              <input 
              onChange={changeDelay}
              className="w-full delayInp h-full rounded-[1rem] pr-[.5rem]"
              type='number'
              placeholder="Delay"
              />
              <div className="ml-auto">/sec</div>
          </div>

          <div className="w-full h-[3.5rem] px-[1rem] items-center flex bg-[white] rounded-[.5rem]">
            <select 
            onChange={changeDirection}
            defaultValue={'DEFAULT'} 
            className="w-full directionInp h-full rounded-[1rem]">
                <option value='DEFAULT' disabled>Direction</option>
                <option value='normal'>Normal</option>
                <option value='reverse'>Reverse</option>
                <option value='alternate'>Alternate</option>
                <option value='alternate-reverse'>Alternate-reverse</option>
            </select>
          </div>

          <div className="w-full h-[3.5rem] px-[1rem] items-center flex bg-[white] rounded-[.5rem]">
            <select 
            onChange={changeFillMode}
            defaultValue={'DEFAULT'} 
            className="w-full h-full fillModeInp rounded-[1rem]">
                <option value='DEFAULT' disabled>Fill-mode</option>
                <option value='forwards'>Forwards</option>
                <option value='backwards'>Backwards</option>
                <option value='both'>Both</option>
            </select>
          </div>

          <div className="w-full h-[3.5rem] px-[1rem] items-center flex bg-[white] rounded-[.5rem]">
             <div>Infinite</div>
             <input 
             onChange={changeInfinite}
             className="ml-auto w-[1.2rem] infiniteInp h-[1.2rem]" type="checkbox" name="checkbox" ></input>
          </div>
       </div>
    </>
   );
};

export default AnimSettings;