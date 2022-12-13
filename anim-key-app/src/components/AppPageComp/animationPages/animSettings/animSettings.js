import React from "react";
import {Routes, Route} from 'react-router-dom';

const AnimSettings = () => {
    return(
        <>    
          <Routes >
                    <Route path="/" element={<Settings />} />
                    <Route path="/basicRotate" element={<Settings />} />
                    <Route path="/basicFlip" element={<Settings />} />
                    <Route path="/basicSwing" element={<Settings />} />
                    <Route path="/basicSlide" element={<Settings />} />
                    <Route path="/basicShadow" element={<Settings />} />
                    <Route path="/text" element={<Settings />} />
                    <Route path="/text/textTracking" element={<Settings />} />
                    <Route path="/text/textBlur" element={<Settings />} />
                    <Route path="/text/textShadow" element={<Settings />} />
                    <Route path="/text/textPop-up" element={<Settings />} />
                    <Route path="/text/textJello" element={<Settings />} />
                    <Route path="/attention" element={<Settings />} />
                    <Route path="/attention/Shake" element={<Settings />} />
                    <Route path="/attention/Bounce" element={<Settings />} />
                    <Route path="/attention/Pulsate" element={<Settings />} />
                    <Route path="/attention/Blink" element={<Settings />} />
                  </Routes>
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
       left-[2rem]
       w-[20%]
       h-[80%]
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
          <div className="w-full h-[3rem] px-[1rem] items-center flex bg-[white] rounded-[1rem]">
              <input
              onChange={changeDuration}
              className="w-full h-full durationInp rounded-[1rem] pr-[.5rem]"
              type='number'
              placeholder="Duration"
              />
              <div className="ml-auto">/sec</div>
          </div>

          <div className="w-full h-[3rem] px-[1rem] items-center flex bg-[white] rounded-[1rem]">
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

          <div className="w-full h-[3rem] px-[1rem] items-center flex bg-[white] rounded-[1rem]">
              <input 
              onChange={changeDelay}
              className="w-full delayInp h-full rounded-[1rem] pr-[.5rem]"
              type='number'
              placeholder="Delay"
              />
              <div className="ml-auto">/sec</div>
          </div>

          <div className="w-full h-[3rem] px-[1rem] items-center flex bg-[white] rounded-[1rem]">
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

          <div className="w-full h-[3rem] px-[1rem] items-center flex bg-[white] rounded-[1rem]">
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

          <div className="w-full h-[3rem] px-[1rem] items-center flex bg-[white] rounded-[1rem]">
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