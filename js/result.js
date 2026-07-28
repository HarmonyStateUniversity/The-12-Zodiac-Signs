/* ==========================================
   ELEMENTS
========================================== */

const resultImage =
    document.getElementById("resultImage");

const resultTitle =
    document.getElementById("resultTitle");

const resultSubtitle =
    document.getElementById("resultSubtitle");

const resultDescription =
    document.getElementById("resultDescription");


/* ==========================================
   GET RESULT
========================================== */

function getHighestResult(){

    let highestScore = -1;

    let highestSigns = [];

    for(const sign of ZODIACS){

        const score = scores[sign];

        if(score > highestScore){

            highestScore = score;

            highestSigns = [sign];

        }

        else if(score === highestScore){

            highestSigns.push(sign);

        }

    }

    /* -------------------------
       Tie Break
       ถ้าคะแนนเท่ากัน
       เลือกราศีแรกในลิสต์
    -------------------------- */

    return highestSigns[0];

}


/* ==========================================
   SHOW RESULT
========================================== */

function showResult(){

    const sign = getHighestResult();

    const result = RESULTS[sign];

    if(!result){

        console.error("Result not found.");

        return;

    }

    resultImage.src =
        result.image;

    resultImage.alt =
        result.title;

    resultTitle.textContent =
        result.title;

    resultSubtitle.textContent =
        result.subtitle;

    resultDescription.textContent =
        result.description;

    showPage("result");

}


/* ==========================================
   OPTIONAL
========================================== */

function getScoreBoard(){

    return {...scores};

}


/* ==========================================
   DEBUG
========================================== */

function printScores(){

    console.table(scores);

}