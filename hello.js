let start=document.querySelector(".start");
let stop=document.querySelector(".stop");
let clear=document.querySelector(".clear");
let reset=document.querySelector(".reset");
let getTime=document.querySelector(".getTime");
let digit=document.querySelector(".digit");
let timeText=document.querySelector(".time");

let timer;
let time=0;
start.addEventListener("click",()=>{
    time=0;
    digit.innerText=time;
    timer=setInterval(()=>{
            time++;
           digit.innerText=time;
    },1000);
});

reset.addEventListener("click",()=>{
    digit.innerText=0;
    clearInterval(timer);
});

clear.addEventListener("click",()=>{
    clearInterval(timer);
    digit.innerText="";
    timeText.innerText="";
});

stop.addEventListener("click",()=>{
    clearInterval(timer);
});

getTime.addEventListener("click",()=>{
    clearInterval(timer);
    timeText.innerText=`The Time is ${time} secounds`;
});

