let header1 = document.getElementById("hdOne");
let rbox = document.getElementById("box1");
let bbox = document.getElementById("box2");
let gbox = document.getElementById("box3");
let ybox = document.getElementById("box4");
let userInputEx = document.getElementById("userInput");
let btnEx = document.getElementById("clickbtn")
isClicked = true;

function rcolor(){
    if(isClicked){
        rbox.style.backgroundColor = "red";
        isClicked = false;
    }
    else{
        rbox.style.backgroundColor = "white";
        isClicked = true;
    }
}

function bcolor(){
    if(isClicked){
        bbox.style.backgroundColor = "blue";
        isClicked = false;
    }
    else{
        bbox.style.backgroundColor = "white";
        isClicked = true;
    }
}

function gcolor(){
    if(isClicked){
        gbox.style.backgroundColor = "green";
        isClicked = false;
    }
    else{
        gbox.style.backgroundColor = "white";
        isClicked = true;
    }
}

function ycolor(){
    if(isClicked){
        ybox.style.backgroundColor = "yellow";
        isClicked = false;
    }
    else{
        ybox.style.backgroundColor = "white";
        isClicked = true;
    }
}

btnEx.addEventListener("click", () =>{
    const name = userInputEx.value.trim()
    if(name === " "){
        header1.textContent = "Hello";
    }
    else{
        header1.textContent = `Hello, ${name}`
    }
});