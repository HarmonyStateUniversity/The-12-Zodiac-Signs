/* ==========================================
   ANIMATION CONTROLLER
========================================== */


/* ==========================================
   FADE IN
========================================== */

function fadeIn(element){

    if(!element) return;

    element.classList.remove("fade-in");

    void element.offsetWidth;

    element.classList.add("fade-in");

}


/* ==========================================
   SCALE IN
========================================== */

function scaleIn(element){

    if(!element) return;

    element.classList.remove("scale-in");

    void element.offsetWidth;

    element.classList.add("scale-in");

}


/* ==========================================
   QUESTION ANIMATION
========================================== */

function animateQuestion(){

    fadeIn(questionImage);

    fadeIn(questionTitle);

    fadeIn(answerContainer);

}


/* ==========================================
   RESULT ANIMATION
========================================== */

function animateResult(){

    scaleIn(resultImage);

    fadeIn(resultSubtitle);

    fadeIn(resultTitle);

    fadeIn(resultDescription);

}


/* ==========================================
   BUTTON CLICK
========================================== */

function animateButton(button){

    if(!button) return;

    button.classList.remove("button-click");

    void button.offsetWidth;

    button.classList.add("button-click");

}


/* ==========================================
   ANSWER CLICK
========================================== */

function animateAnswer(button){

    if(!button) return;

    button.classList.remove("answer-click");

    void button.offsetWidth;

    button.classList.add("answer-click");

}


/* ==========================================
   PAGE CHANGE
========================================== */

function animatePage(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}


/* ==========================================
   LOADING
========================================== */

function startLoadingAnimation(){

    const spinner = document.querySelector(".loading-circle");

    if(!spinner) return;

    spinner.classList.add("loading-spin");

}


function stopLoadingAnimation(){

    const spinner = document.querySelector(".loading-circle");

    if(!spinner) return;

    spinner.classList.remove("loading-spin");

}


/* ==========================================
   RESTART ANIMATION
========================================== */

function resetAnimations(){

    document.querySelectorAll(

        ".fade-in,.scale-in,.button-click,.answer-click"

    ).forEach(element=>{

        element.classList.remove(

            "fade-in",

            "scale-in",

            "button-click",

            "answer-click"

        );

    });

}