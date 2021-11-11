const button = document.querySelector(".increment");
const button2 = document.querySelector(".decrement");

function increment(){
    var counter = document.querySelector("h1");
    let temp = parseInt(counter.innerText);
    temp = temp + 1;
    counter.innerHTML = temp;
}

function decrement(){
    var counter = document.querySelector("h1");
    let temp = parseInt(counter.innerText);
    temp = temp - 1;
    counter.innerHTML = temp;
}

button.addEventListener("click",increment);
button2.addEventListener("click", decrement);
