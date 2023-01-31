function test(){

    let firstCard = document.getElementById("firstCard").value
    let secondCard = document.getElementById("secondCard").value    

    let sum =  parseInt(firstCard) + parseInt(secondCard)
    let hasBlackJack = false;
    let isAlive = true;
    console.log(sum.toString())

    document.querySelector("h1").textContent = sum.toString()
    
    if(sum < 21){
        document.querySelector("h3").textContent = "You are still in the game"
        hasBlackJack === false ? document.querySelector(".blackjack").textContent = "" : document.querySelector(".blackjack").textContent = "Noice Black Jack" 
        isAlive = true
        isAlive === false ? document.querySelector(".isAlive").textContent = "Out of the game" : document.querySelector(".isAlive").textContent = "" 
    }
    else if(sum === 21){
        document.querySelector("h3").textContent = "You got black jack!"
        hasBlackJack = true ? document.querySelector(".blackjack").textContent = "Noice Black Jack" : document.querySelector(".blackjack").textContent = "" 
        isAlive = true
        isAlive === false ? document.querySelector(".isAlive").textContent = "Out of the game" : document.querySelector(".isAlive").textContent = "" 
    }
    else if(sum > 21){
        document.querySelector("h3").textContent = "You are out :<"
        hasBlackJack === false ? document.querySelector(".blackjack").textContent = "" : document.querySelector(".blackjack").textContent = "Noice Black Jack" 

        isAlive = false
        isAlive === false ? document.querySelector(".isAlive").textContent = "Out of the game" : document.querySelector(".isAlive").textContent = "" 
    }
}

function enterToClub(){
    let club = document.getElementById("club").value
    
    if(parseInt(club) < 18){
        document.getElementById("p").textContent = "You are not allowed to enter here"
    }
    else if (parseInt(club) > 18){
        document.getElementById("p").textContent = "Yes, you may enter"
    }
}

function birthdayCard(){
    let card = document.getElementById("birthday-card").value
    console.log(card)
    let response = document.getElementsByClassName("allowOrnot")[0]

    if(parseInt(card) < 100){
        response.textContent = "You are not allowed"
    }else if(parseInt(card) === 100){
        response.textContent = "Yes you may have"
    }else if(parseInt(card) > 100){
        response.textContent = "You've already got one"
    }
}