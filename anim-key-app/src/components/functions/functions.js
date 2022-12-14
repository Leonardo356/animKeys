const getAnimationName = el => {
  let animName = el.getAnimations()[0].animationName;
  return animName;
}

export function changeAnim(path, animClass) {
    let pathName = window.location.pathname;
    let squareShape = document.querySelector('.squareShape');
    let textAnimation = document.querySelector('.textAnimation');
    let animationClass = document.querySelector('.animationClass');
    let animationName = document.querySelector('.animationName');
   
    //add anim class on window path change
    if(pathName === path) {

      animationClass.innerText = '';
      animationClass.innerText = animClass;

      if(textAnimation !== null) {
        textAnimation.className = `
        w-max 
        h-max 
        textAnimation 
        flex 
        font-bold 
        text-white
        text-[5vmax] 
        ${animClass}`;

        animationName.innerText = '' ;
        animationName.innerText = getAnimationName(textAnimation);
      };

      if(squareShape !== null) {
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
        animationName.innerText = '' ;
        animationName.innerText = getAnimationName(squareShape);
    };
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