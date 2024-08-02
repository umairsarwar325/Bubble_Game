let newHit = 0;
let timer = 60;
let score = 0;

function makeBubbles() {
    let clutter = "";
    for (let i = 1; i <= 133; i++) {
        let rndm = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble" id="${rndm}">${rndm}</div>`;
    }
    document.querySelector("#panel-bottom").innerHTML = clutter;
}

function getNewHit() {
    newHit = Math.floor(Math.random() * 10);
    document.querySelector("#hit-val").textContent = newHit;
}

function timerFunc() {
    let timerInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer-val").textContent = timer;
        }
        else{
            clearInterval(timerInterval);
            document.querySelector("#panel-bottom").innerHTML = "";
            document.querySelector("#panel-bottom").innerHTML = "<h1>GAME OVER</h1>";
        }
    }, 1000);
}

function increaseScore(){
    score += 10;
    document.querySelector("#score-val").textContent = score;
}

function matchHit(){
    document.querySelector("#panel-bottom").addEventListener("click",(dets)=>{
        if(Number(dets.target.id) === newHit){
            increaseScore();
            getNewHit();
            makeBubbles();
        }
    });
}


makeBubbles();
matchHit();
timerFunc();
getNewHit();