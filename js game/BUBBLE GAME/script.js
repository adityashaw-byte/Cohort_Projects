var score=0;
var timer = 60;
var hitrn=0;

function getnewHit(){
      hitrn=Math.floor(Math.random()*10)
      document.querySelector("#hitval").innerHTML=hitrn;
}
function increaseScore(){
    score+=2
     document.querySelector("#scoreval").textContent=score;
}
function makeBubble(){var clutter="";
for( var i = 1; i<=168; i++){
    var rn=Math.floor(Math.random()*10)
    clutter+=`<div class="bubble">${rn}</div>`
    document.querySelector("#pbtm").innerHTML=clutter
}}

function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over<h1>`
        }
    }, 1000);
}
document.querySelector("#pbtm")
.addEventListener("click", function (dets) {
    var clickedNumber=Number(dets.target.textContent);
    if(hitrn===clickedNumber){
        increaseScore()
        makeBubble()
        getnewHit()
    }
});


runTimer()
makeBubble()
getnewHit()
