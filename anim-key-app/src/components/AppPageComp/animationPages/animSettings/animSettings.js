import React from "react";

const AnimSettings = () => {

    const resetAnimation = () => {
        let el = document.querySelector('.squareShape'); 
        el.style.animation = 'none';
        void  el.offsetHeight;
        el.style.animation = '';
    }

    const changeVar = (varName, value) => {
        let root = document.querySelector(':root');
        root.style.setProperty(`${varName}`, `${value}`);
    }

    const changeDuration = e => {
        let value = document.querySelector('.durationInp').value;

        value === '' ? changeVar('--duration-anim', '0.6s') : changeVar('--duration-anim', `${value}s`);
        resetAnimation()
    };

    const changeTimmingFunction = e => {
        let value = document.querySelector('.timmingFunctionInp').value;

        changeVar('--transition-type', `${value}`);
        resetAnimation()
    }

    const changeDelay = e => {
        let value = document.querySelector('.delayInp').value;

        value === '' ? changeVar('--anim-delay', `0s`) : changeVar('--anim-delay', `${value}s`);
        resetAnimation()
    };

    const changeDirection = e => {
        let value = document.querySelector('.directionInp').value;

        changeVar('--anim-direction', `${value}`);
        resetAnimation()
    };

    const changeFillMode = e => {
        let value = document.querySelector('.fillModeInp').value;

        changeVar('--anim-type', `${value}`);
        resetAnimation()
    };

    const changeInfinite = e => {
        let value = document.querySelector('.infiniteInp').checked;

        value ? changeVar('--is-infinite', 'infinite') : changeVar('--is-infinite', '');
    }

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
            defaultValue={'DEFAULT'} 
            onChange={changeTimmingFunction}
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
            defaultValue={'DEFAULT'} className="w-full directionInp h-full rounded-[1rem]">
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
            defaultValue={'DEFAULT'} className="w-full h-full fillModeInp rounded-[1rem]">
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