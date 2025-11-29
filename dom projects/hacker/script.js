const p=document.querySelector("p")
const character='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const text= p.innerText

let iteratin=0

function randomText(){
    const str = text.split("").map((char,index) => {
        if(index<iteratin){
            return char
        }
        return character.split("")[Math.floor(Math.random()*52)]
    }).join("")
    p.innerText=str
    iteratin+=0.25
    
}
setInterval(randomText,90)