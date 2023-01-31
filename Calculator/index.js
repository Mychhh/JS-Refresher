let firstNumber = document.getElementById("first-number").value
let secondNumber = document.getElementById("second-number").value
let result = document.getElementsByClassName("result")[0]

function add() {
    firstNumber = document.getElementById("first-number").value
    secondNumber = document.getElementById("second-number").value

    sum = parseInt(firstNumber) + parseInt(secondNumber)
    result.textContent = sum
}
function subtract() {
    firstNumber = document.getElementById("first-number").value
    secondNumber = document.getElementById("second-number").value

    sum = parseInt(firstNumber) - parseInt(secondNumber)
    result.textContent = sum
}
function divide() {
    firstNumber = document.getElementById("first-number").value
    secondNumber = document.getElementById("second-number").value

    sum = parseInt(firstNumber) / parseInt(secondNumber)
    result.textContent = sum
}
function multiply() {
    firstNumber = document.getElementById("first-number").value
    secondNumber = document.getElementById("second-number").value

    sum = parseInt(firstNumber) * parseInt(secondNumber)
    result.textContent = sum
}