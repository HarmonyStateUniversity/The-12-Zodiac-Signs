/* ==========================================
   ELEMENTS
========================================== */

const questionNumber =
    document.getElementById("questionNumber");

const progressPercent =
    document.getElementById("progressPercent");

const progressFill =
    document.getElementById("progressFill");

const questionImage =
    document.getElementById("questionImage");

const questionTitle =
    document.getElementById("questionTitle");

const answerContainer =
    document.getElementById("answerContainer");

const nextButton =
    document.getElementById("nextButton");


/* ==========================================
   LOAD QUESTION
========================================== */

function loadQuestion(index){

    const question = QUESTIONS[index];

    selectedAnswer = null;

    nextButton.disabled = true;

    questionNumber.textContent =
        `ข้อ ${index + 1} / ${SETTINGS.totalQuestions}`;

    progressPercent.textContent =
        `${Math.round(((index + 1) / SETTINGS.totalQuestions) * 100)}%`;

    progressFill.style.width =
        `${((index + 1) / SETTINGS.totalQuestions) * 100}%`;



    /* ---------- Question ---------- */

    questionTitle.textContent =
        question.title;



    /* ---------- Image ---------- */

    if(question.image){

        questionImage.src = question.image;

        questionImage.style.display = "block";

    }

    else{

        questionImage.style.display = "none";

    }



    /* ---------- Answers ---------- */

    answerContainer.innerHTML = "";

    question.answers.forEach(answer=>{

        const button =
            document.createElement("button");

        button.className = "answer";

        button.textContent = answer.text;



        button.addEventListener("click",()=>{

            document
                .querySelectorAll(".answer")
                .forEach(btn=>{

                    btn.classList.remove("selected");

                });

            button.classList.add("selected");

            selectedAnswer = answer;

            nextButton.disabled = false;

        });

        answerContainer.appendChild(button);

    });

}


/* ==========================================
   SAVE SCORE
========================================== */

function saveAnswer(){

    if(!selectedAnswer) return;

    userAnswers.push(selectedAnswer.text);

    Object.entries(selectedAnswer.score).forEach(

        ([sign,value])=>{

            if(scores[sign] !== undefined){

                scores[sign] += value;

            }

        }

    );

}


/* ==========================================
   NEXT QUESTION
========================================== */

function nextQuestion(){

    saveAnswer();

    currentQuestion++;

    if(currentQuestion >= QUESTIONS.length){

        finishQuiz();

        return;

    }

    loadQuestion(currentQuestion);

}


/* ==========================================
   BUTTON EVENT
========================================== */

nextButton.addEventListener(

    "click",

    nextQuestion

);