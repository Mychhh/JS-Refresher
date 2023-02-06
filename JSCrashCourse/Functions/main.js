// function greet(name){
//     console.log('Good Afternoon ' + name)
// }

// greet('Michael')
// greet('MJ')
// greet(1)

const number1 = 20
const number2 = 5

// function addition(num1, num2){
//     return num1 + num2
// }
// function subtraction(num1, num2){
//     return num1 - num2
// }
// function division(num1, num2){
//     return num1 * num2
// }
// function multiplication(num1, num2){
//     return num1 / num2
// }

const addition = (num1, num2) => {
    return num1 + num2
}
const subtraction = (num1, num2) => {
    return num1 - num2
}
const division = (num1, num2) => {
    return num1 * num2
}
const multiplication = (num1, num2) => {
    return num1 / num2
}

console.log(addition(number1, number2))
console.log(subtraction(number1, number2))
console.log(division(number1, number2))
console.log(multiplication(number1, number2))