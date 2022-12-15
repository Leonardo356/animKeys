export function changeBtn(keyWord, parentTarget) {
    let pathName = window.location.pathname;
    let parent = document.querySelector(`.${parentTarget}`);
    let target = parent.querySelector('.bganimBtns');

    if(pathName.search(keyWord) !== -1) {
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

export function AnimBtnOnLocationChange() {

  const getAnimationName = el => {
    let animName = el.getAnimations()[0].animationName;
    if(animName !== undefined) return animName;
  }

  let animationBtn = document.querySelectorAll('.animationBtn');
  let squareShape = document.querySelector('.squareShape');
  let textAnimation = document.querySelector('.textAnimation');
  let animationClass = document.querySelector('.animationClass');
  let animationName = document.querySelector('.animationName');
  let pathName = window.location.pathname;

     for(let i = 0; i < animationBtn.length; i++) {
            let className = animationBtn[i].innerText;
            if(pathName.search(`${className}`) !== -1) {
              let classNameCleared = className
              .replace(/[0-9]/g, '')
              .replace('.', '');
              animationBtn[i].style.background = 'lightblue';
              animationClass.innerText = '';
              animationClass.innerText = classNameCleared;

              if(textAnimation !== null) {
                textAnimation.className = `
                w-max 
                h-max 
                textAnimation 
                flex 
                font-bold 
                text-white
                text-[5vmax] `;
                textAnimation.classList.add(`${classNameCleared}`);
                animationName.innerText = '' ;
                animationName.innerText = getAnimationName(textAnimation);
              }

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
                bg-white`;
                squareShape.classList.add(`${classNameCleared}`);
                animationName.innerText = '' ;
                animationName.innerText = getAnimationName(squareShape);
              }
            }
            else {
              animationBtn[i].style.background = '';
              if(textAnimation !== null) textAnimation.classList.remove(`${className}`);
              if(squareShape !== null) squareShape.classList.remove(`${className}`);
            };
          }
}