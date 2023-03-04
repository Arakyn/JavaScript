let firstcard = getRandomCard();
let secondcard = getRandomCard();

let cardsArray = [firstcard,secondcard]

let sum = firstcard + secondcard;


function getRandomCard(){
return 5
}

let htmlMessage = document.getElementById("message-el")
let cards = document.querySelector("#cards-el")
let sumHTML = document.querySelector("#sum-el")



let message = "";


function newCard(){
let card = getRandomCard();
cardsArray.push(card)
sum += card
renderGame()
}




function startGame (){
    renderGame()
}



function renderGame (){

sumHTML.textContent = "  "+ sum
   

if (sum<21){
    message = "Do you want to draw a new card? 🙃"
   
    

} else  if(sum===21) {
    hasBlackJack = true;
  
    message = "you got blackjack 🥳";
} else {
    message = "you got busted lul 😂";
    isAlive = false;
 
} 
cardsArray.textContent = ""
htmlMessage.textContent = message;
console.log(message)
for (let i = 0;i<cardsArray.length;i++){
cards.textContent += cardsArray[i] + " "
i -= 1
cardsArray.shift()
}

}