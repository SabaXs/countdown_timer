const daysEl= document.getElementById("days");
const hoursEl= document.getElementById("hours");
const minsEl= document.getElementById("mins");
const secsEl= document.getElementById("secs");


const christMas = "25 Dec 2022";
function countdown(){
    const currDate= new Date();
    const christMasDate= new Date(christMas);
    const tsec= (christMasDate-currDate) / 1000;
    const days =Math.floor(tsec / 86400);
    const hours= Math.floor(tsec / 3600) %24;
    const mins = Math.floor(tsec / 60)  %60;
    const secs = Math.floor(tsec % 60); 
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secsEl.innerHTML = secs;

}
//first fn call
countdown();

setInterval(countdown, 1000);
