// initialize variable
let bonusPoints = 50

// increase it by 100
let increaseItBy100 = bonusPoints + 50

// decrease it by 25
let decreaseItBy25 = increaseItBy100 - 75

// increase it by 75
let increaseItBy75 = decreaseItBy25 + 50

document.querySelector(".div__initilizedVariable").innerText = "Initilized value by " + bonusPoints
document.querySelector(".div__increaseItBy100").innerText = "Increase value by 100 = " + increaseItBy100
document.querySelector(".div__decreaseItBy25").innerText = "Decrease value by 25 = " + decreaseItBy25
document.querySelector(".div__increaseItBy75").innerText = "Increase value by 75 = " +increaseItBy75

//converts children element in to array
const parent = document.querySelector("#parent");
let children = Array.from(parent.children);

//style the text element of children element to left
for(let i = 0; i < children.length; i++){
    if(children[i].tagName == "H1" ){
    }else{
        children[i].style.textAlign = "left"
    }
}

function increment(){
    bonusPoints++
    document.querySelector(".div__initilizedVariable").innerText = "Initilized value by " + bonusPoints
}