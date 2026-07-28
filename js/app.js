/* ==========================================
   ELEMENTS
========================================== */

const pages = {

    landing: document.getElementById("landingPage"),

    quiz: document.getElementById("quizPage"),

    loading: document.getElementById("loadingPage"),

    result: document.getElementById("resultPage")

};

const startButton = document.getElementById("startButton");

const restartButton = document.getElementById("restartButton");


/* ==========================================
   GAME STATE
========================================== */

let currentQuestion = 0;

let selectedAnswer = null;

let userAnswers = [];

let scores = {};


/* ==========================================
   CREATE SCORE
========================================== */

function resetScores(){

    scores = {

        Aries:0,
        Taurus:0,
        Gemini:0,
        Cancer:0,
        Leo:0,
        Virgo:0,
        Libra:0,
        Scorpio:0,
        Sagittarius:0,
        Capricorn:0,
        Aquarius:0,
        Pisces:0

    };

}


/* ==========================================
   CHANGE PAGE
========================================== */

function showPage(pageName){

    Object.values(pages).forEach(page=>{

        page.classList.remove("active");

    });

    pages[pageName].classList.add("active");

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}


/* ==========================================
   START QUIZ
========================================== */

function startQuiz(){

    currentQuestion = 0;

    selectedAnswer = null;

    userAnswers = [];

    resetScores();

    showPage("quiz");

    loadQuestion(currentQuestion);

}


/* ==========================================
   FINISH QUIZ
========================================== */

function finishQuiz(){

    showPage("loading");

    setTimeout(()=>{

        showResult();

    }, SETTINGS.loadingTime);

}


/* ==========================================
   RESTART
========================================== */

function restartQuiz(){

    startQuiz();

}


/* ==========================================
   EVENTS
========================================== */

startButton.addEventListener("click", startQuiz);

restartButton.addEventListener("click", restartQuiz);


/* ==========================================
   INITIALIZE
========================================== */

resetScores();

showPage("landing");