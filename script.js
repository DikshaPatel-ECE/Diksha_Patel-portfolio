console.log("Portfolio Loaded Successfully 🚀");
const text = [
    "ECE Student",
    "Embedded Systems Learner",
    "Drone Developer",
    "Web Developer",
    "Python Programmer",
    "content creator",
    "Photographer"
];

let index = 0;

function changeText() {
    document.getElementById("changing-text").textContent = text[index];

    index++;

    if (index >= text.length) {
        index = 0;
    }
}

changeText();

setInterval(changeText, 2000);
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

if(document.documentElement.scrollTop > 300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

};

topBtn.onclick = function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};
const themeBtn = document.getElementById("theme-btn");

themeBtn.onclick=function(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

themeBtn.innerHTML="☀️";

}

else{

themeBtn.innerHTML="🌙";

}

};