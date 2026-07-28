/* ==========================================
   ELEMENTS
========================================== */

const shareButton =
    document.getElementById("shareButton");


/* ==========================================
   GET RESULT DATA
========================================== */

function getShareData(){

    const sign = getHighestResult();

    const result = RESULTS[sign];

    return {

        title:
            `${SETTINGS.title}`,

        text:
            `ฉันได้ผลลัพธ์ "${result.subtitle}"\n\n${result.description}`,

        url:
            window.location.href

    };

}


/* ==========================================
   SHARE
========================================== */

async function shareResult(){

    const data = getShareData();

    if(navigator.share){

        try{

            await navigator.share(data);

        }

        catch(error){

            console.log("Share cancelled.");

        }

    }

    else{

        copyLink();

    }

}


/* ==========================================
   COPY LINK
========================================== */

async function copyLink(){

    try{

        await navigator.clipboard.writeText(

            window.location.href

        );

        showToast("คัดลอกลิงก์แล้ว");

    }

    catch(error){

        prompt(

            "คัดลอกลิงก์นี้",

            window.location.href

        );

    }

}


/* ==========================================
   TOAST
========================================== */

function showToast(message){

    let toast = document.getElementById("toast");

    if(!toast){

        toast = document.createElement("div");

        toast.id = "toast";

        document.body.appendChild(toast);

    }

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toast.timer);

    toast.timer = setTimeout(()=>{

        toast.classList.remove("show");

    },2000);

}


/* ==========================================
   EVENT
========================================== */

if(shareButton){

    shareButton.addEventListener(

        "click",

        ()=>{

            animateButton(shareButton);

            shareResult();

        }

    );

}