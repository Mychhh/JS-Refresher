// increment decrement
let number = document.getElementById('number');
let num = 0

number.innerText = num

function increment() {
    num++
    number.innerText = num
}

function decrement() {
    num--
    number.innerText = num
}


// total race
const lap1 = 21
const lap2 = 12
const lap3 = 42

function getTotalRace() {
    let total = lap1 + lap2 + lap3
    document.getElementById("race").innerText = total    
}

let name = "Michael"
let greeting = "how are you?"

let theGreetings = "Hi " + name + ", " + greeting 

document.getElementsByClassName("message")[0].innerHTML = theGreetings
document.getElementsByClassName("message")[0].innerHTML += "😊"