let firstName = "Michael"
let lastName = "Pabaya"
let fullName = firstName + " " + lastName
let greetings = "Hi 👋 " + fullName
let myAge = 20

let el = document.querySelector(".div__my-age")

el.textContent = fullName

function myGreetings() {
    el.textContent = greetings
}