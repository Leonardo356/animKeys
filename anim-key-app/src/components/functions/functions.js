export function changeAnim(path, animClass) {
    let pathName = window.location.pathname;
    let squareShape = document.querySelector('.squareShape');
    let textAnimation = document.querySelector('.textAnimation')
   
    //add anim class on window path change
    if(pathName === path) {
      if(
        path === '/appPage/text' ||
        path === '/appPage/text/textTracking' ||
        path === '/appPage/text/textBlur' ||
        path === '/appPage/text/textShadow' ||
        path === '/appPage/text/textPop-up' ||
        path === '/appPage/text/textJello'
      ) {
        textAnimation.className = `
        w-max 
        h-max 
        textAnimation 
        flex 
        font-bold 
        text-white
        text-[5vmax] 
        ${animClass}`;
        return;
      };

      squareShape.className = `
        w-[10vmax]
        h-[10vmax]
        rounded-[1rem]
        squareShape
        text-txtColor2
        font-bold
        text-[10vmax]
        flex
        justify-center
        items-center
        bg-white
        ${animClass}`;
    };

};

export function changeBtn(path, parentTarget) {
    let pathName = window.location.pathname;
    let parent = document.querySelector(`.${parentTarget}`);
    let target = parent.querySelector('.bganimBtns');

    if(pathName === path) {
      let navTopicsBtns = document.querySelectorAll('.bganimBtns');

      navTopicsBtns.forEach(btn => {
        if(btn === target ) {
          btn.classList.add('w-full', 'h-full');
          btn.classList.remove('w-0', 'h-0');
        }
        else {
          btn.classList.remove('w-full', 'h-full');
          btn.classList.add('w-0', 'h-0');
        };
      });
    };
};